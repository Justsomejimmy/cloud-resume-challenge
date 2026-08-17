variable "bucket_name" {
  description = "Globally unique name for the portfolio S3 bucket"
  type        = string
}

variable "domain_name" {
  description = "Custom domain for the portfolio"
  type        = string
  default     = "jimmyhoangresume.com"
}

variable "acm_certificate_arn" {
  description = "ARN of the ACM certificate for CloudFront"
  type        = string
}