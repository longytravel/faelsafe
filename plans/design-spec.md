# Faelsafe × Vibe Coding — Visual Design Specification

The brief was a pixel-faithful rip of faelsafe.co.uk. Everything below was extracted
from their live site rather than invented, so the pitch site reads as *theirs* the
moment it loads.

## 1. Palette

Tokens are declared in `app/globals.css` inside Tailwind v4's `@theme` block and used
as `bg-accent`, `text-ink`, `border-rule` etc.

| Token | Hex | Source and use |
|---|---:|---|
| `--color-accent` | `#f16b21` | **The Faelsafe orange**, lifted from their stylesheet. Nav strip, buttons, numerals, rules, every emphasis. |
| `--color-accent-hover` | `#d4551a` | Hover/pressed. A denser orange, never a different hue. |
| `--color-ink` | `#32373c` | **Their charcoal**, taken from their own button colour. Headings, primary text, dark section fills. |
| `--color-ink-secondary` | `#4a4f54` | Body copy. |
| `--color-ink-muted` | `#7c8288` | Eyebrows, metadata, labels. |
| `--color-paper` | `#ffffff` | Page background. |
| `--color-paper-raised` | `#f4f4f4` | Alternating panel sections. |
| `--color-card` | `#ffffff` | Cards and controls. |
| `--color-rule` | `#dcdcdc` | 1px hairlines. |
| `--color-rule-strong` | `#b4b4b4` | Emphasis borders. |
| `--color-danger` | `#e30613` | **Their red.** Reserved for critical findings on the review page. |
| `--color-success` | `#2b7a4b` | Verified / compliant / "why it's worth money". |

**One accent colour per component.** The orange has to stay loud, so it is never
diluted with a second bright hue. No gradients, no glass, no coloured shadows, no glow.

## 2. Typography

| Role | Family | Notes |
|---|---|---|
| Display | `Neuropolitical` → `Michroma` → `Roboto Condensed` | Faelsafe's own logo face, self-hosted by them at `/wp-content/uploads/2022/03/neuropolitical-rg.ttf` and copied into `public/faelsafe/`. Wide and squared-off. Verified to carry full upper, lower, digits and all punctuation used on this site. |
| Body | `Roboto` | Loaded via `next/font/google`, matching their site exactly. |
| Eyebrow | Roboto 11px/700, `0.08em`, uppercase | The `.eyebrow` class. Used for every label, category and small CTA. |

- Display is set at `font-weight: 400` with `letter-spacing: -0.01em` — the face is
  already wide, so tracking it out makes it fall apart.
- Headline sizes use `clamp()` throughout: hero `clamp(34px,5vw,64px)`, H1
  `clamp(24–30px,4.2vw,54px)`, H2 `clamp(24px,3vw,38px)`, card H3 `19–21px`.
- Numbers use `.tnum` (tabular lining figures) — phone number, stats, option numbers.
- Body copy is capped at `64ch`; headlines at `16–22ch`.

## 3. Layout

- Container `max-width: 1240px`, `padding-inline: 20px` mobile / `32px` desktop.
  Reading sections narrow to `820px`.
- Section rhythm: `80px` mobile / `96px` desktop between major sections, achieved with
  `py-20 md:py-24`. Alternate `--paper` and `--paper-raised`, separated by 1px rules.
- Cards: `padding: 28px`, `border: 1px solid var(--rule)`, `border-radius: 2px`, no
  shadow. Hover moves `border-color` to accent and translates `-1px` on Y only.
- Card grids: 3 columns ≥1024px, 2 ≥768px, 1 below.

## 4. Components

**Header** — a two-part rip of their own. White top bar carrying the real Faelsafe
logo and the 24-hour number in the display face, over a solid orange nav strip with
white links and a 3px active underline. The redesign link is inverted (white fill,
orange text) the way FCA's Phoenix Watch link was. Grey breadcrumb bar on subpages.

**Footer** — charcoal fill, four columns, closing on "Don't Fael To Be Safe" in orange
display type, with the registered company details as a colophon.

**Dark heroes** — every page opens on `--color-ink` charcoal with a near-invisible
white rule grid (`.dark-grid`, masked with a radial gradient). The light equivalent is
`.paper-grid`.

**`.orange-rule`** — a 56×3px orange bar dropped under section headings via `::after`.
This is the one piece of decoration on the site and it echoes the keylines on theirs.

## 5. What to avoid

- A second bright accent colour. Orange or charcoal, nothing else.
- Rounded pills, large corner radii, drop shadows, gradients, glassmorphism.
- Emoji, icon-led navigation, stock photography of firefighters.
- All-caps display headlines. The eyebrows carry the uppercase; headings are sentence case.
- Tracking out the display face, or setting it below ~18px where it stops being legible.

## 6. Asset provenance

`public/faelsafe/` contains the logo, four service images, the NICEIC and TrustMark
badges and the `neuropolitical` typeface — all downloaded from faelsafe.co.uk. They are
Faelsafe's own assets, reproduced in a demonstration built for Faelsafe. This is noted
in the header comment of `src/components/ui.tsx`. If this site is ever shown to anyone
outside Faelsafe, swap the badges for generic placeholders first.
