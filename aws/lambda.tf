resource "aws_iam_role" "lambda_counter" {
  name = "cloud-resume-counter-lambda-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"

    Statement = [
      {
        Effect = "Allow"

        Principal = {
          Service = "lambda.amazonaws.com"
        }

        Action = "sts:AssumeRole"
      }
    ]
  })
}

resource "aws_iam_role_policy" "lambda_dynamodb" {
  name = "cloud-resume-counter-dynamodb"
  role = aws_iam_role.lambda_counter.id

  policy = jsonencode({
    Version = "2012-10-17"

    Statement = [
      {
        Effect = "Allow"

        Action = [
          "dynamodb:GetItem",
          "dynamodb:PutItem",
          "dynamodb:UpdateItem"
        ]

        Resource = aws_dynamodb_table.counter.arn
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "lambda_logs" {
  role       = aws_iam_role.lambda_counter.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

data "archive_file" "counter" {
  type        = "zip"
  source_file = "${path.module}/lambda/counter.py"
  output_path = "${path.module}/lambda/counter.zip"
}

resource "aws_lambda_function" "counter" {
  function_name = "cloud-resume-counter"

  filename         = data.archive_file.counter.output_path
  source_code_hash = data.archive_file.counter.output_base64sha256

  role    = aws_iam_role.lambda_counter.arn
  handler = "counter.lambda_handler"
  runtime = "python3.12"

  environment {
    variables = {
      TABLE_NAME = aws_dynamodb_table.counter.name
    }
  }
}