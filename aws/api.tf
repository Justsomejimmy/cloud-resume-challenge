resource "aws_apigatewayv2_api" "counter" {
  name          = "cloud-resume-counter-api"
  protocol_type = "HTTP"

  cors_configuration {
    allow_origins = ["https://jimmyhoangresume.com"]
    allow_methods = ["GET", "POST", "OPTIONS"]
    allow_headers = ["content-type"]
  }
}

resource "aws_apigatewayv2_integration" "counter" {
  api_id = aws_apigatewayv2_api.counter.id

  integration_type = "AWS_PROXY"
  integration_uri  = aws_lambda_function.counter.invoke_arn

  payload_format_version = "2.0"
}

resource "aws_apigatewayv2_route" "counter_get" {
  api_id    = aws_apigatewayv2_api.counter.id
  route_key = "GET /counter"
  target    = "integrations/${aws_apigatewayv2_integration.counter.id}"
}

resource "aws_apigatewayv2_route" "counter_post" {
  api_id    = aws_apigatewayv2_api.counter.id
  route_key = "POST /counter"
  target    = "integrations/${aws_apigatewayv2_integration.counter.id}"
}

resource "aws_apigatewayv2_stage" "counter" {
  api_id = aws_apigatewayv2_api.counter.id
  name   = "$default"

  auto_deploy = true
}

resource "aws_lambda_permission" "api_gateway" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.counter.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_apigatewayv2_api.counter.execution_arn}/*/*"
}