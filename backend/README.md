## Render Project Emulate Markdown

I want to be able to render markdown for my project page.
I know to render markdown serverside beacause client side 
markdown rendering is difficult to implement and provides inconsistent results

Our `render_projects.py` will render the json with the markdown into html.
Eventually I will rework this code into our serverless functions.

## Render Items with Frontmatter

Project and homepage content is stored as Markdown files with YAML frontmatter. 
Python rendering scripts parse the frontmatter and Markdown body, convert the content 
into JSON objects, and output the generated data for the React frontend.

Content is organized within the backend data directory, while the generated JSON 
files are stored within the frontend data directory for use by React components.

eg. `/projects/:handle.markdown`