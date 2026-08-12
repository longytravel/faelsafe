import type { Metadata } from "next";
import { SiteNav, SiteFooter, DarkField } from "@/src/components/ui";
import { p } from "@/src/lib/paths";

export const metadata: Metadata = {
  title: "What vibe coding is | Faelsafe × Vibe Coding",
  description:
    "Vibe coding explained in plain English for a business owner: what it actually is, what changed, what it is good and bad at, what it costs, and who should be doing it.",
};

const steps = [
  {
    phase: "Step one",
    title: "Work out what the problem really is",
    desc: "A conversation, not a questionnaire. What actually goes wrong, how often, who it annoys, and what it costs when it does. Most of the value is here — half the tools people ask for solve the wrong problem.",
    duration: "An hour",
    output: "A page of plain English everyone agrees with",
  },
  {
    phase: "Step two",
    title: "Sketch what it should do",
    desc: "What you see on the screen, what you click, what comes out. Still no code. If you can't describe it to an engineer in the van, it isn't ready to build.",
    duration: "An hour",
    output: "A clear description of the thing",
  },
  {
    phase: "Step three",
    title: "Build it",
    desc: "This is the part that used to take three months and now takes an afternoon. You describe it, the software gets written, you look at it working, you say what's wrong, it changes while you watch.",
    duration: "Half a day to a few days",
    output: "Something real you can click on",
  },
  {
    phase: "Step four",
    title: "Use it, then change it",
    desc: "Real use always finds things. Because changes take minutes rather than a change-request and an invoice, the tool actually gets better instead of quietly getting abandoned.",
    duration: "Ongoing, in minutes",
    output: "A tool people actually keep using",
  },
];

const goodAt = [
  "The jobs currently held together by a spreadsheet and someone's memory",
  "Chasing things: service dates, expiring certificates, unquoted remedials",
  "Turning messy paperwork into something searchable",
  "Making one screen out of information that lives in five places",
  "Trying an idea cheaply before anyone commits real money to it",
  "Client-facing things that make you look bigger and more organised than the competition",
];

const notGoodAt = [
  "Anything safety-critical — this never goes near a panel, a detector or a live system",
  "Replacing your accounting or certification software overnight",
  "Being left alone. Someone who knows the business still has to check it's right",
  "Reading minds. Vague brief in, useless tool out — the thinking is still the work",
];

const comparison = {
  old: [
    { label: "Decide it's worth doing", value: "Weeks of internal discussion" },
    { label: "Find someone to build it", value: "Quotes, meetings, a month" },
    { label: "Price", value: "£25,000 – £80,000" },
    { label: "Time to something you can see", value: "3 – 6 months" },
    { label: "Change your mind halfway", value: "Change request. More money." },
    { label: "If it turns out to be wrong", value: "You've spent the budget" },
  ],
  now: [
    { label: "Decide it's worth doing", value: "One conversation" },
    { label: "Find someone to build it", value: "Someone who knows your business" },
    { label: "Price", value: "Effectively the time it takes" },
    { label: "Time to something you can see", value: "The same afternoon" },
    { label: "Change your mind halfway", value: "Say so. It changes while you watch." },
    { label: "If it turns out to be wrong", value: "You've lost an afternoon" },
  ],
};

export default function VibeCoding() {
  return (
    <>
      <SiteNav
        activePage="vibe-coding"
        breadcrumb={[{ label: "Home", href: p("/") }, { label: "What vibe coding is" }]}
      />

      <main>
        {/* Hero */}
        <section className="relative bg-brand-charcoal text-white overflow-hidden">
          <DarkField />
          <div className="relative max-w-[1240px] mx-auto px-5 md:px-8 py-20 md:py-24">
            <p className="eyebrow text-accent mb-8">Start here</p>
            <h1 className="font-display text-[clamp(30px,4.2vw,54px)] text-white leading-[1.06] mb-8 max-w-[17ch]">
              You describe what you want. Working software comes out.
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-[64ch] leading-relaxed">
              That is the whole thing. No course to go on, no system to buy, no
              three-letter acronyms. Below is what it actually means in practice,
              what it&apos;s good and bad at, and what it costs — written for
              someone who runs a business, not someone who writes software.
            </p>
          </div>
        </section>

        {/* What it actually is */}
        <section className="bg-paper py-20 md:py-24">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] items-start">
              <div>
                <p className="eyebrow text-ink-muted mb-4">In one paragraph</p>
                <h2 className="font-display text-[clamp(24px,3vw,38px)] text-ink leading-tight orange-rule">
                  What it actually is
                </h2>
              </div>

              <div className="space-y-5 text-lg text-ink-secondary leading-relaxed max-w-[64ch]">
                <p>
                  Software is written in a language most people can&apos;t read. That
                  is the only reason software has always been expensive — you had to
                  hire the small number of people who could read it, and then spend
                  months explaining your business to them.
                </p>
                <p>
                  What changed is that computers can now write that language
                  themselves, from an ordinary description. So the person who
                  understands the problem can describe it directly — &ldquo;I want a
                  screen that shows me every site with a fire alarm service due in
                  the next 60 days, and lets me send the client a quote from
                  it&rdquo; — and get a working version back the same day.
                </p>
                <p className="text-ink font-medium">
                  That&apos;s it. That&apos;s vibe coding. You bring the knowledge of
                  the business; the machine brings the typing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What changed */}
        <section className="bg-paper-raised border-y border-rule py-20 md:py-24">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <p className="eyebrow text-ink-muted mb-4">Why it matters now</p>
            <h2 className="font-display text-[clamp(24px,3vw,38px)] text-ink leading-tight mb-6 orange-rule max-w-[22ch]">
              The price of trying something fell through the floor
            </h2>
            <p className="text-lg text-ink-secondary leading-relaxed max-w-[64ch] mb-12">
              This is the bit that matters commercially. When a tool cost £50,000
              and six months, you could only afford to build the one you were
              certain about — so most ideas never got tried at all. When it costs an
              afternoon, you can try ten and keep the two that work.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-card border border-rule rounded-[2px] p-7">
                <h3 className="eyebrow text-ink-muted mb-6">The old way</h3>
                <dl className="space-y-4">
                  {comparison.old.map((row) => (
                    <div key={row.label} className="pb-4 border-b border-rule last:border-0 last:pb-0">
                      <dt className="text-xs text-ink-muted mb-1">{row.label}</dt>
                      <dd className="text-ink-secondary">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="bg-card border-2 border-accent rounded-[2px] p-7">
                <h3 className="eyebrow text-accent-ink mb-6">Working this way</h3>
                <dl className="space-y-4">
                  {comparison.now.map((row) => (
                    <div key={row.label} className="pb-4 border-b border-rule last:border-0 last:pb-0">
                      <dt className="text-xs text-ink-muted mb-1">{row.label}</dt>
                      <dd className="text-ink font-medium">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* How a build goes */}
        <section className="bg-paper py-20 md:py-24">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <p className="eyebrow text-ink-muted mb-4">How it goes</p>
            <h2 className="font-display text-[clamp(24px,3vw,38px)] text-ink leading-tight mb-12 orange-rule max-w-[20ch]">
              What actually happens when we build something
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <div key={s.title} className="bg-card border border-rule rounded-[2px] p-6 flex flex-col">
                  <div className="eyebrow text-accent-ink tnum mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="eyebrow text-ink-muted mb-3">{s.phase}</p>
                  <h3 className="font-display text-[19px] text-ink leading-tight mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed flex-1">
                    {s.desc}
                  </p>
                  <div className="mt-6 pt-4 border-t border-rule space-y-2">
                    <div>
                      <div className="eyebrow text-ink-muted">How long</div>
                      <div className="text-sm text-ink font-medium">{s.duration}</div>
                    </div>
                    <div>
                      <div className="eyebrow text-ink-muted">What you get</div>
                      <div className="text-sm text-ink-secondary">{s.output}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The honest bit */}
        <section className="bg-paper-raised border-y border-rule py-20 md:py-24">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <p className="eyebrow text-ink-muted mb-4">The honest bit</p>
            <h2 className="font-display text-[clamp(24px,3vw,38px)] text-ink leading-tight mb-12 orange-rule max-w-[20ch]">
              What it&apos;s brilliant at, and what it isn&apos;t
            </h2>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="bg-card border-l-[3px] border-l-success border border-rule rounded-[2px] p-7">
                <h3 className="eyebrow text-success mb-5">Brilliant at</h3>
                <ul className="space-y-3">
                  {goodAt.map((g) => (
                    <li key={g} className="text-ink-secondary leading-relaxed pl-5 relative">
                      <span className="absolute left-0 top-0 text-accent-ink">—</span>
                      {g}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card border-l-[3px] border-l-danger border border-rule rounded-[2px] p-7">
                <h3 className="eyebrow text-danger mb-5">Not the answer for</h3>
                <ul className="space-y-3">
                  {notGoodAt.map((n) => (
                    <li key={n} className="text-ink-secondary leading-relaxed pl-5 relative">
                      <span className="absolute left-0 top-0 text-ink-muted">—</span>
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-lg text-ink-secondary leading-relaxed max-w-[64ch] mt-10">
              Worth saying plainly: nothing we build touches a fire panel, a
              detector, a sprinkler system or anything that keeps a building safe.
              These are office tools — paperwork, scheduling, quoting, chasing,
              reporting. The engineering stays exactly where it is.
            </p>
          </div>
        </section>

        {/* Who does it */}
        <section className="bg-paper py-20 md:py-24">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] items-start">
              <div>
                <p className="eyebrow text-ink-muted mb-4">Who does this</p>
                <h2 className="font-display text-[clamp(24px,3vw,38px)] text-ink leading-tight orange-rule">
                  The knowledge is the rare bit, not the typing
                </h2>
              </div>
              <div className="space-y-5 text-lg text-ink-secondary leading-relaxed max-w-[64ch]">
                <p>
                  The instinct is to say &ldquo;we&apos;d need to hire a developer for
                  that&rdquo;. It&apos;s the wrong instinct now. The scarce thing is
                  knowing which fifteen minutes of an engineer&apos;s day are wasted
                  and why, or what a facilities manager actually looks at before
                  renewing a contract.
                </p>
                <p>
                  A developer has to be told all of that, slowly, and will still get
                  some of it wrong. Someone who has run the jobs already knows it.
                  Give that person these tools and they&apos;ll out-build a
                  contractor every time.
                </p>
                <p className="text-ink font-medium">
                  Which is why this isn&apos;t really a technology decision. It&apos;s
                  a decision about whether the people who know the business get to
                  build things.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cost + ownership */}
        <section id="cost" className="bg-brand-charcoal text-white py-20 md:py-24 scroll-mt-24">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <p className="eyebrow text-accent mb-4">Cost and ownership</p>
            <h2 className="font-display text-[clamp(24px,3vw,38px)] text-white leading-tight mb-12 max-w-[20ch]">
              What you&apos;d actually be signing up to
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "You own it outright",
                  body: "Everything built is yours — the tool and everything it's made of. No licence, no per-user fee, no annual renewal that creeps up every January.",
                },
                {
                  title: "Nothing to be locked into",
                  body: "If you fall out with us, you keep working. Anyone competent can pick it up and carry on. That is deliberate — it's the opposite of most software you've bought.",
                },
                {
                  title: "Running costs are small",
                  body: "A tool like these typically costs somewhere between nothing and a few pounds a month to keep online. The cost is the building, and the building is fast.",
                },
              ].map((c) => (
                <div key={c.title} className="border-t-2 border-accent pt-6">
                  <h3 className="font-display text-[19px] text-white mb-3">{c.title}</h3>
                  <p className="text-white/80 leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof */}
        <section className="bg-paper-raised border-y border-rule py-20 md:py-24">
          <div className="max-w-[820px] mx-auto px-5 md:px-8 text-center">
            <p className="eyebrow text-ink-muted mb-4">Proof</p>
            <h2 className="font-display text-[clamp(24px,3vw,38px)] text-ink leading-tight mb-6">
              This website is the example
            </h2>
            <p className="text-lg text-ink-secondary leading-relaxed mb-4">
              Everything you&apos;re looking at — the layout, your logo, your orange,
              your typeface, the review of your site, the rebuilt homepage — was
              built this way. Nobody drew it in Photoshop first. It was described,
              and then it existed.
            </p>
            <p className="text-lg text-ink font-medium mb-10">
              If a whole website takes an afternoon, imagine what a tool that only
              has to do one job takes.
            </p>
            <a
              href={p("/opportunities")}
              className="eyebrow inline-block bg-accent hover:bg-accent-hover text-white px-6 py-3.5 rounded-[2px] transition-colors"
            >
              Ten things we could build for you
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
