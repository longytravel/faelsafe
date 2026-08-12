# Data verification log — ideas 11–15

The "Signals nobody else is watching" tier claims Faelsafe can build commercial
tools from public data. Those claims get shown to a client, so each source was
checked against the live service rather than assumed. This is the working.

**Verified:** 12 August 2026.

---

## Idea 12 — Enforcement Notice Radar — ✅ CONFIRMED, with real numbers

**Status: the strongest verified idea on the page.**

### What we got wrong first time
The original card implied every fire and rescue service publishes its own
searchable register, and that notices appear immediately. Both were wrong:

- Individual FRSs mostly do **not** run a public online database. West Yorkshire's
  own publication scheme says "contact us for this information".
- There is a **national aggregator** instead — the NFCC Enforcement Register.
  Under the Environment and Safety Information Act 1988, fire authorities must
  maintain a public register of notices served under the Fire Safety Order 2005,
  and they publish to this.
- Notices appear roughly **3–5 weeks** after being served (a 21-day appeal period
  plus processing), and stay for 3 years. Not real-time.

### The source
`https://nfcc.org.uk/our-services/enforcement-register/`

The page renders a wpDataTables grid backed by a server-side endpoint:

```
POST https://nfcc.org.uk/wp-admin/admin-ajax.php?action=get_wdtable&table_id=6
```

Standard DataTables server-side parameters, plus a `wdtNonce` scraped from the
page (`input[name=wdtNonceFrontendServerSide_6]`). **The `columns[i][...]`
parameters are required** — omit them and the endpoint returns `recordsTotal`
correctly but an empty `data` array, which reads exactly like "no results" and
is how we initially and wrongly concluded West Yorkshire was absent.

Eleven columns: `uprn, FRS, issue date, notice type, premises type, status,
address, notice served on, date complied with, reasons, additional information`.

Filter by service with `columns[1][search][value]=West Yorkshire`.

No API key, no CSV export, no documented rate limit. HTML/AJAX only.

### What is actually in there — measured, not estimated

| Measure | Value |
|---|---:|
| National notices in the register | 9,954 |
| **West Yorkshire notices** | **1,440** |
| West Yorkshire notices **in force right now** | **786** |
| Served in the last 12 months | 549 |
| Oldest → newest | Sep 2008 → 21 Jul 2026 |

West Yorkshire is ~14% of the entire national register — it is one of the most
active enforcing authorities in the country.

Premises types that match Faelsafe's customer base — **604 of the 1,440**:

| Premises type | Notices |
|---|---:|
| Purpose built flats ≥ 4 floors | 171 |
| Factory / warehouse | 159 |
| Care home | 100 |
| HMO | 86 |
| Hotel | 63 |
| School | 14 |
| Hospital | 11 |

Notice types: 348 enforcement, 147 prohibition, 5 alterations (of the most
recent 500). Every row names the responsible party — real examples from
21 July 2026 include `Nocturno Ltd` (Wakefield), `Crabtree Care Homes Services
Limited` and `PPC Management Ltd` (Dewsbury Road, Leeds).

### Second source
HSE public notices and convictions:
`https://resources.hse.gov.uk/notices/` and `/convictions/`

Free, HTML only, no API. Searchable by geography and by industry — the industry
filter explicitly includes "installation of electrical wiring and fitting".
Notices published 5 weeks after service and held 5 years; convictions 9 weeks
after, held 10 years.

### The catch
- 3–5 week lag before anything is public. Still commercially early against a
  typical 30–90 day compliance deadline, but do not sell it as real-time.
- No API or bulk download on either source. Both need scraping, and the NFCC
  endpoint needs a nonce, so the scraper will break if they change the page.
- The Building Safety Regulator does **not** appear to publish premises-level
  enforcement for higher-risk buildings. Do not extend this idea to BSR without
  re-checking.

### Compliance note for the pitch
Approaching a duty holder named on a public register is fact-based B2B outreach,
so no defamation exposure. Where the duty holder is a company, normal B2B
marketing rules apply. Where it is a **named individual or sole trader**, UK GDPR
direct-marketing rules apply — legitimate-interest basis, opt-out, and TPS/CTPS
screening before calling. Ordinary lead-gen hygiene, not a blocker, but it should
be said out loud rather than left for the client to discover.

---

## Idea 11 — Read the Council's Books — ✅ CONFIRMED

**Replaced the Planning Application Radar, which had a licensing problem (below).**

The Local Government Transparency Code requires every English council to publish
all expenditure over £500, supplier named. Still in force; Leeds voluntarily
publishes *all* transactions, not just above £500.

Real files were downloaded and read for four of five councils:

| Council | Source | Currency | Useful classification? |
|---|---|---|---|
| Leeds | datamillnorth.org, monthly CSV | to Mar 2026 | Generic budget lines only |
| Bradford | datahub.bradford.gov.uk, monthly CSV | to Jun 2026 | Category field **empty** in every row |
| **Kirklees** | kirklees.gov.uk, monthly xlsx | Dec 2025 checked | **Best** — `Proclass Description` + free-text `Purpose of Spend` |
| **Wakefield** | datamillnorth, quarterly CSV | Q1 2026-27 | **Good** — UNSPSC-style `Thomclas` |
| Calderdale | dataworks.calderdale.gov.uk | — | Dataset confirmed, but site 403s automated fetches — **file contents unverified** |

### Competitor names found in the actual files
- **Leeds:** ADT Fire And Security Plc · Chubb Fire & Security Ltd · Churches Fire
  Security Ltd · Edmundson Electrical Ltd
- **Bradford (one month):** Salts Fire & Security Ltd · Cannon Electrical Services
  · Fire Glass UK Ltd · RPS Electrical Services Ltd · Edmundson Electrical ·
  West Yorkshire Fire and Rescue (£1.04m single payment)
- **Kirklees:** Churches Fire Security · Aspect Fire Solutions · SPL Fire Safety ·
  RFJ Electrical · Electrical Compliance & Safety Ltd. Free-text purposes include
  "Churches Fire - Sprinklers 25/26", "Fire Regulation Comp Works", "Dalek, Fire
  Safety system and CCTV"
- **Wakefield:** Sandal Security Services Ltd · ITS Designs (Alert-It Care Alarms)
  · A to B Training (Fire Training). Categories include "Burglar & Intruder Alarm
  Systems", "Fire Training", "Electrical Goods - Sales"

**Licence:** OGL v3 confirmed explicitly for Leeds, Bradford and Kirklees. OGL
permits commercial reuse.

### The catch
No clean "fire safety" category in most files — Bradford's category column is
blank throughout, Leeds's is generic budget lines. So this is **supplier-name
driven, not category driven**: it needs a maintained list of competitor legal and
trading names (they vary — "Chubb Fire & Security Ltd" vs "Chubb Fire and Security
Limited"), a pipeline concatenating 12+ files per council per year, and fuzzy name
matching. Buildable and honest, but that matching is the actual engineering.

---

## Council asset registers — ⚠️ PARTIAL, not used

Checked as a possible territory-map replacement. Mixed quality:
- **Calderdale** — current and excellent. `Building Assets - 2025-26.csv` with KPI
  category, description, full address, postcode, tenure, occupied/vacant. Real rows
  include schools, leisure centres, day centres, depots, a crematorium.
- **Wakefield** — current and good. Site classification, committee (e.g. "Children
  and Young People"), postcode, tenure, floor area.
- **Bradford** — dataset listed, file fetch 403'd, unverified.
- **Leeds** — only locatable file dates from **2016**. Stale.
- **Kirklees** — register dated **2015**, most rows show "TBC" for tenure, type and
  use, despite the metadata page claiming it was updated July 2026. Genuinely weak.

Not pitched: too uneven across the five councils to promise as a single product.

---

## Planning Application Radar — ⚠️ REPLACED (kept on file)

**The mechanism is real, but two claims were wrong and one is a licensing problem.**

Portals (all public, no login):
- Leeds `publicaccess.leeds.gov.uk/online-applications/` — Idox Public Access
- Bradford `planning.bradford.gov.uk/online-applications/` — Idox
- Wakefield `planning.wakefield.gov.uk/online-applications/` — Idox
- Calderdale `portal.calderdale.gov.uk/online-applications/` — Idox
- Kirklees `kirklees.gov.uk/beta/planning-applications/...` — **bespoke, not Idox**

### What was wrong
1. **"applicant and agent's contact details attached" — false.** Applicant and
   agent **name and postal address** are on the statutory register, but
   **telephone, email and fax are redacted by design** in the national 1app
   submission pipeline, before the council even receives the form. Corrected to
   "name and registered address".
2. **"Free public planning data" — misleading.** Free to *view*. Idox Public
   Access terms of use restrict commercial reuse of the content without a licence
   from Idox — and a paid monitoring product built by scraping and repackaging is
   exactly what that clause targets. **This is why the card was replaced.** A
   licensed planning data feed would make the idea viable; raw scraping would not.
3. "12–18 months ahead" was unverified.

**Decision: replaced by Read the Council's Books**, which is OGL, explicitly
free for commercial reuse, and verified against real downloaded files. Planning
remains a good idea if Faelsafe ever wants to pay for a proper feed — it is the
earliest signal in the whole pipeline, it just isn't free.

### Other findings
- No API, CSV or RSS on any of the five. HTML scraping only.
- `planning.data.gov.uk` is not a substitute — its planning-application dataset
  self-describes as "incomplete and not yet ready for use", drawing on ~6 of
  ~300 English planning authorities.
- Free-text description and use class are enough to *flag* a lead; floor area
  generally is not structured, so scoping still needs a human to open the drawings.

---

## Idea 13 — The Contract Expiry Clock — ⚠️ PARTIAL, wording corrected

**Real, buildable, and now evidenced with actual West Yorkshire contracts.**

Sources: Contracts Finder `contractsfinder.service.gov.uk` (below-threshold) and
Find a Tender `find-tender.service.gov.uk` (above-threshold). Both OCDS-compliant,
**OGL v3 — free commercial reuse permitted**.

### What was wrong
"Including … when it ends" implied end dates are always present. They are not.
The Open Contracting Partnership's own audit of the UK feed notes date fields are
sometimes empty or unrealistic. Real example with dates **missing**: Bradford
Teaching Hospitals NHS FT, fire alarm maintenance, Chubb Fire & Security, £319,156
— start and end both blank.

Real examples with dates **present**:
- Leeds City Council — Electrical Domestic Testing & Remedial Works — UPS Building
  & Maintenance Ltd — **£1,400,000** — 13 May 2024 to 12 May 2026
- Leeds & Yorkshire Housing Association — fire safety — Horbury Property Services
  — £115,000 — 4 Jan 2022 to 3 Jan 2025
- West Yorkshire Fire & Rescue — CCTV/access control/intruder maintenance — £650,000
- West Yorkshire Fire & Rescue — electrical maintenance — £249,543

Corrected to: combine the published end date where present with contract term and
extension-option text where absent. Also worth noting as a tailwind — the
**Procurement Act 2023 (in force 24 Feb 2025)** requires contract term/duration in
Contract Details Notices, so completeness improves from here.

### Usable CPV codes
`31625200` fire-alarm systems · `31625100` fire-detection systems · `45312100`
fire-alarm installation · `50413200` repair/maintenance of fire-fighting equipment
· `35111300` fire-fighting equipment · `50324200` preventive maintenance ·
`50710000` repair/maintenance of electrical and mechanical building installations

### Implementation note
Contracts Finder **HTML pages return 403 to automated fetches**. Use the OCDS bulk
downloads (open, no auth) or the API — note full API access needs a free Sid4Gov
government login, so it is not literally keyless.

---

## Idea 14 (original) — Competitor Watch — ❌ DROPPED

**Two of its four legs were solid. Two were not, and one is actively hostile.**

- **Companies House — confirmed and excellent.** Free API (key required, 600 req /
  5 min), and a genuine **Streaming API** giving real-time company, filing, officer
  and insolvency events.
- **The Gazette — confirmed.** Free insolvency notices, filterable by company and by
  region, structured Atom/JSON feeds.
- **BAFE — problem.** The register lives on `bafe.my.salesforce-sites.com`, whose
  `robots.txt` is a blanket `Disallow: /`.
- **NICEIC — worse.** `robots.txt` explicitly names and blocks ClaudeBot, GPTBot,
  CCBot and others, and disallows `/certified-business/` for all agents. Live
  fetches of the site returned **HTTP 403** to automated clients — active bot
  detection, not just a polite request.
- **"Who has lost their accreditation" — not detectable as claimed.** None of the
  three registers expose a changelog or removal event. You would have to re-query
  every known company and diff snapshots, and a disappearance is indistinguishable
  from a rename, merger or renewal lapse.

**Decision: dropped rather than rewritten.** The half that survives (Companies
House + Gazette insolvency alerts) is genuinely good and worth building later, but
it is a thinner idea than the replacement, and the accreditation half would have
meant advising a client to scrape two organisations that clearly do not want it.

**Replaced by → The Funded Schools List.**

---

## Idea 15 (original) — The Territory Map — ❌ DROPPED

**One load-bearing claim was simply wrong.**

- **Non-domestic EPC register — confirmed.** Bulk CSV at
  `get-energy-performance-data.communities.gov.uk` (successor to the retired
  `epc.opendatacommunities.org`), free GOV.UK One Login, OGL v3. Includes address,
  postcode, local authority, **total floor area**, property type and **UPRN**.
- **Coverage is a real weakness.** An EPC is only triggered by construction, sale
  or letting since 2008. Government guidance says the register "should not be
  interpreted as a true representation of the whole of the building stock" — and
  the worst gaps are in long-held owner-occupied industrial and warehouse stock,
  which is exactly the segment that matters here.
- **CQC — confirmed.** Free bulk directory + API, OGL v3.
- **GIAS schools register — confirmed.** Full CSV extracts plus trust membership
  files, OGL v3.
- **Higher-risk buildings register — the error.** There is **no public bulk or
  address-level dataset**. The only public access is a single-postcode lookup, and
  gov.uk states the system "is designed to prevent users gathering data on multiple
  buildings in a single search and to prevent data scraping of the records". It can
  verify an address you already hold; it cannot hand you buildings you don't know
  about. The card claimed it "gives you the residential blocks" — it does not.
- **"Owner named" — overstated.** EPC data never contains the owner. Land Registry
  CCOD is free and OGL, but only covers titles held by UK companies — not sole
  traders, NHS trusts, local authorities or charities, which is how a large share
  of care homes and schools are held. It is also address-text keyed, not UPRN
  keyed, so joining is a real matching exercise.

**Decision: dropped.** EPC + CQC + GIAS is still a legitimate territory map and
could return later, but with the high-rise layer gone and ownership unreliable, it
no longer justified a card ahead of a fully verified alternative.

**Replaced by → Care Home Safety Radar.**

---

## Idea 14 (new) — The Funded Schools List — ✅ CONFIRMED

DfE **Condition Improvement Fund** outcome data, published annually as ODS
spreadsheets: `gov.uk/government/publications/condition-improvement-fund-2025-to-2026-outcome`
— **789 projects, ~£470m** in the last round. Crown copyright, OGL v3.

DfE's own CIF guidance ranks **building safety, fire protection (alarms, doors) and
gas/electrical safety as its highest funding priority category**, above roofs and
boilers. The outcome list names the school and the sum awarded.

**The catch:** project-type breakdown is inside the spreadsheet, not on the web
page, so it needs opening and filtering each round. Covers academies, free schools
and sixth-form colleges that apply to DfE directly — **not** local-authority
maintained schools, which route through council capital programmes instead.

---

## Idea 15 (new) — Care Home Safety Radar — ✅ CONFIRMED

CQC **care directory with ratings** — free monthly CSV/ODS bulk download at
`cqc.org.uk/about-us/transparency/using-cqc-data`, plus the Syndication API at
`api.cqc.org.uk/public/v1`. OGL v3, no approval gate.

Every registered care home is rated against five headings, one of which is **Safe**
— explicitly covering fire safety, maintenance checks and equipment records. Homes
rated Requires Improvement or Inadequate on Safe are under regulatory pressure to
fix precisely this work, with a re-inspection coming.

**The catch:** the bulk file gives the Safe rating, not the inspector's wording. To
know whether the concern was genuinely fire/electrical rather than medication or
staffing, the linked inspection report has to be read — a cheap extra step, but a
real one.

---

## Verified but not used

Kept on file as replacements if any card needs swapping later.

- **Social Housing Fire Safety Notices** — Regulator of Social Housing regulatory
  judgements and enforcement notices, `gov.uk/government/publications/regulatory-judgements-and-enforcement-notices`,
  OGL. The regulator has publicly named landlords over fire safety backlogs —
  Haringey (4,000 overdue high-risk fire actions), Woking, Wigan, Swindon (800+).
  Very high-quality leads but a low trickle, mostly larger landlords.
- **Companies House Streaming API + The Gazette** — real-time insolvency and filing
  alerts on competitors. Both confirmed above; the salvageable half of the dropped
  Competitor Watch.
- **NHS ERIC estates returns** — trust and site-level maintenance backlog by risk
  category, £15.9bn national, £3.5bn high risk. Confirmed at trust level; **not yet
  confirmed** whether fire safety is broken out as its own cost line. Open the CSV
  before building anything on it.
- **MHCLG fire incident level datasets** — LSOA-level incident and false-alarm data,
  OGL. Market colour for a pitch, not a lead list — it names no buildings.

---

## Rejected outright

- **VOA business rates data** — licence is restricted rather than OGL, and no
  confirmable "new occupier" field. Too weak to stand behind.

---

## How to re-run the enforcement check

```bash
curl -s -L "https://nfcc.org.uk/our-services/enforcement-register/" -o nfcc.html
NONCE=$(grep -oE 'wdtNonceFrontendServerSide_6"[^>]*value="[a-z0-9]+"' nfcc.html \
        | grep -oE 'value="[a-z0-9]+"' | grep -oE '[a-z0-9]{6,}' | head -1)

ARGS=""
for i in 0 1 2 3 4 5 6 7 8 9 10; do
  S=""; [ "$i" = "1" ] && S="West Yorkshire"
  ARGS="$ARGS --data-urlencode columns[$i][data]=$i \
        --data-urlencode columns[$i][searchable]=true \
        --data-urlencode columns[$i][orderable]=true \
        --data-urlencode columns[$i][search][value]=$S \
        --data-urlencode columns[$i][search][regex]=false"
done

curl -s "https://nfcc.org.uk/wp-admin/admin-ajax.php?action=get_wdtable&table_id=6" \
  -H "X-Requested-With: XMLHttpRequest" \
  -H "Referer: https://nfcc.org.uk/our-services/enforcement-register/" \
  --data-urlencode "draw=1" --data-urlencode "start=0" --data-urlencode "length=2000" \
  $ARGS --data-urlencode "wdtNonce=$NONCE" > wy.json
```
