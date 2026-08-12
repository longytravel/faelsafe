import type { Metadata } from "next";
import { SiteNav, SiteFooter, DarkField } from "@/src/components/ui";
import { p } from "@/src/lib/paths";

export const metadata: Metadata = {
  title: "Fifteen things we could build for Faelsafe | Faelsafe × Vibe Coding",
  description:
    "Fifteen commercial opportunities for Faelsafe Life Safety Ltd — winning more contracts, turning completed work into recurring revenue, cutting engineer paperwork, and reading public data nobody else in the trade joins together.",
};

type Tier = "win" | "revenue" | "hours" | "signals";

type Idea = {
  number: number;
  tier: Tier;
  category: string;
  title: string;
  hook: string;
  description: string;
  money: string;
  stats: { value: string; label: string }[];
  note?: string;
};

const ideas: Idea[] = [
  {
    number: 1,
    tier: "win",
    category: "Tenders & bids",
    title: "The Tender Machine",
    hook: "Bid for the contracts you currently skip because the paperwork eats a weekend.",
    description:
      "Every pre-qualification questionnaire asks the same forty questions: your accreditations, your insurance, your health and safety record, your method statements, your recent comparable work, your environmental policy. You answer them from scratch every time, usually on a Sunday. This holds all of it in one place and drafts the answers for a new tender in minutes — you read, correct and sign off rather than start from a blank page.",
    money:
      "One extra contract won a year pays for everything on this page several times over.",
    stats: [
      { value: "40+", label: "questions you re-answer every time" },
      { value: "Minutes", label: "instead of a weekend" },
      { value: "More bids", label: "same number of people" },
    ],
    note: "Biggest single lever",
  },
  {
    number: 2,
    tier: "win",
    category: "New work",
    title: "Tender Watchtower",
    hook: "Contracts in your patch, found for you, before your competitors bother looking.",
    description:
      "Public bodies have to advertise their fire, electrical and sprinkler contracts — councils, schools, NHS trusts, housing associations all publish on Contracts Finder, Find a Tender and their own portals. Almost nobody in the trade checks them consistently, because it's dull. This checks every morning, filters to fire safety, electrical, sprinklers and security within reach of Leeds, and shows you a short ranked list with the deadline and the value.",
    money:
      "The work is already being advertised. Right now you only see it when someone tells you.",
    stats: [
      { value: "Daily", label: "automatic sweep" },
      { value: "Yorkshire", label: "and wherever else you want" },
      { value: "Ranked", label: "by how winnable it looks" },
    ],
  },
  {
    number: 3,
    tier: "win",
    category: "Quoting",
    title: "Same-Day Quote Builder",
    hook: "Whoever quotes first usually wins. Very often it isn't the best price.",
    description:
      "An engineer surveys a site, takes photos, scribbles notes. Then it sits in a van for four days, gets typed up on an evening, and the quote lands a week later — by which point the customer has had two others. This turns the photos and notes into a priced, branded quote the same day, using your own rates and your own wording, ready for you to check and send.",
    money:
      "Response time is the single most reliable predictor of who wins small and mid-sized work.",
    stats: [
      { value: "Same day", label: "not next week" },
      { value: "Your rates", label: "your wording, your logo" },
      { value: "From photos", label: "and the engineer's notes" },
    ],
  },

  {
    number: 4,
    tier: "revenue",
    category: "Recurring revenue",
    title: "Revenue Radar",
    hook: "Every site you've ever worked on that owes you money and doesn't know it.",
    description:
      "Somewhere in your records is a list of every alarm you installed that never became a maintenance contract, every annual service that quietly lapsed, every customer who hasn't had an EICR in five years, and every site with equipment now old enough to need replacing. Nobody has time to go through it all. This does, and hands you a call list in priority order with the reason for the call already written.",
    money:
      "This is the cheapest revenue in the business — customers who already know you and already trust you.",
    stats: [
      { value: "Warm", label: "every single lead" },
      { value: "Recurring", label: "not one-off" },
      { value: "Priority", label: "ordered by value" },
    ],
    note: "Fastest payback",
  },
  {
    number: 5,
    tier: "revenue",
    category: "Remedials",
    title: "Remedial-to-Revenue",
    hook: "Every C1, C2 and fire risk assessment action is a quote you haven't sent.",
    description:
      "Your engineers find defects constantly. Those findings go into a certificate or a report, the report goes to the client, and then — unless someone chases — nothing happens. The client has an unfixed defect on record, and you have unsold work. This tracks every finding from the moment it's raised, turns it into a quote, and keeps nudging until it's either won, refused or fixed.",
    money:
      "You are already doing the survey work that finds this. The remedial is the profitable half.",
    stats: [
      { value: "Every", label: "defect tracked to an outcome" },
      { value: "Auto-quoted", label: "from your price list" },
      { value: "Audit trail", label: "of what you told them" },
    ],
  },
  {
    number: 6,
    tier: "revenue",
    category: "Client retention",
    title: "Client Compliance Dashboard",
    hook: "One screen per client showing every site, green or red. It sells itself.",
    description:
      "Give a facilities manager a login that shows every one of their sites and the live status of alarms, emergency lighting, extinguishers, sprinklers and fixed wire testing — what's in date, what's due, what's overdue, what's outstanding. It makes their job defensible in front of their own board, which makes you very hard to swap out at renewal. It is also the single most effective thing you can put on a laptop in a pitch meeting.",
    money:
      "Retention is worth more than acquisition, and this is a retention tool that doubles as a sales weapon.",
    stats: [
      { value: "Per client", label: "every site in one view" },
      { value: "Renewals", label: "much harder to lose" },
      { value: "Pitch-ready", label: "open it in the meeting" },
    ],
    note: "Best in the room",
  },

  {
    number: 7,
    tier: "hours",
    category: "Compliance admin",
    title: "The Certificate Vault",
    hook: "Every certificate you've ever issued, findable in seconds, with expiry alerts.",
    description:
      "Certificates are your product as much as the work is — and they live in email attachments, folders on someone's laptop and a filing cabinet. When a client rings asking for last year's fire alarm certificate for site nine, someone loses twenty minutes. This files everything automatically, makes it searchable by client, site, engineer, system or date, and warns you before anything expires.",
    money:
      "Twenty minutes, several times a week, plus a much better answer when an auditor asks.",
    stats: [
      { value: "Seconds", label: "to find any certificate" },
      { value: "Alerts", label: "before anything lapses" },
      { value: "Audit-ready", label: "for BAFE and NICEIC" },
    ],
  },
  {
    number: 8,
    tier: "hours",
    category: "Engineer time",
    title: "Talk Your Job Sheet",
    hook: "The engineer talks into their phone in the van. The paperwork writes itself.",
    description:
      "Nobody became an engineer because they enjoy typing up job sheets at nine at night, and evening paperwork is one of the real reasons good engineers leave. This lets them describe the job out loud — what they found, what they did, what still needs doing — and produces a properly formatted job sheet and a tidy client-ready report from it, with the photos attached.",
    money:
      "Recruiting and replacing one experienced engineer costs far more than building this.",
    stats: [
      { value: "Spoken", label: "not typed" },
      { value: "Evenings", label: "handed back" },
      { value: "Better notes", label: "people write more when it's easy" },
    ],
  },
  {
    number: 9,
    tier: "hours",
    category: "Standards",
    title: "The Standards Answer Desk",
    hook: "Plain-English answers on BS 5839, BS 7671, BS EN 12845 and the Fire Safety Order.",
    description:
      "An engineer on site has a question about detector spacing. A facilities manager wants to know whether their responsibility or yours covers something. Right now that's a phone call to whoever knows, and whoever knows is busy. This answers the question in plain English and shows the clause it came from, so the answer can be checked rather than trusted blindly.",
    money:
      "Fewer interruptions to your most experienced people, and quicker, more confident answers to clients.",
    stats: [
      { value: "Clause-backed", label: "every answer cites its source" },
      { value: "On site", label: "works on a phone" },
      { value: "Both ways", label: "for engineers and for clients" },
    ],
  },
  {
    number: 10,
    tier: "hours",
    category: "Marketing",
    title: "The Lead Engine",
    hook: "A site that actually turns up when someone searches “fire alarm servicing Leeds”.",
    description:
      "Your current website is invisible to search engines — genuinely invisible, in ways we've documented and checked. Fixing that, plus a proper page for each service in each town you cover, plus a quote form that works, plus analytics that have actually been recording something since 2023, turns the site from a business card into something that brings in work.",
    money:
      "Every enquiry that arrives through the website is one you didn't pay a referral or a salesperson for.",
    stats: [
      { value: "0", label: "headline tags on your site today" },
      { value: "2023", label: "when your analytics stopped" },
      { value: "Per town", label: "a page for every service you cover" },
    ],
    note: "See the review",
  },

  {
    number: 11,
    tier: "signals",
    category: "Council spend",
    title: "Read the Council's Books",
    hook: "Chubb, ADT, Churches Fire, Salts Fire & Security. All named in your councils' own published accounts.",
    description:
      "Every council must publish every payment it makes over £500 — supplier named, amount shown. We opened the actual files. One month of Bradford's alone names Salts Fire & Security, Cannon Electrical Services and RPS Electrical. Kirklees goes further and writes the reason in plain English: “Churches Fire — Sprinklers 25/26”, “Fire Regulation Comp Works”. Add up a year of it and you know which rival holds which council's work and roughly what they're paid for it.",
    money:
      "You would walk into a renewal conversation already knowing the incumbent and the number. Nobody else in your trade is reading these files.",
    stats: [
      { value: "5", label: "councils, all publishing monthly" },
      { value: "£500", label: "every payment above it, by law" },
      { value: "OGL", label: "free to reuse commercially" },
    ],
    note: "Verified — real names in real files",
  },
  {
    number: 12,
    tier: "signals",
    category: "Enforcement data",
    title: "Enforcement Notice Radar",
    hook: "786 buildings in West Yorkshire are under a live fire safety enforcement notice right now.",
    description:
      "That number is real — we checked it. Fire authorities must keep a public register of every enforcement and prohibition notice they serve, and West Yorkshire publishes its own to the National Fire Chiefs Council register: 1,440 notices, 549 of them served in the last twelve months, each with the premises named, the responsible company named and a legal deadline attached. Add the HSE's public notices and prosecutions database for electrical work and you have a standing list of organisations legally required to fix precisely what you do.",
    money:
      "604 of those West Yorkshire notices are on high-rise flats, warehouses, care homes, hotels, schools and hospitals — your customer base exactly.",
    stats: [
      { value: "786", label: "notices in force in West Yorkshire" },
      { value: "549", label: "served in the last 12 months" },
      { value: "3–5 wks", label: "from served to published" },
    ],
    note: "Verified — sharpest lead there is",
  },
  {
    number: 13,
    tier: "signals",
    category: "Contract data",
    title: "The Contract Expiry Clock",
    hook: "Leeds City Council's £1.4m electrical testing contract ran to May 2026. That was published.",
    description:
      "So was West Yorkshire Fire and Rescue's own £650,000 security maintenance contract, and a Leeds housing association's fire safety contract with its full three-year term. When a public body awards work, the notice names the winner, the value and — often — the end date. Almost nobody goes back and reads those end dates. This builds a calendar of every public life-safety contract in your region so you're building the relationship six months before the retender, not reacting two weeks after.",
    money:
      "Contracts are won in the six months before the tender opens, not in the fortnight after it lands.",
    stats: [
      { value: "£1.4m", label: "real Leeds contract, dates published" },
      { value: "~Half", label: "of notices carry a clean end date" },
      { value: "2025", label: "law now requires the term" },
    ],
  },
  {
    number: 14,
    tier: "signals",
    category: "Schools funding",
    title: "The Funded Schools List",
    hook: "The government publishes which schools have just been handed money for fire protection.",
    description:
      "The Condition Improvement Fund gave out around £470 million across 789 school projects in its last round, and the Department for Education's own guidance ranks fire protection — alarms, fire doors — and electrical safety as its highest funding priority, above roofs and boilers. The outcome list is published as a spreadsheet naming every school and every sum awarded. Filter it to Yorkshire and you have schools with budget already ring-fenced for precisely your work, months before they go looking for a contractor.",
    money:
      "A funded project is not a maybe. The money exists, the deadline is real, and someone has to be asked to quote.",
    stats: [
      { value: "789", label: "projects in the last round" },
      { value: "£470m", label: "awarded nationally" },
      { value: "Top", label: "priority is fire and electrical" },
    ],
    note: "Money already allocated",
  },
  {
    number: 15,
    tier: "signals",
    category: "Care home data",
    title: "Care Home Safety Radar",
    hook: "Every care home the regulator has marked down on safety — published, free, updated monthly.",
    description:
      "The Care Quality Commission rates every care home in the country against five headings, and one of them is simply “Safe” — which covers fire safety, maintenance checks and equipment records. A home rated Requires Improvement or Inadequate on Safe is a home under regulatory pressure to fix the exact things you sell, with an inspector due back. The full directory with ratings is a free monthly download. Filter it to West Yorkshire and the list writes itself.",
    money:
      "A care home manager facing re-inspection is not shopping around on price. They need it fixed and evidenced.",
    stats: [
      { value: "Monthly", label: "refreshed public download" },
      { value: "“Safe”", label: "is its own published rating" },
      { value: "Every", label: "registered home in the country" },
    ],
    note: "Self-qualifying leads",
  },
];

const tiers: { key: Tier; title: string; note: string; blurb: string }[] = [
  {
    key: "win",
    title: "Win more work",
    note: "Ideas 01 – 03",
    blurb:
      "Getting in front of more of the work that already exists, and getting there first.",
  },
  {
    key: "revenue",
    title: "Get paid twice for work you've already done",
    note: "Ideas 04 – 06",
    blurb:
      "The cheapest revenue in any contracting business is sitting in your own records.",
  },
  {
    key: "hours",
    title: "Stop losing hours",
    note: "Ideas 07 – 10",
    blurb:
      "Time is the only thing you can't buy more of, and admin is eating it.",
  },
  {
    key: "signals",
    title: "Signals nobody else is watching",
    note: "Ideas 11 – 15",
    blurb:
      "These five need nothing from your systems at all. They're built by reading public data that is already out there and free, and that essentially nobody in the trade joins together. Before writing them down we went and checked every source against the live service — the numbers below are measured, not estimated, and where a source turned out to be weaker than we'd hoped we've said so rather than quietly rounded up.",
  },
];

function IdeaCard({ idea }: { idea: Idea }) {
  return (
    <article className="bg-card border border-rule rounded-[2px] p-7 flex flex-col hover:border-accent hover:-translate-y-px transition-all duration-150">
      {/* Number and editorial note share one row so the titles line up across
          a row of cards whether or not a card carries a note. */}
      <div className="flex items-start justify-between gap-3 mb-4 min-h-[16px]">
        <span className="eyebrow text-accent-ink tnum">
          {idea.number.toString().padStart(2, "0")}
        </span>
        {idea.note && (
          <span className="eyebrow text-ink border-l-2 border-accent pl-2 text-right">
            {idea.note}
          </span>
        )}
      </div>

      <p className="eyebrow text-ink-muted mb-3">{idea.category}</p>

      <h3 className="font-display text-[21px] text-ink leading-tight mb-4">
        {idea.title}
      </h3>

      <p className="text-ink font-medium leading-snug mb-4">{idea.hook}</p>

      <p className="text-sm text-ink-secondary leading-relaxed flex-1">
        {idea.description}
      </p>

      <p className="text-sm text-ink-secondary leading-relaxed mt-5 pt-5 border-t border-rule">
        <span className="eyebrow text-success block mb-1.5">Why it&apos;s worth money</span>
        {idea.money}
      </p>

      <div className="grid grid-cols-3 gap-3 mt-5 pt-5 border-t border-rule">
        {idea.stats.map((s) => (
          <div key={s.label}>
            <div className="text-ink font-semibold text-base tnum leading-tight">
              {s.value}
            </div>
            <div className="eyebrow text-ink-muted mt-1.5 leading-snug">{s.label}</div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function Opportunities() {
  return (
    <>
      <SiteNav
        activePage="opportunities"
        breadcrumb={[{ label: "Home", href: p("/") }, { label: "15 ideas for Faelsafe" }]}
      />

      <main>
        {/* Hero */}
        <section className="relative bg-brand-charcoal text-white overflow-hidden">
          <DarkField />
          <div className="relative max-w-[1240px] mx-auto px-5 md:px-8 py-20 md:py-24">
            <p className="eyebrow text-accent mb-8">The main event</p>
            <h1 className="font-display text-[clamp(30px,4.2vw,54px)] text-white leading-[1.06] mb-8 max-w-[18ch]">
              Fifteen things we could build for Faelsafe
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-[64ch] leading-relaxed mb-6">
              Every one of these is built the same way: an afternoon or two, a
              working version you can actually use, and a decision at the end about
              whether it&apos;s worth keeping. None of them is a system to migrate
              onto. None of them replaces anything you already run.
            </p>
            <p className="text-lg text-white/85 max-w-[64ch] leading-relaxed mb-6">
              They are ordered by what they do to the bank balance: winning more
              work, getting paid for work you&apos;ve already done, and stopping the
              leak of hours.
            </p>
            <p className="text-lg text-white/85 max-w-[64ch] leading-relaxed">
              The last five are the ones we&apos;d push hardest. They need nothing
              from your systems at all — they&apos;re built by reading public data
              that is already out there and free, and joining it together in a way
              nobody in your trade does. That is where we&apos;ve seen the biggest
              wins.
            </p>
          </div>
        </section>

        {/* The board */}
        <section className="bg-paper py-20 md:py-24">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 space-y-20">
            {tiers.map((tier) => (
              <div key={tier.key}>
                <div className="border-t-2 border-ink pt-5 mb-10 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <div>
                    <h2 className="font-display text-[clamp(22px,2.4vw,32px)] text-ink leading-tight">
                      {tier.title}
                    </h2>
                    <p className="text-ink-secondary mt-2 max-w-[60ch]">{tier.blurb}</p>
                  </div>
                  <p className="eyebrow text-ink-muted tnum">{tier.note}</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {ideas
                    .filter((i) => i.tier === tier.key)
                    .map((idea) => (
                      <IdeaCard key={idea.number} idea={idea} />
                    ))}
                </div>
              </div>
            ))}

            {/* What we checked, and what we found wrong */}
            <div className="bg-card border-l-[3px] border-l-ink border-y border-r border-rule rounded-[2px] p-8 md:p-10">
              <p className="eyebrow text-ink-muted mb-4">Where the last five came from</p>
              <h3 className="font-display text-[22px] text-ink mb-5">
                We checked every source before writing it down
              </h3>
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="space-y-4 text-ink-secondary leading-relaxed max-w-[60ch]">
                  <p>
                    Ideas built on public data are easy to write and easy to get
                    wrong. So each source was tested against the live service, and
                    two of our original five didn&apos;t survive it — a competitor
                    tracker that would have meant scraping registers whose owners
                    explicitly ask you not to, and a territory map that leaned on a
                    government register deliberately built to prevent exactly that
                    kind of bulk lookup. Both were replaced with sources we could
                    actually stand behind.
                  </p>
                  <p className="text-ink font-medium">
                    We&apos;d rather tell you that now than have you find out in
                    front of a client.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      t: "Council spend files",
                      d: "There is no clean “fire safety” category in most of them — Wakefield and Kirklees classify well, Leeds and Bradford don't. So this works by matching supplier names, which means keeping a list of competitors and their trading variants. Real work, but ordinary work.",
                    },
                    {
                      t: "Contract end dates",
                      d: "Published often, but not always — some award notices leave the date blank. We'd read the contract term from the notice text as a fallback. Procurement rules since 2025 now require the term, so this gets better over time.",
                    },
                    {
                      t: "Approaching duty holders",
                      d: "Where the responsible person on a notice is a company, ordinary business-to-business rules apply. Where it's a named individual, marketing rules are stricter and calls need screening first.",
                    },
                  ].map((c) => (
                    <div key={c.t} className="border-t border-rule pt-4">
                      <p className="eyebrow text-ink-muted mb-2">{c.t}</p>
                      <p className="text-sm text-ink-secondary leading-relaxed">{c.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* The sixteenth option */}
            <div className="bg-paper-raised border border-rule-strong rounded-[2px] p-8 md:p-10 max-w-[820px]">
              <p className="eyebrow text-ink-muted mb-4">Or</p>
              <h3 className="font-display text-[22px] text-ink mb-4">
                Something we haven&apos;t thought of
              </h3>
              <p className="text-lg text-ink-secondary leading-relaxed">
                This list was written from the outside, from your website, your
                accreditations and how contracting businesses generally work. You
                know where the real friction is and we don&apos;t. If there&apos;s a
                job in your week that makes you sigh, that&apos;s almost certainly a
                better idea than anything above — bring it and we&apos;ll build that
                instead.
              </p>
            </div>
          </div>
        </section>

        {/* Close */}
        <section className="bg-brand-charcoal text-white py-20 md:py-24">
          <div className="max-w-[820px] mx-auto px-5 md:px-8">
            <p className="eyebrow text-accent mb-4">Next</p>
            <h2 className="font-display text-[clamp(24px,3vw,38px)] text-white leading-tight mb-6">
              Pick one. We&apos;ll have something working to look at within the week.
            </h2>
            <p className="text-lg text-white/85 leading-relaxed mb-10">
              Not a proposal for a proposal. Choose the one that looks most like
              money and we&apos;ll build a real version of it — then you decide
              whether it earns its place.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={p("/website")}
                className="eyebrow bg-accent hover:bg-accent-hover text-white px-6 py-3.5 rounded-[2px] transition-colors"
              >
                Read the website review
              </a>
              <a
                href={p("/vibe-coding")}
                className="eyebrow text-white border border-white/40 hover:border-accent hover:text-accent px-6 py-3.5 rounded-[2px] transition-colors"
              >
                How this all works
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
