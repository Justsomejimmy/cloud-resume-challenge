import json, re, yaml
import markdown
from pathlib import Path

base = Path(__file__).resolve().parent.parent.parent

input_path = base / "backend" / "data" / "home" / "home.md"
output_path = base / "frontend" / "src" / "data" / "HomeData.json"

content = input_path.read_text(encoding="utf-8")

match = re.match(r"^---\s*\n(.*?)\n---\s*\n(.*)$", content, re.DOTALL)

if not match:
    print(f"No front matter found in {input_path.name}.")
    exit(1)

front_matter, body = match.groups()

metadata = yaml.safe_load(front_matter)

metadata["body_html"] = markdown.markdown(
    body,
    extensions=["extra"]
)

with open(output_path, "w", encoding="utf-8") as f:
    json.dump(
        metadata,
        f,
        ensure_ascii=False,
        indent=2
    )

print(f"Rendered {input_path.name} → {output_path}")