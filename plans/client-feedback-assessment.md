# Faelsafe feedback — assessment and next steps

Response received 13 August 2026 to the fifteen ideas. Written by someone who
clearly knows the business, and it is the most useful thing we have had. It tells
us three things we could not have known from the outside: what they already own,
what the real pain is behind each idea, and what they would actually buy.

---

## 1. The three lines that should change the engagement

> **"How do you create a Commercial Business Development Manager instead of hiring one?"**

That is the product thesis, in their words, not ours. Everything below should be
framed against it. A BDM in this trade costs £45–60k plus car plus commission. That
is the number we are competing with, not "some software".

> **"we spent nearly 12K annually [on BarbourABI] and didn't get a thing from it"**

A price anchor and a benchmark. They already spend five figures a year on lead
generation and have a failure to point at. Anything we build has to beat "nothing",
which is a low bar, at a price below £12k, which is a comfortable ceiling.

> **"The initial offering is very much weighted towards public sector, it would be
> good to see more private sector assistance. Constructionline is 90% private sector."**

A fair hit. Four of our five public-data ideas are public-sector. Our strongest
verified idea (enforcement notices) is actually sector-neutral and our second
(care homes) is mostly private — we under-sold both. This needs correcting.

---

## 2. Scorecard — all fifteen, re-rated against the feedback

### Dead. They already have it.

| # | Idea | Why it's dead |
|---|---|---|
| 8 | Talk Your Job Sheet | **Already implemented** via BigChange Lightning AI, and they rate it: "probably one of the better results from Lightning." Remove it. |
| 3 | Same-Day Quote Builder | Largely solved. CRM workflows already trigger a quote notification from the worksheet and link quotes, POs, financial docs and Xero. They note "quoting often needs human intervention" — that is a judgement step, not a tooling gap. |

### Partly dead — the idea was right, the problem was wrong.

| # | Idea | What we got wrong | The real problem |
|---|---|---|---|
| 1 | The Tender Machine | They already hold **Constructionline and Facilities Line Gold**, which pre-answers RAMS, insurance, qualifications and social value. The PQQ problem we described is solved. | Constructionline covers pre-qualification, not the actual ITT response. And see #2 below — the live tender admin is the real burden. |
| 2 | Tender Watchtower | They already have portal access, saved filters and email alerts, plus the Constructionline tender portal. Discovery is solved. | **"we use many different tender portals that do not synchronise together, many live tenders have daily updates and answers to questions posed by bidders, customer requirements can change, keeping track of them is difficult and can require changing documents already completed."** That is the actual pain — aggregation and change-tracking across live bids, not finding them. |
| 7 | The Certificate Vault | Their CRM is "very organised and quick to locate certificates". Storage is solved. | **"if a customer sends an email for a copy, if we don't see the email, then we don't respond in time, not good customer service."** The pain is inbound request handling and customer self-serve — which is the portal, not a vault. |

### Live, and blocked on the same question.

| # | Idea | Their words |
|---|---|---|
| 4 | Revenue Radar | "could be beneficial as a one off to sweep the forgotten sites, would be interested how this would integrate" |
| 5 | Remedial-to-Revenue | "interested again how this would integrate **and if this is already available on our CRM, but we aren't using it**" |
| 6 | Client Compliance Dashboard | "I like this idea, would be interested again how it would integrate" |

Three separate ideas, one answer needed: **can we read from BigChange?** That single
fact decides whether these are a fortnight's work or not viable. It is being verified.

Note #5 in particular — they are asking whether they are already paying for a feature
they aren't using. Answering that honestly, even if the answer costs us a build, is
the fastest way to earn trust with this client.

### Strong interest — build these.

| # | Idea | Their words |
|---|---|---|
| 10 | The Lead Engine / website | **"Extremely interested in this, the new draft website model looks very impressive"** and "Love the website, it is direct, catchy, straight to the point, simple clean and easy to navigate" |
| 9 | Standards Answer Desk | Wants it **branded as a Faelsafe dashboard for customers**, plus engineer-facing hints, methods and standards. And adds an idea of their own — see §3. |
| 15 | Care Home Safety Radar | "could be very good, most care homes do not fall under public sector and are owned by private companies with their own budgets" — i.e. **this is the private-sector idea they asked for**, we just didn't frame it that way |

### Useful data, weak product — keep as features, not products.

| # | Idea | Verdict |
|---|---|---|
| 12 | Enforcement Notice Radar | The most instructive response. They know the market better than we do: *"landlords don't really care, the tenant isn't the landlord and won't pay… normally apply the cheap sticky plaster solution, we have had a few time wasters, especially in Bradford and Dewsbury."* But then they make our argument for us: **"if 30% of them come through, they are leads that would never have come to fruition, if it is automated, then there is no cost."** Keep it — but sell it on zero marginal cost, not on lead quality. |
| 13 | Contract Expiry Clock | "good data to have… not completely useless though, still valuable." Caveats we did not know: contract periods get extended, and the responsible contact is kept private behind the portal. |
| 11 | Read the Council's Books | "useful occasionally" — pricing and competitor insight. Correctly rated as intelligence, not lead flow. |
| 14 | Funded Schools List | "the information is valuable though" but a formal tender process still applies. Early sight, not a shortcut. |

**Read together:** ideas 11–14 are each individually marginal but collectively they
are exactly one thing — market intelligence. They should stop being four cards and
become one feature of one product.

---

## 3. What they proposed that we didn't

This is the more valuable half of the document. Their ideas, in priority order as we
read them:

1. **A single client portal**, combining: accreditations and insurances visible only
   to logged-in clients · a private compliance dashboard · live chat through to the
   office · a standards answer section for clients. Plus **"New all in one website
   combining the above portal and the company website front end."**
2. **Remote monitoring signals in the portal** — they use **CSL** GSM devices on fire
   and security systems, monitored by **DSOC in Doncaster**. Authorised clients would
   see their own site signals.
3. **Standards and technical bulletin watch → affected clients → advise.** Their words:
   *"Often service cycles/schedules are tightened with new publishings of standards
   which ultimately increases our revenue, unless we know, it goes missed."* This is a
   revenue-generating idea they raised themselves and it is required for their
   accreditations. Being verified separately.
4. **AI check of an installation from video** — *"where you video a part of an
   installation and the AI can check it and ask if certain standards were met… this
   could lower snagging and return visits."* Genuinely novel. Also the highest-risk
   thing in the document.
5. **The silo problem** — *"having different types of software that is needed to fulfil
   our daily roles… Not many of them synchronise and it becomes like silo working."*
6. **Multi-portal live tender tracking** with change/Q&A tracking (see #2 above).
7. **More private sector**, less public sector.

---

## 4. The convergence

Look at where the interest actually lands and one product emerges:

- Certificate Vault → the real need is **customer self-serve** → portal
- Client Compliance Dashboard → *"how it would integrate"*, existing Booking Site is
  *"very difficult to navigate and not at all user friendly"* → portal
- Standards Answer Desk → *"branded as a Faelsafe dashboard for customers"* → portal
- Their own idea #1 → **portal**
- Their own idea #2 → portal + website front end, and they already love the website
- Their own idea #3 → advising affected clients → delivered through the portal

**Six of the strongest signals in the document are the same product.** The
recommendation is not fifteen ideas or even five. It is one product — a Faelsafe
client portal fed by BigChange, sharing a front end with the new website — plus one
separate, cheap, automated lead engine running alongside it.

That also answers their silo complaint: the portal becomes the one place a client
looks, regardless of how many systems Faelsafe runs behind it.

---

---

## 5. Doability — the standards and bulletin watch (their idea #3)

**Verdict: PARTIAL, and the most commercially interesting thing in the document.**

Verified 13 August 2026.

### The finding that matters
The gap is **not** the watching. It is the workflow after it. Nobody sells the
"which of *your* clients does this change affect, go and advise them" step to this
trade:

- **BSI Compliance Navigator** does exactly this shape of thing — discovery,
  organisation, anticipation of change — but is built and sold for **medical devices
  and IVD**, not fire and electrical contracting.
- **Barbour EHS** (Marlowe-owned, absorbed Cedrec) does sell standards-change
  monitoring covering fire safety and British Standards — but aimed at EHS and FM
  buyers, and it **stops at "here is what changed"**. No evidence anything does the
  contractor-to-client obligation step.

So the thing Faelsafe described — the bit that actually makes them money by tightening
service cycles — is white space. Worth noting they already spent £12k a year with
BarbourABI, a sister-brand in the same group, for nothing.

### What's achievable
No API or RSS exists anywhere for this. It is scrape-and-diff on a short list of
public pages, none requiring a login:

| Source | What it gives | Frequency |
|---|---|---|
| `knowledge.bsigroup.com/pages/update-standards-magazine` | BSI's free monthly index of new / revised / draft / withdrawn standards. **Closest thing to a feed.** | Monthly |
| `theiet.org/media/press-releases` | BS 7671 amendments and corrigenda | ~Yearly |
| `fia.uk.com/news/` | FIA technical bulletins | Ad hoc |
| BAFE news + trade press (IFSEC, SSAIB) | Scheme document changes — SP203-1, SP205 | Ad hoc |
| `nsi.org.uk/bulletin/` | NSI bulletins — **likely member-gated, unconfirmed** | Ad hoc |

robots.txt is permissive on the pages that matter. FIA blocks `/resourceLibrary/*`
and `/myfia/*` but **not** `/news/`. BAFE's robots.txt returned empty — check manually
before building. NSI/SSAIB updates appear to go out by member portal and email, so
they may not be watchable externally at all — that is the weak link.

### The copyright line — important, and it is a hard line
British Standards are copyright BSI. No part may be reproduced, stored or transmitted
**"even for internal use"** without a paid licence; even permitted subscription-tier
copying caps at 10% with a mandatory copyright notice.

So the product must stop at: *"BS 5839-1 was revised, effective [date] — see the
official summary."* It must **never** quote or paraphrase clause text. What is safe:
the fact and date of a revision, plus links to third-party commentary that already
exists publicly (EAL's "Amendment 4 — Key Changes Explained", ECA and NAPIT writeups).

This also constrains idea 9, the Standards Answer Desk — a chatbot answering "what
does BS 5839 say about detector spacing" by reproducing clause text is a licensing
problem, not a technical one. It has to answer from Faelsafe's own written procedures
and from public commentary, and cite the clause number for the engineer to look up.
**That reframing needs to happen before we pitch it.**

### How it would actually be built
A scheduled job hits the five URLs weekly, diffs against the last run, and extracts
only title, number, date and status — never body text. On a hit, an LLM step
classifies which system type is affected (fire alarm / sprinkler / emergency lighting
/ wiring / intruder) against a lookup mapped to Faelsafe's client list by system type
installed. Output is a prompt in the account manager's queue: *"BS 5839-1 revised —
client X has this system — consider advising and revisiting the service interval."*

**The value is entirely in that mapping and workflow step.** The watching step is a
low-effort, low-reliability scraper that will need manual QA, because there is no
authoritative feed to trust. Sell the workflow, not the monitoring.

### Why this one is strategically strong
1. It is **their idea**, so there is no persuasion to do.
2. It is **required for their accreditations** — their words — so it is not
   discretionary spend.
3. It **increases revenue directly** by tightening service cycles, which is a
   recurring-revenue argument, not a cost-saving one.
4. It needs their **client list by system type**, which means it depends on the same
   BigChange integration as everything else — build the pipe once, use it four times.

Open: LPCB/BRE and NFCC were not checked. Worth doing before scoping.

---

---

## 6. Doability — the integration surface

Verified 13 August 2026. This is the answer to their repeated *"how would this
integrate?"*, and it is better in one way and worse in three than we assumed.

| System | Status | What it means |
|---|---|---|
| **BigChange REST API** | ✅ **Confirmed** | Public developer portal at `developers.bigchange.com`. API-key auth. **A free Essentials tier covering "over 90% of customers' typical API usage."** Webhooks confirmed, added Dec 2025 — so real-time, not polling. |
| BigChange object coverage | ⚠️ **Partial** | Persons/Contacts and Invoices confirmed. **Quotes, worksheets and purchase orders could not be confirmed** — the detailed reference pages require a login. Needs a trial key before we scope anything. |
| **Certificate / document PDFs** | ❌ **Unverified — biggest risk** | No confirmed document-download endpoint. May sit behind **DaaS**, BigChange's separate paid read-only product that pipes into **Snowflake**, requiring a direct Snowflake agreement and priced on data volume. If certificates need DaaS, the certificate portal gets materially more expensive. |
| **Xero API** | ✅ **Confirmed** | Free, OAuth2, full accounting coverage, free sandbox. No blockers. |
| **CSL DualCom** | ❌ **No public API** | Signals go to the ARC (DSOC). Installer tooling is "My Base", not a data API. **Do not promise live alarm status in a portal** without CSL or DSOC confirming a private route. |
| **Constructionline** | ❌ **No API** | Accreditation status in a portal would be **manually maintained**, not live. |

---

## 7. Three things this kills or weakens — and we should say so first

### The "Booking Site" is BigChange's own Customer Portal module
This is the most important correction in the document. Their portal is not something
they or a third party built — it is **BigChange's native Customer Portal**, at
`booking.bigchange.com`, and BigChange's own help article is literally titled *"What
is the Booking Site?"*. It already does jobsheets, reports, invoices, job history,
live engineer tracking, ETA alerts, booking PPM and emergency appointments, feedback,
and logo branding.

So their complaint — *"very difficult to navigate and not at all user friendly"* — is
a **UX complaint about BigChange's own product**, and it is only logo-brandable, not
white-label.

**What this changes:** "we'll build you a portal" is no longer filling a capability
gap. It is replacing the UX of a module they may already be paying for. That is still
a legitimate and saleable job — their clients are the ones suffering, and retention is
the argument — but it must be pitched honestly as an upgrade, or they will rightly
ask *"why pay you when we already have this?"* **Check their BigChange contract first.**

### Revenue Radar is largely redundant
BigChange has a dedicated **Service Reminders** feature: automated recurring schedules
that generate work orders at set intervals, with branded email and SMS reminders
containing links for customers to book or authorise the repeat job.

They asked, of Remedial-to-Revenue, *"is this already available on our CRM, but we
aren't using it?"* For the recurring-service half, **the answer is yes**. We should
tell them that in writing, unprompted, before we pitch anything.

Defect-to-quote conversion is **not** confirmed — worksheets do flag defects with
follow-up triggers, and quoting exists, but a one-click defect-to-quote workflow could
not be verified. That is a question for BigChange, not for us to assume either way.

### CSL signals in the portal are blocked
No public API. Treat as not deliverable unless Faelsafe can get CSL or DSOC to open a
private route. Worth them asking — they are the customer — but it cannot be scoped.

---

## 8. What is genuinely additive

After removing everything BigChange already does, this is what is left — and it is
still a strong offer, because it is all outside their CRM's remit.

| Rank | What | Why it survives |
|---|---|---|
| **1** | **Standards & bulletin watch** | White space — verified nobody sells this to the trade. Their idea. **Required for their accreditations**, so not discretionary. Increases recurring revenue by tightening service cycles. |
| **2** | **The website / Lead Engine** | *"Extremely interested"*, *"Love the website"*. Zero integration dependency. Already 90% built. |
| **3** | **Private-sector lead engine** — care homes + enforcement notices | Both verified. Care homes are *"owned by private companies with their own budgets"* — the private-sector weighting they asked for. Enforcement runs at zero marginal cost, which they accepted themselves. |
| **4** | **Live tender aggregation and change tracking** | Their stated pain, and genuinely unsolved: *"many different tender portals that do not synchronise… customer requirements can change… can require changing documents already completed."* Constructionline has no API, so this is aggregation across portals plus diffing — real work, real value. |
| **5** | **Client portal UX layer** | Viable, but only as an upgrade over BigChange's module, and gated on the certificate-PDF question. |
| — | **AI video installation check** | Their most novel idea and the highest risk. Genuine R&D. Should not be in a first commercial scope, but is exactly the right thing to prototype cheaply once trust exists. |

Note that **1, 3, 4 and 5 all need the same thing**: Faelsafe's client list keyed by
system type, out of BigChange. Build that pipe once and it serves four products. That
is the real first engineering task, and the free API tier probably covers it.

---

## 9. Recommended next steps

### Step 1 — Answer their question before pitching anything
Send a short written reply that says plainly: the recurring-service scheduling you
asked about **is already in BigChange** (Service Reminders), your Booking Site **is**
BigChange's Customer Portal module, and here are the two things we could not confirm
without your account. This costs us two product ideas and buys the engagement. A
supplier who tells you not to buy something is the one you call next time.

### Step 2 — Three questions only they can answer
Short call, with whoever administers BigChange in the room:
1. Are you paying separately for the Booking Site / Customer Portal module?
2. Can certificate and document PDFs be pulled from the REST API, or does that need
   DaaS and a Snowflake agreement? *(Ask BigChange directly — this decides whether the
   certificate portal is cheap or expensive.)*
3. Does a defect flagged on a worksheet convert to a quote natively?

Also worth asking: what did the £12k on BarbourABI actually fail to deliver — no
leads, or leads that never converted? That distinction changes what we build.

### Step 3 — Ship the website
No dependencies, they already love it, and it is the visible win that makes the rest
credible. Get it live on their domain with the SEO fixes from the review applied.

### Step 4 — Build one thing, properly
**The standards and bulletin watch.** It is their idea, it is white space, it is
accreditation-required, it increases revenue rather than saving cost, and it forces us
to build the BigChange client-list pipe that four other products need.

Scope it as: watch the five sources → detect a change → map to affected clients by
system type → prompt the account manager. Never reproduce standard text.

### Step 5 — Park, explicitly
CSL signals (blocked), Constructionline live sync (no API), AI video check (R&D).
Saying "not yet, and here's why" is better than a vague maybe.

### Commercial framing
Their own words give us the frame: *"How do you create a Commercial Business
Development Manager instead of hiring one?"* A BDM is £45–60k plus car plus
commission. BarbourABI was £12k for nothing. Price the whole programme between those
two numbers and the comparison makes itself.

Do not sell fifteen ideas. Sell one working thing, then the next.
