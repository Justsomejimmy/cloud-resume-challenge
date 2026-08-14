import json, sys, markdown, re, yaml
from pathlib import Path

base = Path(__file__).resolve().parent.parent.parent
input_dir = base / 'backend' / 'data' / 'projects'
output_path = base / 'frontend' / 'src'/ 'data' / 'ProjectsData.json'

markdown_files = list(input_dir.glob("*.md"))
markdown_files.reverse()

projects = []
for md_file in markdown_files:
    content = md_file.read_text(encoding='utf-8')

    match = re.match(r"---\n(.*?)\n---\n(.*)", content, re.DOTALL)
    if not match:
        print(f"No front matter found in {md_file.name}, skipping.")
        continue

    front_matter, body = match.groups()
    metadata = yaml.safe_load(front_matter)
    metadata["body_html"] = markdown.markdown(body)
    projects.append(metadata)

with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(projects, f, ensure_ascii=False, indent=2)