## Render Project Emulate Markdown

I want to be able to render markdown for my project page.
I know to render markdown serverside beacause client side 
markdown rendering is difficult to implement and provides inconsistent results

Our `render_projects.py` will render the json with the markdown into html.
Eventually I will rework this code into our serverless functions.

## Render Items with Frontmatter

My projects page rely on markdown. It would probably be better to collect markdown files with frontmatter and turn those into json objects.
Maybe contain everything within a directory for data. I would also need to change the home page in the future to adjust for markdown.

eg. `/projects/:handle.markdown`