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

## Live

**https://longytravel.github.io/faelsafe/**

Deployed by `.github/workflows/pages.yml` on every push to `main`. No credentials
needed beyond the repo's own.

## Deploy

Two targets build from this one source tree:

| Target | Env | Serves from |
|---|---|---|
| Vercel / `npm run dev` | nothing set | domain root |
| GitHub Pages | `STATIC_EXPORT=1`, `NEXT_PUBLIC_BASE_PATH=/faelsafe` | `/faelsafe/` subpath |

Hand-written links and image `src`s go through `src/lib/paths.ts` — Next rewrites its
own `/_next/` assets for a basePath, but not plain `<a href>` or `<img src>`. The
display font is loaded via `next/font/local` for the same reason: a literal `url()` in
CSS is not base-path aware.

**To add Vercel** (optional — Pages already serves it): open vercel.com/new, import
the `faelsafe` repo, Deploy. Keep the project name `faelsafe` so the URL is
`faelsafe.vercel.app`. Nothing to configure — no env vars, and the Vercel build path
is the default one with no base path.

The Vercel CLI cannot be driven from a Claude Code session: it forces
`--non-interactive` when it detects an agent, so `vercel login` silently no-ops and
there is no way to authenticate without pasting a token.

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
