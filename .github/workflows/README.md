# GitHub Actions

This directory contains the GitHub Actions workflows used to automate the portfolio website's CI and CD processes.

I specifically used this project to learn GitHub Actions and understand how a change can move from a Git commit to a deployed website without manually uploading files.

## Workflows

```text
.github/
└── workflows/
    ├── ci.yaml
    └── cd.yaml
```

## CI

The CI workflow is responsible for checking that the frontend can successfully be installed and built.

The general process is:

```text
Git Push
   │
   ▼
GitHub Actions
   │
   ▼
Checkout repository
   │
   ▼
Install Node.js
   │
   ▼
npm ci
   │
   ▼
npm run build
```

The purpose is to catch problems before they reach the deployment stage.

For example, if dependencies cannot be installed or the production build fails, CI should fail instead of allowing CD to deploy the application.

## CD

The CD workflow is responsible for deploying the website.

The deployment process is:

```text
CI succeeds
     │
     ▼
CD starts
     │
     ▼
Checkout repository
     │
     ▼
Install dependencies
     │
     ▼
Build frontend
     │
     ▼
Authenticate with AWS
     │
     ▼
Upload frontend/dist to S3
     │
     ▼
Invalidate CloudFront
```

This means I no longer need to manually upload the website every time I make a change.

## CI Before CD

One of the specific things I wanted to learn was how to make CD depend on CI.

The CD workflow uses GitHub Actions' `workflow_run` event.

Conceptually:

```text
        Push
         │
         ▼
        CI
         │
    ┌────┴────┐
    │         │
  Failed    Success
    │         │
    ▼         ▼
   Stop       CD
              │
              ▼
           Deploy
```

The CD workflow checks whether the completed CI workflow succeeded before deploying.

This prevents a failed CI build from automatically becoming a production deployment.

## AWS Authentication

The workflows do not use a permanent AWS access key.

Instead, GitHub Actions uses OIDC to assume an AWS IAM role.

The workflow requests:

```yaml
permissions:
  id-token: write
  contents: read
```

The `id-token` permission allows GitHub to obtain an OIDC token.

AWS validates that token against the GitHub Actions OIDC provider and allows the workflow to assume the configured IAM role.

This was an important part of the project because it connected CI/CD with cloud security.

## Deployment

The CD workflow builds the frontend using:

```bash
npm run build
```

The resulting:

```text
frontend/dist/
```

directory is uploaded to the S3 bucket.

The workflow then invalidates the CloudFront cache so visitors receive the updated website.

## Why I Added GitHub Actions

Before implementing CI/CD, my workflow was essentially:

```text
Make change
   ↓
Build manually
   ↓
Upload manually
   ↓
Check website
```

After implementing GitHub Actions:

```text
Make change
   ↓
git push
   ↓
CI
   ↓
CD
   ↓
Website updated
```

This makes the development workflow much closer to what I would expect in a professional software project.

## What I Learned

GitHub Actions was another technology I was learning while building this project.

Some of the concepts I learned included:

* workflow YAML
* triggers
* jobs
* steps
* actions
* workflow dependencies
* permissions
* OIDC
* AWS IAM
* automated deployments

I also learned that YAML workflows are very sensitive to structure and indentation.

A small configuration mistake can prevent an entire workflow from triggering.

## Future Improvements

Some possible improvements include:

* automated tests
* linting
* Terraform validation in CI
* Terraform formatting checks
* pull-request validation
* separate staging and production deployments
* deployment notifications
* rollback strategies

For the current project, the most important goal was establishing a working CI → CD pipeline and understanding how each part works.