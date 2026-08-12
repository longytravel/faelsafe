import type { Metadata } from "next";
import { SiteNav, SiteFooter, DarkField } from "@/src/components/ui";
import { p } from "@/src/lib/paths";

export const metadata: Metadata = {
  title: "Ten things we could build for Faelsafe | Faelsafe × Vibe Coding",
  description:
    "Ten commercial opportunities for Faelsafe Life Safety Ltd — winning more contracts, turning completed work into recurring revenue, and cutting the paperwork that costs engineers. Each one costed and ready to build.",
};

type Tier = "win" | "revenue" | "hours";

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
];

function IdeaCard({ idea }: { idea: Idea }) {
  return (
    <article className="bg-card border border-rule rounded-[2px] p-7 flex flex-col hover:border-accent hover:-translate-y-px transition-all duration-150">
      <div className="eyebrow text-accent tnum mb-4">
        {idea.number.toString().padStart(2, "0")}
      </div>

      {idea.note && (
        <p className="eyebrow text-ink border-l-2 border-accent pl-2 mb-3">
          {idea.note}
        </p>
      )}

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
        breadcrumb={[{ label: "Home", href: p("/") }, { label: "10 ideas for Faelsafe" }]}
      />

      <main>
        {/* Hero */}
        <section className="relative bg-brand-charcoal text-white overflow-hidden">
          <DarkField />
          <div className="relative max-w-[1240px] mx-auto px-5 md:px-8 py-20 md:py-24">
            <p className="eyebrow text-accent mb-8">The main event</p>
            <h1 className="font-display text-[clamp(30px,4.2vw,54px)] text-white leading-[1.06] mb-8 max-w-[18ch]">
              Ten things we could build for Faelsafe
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-[64ch] leading-relaxed mb-6">
              Every one of these is built the same way: an afternoon or two, a
              working version you can actually use, and a decision at the end about
              whether it&apos;s worth keeping. None of them is a system to migrate
              onto. None of them replaces anything you already run.
            </p>
            <p className="text-lg text-white/85 max-w-[64ch] leading-relaxed">
              They are ordered by what they do to the bank balance: winning more
              work, getting paid for work you&apos;ve already done, and stopping the
              leak of hours.
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

            {/* The eleventh option */}
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
