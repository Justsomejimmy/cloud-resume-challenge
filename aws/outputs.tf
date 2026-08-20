output "bucket_name" {
  description = "Name of the portfolio S3 bucket"
  value       = aws_s3_bucket.portfolio.id
}

output "cloudfront_domain_name" {
  description = "CloudFront distribution domain name"
  value       = aws_cloudfront_distribution.portfolio.domain_name
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID"
  value       = aws_cloudfront_distribution.portfolio.id
}

output "dynamodb_table_name" {
  value = aws_dynamodb_table.counter.name
}

output "lambda_role_arn" {
  value = aws_iam_role.lambda_counter.arn
}

output "counter_api_url" {
  value = aws_apigatewayv2_stage.counter.invoke_url
}

output "github_actions_role_arn" {
  value = aws_iam_role.github_actions.arn
}