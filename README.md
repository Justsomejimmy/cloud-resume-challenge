# Cloud Resume Challenge

This repository contains my personal portfolio website and the AWS infrastructure used to deploy it as part of the [Cloud Resume Challenge](https://cloudresumechallenge.dev/).

## Live Website

https://jimmyhoangresume.com

## Architecture

```text
                         GitHub
                            │
                            ▼
                    GitHub Actions
                     CI        CD
                     │          │
                     │          ▼
                     │       Amazon S3
                     │          │
                     │          ▼
                     │      CloudFront
                     │          │
                     │          ▼
                     │   Personal Website
                     │
                     └── Terraform
                            │
            ┌───────────────┼────────────────┐
            │               │                │
            ▼               ▼                ▼
          AWS IAM        Route 53           ACM

          Website View Counter
                    │
                    ▼
              API Gateway
                    │
                    ▼
                 Lambda
                    │
                    ▼
               DynamoDB
```

### AWS

The final deployment uses:

* S3 for storing the frontend
* CloudFront for content delivery
* Route 53 for DNS
* ACM for HTTPS
* Lambda for backend functionality
* DynamoDB for persistent data
* API Gateway for the view counter API
* IAM for permissions

## View Counter

The website includes a visitor counter.

The frontend communicates with API Gateway, which invokes a Lambda function. Lambda reads and updates the count stored in DynamoDB.

```text
React
  ↓
API Gateway
  ↓
Lambda
  ↓
DynamoDB
```

The frontend does not communicate directly with DynamoDB.

## Problems I Ran Into

This project was intentionally hands-on, so quite a few things did not work on the first try.

Some of the problems I encountered included:

* CloudFront returning unexpected files
* stale browser caching
* favicon requests returning `403`
* incorrect AWS credentials
* Terraform configuration and state differences
* Lambda serialization errors involving DynamoDB `Decimal` values
* API Gateway returning internal server errors
* incorrect API environment variables
* GitHub Actions workflow configuration mistakes
* learning the difference between CI and CD
* browser extensions blocking API requests

One useful debugging lesson was that a browser error does not necessarily mean the application itself is broken.

At one point the view counter was reporting:

```text
ERR_BLOCKED_BY_CLIENT
```

The actual problem was a browser extension blocking the request.

## Docker or Kubernetes

I initiailly wanted the project to also use Docker and Kubernetes.

Ultimately, I decided against it.

The final architecture does not require containers or Kubernetes, and adding technologies simply to make the project appear more complex would not have improved the architecture.

## Needed Implementations

Unfinished components include:
 
 * project detail pages
 * project thumbnails in project page
 * fix profile picture linking for about me page

## Related Documentation

* [Frontend](./frontend/README.md)
* [Backend](./backend/README.md)
* [AWS Infrastructure](./aws/README.md)
* [GitHub Actions](./.github/workflows/README.md)