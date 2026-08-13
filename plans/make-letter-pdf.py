"""
Render a markdown letter to a print-quality A4 PDF.

    python plans/make-letter-pdf.py <input.md> <output.pdf> [--title "..."]

Markdown -> styled HTML -> Chrome headless --print-to-pdf. No external services,
no LaTeX. Typography and page rules are tuned for a business letter that has to
survive being printed and passed round a meeting.
"""

import subprocess
import sys
import tempfile
from pathlib import Path

import markdown

CHROME_CANDIDATES = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
]

CSS = """
@page { size: A4; margin: 20mm 18mm 18mm 18mm; }

:root {
  --ink: #22262a;
  --ink-soft: #4a5057;
  --muted: #6b7278;
  --accent: #c2500f;
  --rule: #d9dcdf;
  --tint: #f6f4f1;
}

* { box-sizing: border-box; }

body {
  font-family: "Georgia", "Cambria", serif;
  font-size: 10.7pt;
  line-height: 1.58;
  color: var(--ink-soft);
  margin: 0;
  -webkit-font-smoothing: antialiased;
}

p { margin: 0 0 10pt; orphans: 3; widows: 3; }

strong { color: var(--ink); font-weight: 700; }
em { color: var(--ink); }

/* ---- headings ---- */
h1 {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 19pt; line-height: 1.15; color: var(--ink);
  margin: 0 0 4pt; letter-spacing: -0.015em; font-weight: 700;
}
h2 {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 12.5pt; color: var(--ink); font-weight: 700;
  margin: 22pt 0 8pt; padding-top: 8pt;
  border-top: 1.5px solid var(--ink);
  letter-spacing: -0.01em;
  break-after: avoid; page-break-after: avoid;
}
h3 {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 11pt; color: var(--accent); font-weight: 700;
  margin: 15pt 0 6pt;
  break-after: avoid; page-break-after: avoid;
}

/* ---- lists ---- */
ol, ul { margin: 0 0 11pt; padding-left: 17pt; }
li { margin-bottom: 5pt; padding-left: 2pt; }

/* ---- the pull quote: the number that should stop him ---- */
blockquote {
  margin: 14pt 0;
  padding: 11pt 14pt;
  background: var(--tint);
  border-left: 3px solid var(--accent);
  color: var(--ink);
  font-size: 11pt;
  line-height: 1.5;
  break-inside: avoid; page-break-inside: avoid;
}
blockquote p:last-child { margin-bottom: 0; }

/* ---- tables ---- */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 12pt 0 14pt;
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 9.4pt;
  line-height: 1.45;
  break-inside: avoid; page-break-inside: avoid;
}
th {
  text-align: left;
  font-size: 7.8pt;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--muted);
  font-weight: 700;
  border-bottom: 1.5px solid var(--ink);
  padding: 0 9pt 5pt 0;
}
td {
  padding: 7pt 9pt 7pt 0;
  border-bottom: 1px solid var(--rule);
  vertical-align: top;
}
td:last-child, th:last-child { padding-right: 0; }
tr:last-child td { border-bottom: none; }

hr {
  border: 0; border-top: 1px solid var(--rule);
  margin: 18pt 0;
}

/* Signature block and the closing note. */
body > p:last-of-type em { color: var(--muted); }
"""

HTML = """<!doctype html>
<html lang="en-GB"><head><meta charset="utf-8"><title>{title}</title>
<style>{css}</style></head><body>
{content}
</body></html>"""


def main() -> int:
    if len(sys.argv) < 3:
        print(__doc__)
        return 2

    src, out = Path(sys.argv[1]), Path(sys.argv[2])
    title = "Letter"
    if "--title" in sys.argv:
        title = sys.argv[sys.argv.index("--title") + 1]

    body = markdown.markdown(
        src.read_text(encoding="utf-8"),
        extensions=["tables", "sane_lists", "attr_list"],
    )
    html = HTML.format(title=title, css=CSS, content=body)

    chrome = next((c for c in CHROME_CANDIDATES if Path(c).exists()), None)
    if not chrome:
        print("No Chrome or Edge found.")
        return 1

    with tempfile.TemporaryDirectory() as tmp:
        page = Path(tmp) / "letter.html"
        page.write_text(html, encoding="utf-8")
        out.parent.mkdir(parents=True, exist_ok=True)
        subprocess.run(
            [
                chrome,
                "--headless=new",
                "--disable-gpu",
                "--no-sandbox",
                f"--user-data-dir={tmp}/profile",
                "--no-pdf-header-footer",
                "--virtual-time-budget=8000",
                f"--print-to-pdf={out.resolve()}",
                page.resolve().as_uri(),
            ],
            capture_output=True,
            timeout=180,
        )

    if out.exists():
        print(f"{out}  ({out.stat().st_size:,} bytes)")
        return 0
    print("PDF was not produced.")
    return 1


if __name__ == "__main__":
    sys.exit(main())
