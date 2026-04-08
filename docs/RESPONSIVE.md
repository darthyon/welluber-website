## Responsive guardrails — Welluber marketing

### Section inventory

- **Navbar** (`Navbar.tsx`): Sticky header with centered content row, `max-w-[1200px]` and `px-12`.
- **Hero** (`HeroSection.tsx`): Two-column grid `grid-cols-[44fr_56fr]` with fixed 62px display size and `max-w-[1200px] px-12 py-24`.
- **Stats marquee** (`StatsMarquee.tsx`): Horizontal content band between hero and network.
- **Network** (`NetworkSection.tsx`): Centered beam diagram with fixed `h-[460px]`, `max-w-[900px]`, and four absolutely positioned nodes.
- **How it works** (`HowItWorksSection.tsx`): Two-column layout with text + wireframe panel.
- **Features** (`FeaturesSection.tsx`): Custom CSS grid bento with `gridTemplateColumns: 1fr 1fr 1fr` and `gridTemplateRows: '320px 320px 320px'`.
- **Audience** (`AudienceSection.tsx`): Tabs + content grid `grid-cols-[55fr_45fr]` and `gap-16`.
- **FAQ** (`FAQSection.tsx`): Narrow column (`max-w-[720px] px-6`), accordion groups.
- **CTA band** (`CTASection.tsx`): Two-column grid `grid-cols-[60fr_40fr]` with copy left, cards right.
- **Footer** (`Footer.tsx`): Four-column grid `grid-cols-[2fr_1fr_1fr_1fr]` with brand block + three link columns.

### Layout principles

- **Desktop is the source of truth**: Existing spacing, hierarchy, and composition from `DESIGN_WELLUBER_LANDING.md` are preserved at `lg`+ breakpoints.
- **Narrative order never changes**: Mobile and tablet may stack or wrap, but section order and within-section reading order stay consistent with desktop.
- **Single container system**: All sections use a shared container with `max-w-[1200px]`, auto margins, and responsive horizontal padding (`px-4` mobile, `px-6` tablet, `px-8`+ desktop).
- **Breakpoint targets**:
  - `sm` (640px): Small phones — everything can stack into a single column.
  - `md` (768px): Tablets portrait — two-column patterns may start to appear.
  - `lg` (1024px): Desktop baseline — matches current design intent.
  - `xl` (1280px): Larger desktop — content remains centered with max-width.
- **Typography scaling**:
  - Hero display: `text-4xl` mobile → `text-5xl` md → custom `[62px]` desktop.
  - Section titles: `text-2xl` mobile → `text-3xl` md → `[40px]` desktop.
  - Body text: `text-base` by default; avoid dropping below `text-sm` except for overlines and meta.
- **Stacking rules**:
  - Two-column sections (hero, network intro, audience, CTA) become **single column with copy first, visual second** below `md`.
  - Complex bento grids fall back to a simple one-column stack below `md`, preserving card order that best matches the narrative.

### Known responsive risks (current desktop-first state)

- **Fixed container paddings**: Many sections use `px-12` which feels cramped on small phones; to be normalized via shared container.
- **Custom grid templates**:
  - Hero `grid-cols-[44fr_56fr]` may cause text or visuals to compress on narrow widths.
  - Audience `grid-cols-[55fr_45fr]` and large `gap-16` can overflow on smaller tablet widths.
  - Features bento grid with fixed `320px` rows and `1fr 1fr 1fr` columns will overflow or produce tiny cards on mobile.
  - Footer `grid-cols-[2fr_1fr_1fr_1fr]` is too dense for small screens and needs to stack.
- **Fixed heights and absolute positioning**:
  - Network section uses `h-[460px]` and absolute nodes; must be relaxed or adapted on mobile to avoid clipping.
  - Hero floating cards (`absolute -bottom-4 -left-8`, `-right-8 -top-4`) can clip on small screens without breakpoint adjustments.

### Manual QA checklist (per breakpoint)

For each major breakpoint (`sm`, `md`, `lg`) plus one smaller width (320–360px), verify:

- **Core layout**
  - No horizontal scrolling on `body` at any scroll position.
  - Section backgrounds transition cleanly (white vs `#F9FAFB` vs dark bands).
  - Content stays within the main container; no cards or floating elements are visibly cut off.
- **Typography & hierarchy**
  - Hero H1 is readable within 2–3 lines on mobile and still dominates the fold.
  - Section overlines, H2s, and body copy follow the scale and spacing from `DESIGN_WELLUBER_LANDING.md`.
  - Line length for body text ≈ 45–75 characters; no ultra-wide paragraphs on tablet/desktop.
- **Navigation & CTAs**
  - Navbar remains usable and legible; links visible at `md`+ and CTA button remains tappable at all sizes.
  - Primary CTAs (“Talk to Us”, “See how it works”) are clearly visible and not pushed far below the fold on mobile.
  - Anchor links (e.g. `#how-it-works`, `#audience-hr`) scroll to visible section headings without being hidden behind the sticky header.
- **Interactive components**
  - Audience tabs: tab row scrolls or wraps gracefully on smaller widths; tab content doesn’t overflow horizontally.
  - FAQ accordions: triggers and content are readable; hit areas are large enough for touch.
  - Network diagram: nodes and beams remain visible; no key labels are clipped.
- **Media & cards**
  - Hero Safari frame and dashboard screenshot scale down without letterboxing or distortion.
  - Bento cards (features) remain legible; overlines and titles aren’t truncated; visuals remain recognisable.
  - CTA band cards stay within the dark section and don’t extend beyond edges.
- **Performance & motion**
  - On slow network/mobile, above-the-fold content (hero copy + primary CTA) appears quickly, even if heavier visuals lag.
  - With `prefers-reduced-motion` enabled, page remains usable and doesn’t feel broken without animations.

