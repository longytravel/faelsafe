import type { Metadata } from "next";
import { PHONE_DISPLAY, PHONE_HREF, EMAIL } from "@/src/components/ui";
import QuoteForm from "@/src/components/QuoteForm";
import { p } from "@/src/lib/paths";

/**
 * The rebuilt Faelsafe homepage.
 *
 * This page deliberately does NOT use the pitch-site chrome — it is a working
 * demonstration of what faelsafe.co.uk could be, so it carries its own header
 * and footer. Every SEO fix named in /website is implemented here for real:
 * one H1, a proper title and description, Open Graph tags, and a LocalBusiness
 * structured-data block. View source and check.
 */

export const metadata: Metadata = {
  title:
    "Fire Alarm, Sprinkler & Electrical Compliance in Leeds | Faelsafe Life Safety",
  description:
    "BAFE and NICEIC accredited fire safety, sprinkler maintenance, electrical testing and security engineers covering Leeds, Bradford, Wakefield and Yorkshire. 24-hour emergency callout on 0333 666 999 5.",
  openGraph: {
    title: "Faelsafe Life Safety — Fire, Electrical & Security Compliance in Leeds",
    description:
      "BAFE and NICEIC accredited engineers keeping Yorkshire buildings compliant since 2012. Fire alarms, sprinklers, emergency lighting, fixed wire testing and security systems.",
    type: "website",
    locale: "en_GB",
    siteName: "Faelsafe Life Safety Ltd",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faelsafe Life Safety — Fire, Electrical & Security Compliance in Leeds",
    description:
      "BAFE and NICEIC accredited engineers keeping Yorkshire buildings compliant since 2012.",
  },
  alternates: { canonical: "https://faelsafe.co.uk/" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Faelsafe Life Safety Ltd",
  description:
    "BAFE and NICEIC accredited fire safety, sprinkler maintenance, electrical and electronic security specialists serving Leeds and Yorkshire since 2012.",
  url: "https://faelsafe.co.uk/",
  telephone: "+443336669995",
  email: EMAIL,
  foundingDate: "2012",
  slogan: "Don't Fael To Be Safe",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 5, Asquith Avenue Business Park",
    addressLocality: "Morley, Leeds",
    addressRegion: "West Yorkshire",
    postalCode: "LS27 7RZ",
    addressCountry: "GB",
  },
  areaServed: [
    "Leeds",
    "Bradford",
    "Wakefield",
    "Huddersfield",
    "York",
    "Sheffield",
    "West Yorkshire",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
      description: "24 hour emergency callout",
    },
  ],
  hasCredential: ["BAFE", "NICEIC Approved Contractor", "TrustMark"],
  makesOffer: [
    "Fire alarm installation and maintenance",
    "Fire sprinkler maintenance to BS EN 12845",
    "Emergency lighting testing",
    "Fixed wire testing and EICRs to BS 7671",
    "CCTV and intruder alarm systems",
  ],
};

const services = [
  {
    id: "fire-safety",
    icon: p("/faelsafe/svc-fire.png"),
    title: "Fire Safety",
    standard: "BS 5839 · BAFE accredited",
    body: "Design, installation, commissioning and maintenance of fire detection and alarm systems, emergency lighting and extinguishers — with the certification to prove it.",
    points: ["Fire alarm systems", "Emergency lighting", "Extinguishers", "Fire risk actions"],
  },
  {
    id: "sprinklers",
    icon: p("/faelsafe/svc-sprinkler.jpg"),
    title: "Sprinkler Maintenance",
    standard: "BS EN 12845:2015+A1:2019",
    body: "Scheduled servicing, weekly and quarterly testing regimes, tank and pump inspections, and remedial work on wet, dry and water mist systems.",
    points: ["Weekly & quarterly testing", "Pump and tank inspection", "Water mist systems", "Remedials"],
  },
  {
    id: "electrical",
    icon: p("/faelsafe/svc-electrical.png"),
    title: "Electrical Services",
    standard: "BS 7671 18th Edition · NICEIC",
    body: "Commercial and industrial installation, fixed wire testing, EICRs, PAT testing and remedial work — from a single distribution board to a full site rewire.",
    points: ["Fixed wire testing", "EICRs", "Installation & rewires", "PAT testing"],
  },
  {
    id: "security",
    icon: p("/faelsafe/svc-security.png"),
    title: "Electronic Security",
    standard: "Monitored & maintained",
    body: "CCTV and visual surveillance, intruder and hold-up alarms, access control and door entry — designed, installed and maintained by the same engineers.",
    points: ["CCTV & surveillance", "Intruder alarms", "Hold-up alarms", "Access control"],
  },
];

const sectors = [
  "Schools & academies",
  "Care homes",
  "Hospital trusts",
  "Local authorities",
  "High-rise residential",
  "Warehouses & industrial",
  "Retail",
  "Business parks",
];

const team = [
  { name: "Andrew Hutchison", role: "Company Director" },
  { name: "Chris Duncan", role: "Engineering Manager" },
  { name: "Liam Green", role: "Project Manager" },
  { name: "Emma Allsop", role: "Finance & Admin" },
  { name: "Jack Hippey", role: "Fire & Security Systems Engineer" },
  { name: "Elliot Williamson", role: "Fire & Security Systems Engineer" },
];

const reasons = [
  {
    title: "Accredited, not just insured",
    body: "BAFE for fire, NICEIC for electrical, TrustMark for the trade. On a compliance job these are the difference between a certificate that stands up and one that doesn't.",
  },
  {
    title: "One contractor, four disciplines",
    body: "Fire, sprinklers, electrical and security under one roof. One number to call, one set of paperwork, one engineer who already knows your building.",
  },
  {
    title: "24 hours, genuinely",
    body: "A fire alarm fault at 3am is not a next-working-day problem. Our emergency line is answered around the clock, every day of the year.",
  },
  {
    title: "Yorkshire based since 2012",
    body: "Based in Morley, working across Leeds, Bradford, Wakefield and beyond. Fifteen people, most of whom you'll meet more than once.",
  },
];

export default function RedesignDemo() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Banner back to the pitch site — not part of the design itself */}
      <div className="bg-brand-charcoal text-white text-center text-xs md:text-sm py-2.5 px-5">
        <span className="text-white/70">
          A demonstration rebuild of the Faelsafe homepage.
        </span>{" "}
        <a href={p("/website")} className="text-accent hover:underline underline-offset-2 font-semibold">
          ← Back to the review
        </a>
      </div>

      {/* Header */}
      <header className="bg-card border-b border-rule sticky top-0 z-50">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-3 flex items-center justify-between gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p("/faelsafe/logo.png")}
            alt="Faelsafe Life Safety Ltd"
            className="h-11 md:h-14 w-auto"
          />

          <div className="flex items-center gap-6">
            <nav className="hidden lg:flex items-center gap-6" aria-label="Primary">
              {[
                { label: "Fire Safety", href: "#fire-safety" },
                { label: "Sprinklers", href: "#sprinklers" },
                { label: "Electrical", href: "#electrical" },
                { label: "Security", href: "#security" },
                { label: "Our Team", href: "#team" },
                { label: "Get a quote", href: "#quote" },
              ].map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="text-sm font-medium text-ink hover:text-accent transition-colors"
                >
                  {n.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col items-end leading-tight">
              <span className="eyebrow text-ink-muted hidden sm:block">
                24 hour emergency
              </span>
              <a
                href={PHONE_HREF}
                className="font-display text-lg md:text-2xl text-accent tnum tracking-tight"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero — one H1, the offer, the proof, the action */}
        <section className="relative bg-brand-charcoal text-white overflow-hidden">
          <div className="absolute inset-0 pointer-events-none dark-grid" aria-hidden />
          <div className="relative max-w-[1240px] mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] items-start">
              <div>
                <p className="eyebrow text-accent mb-6">
                  Leeds · Bradford · Wakefield · Yorkshire
                </p>

                <h1 className="font-display text-[clamp(28px,4vw,52px)] text-white leading-[1.08] mb-6">
                  Fire, electrical and security compliance for Yorkshire buildings
                </h1>

                <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-[56ch] mb-8">
                  BAFE and NICEIC accredited engineers keeping schools, care homes,
                  hospital trusts and high-rise blocks compliant, certificated and
                  safe — with a 24-hour emergency line that a person answers.
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  <a
                    href="#quote"
                    className="eyebrow bg-accent hover:bg-accent-hover text-white px-6 py-4 rounded-[2px] transition-colors"
                  >
                    Get a quote — we reply same day
                  </a>
                  <a
                    href={PHONE_HREF}
                    className="eyebrow text-white border border-white/40 hover:border-accent hover:text-accent px-6 py-4 rounded-[2px] transition-colors tnum"
                  >
                    ☎ {PHONE_DISPLAY}
                  </a>
                </div>

                {/* Accreditations — above the fold, where they belong */}
                <div className="border-t border-white/20 pt-7">
                  <p className="eyebrow text-white/60 mb-4">
                    Accredited and independently assessed
                  </p>
                  <div className="flex flex-wrap items-center gap-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p("/faelsafe/niceic.png")}
                      alt="NICEIC Approved Contractor"
                      className="h-14 w-auto bg-white p-1.5 rounded-[2px]"
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p("/faelsafe/trustmark.png")}
                      alt="TrustMark Government Endorsed Quality"
                      className="h-14 w-auto bg-white p-1.5 rounded-[2px]"
                    />
                    <div className="border border-white/30 rounded-[2px] px-4 py-3">
                      <div className="font-display text-xl text-white">BAFE</div>
                      <div className="eyebrow text-white/60 mt-1">Fire safety register</div>
                    </div>
                    <div className="border-l-2 border-accent pl-4">
                      <div className="font-display text-xl text-white tnum">2012</div>
                      <div className="eyebrow text-white/60 mt-1">Trading since</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote form — genuinely works, see QuoteForm.tsx */}
              <div id="quote" className="scroll-mt-24">
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>

        {/* Sector strip */}
        <section className="bg-accent text-white py-5">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 flex flex-wrap items-center gap-x-6 gap-y-2 justify-center">
            <span className="eyebrow text-white/80">Working across</span>
            {sectors.map((s) => (
              <span key={s} className="text-sm font-medium">
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-paper py-20 md:py-24 scroll-mt-24">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <p className="eyebrow text-ink-muted mb-4">What we do</p>
            <h2 className="font-display text-[clamp(24px,3vw,38px)] text-ink leading-tight mb-4 orange-rule max-w-[22ch]">
              Four disciplines, one contractor, one set of paperwork
            </h2>
            <p className="text-lg text-ink-secondary max-w-[64ch] leading-relaxed mb-12 mt-8">
              Most buildings need all four of these and end up with three different
              contractors, three renewal dates and three people blaming each other.
              We do the lot, and the certificates match.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {services.map((s) => (
                <article
                  key={s.title}
                  id={s.id}
                  className="bg-card border border-rule rounded-[2px] p-7 flex gap-5 hover:border-accent transition-colors scroll-mt-28"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-brand-charcoal rounded-[2px] grid place-items-center overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.icon} alt="" className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-display text-[21px] text-ink leading-tight mb-1.5">
                      {s.title}
                    </h3>
                    <p className="eyebrow text-accent mb-3">{s.standard}</p>
                    <p className="text-sm text-ink-secondary leading-relaxed mb-4">
                      {s.body}
                    </p>
                    <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
                      {s.points.map((p) => (
                        <li key={p} className="text-xs text-ink-muted border-l border-rule-strong pl-2">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="bg-paper-raised border-y border-rule py-20 md:py-24">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <p className="eyebrow text-ink-muted mb-4">Why Faelsafe</p>
            <h2 className="font-display text-[clamp(24px,3vw,38px)] text-ink leading-tight mb-12 orange-rule max-w-[22ch]">
              Four reasons facilities managers stay with us
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {reasons.map((r) => (
                <div key={r.title} className="border-t-2 border-accent pt-5">
                  <h3 className="font-display text-[18px] text-ink leading-tight mb-3">
                    {r.title}
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The team — out of the slideshow, into readable text */}
        <section id="team" className="bg-paper py-20 md:py-24 scroll-mt-24">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8">
            <p className="eyebrow text-ink-muted mb-4">Who you&apos;ll actually deal with</p>
            <h2 className="font-display text-[clamp(24px,3vw,38px)] text-ink leading-tight mb-4 orange-rule max-w-[22ch]">
              Fifteen people, based in Morley
            </h2>
            <p className="text-lg text-ink-secondary max-w-[64ch] leading-relaxed mb-12 mt-8">
              Not a call centre and not a franchise. The same engineers come back to
              the same buildings, which is why they know where your riser is without
              being told.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((t) => (
                <div
                  key={t.name}
                  className="bg-card border border-rule rounded-[2px] p-5 flex items-center gap-4"
                >
                  <div className="w-12 h-12 flex-shrink-0 bg-brand-charcoal text-white rounded-full grid place-items-center font-display text-base">
                    {t.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-ink">{t.name}</div>
                    <div className="text-sm text-ink-secondary">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-ink-muted mt-6">
              …and nine more, including our apprentices and trainee electricians. On
              the real site each of these would carry a photograph — you already have
              them, they&apos;re just currently trapped inside a slideshow.
            </p>
          </div>
        </section>

        {/* Emergency band */}
        <section className="bg-brand-charcoal text-white py-16">
          <div className="max-w-[1240px] mx-auto px-5 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="eyebrow text-accent mb-3">Something failed out of hours?</p>
              <h2 className="font-display text-[clamp(22px,2.6vw,34px)] text-white leading-tight max-w-[20ch]">
                Our emergency line is answered 24 hours a day
              </h2>
            </div>
            <a
              href={PHONE_HREF}
              className="font-display text-3xl md:text-4xl text-accent hover:text-white transition-colors tnum whitespace-nowrap"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-paper-raised border-t border-rule py-14">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p("/faelsafe/logo.png")}
                alt="Faelsafe Life Safety Ltd"
                className="h-12 w-auto mb-5"
              />
              <p className="font-display text-accent text-lg mb-4">
                Don&apos;t Fael To Be Safe
              </p>
              <p className="text-sm text-ink-secondary leading-relaxed">
                Faelsafe Life Safety Ltd — fire safety, sprinkler maintenance,
                electrical and electronic security specialists. Registered in England
                and Wales, company no. 8022187.
              </p>
            </div>

            <div>
              <h3 className="eyebrow text-ink-muted mb-4">Find us</h3>
              <address className="not-italic text-sm text-ink-secondary leading-relaxed">
                Unit 5, Asquith Avenue Business Park
                <br />
                Morley, Leeds
                <br />
                LS27 7RZ
              </address>
            </div>

            <div>
              <h3 className="eyebrow text-ink-muted mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href={PHONE_HREF} className="fs-link font-semibold tnum">
                    {PHONE_DISPLAY}
                  </a>
                  <span className="text-ink-muted"> · 24 hours</span>
                </li>
                <li>
                  <a href={`mailto:${EMAIL}`} className="fs-link">
                    {EMAIL}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-rule flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <p className="text-xs text-ink-muted">
              Demonstration rebuild — not the live faelsafe.co.uk.
            </p>
            <a href={p("/website")} className="text-xs fs-link font-semibold">
              ← Back to the website review
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
