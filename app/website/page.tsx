import type { Metadata } from "next";
import { SiteNav, SiteFooter, DarkField } from "@/src/components/ui";

export const metadata: Metadata = {
  title: "An honest review of faelsafe.co.uk | Faelsafe × Vibe Coding",
  description:
    "Fifteen checked findings on faelsafe.co.uk — no headline tags, no page descriptions, no structured data, analytics that stopped recording in 2023 — and a rebuilt homepage you can click through.",
};

type Finding = {
  n: number;
  title: string;
  evidence: string;
  cost: string;
  severity: "critical" | "high" | "medium";
};

type Group = {
  key: string;
  title: string;
  blurb: string;
  findings: Finding[];
};

const groups: Group[] = [
  {
    key: "invisible",
    title: "Invisible to Google",
    blurb:
      "Search engines read a page the way a filing clerk does: they look for a headline, a description, and a machine-readable note saying what kind of business this is. Your site provides none of the three, on any page.",
    findings: [
      {
        n: 1,
        severity: "critical",
        title: "Not one page on the site has a headline tag",
        evidence:
          "Checked the homepage, Services, Contact Us, Blog, Gallery and Meet The Team. All six return zero H1 tags. The only sub-heading found anywhere is “GET SOCIAL”.",
        cost:
          "The headline tag is the single strongest signal a page gives about what it is. Google is being told nothing about any page you own.",
      },
      {
        n: 2,
        severity: "critical",
        title: "Not one page has a description",
        evidence:
          "Zero meta description tags across all six pages checked.",
        cost:
          "The grey text under your name in Google results is written for you by a machine, from whatever scraps it finds. You have no say in your own sales pitch.",
      },
      {
        n: 3,
        severity: "critical",
        title: "No business information a search engine can read",
        evidence:
          "Zero structured data blocks on any page — no LocalBusiness record, no address, no opening hours, no services, no accreditations in machine-readable form.",
        cost:
          "This is what powers the local map results for “fire alarm servicing near me”. Without it you effectively don't exist in local search — which is where nearly all of this work starts.",
      },
      {
        n: 4,
        severity: "high",
        title: "Your page titles say nothing",
        evidence:
          "The homepage title is “Faelsafe - Fael Safe”. The services page is “Faelsafe - Services – Fael Safe”. Contact is “Faelsafe - CONTACT US”.",
        cost:
          "No service, no Leeds, no Yorkshire, no reason to click. Nobody searches for “Fael Safe”. They search for “fire alarm maintenance Leeds”.",
      },
      {
        n: 5,
        severity: "high",
        title: "Shared links look broken",
        evidence:
          "No Open Graph or Twitter card tags anywhere on the site.",
        cost:
          "Paste your website into WhatsApp, LinkedIn or an email and you get a bare grey link with no logo, no image, no description. Every share of your site undersells you.",
      },
      {
        n: 6,
        severity: "medium",
        title: "Nobody is managing search at all",
        evidence:
          "No SEO plugin is installed. The only sitemap is the WordPress default at /wp-sitemap.xml, and the address most tools look for (/sitemap_index.xml) returns Not Found.",
        cost:
          "Findings 1–5 aren't oversights, they're the symptom. There is no system in place that would ever have caught them.",
      },
    ],
  },
  {
    key: "convert",
    title: "Nothing on it that wins work",
    blurb:
      "Assume someone does find the site. It then has to do the job a good salesperson would: prove you're competent, prove you're real, and make it easy to ask for a price. It does none of these.",
    findings: [
      {
        n: 7,
        severity: "critical",
        title: "Your best content is hidden inside a slideshow",
        evidence:
          "The Meet The Team page has your whole team on it — Andrew Hutchison, Chris Duncan, Liam Green, Emma Allsop and eleven more, with roles and photographs. None of it is on the page as readable text. It's encoded inside a Rev Slider script.",
        cost:
          "This is the most persuasive material you own — fifteen real named people with faces — and Google cannot read a word of it. Trades buyers buy people. You're hiding yours.",
      },
      {
        n: 8,
        severity: "high",
        title: "Your accreditations are buried",
        evidence:
          "BAFE, NICEIC and TrustMark appear low on the page, as small images with no explanation.",
        cost:
          "For a fire and electrical contractor these are the whole argument. On a compliance job they are more persuasive than price, and they should be the first thing anyone sees.",
      },
      {
        n: 9,
        severity: "high",
        title: "No proof you've done any of this",
        evidence:
          "No case studies, no named clients, no project write-ups, no “here's what we did at a 12-storey block in Leeds” anywhere on the site.",
        cost:
          "Your site claims “one of the UK's leading specialists”. Nothing on it backs that up. A facilities manager comparing three quotes has no reason to believe you over the other two.",
      },
      {
        n: 10,
        severity: "high",
        title: "No easy way to ask for a price",
        evidence:
          "No quote form near the top of any page, no response-time promise, no “we'll come and survey it this week”.",
        cost:
          "Someone ready to buy has to hunt for the contact page and compose an email. A proportion of them simply won't.",
      },
    ],
  },
  {
    key: "broken",
    title: "Broken or quietly dead",
    blurb:
      "These are the things that don't look like a problem from the inside, because nothing visibly fails. They just cost you, silently, every day.",
    findings: [
      {
        n: 11,
        severity: "critical",
        title: "Your analytics stopped recording in 2023",
        evidence:
          "The site still runs the old Universal Analytics tag (UA-218049932-1). Google switched Universal Analytics off in July 2023. It has collected nothing since.",
        cost:
          "Roughly three years with no idea how many people visit, what they look at, what they search for, or which pages produce enquiries. Every marketing decision since has been a guess.",
      },
      {
        n: 12,
        severity: "high",
        title: "www.faelsafe.co.uk doesn't work at all",
        evidence:
          "faelsafe.co.uk loads. www.faelsafe.co.uk fails to resolve — no redirect, no page, nothing.",
        cost:
          "Anyone who types the address with “www” in front of it, or reads it off an old sign or van, gets an error page and assumes you've gone under.",
      },
      {
        n: 13,
        severity: "medium",
        title: "Unfinished slideshow placeholders still in the page",
        evidence:
          "The Rev Slider plugin's own blank placeholder file (dummy.png) is still being served in the homepage markup.",
        cost:
          "Small thing on its own. But it's the tell that the site was never properly finished, and visitors pick up on that even when they can't say why.",
      },
      {
        n: 14,
        severity: "medium",
        title: "A font is loaded insecurely",
        evidence:
          "Your display typeface is requested over plain http rather than https, from your own server.",
        cost:
          "Browsers increasingly block or warn on this. When they do, your branding silently falls back to a default typeface.",
      },
    ],
  },
  {
    key: "slow",
    title: "Slow where it matters",
    blurb:
      "Most of the people finding you are on a phone, often on site, often on bad signal. That is the hardest condition your website has to work in, and it's the one it's worst at.",
    findings: [
      {
        n: 15,
        severity: "high",
        title: "The homepage loads 22 scripts and 31 stylesheets",
        evidence:
          "117KB of HTML before a single image, pulling in 22 separate JavaScript files and 31 separate stylesheets. Your service icons are served as 1024×1024 PNGs and shrunk in the browser.",
        cost:
          "Every one of those is a separate round trip on a phone. Slow sites lose visitors before the page has finished appearing, and Google now uses speed as a ranking factor.",
      },
    ],
  },
];

const severityStyle = {
  critical: "text-danger border-danger",
  high: "text-accent border-accent",
  medium: "text-ink-muted border-rule-strong",
} as const;

const severityLabel = {
  critical: "Critical",
  high: "Important",
  medium: "Worth fixing",
} as const;

const headline = [
  { value: "0", label: "headline tags across six pages" },
  { value: "0", label: "page descriptions" },
  { value: "0", label: "business records Google can read" },
  { value: "2023", label: "when your analytics stopped" },
];

export default function WebsiteReview() {
  return (
    <>
      <SiteNav
        activePage="website"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Your website" }]}
      />

      <main>
        {/* Hero */}
        <section className="relative bg-brand-charcoal text-white overflow-hidden">
          <DarkField />
          <div className="relative max-w-[1240px] mx-auto px-5 md:px-8 py-20 md:py-24">
            <p className="eyebrow text-accent mb-8">The uncomfortable one</p>
            <h1 className="font-display text-[clamp(24px,4.2vw,54px)] text-white leading-[1.06] mb-8 max-w-[18ch] break-words">
              An honest review of faelsafe.co.uk
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-[64ch] leading-relaxed mb-6">
              Fifteen findings. Every one of them checked against your live site
              rather than eyeballed, and every one shown here with the evidence so
              you can have someone verify it independently. None of this is a
              judgement about taste.
            </p>
            <p className="text-lg text-white/85 max-w-[64ch] leading-relaxed">
              The short version: the site looks broadly fine to a human being and is
              close to invisible to a search engine. And there is a lot of good
              material on it that nobody can find.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-14 border-t border-white/20 pt-8">
              {headline.map((h) => (
                <div key={h.label}>
                  <div className="font-display text-4xl md:text-5xl text-accent tnum">
                    {h.value}
                  </div>
                  <div className="eyebrow text-white/60 mt-2 leading-snug">{h.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a
                href="/website/demo"
                className="eyebrow inline-block bg-accent hover:bg-accent-hover text-white px-6 py-3.5 rounded-[2px] transition-colors"
              >
                ★ Skip to the rebuilt homepage
              </a>
            </div>
          </div>
        </section>

        {/* Framing */}
        <section className="bg-paper py-16 md:py-20 border-b border-rule">
          <div className="max-w-[820px] mx-auto px-5 md:px-8">
            <p className="eyebrow text-ink-muted mb-4">Before you read on</p>
            <h2 className="font-display text-[clamp(22px,2.6vw,32px)] text-ink leading-tight mb-6 orange-rule">
              This isn&apos;t a criticism of whoever built it
            </h2>
            <div className="space-y-5 text-lg text-ink-secondary leading-relaxed">
              <p>
                Nearly every trade website in the country has some version of these
                problems. They&apos;re invisible from the inside — the site loads,
                the pages are there, the phone still rings, so nothing looks wrong.
              </p>
              <p>
                They&apos;re also almost all mechanical, which is the good news. Most
                of what follows is a fix rather than a rebuild, and the rebuilt
                homepage at the end of this page proves it: same brand, same content,
                same business — put together so it works.
              </p>
            </div>
          </div>
        </section>

        {/* Findings */}
        <section className="bg-paper py-20 md:py-24">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 space-y-20">
            {groups.map((g) => (
              <div key={g.key}>
                <div className="border-t-2 border-ink pt-5 mb-10">
                  <h2 className="font-display text-[clamp(22px,2.4vw,32px)] text-ink leading-tight mb-3">
                    {g.title}
                  </h2>
                  <p className="text-ink-secondary max-w-[68ch] leading-relaxed">
                    {g.blurb}
                  </p>
                </div>

                <div className="space-y-4">
                  {g.findings.map((f) => (
                    <article
                      key={f.n}
                      className="bg-card border border-rule rounded-[2px] p-6 md:p-7 grid gap-5 md:grid-cols-[auto_1fr]"
                    >
                      <div className="md:w-16">
                        <div className="eyebrow text-ink-muted tnum">
                          {f.n.toString().padStart(2, "0")}
                        </div>
                        <div
                          className={`eyebrow mt-2 border-l-2 pl-2 ${severityStyle[f.severity]}`}
                        >
                          {severityLabel[f.severity]}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-display text-[19px] md:text-[21px] text-ink leading-tight mb-4">
                          {f.title}
                        </h3>

                        <div className="grid gap-5 md:grid-cols-2">
                          <div className="bg-paper-raised border-l-2 border-rule-strong p-4">
                            <p className="eyebrow text-ink-muted mb-2">What we found</p>
                            <p className="text-sm text-ink-secondary leading-relaxed">
                              {f.evidence}
                            </p>
                          </div>
                          <div className="border-l-2 border-accent pl-4">
                            <p className="eyebrow text-accent mb-2">What it costs you</p>
                            <p className="text-sm text-ink-secondary leading-relaxed">
                              {f.cost}
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What we'd do */}
        <section className="bg-paper-raised border-y border-rule py-20 md:py-24">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <p className="eyebrow text-ink-muted mb-4">What we&apos;d do</p>
            <h2 className="font-display text-[clamp(24px,3vw,38px)] text-ink leading-tight mb-12 orange-rule max-w-[22ch]">
              The fix, in the order we&apos;d do it
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  n: "01",
                  title: "Make it readable",
                  time: "A day",
                  body: "Proper headline and description on every page, real page titles with the service and the town in them, business details in the format search engines read, and working analytics. Nothing visual changes. This alone moves you.",
                },
                {
                  n: "02",
                  title: "Get your people out of the slideshow",
                  time: "A day",
                  body: "Fifteen named people with photographs, as ordinary readable content. Accreditations to the top of the homepage with a line each explaining what they mean. This is your strongest material — stop hiding it.",
                },
                {
                  n: "03",
                  title: "Give it somewhere to send people",
                  time: "Two or three days",
                  body: "A page for each service in each town you cover, so someone searching “sprinkler maintenance Wakefield” lands on something relevant. A quote form at the top of every one of them. A stated response time.",
                },
                {
                  n: "04",
                  title: "Then make it quick",
                  time: "A day",
                  body: "Strip the unused plugins, size the images properly, cut the scripts. This matters most on a phone on site with two bars of signal — which is most of the people looking at it.",
                },
              ].map((s) => (
                <div key={s.n} className="bg-card border border-rule rounded-[2px] p-6 flex flex-col">
                  <div className="eyebrow text-accent tnum mb-4">{s.n}</div>
                  <h3 className="font-display text-[18px] text-ink leading-tight mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed flex-1">
                    {s.body}
                  </p>
                  <div className="mt-5 pt-4 border-t border-rule">
                    <div className="eyebrow text-ink-muted">Roughly</div>
                    <div className="text-sm text-ink font-medium">{s.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo CTA */}
        <section className="bg-brand-charcoal text-white py-20 md:py-24">
          <div className="max-w-[820px] mx-auto px-5 md:px-8">
            <p className="eyebrow text-accent mb-4">Rather than describe it</p>
            <h2 className="font-display text-[clamp(24px,3vw,38px)] text-white leading-tight mb-6">
              We rebuilt your homepage. Go and click it.
            </h2>
            <p className="text-lg text-white/85 leading-relaxed mb-4">
              Same brand, same orange, same logo, same services, same phone number,
              your real team — put together the way it should be. It has a proper
              headline tag, a real description, your business details in the format
              Google reads, and your accreditations where people can see them.
            </p>
            <p className="text-lg text-white/85 leading-relaxed mb-10">
              In other words, every single fix listed above, already done, so you can
              judge it rather than take our word for it. It took an afternoon.
            </p>
            <a
              href="/website/demo"
              className="eyebrow inline-block bg-accent hover:bg-accent-hover text-white px-6 py-3.5 rounded-[2px] transition-colors"
            >
              ★ Open the rebuilt homepage
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
