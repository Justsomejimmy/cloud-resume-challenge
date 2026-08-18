resource "aws_iam_role_policy" "github_actions_deploy" {
  name = "github-actions-deploy"
  role = aws_iam_role.github_actions.id

  policy = jsonencode({
    Version = "2012-10-17"

    Statement = [
      {
        Effect = "Allow"

        Action = [
          "s3:ListBucket"
        ]

        Resource = aws_s3_bucket.portfolio.arn
      },
      {
        Effect = "Allow"

        Action = [
          "s3:PutObject",
          "s3:DeleteObject"
        ]

        Resource = "${aws_s3_bucket.portfolio.arn}/*"
      },
      {
        Effect = "Allow"

        Action = [
          "cloudfront:CreateInvalidation"
        ]

        Resource = aws_cloudfront_distribution.portfolio.arn
      }
    ]
  })
}