import { SiteNav, SiteFooter, DarkField, GlowField } from "@/src/components/ui";
import { p } from "@/src/lib/paths";

const routes = [
  {
    number: "01",
    href: p("/vibe-coding"),
    eyebrow: "Start here",
    title: "What vibe coding is",
    hook: "In plain English, with no jargon and no acronyms.",
    body: "You describe what you want. Working software comes out the other end. Ten minutes of reading that explains why software just got roughly a hundred times cheaper to try — and what that means for a business like yours.",
    cta: "Read the explainer",
  },
  {
    number: "02",
    href: p("/opportunities"),
    eyebrow: "The main event",
    title: "Fifteen things we could build for Faelsafe",
    hook: "Every one of them tied to money in or hours back.",
    body: "Winning more contracts, getting paid twice for work already done, killing the paperwork that costs you engineers — and five built purely from public data nobody in your trade bothers to read. Argue with them, then pick one.",
    cta: "See all fifteen",
  },
  {
    number: "03",
    href: p("/website"),
    eyebrow: "The uncomfortable one",
    title: "An honest review of your website",
    hook: "Fifteen findings, all of them checked, none of them opinion.",
    body: "Six pages with no headline tag, no description, no analytics since 2023 and a “Meet the Team” page with no team on it. Then a rebuilt homepage, in your brand, that you can click through today.",
    cta: "Read the review",
  },
];

const facts = [
  { value: "3", label: "days from brief to this site" },
  { value: "£0", label: "licence fees — you own it" },
  { value: "15", label: "ideas costed and ready" },
];

export default function Home() {
  return (
    <>
      <SiteNav activePage="home" />

      <main>
        {/* Hero */}
        <section className="relative bg-brand-charcoal text-white overflow-hidden">
          <DarkField />
          <div className="relative max-w-[1240px] mx-auto px-5 md:px-8 pt-20 pb-20 md:pt-28 md:pb-28">
            <p className="eyebrow text-accent mb-8 animate-fade-in">
              Prepared for Faelsafe Life Safety Ltd
            </p>

            <h1 className="font-display text-[clamp(34px,5vw,64px)] text-white leading-[1.05] mb-8 max-w-[16ch] animate-fade-in delay-1">
              Software used to take six months. Now it takes an afternoon.
            </h1>

            <p className="text-lg md:text-xl text-white/85 max-w-[62ch] leading-relaxed animate-fade-in delay-2">
              That single change is worth more to a contractor than almost anything
              else happening in technology right now — because the tools that were
              never worth £50,000 and half a year are suddenly worth building. This
              site shows you what that looks like for Faelsafe, in your own colours,
              and it was built the exact way it describes.
            </p>

            <div className="flex flex-wrap gap-3 mt-10 animate-fade-in delay-3">
              <a
                href={p("/opportunities")}
                className="eyebrow bg-accent hover:bg-accent-hover text-white px-6 py-3.5 rounded-[2px] transition-colors"
              >
                See the fifteen ideas
              </a>
              <a
                href={p("/vibe-coding")}
                className="eyebrow text-white border border-white/40 hover:border-accent hover:text-accent px-6 py-3.5 rounded-[2px] transition-colors"
              >
                What is vibe coding?
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 md:gap-10 mt-16 max-w-2xl border-t border-white/20 pt-8 animate-fade-in delay-4">
              {facts.map((f) => (
                <div key={f.label}>
                  <div className="font-display text-3xl md:text-4xl text-accent tnum">
                    {f.value}
                  </div>
                  <div className="eyebrow text-white/60 mt-2">{f.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why we're here */}
        <section className="relative bg-paper py-20 md:py-24 overflow-hidden">
          <GlowField />
          <div className="relative max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-start">
              <div>
                <p className="eyebrow text-ink-muted mb-4">Why we&apos;re here</p>
                <h2 className="font-display text-[clamp(24px,3vw,38px)] text-ink leading-tight orange-rule">
                  We&apos;d rather show you than tell you
                </h2>
              </div>
              <div className="space-y-5 text-lg text-ink-secondary leading-relaxed max-w-[62ch]">
                <p>
                  Faelsafe has been keeping buildings safe since 2012 — fire safety,
                  electrical, sprinklers and security, across schools, care homes,
                  hospital trusts, warehouses and high-rise blocks. That is a business
                  built on doing the job properly and proving it on paper.
                </p>
                <p>
                  Proving it on paper is exactly the kind of work that software is now
                  absurdly cheap at. Certificates, service dates, remedials, tender
                  answers, job sheets — every one of those is a place where a small,
                  purpose-built tool would pay for itself in weeks rather than years.
                </p>
                <p className="text-ink font-medium">
                  So instead of a slide deck about it, we built you a website. Three
                  sections. Read them in any order.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The three routes */}
        <section className="bg-paper-raised border-y border-rule py-20 md:py-24">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <p className="eyebrow text-ink-muted mb-4">What&apos;s in here</p>
            <h2 className="font-display text-[clamp(24px,3vw,38px)] text-ink leading-tight mb-12 orange-rule">
              Three things to look at
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {routes.map((r) => (
                <a
                  key={r.href}
                  href={r.href}
                  className="group bg-card border border-rule rounded-[2px] p-7 flex flex-col hover:border-accent hover:-translate-y-px transition-all duration-150"
                >
                  <div className="eyebrow text-accent-ink tnum mb-4">{r.number}</div>
                  <p className="eyebrow text-ink-muted mb-3">{r.eyebrow}</p>
                  <h3 className="font-display text-[21px] text-ink leading-tight mb-3">
                    {r.title}
                  </h3>
                  <p className="text-sm text-ink font-medium mb-3">{r.hook}</p>
                  <p className="text-sm text-ink-secondary leading-relaxed flex-1">
                    {r.body}
                  </p>
                  <span className="eyebrow text-accent-ink mt-6 pt-4 border-t border-rule group-hover:text-accent-hover">
                    {r.cta} →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* The ask */}
        <section className="bg-brand-charcoal text-white py-20 md:py-24">
          <div className="max-w-[820px] mx-auto px-5 md:px-8">
            <p className="eyebrow text-accent mb-4">The ask</p>
            <h2 className="font-display text-[clamp(24px,3vw,38px)] text-white leading-tight mb-6">
              Pick one and we&apos;ll build it
            </h2>
            <p className="text-lg text-white/85 leading-relaxed mb-4">
              Not a pilot, not a discovery phase, not a statement of work. Pick
              whichever of the fifteen looks most like money, and we build a working
              version of it you can put in front of an engineer or a client.
            </p>
            <p className="text-lg text-white/85 leading-relaxed mb-10">
              If it&apos;s useful, we keep going. If it isn&apos;t, we&apos;ve lost an
              afternoon instead of a budget — and that is the entire point of working
              this way.
            </p>
            <a
              href={p("/opportunities")}
              className="eyebrow inline-block bg-accent hover:bg-accent-hover text-white px-6 py-3.5 rounded-[2px] transition-colors"
            >
              Go to the fifteen ideas
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
