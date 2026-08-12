/**
 * Shared site chrome for the "Vibe Coding for Faelsafe" pitch site.
 *
 * Styled to match faelsafe.co.uk: white top bar with the Faelsafe logo and the
 * 24/7 number, a hot-orange navigation strip, a grey breadcrumb bar on subpages,
 * and a charcoal footer. Roboto body, neuropolitical display, flat 1px rules.
 *
 * The logo, service icons, accreditation badges and display font are Faelsafe's
 * own assets, reproduced here for a demonstration built for Faelsafe.
 */

import MobileNavMenu from "./MobileNavMenu";
import { p } from "./../lib/paths";

/** Faint rule grid behind light heroes. */
export function GlowField() {
  return <div className="absolute inset-0 pointer-events-none paper-grid" aria-hidden />;
}

/** Faint rule grid behind charcoal heroes. */
export function DarkField() {
  return <div className="absolute inset-0 pointer-events-none dark-grid" aria-hidden />;
}

/** Plain-type wordmark used in the footer and mobile menu. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`eyebrow ${className}`} style={{ letterSpacing: "0.09em" }}>
      Faelsafe × Vibe Coding
    </span>
  );
}

export const PHONE_DISPLAY = "0333 666 999 5";
export const PHONE_HREF = "tel:+443336669995";
export const EMAIL = "jobwatch@faelsafe.co.uk";

export type ActivePage =
  | "home"
  | "vibe-coding"
  | "opportunities"
  | "website"
  | "demo";

type NavLink = { href: string; label: string; page: ActivePage; highlight?: boolean };

export const NAV_LINKS: NavLink[] = [
  { href: p("/"), label: "Home", page: "home" },
  { href: p("/vibe-coding"), label: "What vibe coding is", page: "vibe-coding" },
  { href: p("/opportunities"), label: "10 ideas for Faelsafe", page: "opportunities" },
  { href: p("/website"), label: "Your website", page: "website" },
  { href: p("/website/demo"), label: "See the redesign", page: "demo", highlight: true },
];

export type Crumb = { label: string; href?: string };

/** White top bar: Faelsafe logo + the 24/7 emergency line. */
function TopBar() {
  return (
    <div className="bg-card border-b border-rule">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-3 flex items-center justify-between gap-4">
        <a href={p("/")} className="flex-shrink-0" aria-label="Faelsafe — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p("/faelsafe/logo.png")}
            alt="Faelsafe Life Safety"
            className="h-10 md:h-12 w-auto"
          />
        </a>

        <div className="hidden sm:flex flex-col items-end leading-tight">
          <span className="eyebrow text-ink-muted">24 hour emergency line</span>
          <a
            href={PHONE_HREF}
            className="font-display text-xl md:text-2xl text-ink hover:text-accent transition-colors tnum tracking-tight"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </div>
  );
}

/** Orange navigation strip with white links; the redesign is highlighted. */
function NavStrip({ activePage }: { activePage: ActivePage }) {
  return (
    <nav className="bg-accent text-white" aria-label="Primary">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 flex items-center justify-between">
        <ul className="hidden md:flex items-stretch">
          {NAV_LINKS.map((l) => {
            const isActive = l.page === activePage;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center h-12 px-4 text-sm font-semibold border-b-[3px] transition-colors ${
                    l.highlight
                      ? "bg-white text-accent-ink border-brand-charcoal hover:bg-brand-charcoal hover:text-white hover:border-white"
                      : isActive
                        ? "text-white border-white"
                        : "text-white/90 border-transparent hover:bg-accent-hover hover:text-white"
                  }`}
                >
                  {l.highlight && <span aria-hidden className="mr-1.5">★</span>}
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        <MobileNavMenu activePage={activePage} />
      </div>
    </nav>
  );
}

/** Grey breadcrumb bar for subpages. */
function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <div className="bg-paper-raised border-b border-rule">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-2.5">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink-muted">
            {crumbs.map((c, i) => {
              const last = i === crumbs.length - 1;
              return (
                <li key={i} className="flex items-center gap-x-2">
                  {c.href && !last ? (
                    <a href={c.href} className="fs-link">
                      {c.label}
                    </a>
                  ) : (
                    <span className={last ? "text-ink-secondary font-semibold" : ""}>
                      {c.label}
                    </span>
                  )}
                  {!last && (
                    <span aria-hidden className="text-ink-muted">
                      ›
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}

export function SiteNav({
  activePage,
  breadcrumb,
}: {
  activePage: ActivePage;
  breadcrumb?: Crumb[];
}) {
  return (
    <header className="sticky top-0 z-50">
      <TopBar />
      <NavStrip activePage={activePage} />
      {breadcrumb && breadcrumb.length > 0 && <Breadcrumbs crumbs={breadcrumb} />}
    </header>
  );
}

export function SiteFooter() {
  const columns: { heading: string; links: { href: string; label: string }[] }[] = [
    {
      heading: "The session",
      links: [
        { href: p("/"), label: "Home" },
        { href: p("/vibe-coding"), label: "What vibe coding is" },
        { href: p("/opportunities"), label: "10 ideas for Faelsafe" },
      ],
    },
    {
      heading: "Your website",
      links: [
        { href: p("/website"), label: "The honest review" },
        { href: p("/website/demo"), label: "The redesign" },
      ],
    },
    {
      heading: "The promise",
      links: [
        { href: p("/opportunities"), label: "Pick one — we build it" },
        { href: p("/vibe-coding#cost"), label: "You own what we build" },
      ],
    },
  ];

  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <Wordmark className="text-white mb-4 inline-block" />
            <p className="text-white/80 text-sm leading-relaxed">
              A working demonstration built for{" "}
              <strong className="text-white font-semibold">
                Faelsafe Life Safety Ltd
              </strong>
              . Every page you are looking at was built the way this document
              describes — in an afternoon, by describing it in plain English.
            </p>
            <p className="font-display text-accent text-lg mt-6">
              Don&apos;t Fael To Be Safe
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="eyebrow text-white/60 mb-4">{col.heading}</h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-white/90 hover:text-accent hover:underline underline-offset-2"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/20 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-white/60 text-xs leading-relaxed max-w-2xl">
            A demonstration site — not faelsafe.co.uk. Faelsafe Life Safety Ltd,
            company no. 8022187, Unit 5 Asquith Avenue Business Park, Morley,
            Leeds LS27 7RZ.
          </p>
          <p className="text-white/60 text-xs tnum whitespace-nowrap">
            {PHONE_DISPLAY} · {EMAIL}
          </p>
        </div>
      </div>
    </footer>
  );
}
