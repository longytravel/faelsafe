# Faelsafe × Vibe Coding — pitch site

A four-page pitch site for **Faelsafe Life Safety Ltd** (faelsafe.co.uk), built in
Faelsafe's own brand. Modelled on the `longytravel/FCA` pitch site.

Audience: **Andrew Hutchison, Company Director** — so the language is commercial
throughout, and deliberately free of technical vocabulary.

## Pages

| Route | What it is |
|---|---|
| `/` | Hero, why we're here, three routes into the tabs |
| `/vibe-coding` | **Tab 1** — what vibe coding is, in plain English. Zero jargon by design |
| `/opportunities` | **Tab 2** — ten things we could build, grouped into win-more-work / get-paid-twice / stop-losing-hours |
| `/website` | **Tab 3** — fifteen evidenced findings on faelsafe.co.uk |
| `/website/demo` | **The redesign** — a working rebuilt Faelsafe homepage. No pitch-site chrome; it carries its own header and footer |

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # type-checks and builds
```

## Deploy

The GitHub repo is **github.com/longytravel/faelsafe**. Connect it to Vercel and keep
the project name `faelsafe` so the URL is `faelsafe.vercel.app` with nothing appended.

```bash
npx vercel --prod
```

No environment variables, no API keys, no database. Every page is statically
prerendered — the whole site is ~104KB of JavaScript.

## Stack

Next.js 15 (App Router) · React 19 · Tailwind v4 · TypeScript. No other dependencies.

## Brand

See `plans/design-spec.md`. Short version: orange `#f16b21`, charcoal `#32373c`,
Roboto body, `neuropolitical` display — all extracted from their live site.

`public/faelsafe/` holds Faelsafe's own logo, service images, NICEIC and TrustMark
badges, and the `neuropolitical` typeface, downloaded from faelsafe.co.uk. They are
reproduced here for a demonstration built for Faelsafe. **If this site is ever shown
outside Faelsafe, replace the accreditation badges first.**

## The audit behind `/website`

Every finding on the review page was checked against the live site, not eyeballed.
Re-run any of them:

```bash
# H1 tags, meta descriptions, structured data, Open Graph — per page
for u in "" services/ contact-us/ blog/ gallery-faelsafe/ meet-the-team/; do
  f=$(curl -s -L "https://faelsafe.co.uk/$u")
  echo "/$u  h1=$(echo "$f" | grep -oc '<h1')  desc=$(echo "$f" | grep -oc 'name=\"description\"')  schema=$(echo "$f" | grep -oc 'application/ld+json')  og=$(echo "$f" | grep -oc 'property=\"og:')"
done

# Dead analytics — Universal Analytics, switched off by Google in July 2023
curl -s https://faelsafe.co.uk/ | grep -o "UA-218049932-1"

# www doesn't resolve
curl -s -o /dev/null -w "%{http_code}\n" https://www.faelsafe.co.uk/
```

At the time of the audit all six pages returned `h1=0 desc=0 schema=0 og=0`.

The team page finding is the interesting one: faelsafe.co.uk *does* list fifteen real
people with roles and photographs, but the whole lot is URL-encoded inside a Rev Slider
JavaScript payload rather than present as HTML. Decode it with:

```bash
curl -s -L https://faelsafe.co.uk/meet-the-team/ | python -c "
import sys,urllib.parse,re
d=urllib.parse.unquote(sys.stdin.read())
for m in re.finditer(r'\"name\":\"([A-Z][A-Za-z]+ [A-Za-z]+ - [^\"]{3,50})\"', d): print(m.group(1))
"
```

## Proving the redesign fixes it

`/website/demo` implements every fix the review page claims. To verify:

```bash
npm run build && npx next start -p 3111 &
curl -s http://localhost:3111/website/demo | grep -c '<h1'                    # 1
curl -s http://localhost:3111/website/demo | grep -c 'name="description"'     # 1
curl -s http://localhost:3111/website/demo | grep -c 'application/ld+json'    # 1
curl -s http://localhost:3111/website/demo | grep -o 'property="og:[a-z]*"'   # several
```

## Before presenting

- [ ] Read `/vibe-coding` and `/opportunities` aloud as the MD. Anything requiring
      technical knowledge to understand gets rewritten.
- [ ] Sanity-check the ten ideas against what Faelsafe actually runs today — some may
      already be covered by their existing job management software.
- [ ] Decide whether to leave the accreditation badges in `/website/demo`.
