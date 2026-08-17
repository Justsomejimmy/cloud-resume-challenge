terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }

  required_version = ">= 1.6.0"
}

provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "portfolio" {
  bucket = var.bucket_name

  tags = {
    Name        = "Cloud Resume Challenge"
    Environment = "production"
  }
}

resource "aws_s3_bucket_public_access_block" "portfolio" {
  bucket = aws_s3_bucket.portfolio.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_ownership_controls" "portfolio" {
  bucket = aws_s3_bucket.portfolio.id

  rule {
    object_ownership = "BucketOwnerEnforced"
  }
}

resource "aws_s3_object" "frontend_files" {
  for_each = fileset("../frontend/dist", "**/*")

  bucket = aws_s3_bucket.portfolio.id
  key    = each.value
  source = "../frontend/dist/${each.value}"

  etag = filemd5("../frontend/dist/${each.value}")

  content_type = lookup(
    {
      html  = "text/html"
      css   = "text/css"
      js    = "application/javascript"
      json  = "application/json"
      png   = "image/png"
      jpg   = "image/jpeg"
      jpeg  = "image/jpeg"
      webp  = "image/webp"
      avif  = "image/avif"
      svg   = "image/svg+xml"
      ico   = "image/x-icon"
      woff  = "font/woff"
      woff2 = "font/woff2"
    },
    regex("\\.([^.]+)$", each.value)[0],
    "application/octet-stream"
  )
}

resource "aws_cloudfront_origin_access_control" "portfolio" {
  name                              = "portfolio-oac"
  description                       = "OAC for Cloud Resume Challenge portfolio"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "portfolio" {
  enabled = true

  default_root_object = "index.html"
  aliases             = [var.domain_name]

  origin {
    domain_name              = aws_s3_bucket.portfolio.bucket_regional_domain_name
    origin_id                = "S3-${aws_s3_bucket.portfolio.id}"
    origin_access_control_id = aws_cloudfront_origin_access_control.portfolio.id
  }

  default_cache_behavior {
    allowed_methods = [
      "GET",
      "HEAD"
    ]

    cached_methods = [
      "GET",
      "HEAD"
    ]

    target_origin_id = "S3-${aws_s3_bucket.portfolio.id}"

    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = var.acm_certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
}

data "aws_caller_identity" "current" {}

resource "aws_s3_bucket_policy" "portfolio" {
  bucket = aws_s3_bucket.portfolio.id

  policy = jsonencode({
    Version = "2012-10-17"

    Statement = [
      {
        Sid    = "AllowCloudFrontServicePrincipalReadOnly"
        Effect = "Allow"

        Principal = {
          Service = "cloudfront.amazonaws.com"
        }

        Action = "s3:GetObject"

        Resource = "${aws_s3_bucket.portfolio.arn}/*"

        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.portfolio.arn
          }
        }
      }
    ]
  })
}