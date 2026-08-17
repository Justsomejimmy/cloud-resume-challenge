import json
import os
import boto3

dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table(os.environ["TABLE_NAME"])


def lambda_handler(event, context):
    method = event.get("requestContext", {}).get("http", {}).get("method")

    if method == "GET":
        response = table.get_item(
            Key={"id": "views"}
        )

        count = response.get("Item", {}).get("count", 0)

        return {
            "statusCode": 200,
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            "body": json.dumps({"count": count})
        }

    if method == "POST":
        response = table.update_item(
            Key={"id": "views"},
            UpdateExpression="ADD #count :increment",
            ExpressionAttributeNames={
                "#count": "count"
            },
            ExpressionAttributeValues={
                ":increment": 1
            },
            ReturnValues="UPDATED_NEW"
        )

        count = response["Attributes"]["count"]

        return {
            "statusCode": 200,
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            "body": json.dumps({"count": count})
        }

    return {
        "statusCode": 405,
        "body": json.dumps({"error": "Method not allowed"})
    }