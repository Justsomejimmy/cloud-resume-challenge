# Backend Technical Specification

This directory contains the backend files used to process and prepare website content for the frontend.

The backend originally handled the visitor counter and supporting server-side functionality for the Cloud Resume Challenge. It has since been expanded to handle content processing for project pages and other frontend data.

## Backend Responsibilities

The backend is responsible for:

* Processing Markdown content
* Parsing YAML frontmatter
* Converting Markdown content into HTML
* Generating structured JSON data for the React frontend
* Preparing project and homepage content for the frontend
* Supporting the AWS-backed visitor counter
* Providing backend functionality that can later be migrated into serverless AWS functions

The backend does **not** directly render the website. Instead, it prepares the data consumed by the React frontend.

## Content Processing

Project and homepage content is stored as Markdown files with YAML frontmatter.

The Python rendering scripts parse each Markdown file, extract the YAML frontmatter, process the Markdown body, and generate structured JSON objects.

The general workflow is:

```text
Markdown + YAML Frontmatter
            ↓
      Python Renderer
            ↓
     Parsed Frontmatter
            +
      Rendered Markdown
            ↓
          JSON
            ↓
     React Frontend
```

This keeps the content separate from the React components responsible for displaying it.

## Markdown Rendering

The `render_projects.py` script processes the project Markdown files.

Its responsibilities include:

1. Locate project Markdown files.
2. Parse the YAML frontmatter.
3. Extract project metadata.
4. Convert the Markdown body into HTML.
5. Combine the metadata and rendered content into structured JSON.
6. Write the generated JSON to the frontend data directory.

The generated JSON can then be imported by the React application.

For example:

```text
Backend
│
├── data/
│   └── projects/
│       ├── server-health-dashboard.markdown
│       └── fragrance-rating-gui.markdown
│
└── scripts/
    └── render_projects.py

             ↓

Frontend
│
└── data/
    └── projects.json
```

## Generated JSON

The Python rendering scripts generate JSON files that are consumed by the React frontend.

This prevents the React application from needing to parse Markdown or YAML frontmatter at runtime.

The resulting data can contain both the structured project metadata and the rendered HTML content.

For example:

```json
{
    "title": "Server Health Dashboard",
    "handle": "server-health-dashboard",
    "description": "A full-stack server monitoring dashboard.",
    "content": "<h1>Server Health Dashboard</h1><p>...</p>"
}
```

The React application can then use the generated data to populate project listings and individual project pages.

## Separation of Content and Presentation

The project uses a separation between content processing and presentation.

The backend handles:

```text
Markdown
YAML Frontmatter
Python Processing
JSON Generation
```

The frontend handles:

```text
React Components
Routing
CSS
Responsive Design
Project Presentation
```

This separation allows the content to be changed without requiring changes to the React components.

## Production Build

The frontend production build is responsible for consuming the generated JSON data and producing the deployable React application.

The backend content-generation step should occur before the production frontend build so that the latest Markdown content is represented in the generated JSON.

The intended workflow is:

```text
Edit Markdown
      ↓
Run Python Renderer
      ↓
Generate JSON
      ↓
Build React Application
      ↓
Deploy Frontend
```