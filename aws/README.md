# AWS Infrastructure

This directory contains the Terraform configuration used to create and manage the AWS infrastructure for the portfolio website.

This is one of the main learning components of the project.

I specifically used this project to learn Terraform instead of manually creating everything through the AWS Console.

## AWS Services

The project uses:

* Amazon S3
* Amazon CloudFront
* Amazon Route 53
* AWS Certificate Manager
* AWS Lambda
* Amazon DynamoDB
* Amazon API Gateway
* AWS IAM

## Architecture

The website uses:

```text
                    Route 53
                       │
                       ▼
              jimmyhoangresume.com
                       │
                       ▼
                  CloudFront
                       │
                       ▼
                      S3
                       │
                 Static Website
```

The visitor counter uses:

```text
Browser
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

## Terraform

Terraform is used to define the AWS infrastructure as code.

Instead of manually creating resources, I can describe them in `.tf` files and use:

```bash
terraform plan
```

to see what Terraform wants to change.

Then:

```bash
terraform apply
```

to apply those changes.

My normal Terraform workflow became:

```bash
terraform fmt
terraform validate
terraform plan
terraform apply
```

### `terraform fmt`

Formats the Terraform configuration.

### `terraform validate`

Checks whether the Terraform configuration is structurally valid.

### `terraform plan`

Shows the changes Terraform intends to make.

### `terraform apply`

Applies those changes to AWS.

## S3

Amazon S3 stores the production frontend files.

The React/Vite build creates:

```text
frontend/dist/
```

The contents of that directory are uploaded to the S3 bucket.

The bucket itself is not used as the public-facing endpoint.

CloudFront accesses it using an Origin Access Control configuration.

## CloudFront

Amazon CloudFront sits in front of the S3 bucket.

It provides:

* HTTPS
* CDN distribution
* caching
* edge locations
* the public endpoint for the website

One of the lessons I learned was that changing a file in S3 does not necessarily mean every visitor will immediately receive the new version.

CloudFront caching needs to be considered.

The deployment workflow therefore creates a CloudFront invalidation after uploading new frontend files.

## Route 53

Route 53 manages the DNS record for:

```text
jimmyhoangresume.com
```

The domain points to the CloudFront distribution rather than directly to S3.

## ACM

AWS Certificate Manager provides the HTTPS certificate used by CloudFront.

One important detail I learned was that CloudFront certificates need to be created in:

```text
us-east-1
```

## Lambda

The visitor counter Lambda function is managed through Terraform.

Terraform packages the Python Lambda source and deploys it as a ZIP archive.

The generated ZIP file does not need to be committed to the repository because it is generated from the source code during the Terraform process.

## DynamoDB

Terraform creates the DynamoDB table used by the visitor counter.

The Lambda function receives an IAM policy allowing it to interact with the table.

The application therefore follows:

```text
Frontend
    ↓
API Gateway
    ↓
Lambda
    ↓
DynamoDB
```

rather than giving the frontend direct access to DynamoDB.

## IAM

IAM controls which AWS resources can interact with one another.

The Lambda function has an IAM role allowing it to execute and write logs and access the DynamoDB table.

GitHub Actions also uses an IAM role for deployment.

## GitHub Actions Authentication

One of the security decisions I made was avoiding long-lived AWS access keys in GitHub Actions.

Instead, GitHub Actions uses OpenID Connect (OIDC).

The setup is:

```text
GitHub Actions
      │
      │ OIDC token
      ▼
AWS IAM OIDC Provider
      │
      ▼
GitHub Actions IAM Role
      │
      ▼
Temporary AWS Credentials
```

This lets GitHub Actions authenticate with AWS without storing a permanent AWS access key.

Learning how the OIDC provider, IAM trust policy, role, and workflow permissions fit together was one of the more valuable parts of the AWS work.

## Terraform State

Terraform state contains information about the infrastructure Terraform manages.

The state file should not be committed to the repository.

Generated files such as the Lambda ZIP package are also not version-controlled.

The source code used to create those generated files is what belongs in Git.

## Lessons From Terraform

Terraform was one of the technologies I was specifically learning through this project.

One of the biggest things I learned was that infrastructure code deserves the same care as application code.

A small configuration change can result in:

* a resource being recreated
* an existing resource being modified
* permissions changing
* deployment failures
* services becoming inaccessible

Because of this, I got into the habit of reading `terraform plan` before applying changes.

## Future Improvements

If I continued developing the infrastructure, I would consider:

* remote Terraform state
* separate development and production environments
* more restrictive IAM policies
* additional monitoring
* automated Terraform validation in CI
* automated infrastructure deployment
* improved CloudFront cache policies
* additional API security

For this project, I intentionally kept the infrastructure manageable enough that I could understand what each service was doing.

# AWS CLI v2

This bundle contains a built executable of the AWS CLI v2.

## Installation

To install the AWS CLI v2, run the `install` script:
```
$ sudo ./install 
You can now run: /usr/local/bin/aws --version
```
This will install the AWS CLI v2 at `/usr/local/bin/aws`.  Assuming
`/usr/local/bin` is on your `PATH`, you can now run:
```
$ aws --version
```

### Installing without sudo

If you don't have ``sudo`` permissions or want to install the AWS
CLI v2 only for the current user, run the `install` script with the `-b`
and `-i` options:
```
$ ./install -i ~/.local/aws-cli -b ~/.local/bin
``` 
This will install the AWS CLI v2 in `~/.local/aws-cli` and create
symlinks for `aws` and `aws_completer` in `~/.local/bin`. For more
information about these options, run the `install` script with `-h`:
```
$ ./install -h
```

### Updating

If you run the `install` script and there is a previously installed version
of the AWS CLI v2, the script will error out. To update to the version included
in this bundle, run the `install` script with `--update`:
```
$ sudo ./install --update
```

### Removing the installation

To remove the AWS CLI v2, delete the its installation and symlinks:
```
$ sudo rm -rf /usr/local/aws-cli
$ sudo rm /usr/local/bin/aws
$ sudo rm /usr/local/bin/aws_completer
```
Note if you installed the AWS CLI v2 using the `-b` or `-i` options, you will
need to remove the installation and the symlinks in the directories you
specified.
