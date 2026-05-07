# DESIGN.md — WellUber Landing Page
**Version:** 2.0 | **Date:** April 2026 | **Status:** Locked

---

## Personality

**Is:** Warm authority. Structured but human. Precise spacing, earned confidence.
**Not:** Startup-generic, purple-gradient-soup, cold fintech, enterprise-grey, decorative, playful.

The buyer is an HR decision-maker. Trust is built through restraint and precision — not enthusiasm.

---

## Color

```
Background:       #FFFFFF
Surface:          #F9FAFB
Surface deep:     #F3F4F6
Border:           #E5E7EB
Border hover:     #D1D5DB

Primary:          #4F46E5
Primary dark:     #4338CA
Primary faint:    #EEF2FF
Primary mid:      #C7D2FE

Text primary:     #111827
Text muted:       #6B7280
Text hint:        #9CA3AF

Success:          #10B981
Warning:          #F59E0B
Error:            #EF4444

Dark bg:          #111827
Dark surface:     #1E1B2E
Dark border:      #374151
Dark muted:       #9CA3B8
```

**Rules:**
- Indigo is structural, not decorative. Use for: CTA buttons, active states, badge accents, icon wells, section labels.
- No indigo gradients. No indigo section backgrounds.
- Dark sections: footer (`#111827`) and CTA band (`#1E1B2E`). Everything else: white or `#F9FAFB`.
- Floating UI cards (hero breakout elements): white bg, `1px #E5E7EB` border, 12px radius, lift shadow.

---

## Typography

**Display / Headlines:** Bricolage Grotesque
- Load via `next/font/google`
- Used for: H1 hero, H2 section titles, audience tab titles, CTA band headline
- Weights: 600 (section titles), 700 (hero H1, CTA band)
- Letter spacing: -1.5px at 56px+, -0.8px at 36–42px

**Body / UI:** Inter
- Used for: all body copy, nav, buttons, badges, labels, footer, card content
- Weights: 400 (body), 500 (nav links, labels, step numbers), 600 (card titles, strong labels)

**Scale:**
```
Display:    56–64px / line-height 1.05 / weight 700 / tracking -1.5px   (hero H1 only)
H2:         38–42px / line-height 1.15 / weight 700 / tracking -0.8px   (section titles)
H3:         20–22px / line-height 1.3  / weight 700 / tracking -0.4px   (tab titles — Bricolage)
H4:         16px    / line-height 1.4  / weight 600                      (card titles — Inter)
Body:       17px    / line-height 1.65 / weight 400                      (hero subtext)
Body sm:    15px    / line-height 1.6  / weight 400                      (descriptions)
Label:      14px    / line-height 1.5  / weight 500                      (nav, tabs, tags)
Caption:    13px    / line-height 1.5  / weight 400                      (footer, meta)
Overline:   12px    / line-height 1    / weight 600 / tracking 0.08em / uppercase
```

---

## Spacing

4px base grid.

```
Section vertical padding:     96px (desktop) / 64px (mobile)
Container max-width:          1200px, centered
Container horizontal pad:     48px (desktop) / 24px (mobile)
Bento card padding:           28–32px
Bento card gap:               16px
How it works step gap:        48px between steps
Nav height:                   60px
Button padding:               10px 24px (primary) / 10px 20px (ghost)
Section label → title gap:    12px
Title → subtitle gap:         16px
Subtitle → CTA gap:           36px
Floating card breakout:       -24px from frame edge
```

---

## Section Map (locked)

### 1. Navbar
Sticky, blur backdrop. Logo left / links center / CTA right.
Logo: "Well" `#111827` + "uber™" `#4F46E5`, Bricolage 700.
`position: sticky; top: 0; background: rgba(255,255,255,0.92); backdrop-filter: blur(12px); border-bottom: 1px solid #E5E7EB`

### 2. Hero
**Layout:** Asymmetric 2-col. Left 52%: badge + H1 + subtext + 2 CTAs. Right 48%: wireframe frame with 2 floating breakout cards.

**No badge above headline** — hero starts cold. Badge is small pill, single pre-headline element only.

**Wireframe frame:**
- Browser chrome: dark bar `#1E1B2E`, 3 traffic-light dots, no URL
- Frame: 14px radius, `box-shadow: 0 24px 64px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06)`
- Content: sidebar dark `#1E1B2E` + main white, KPI cards + bar chart
- Indigo inside frame only: active nav pill + chart bars (`#C7D2FE` / `#4338CA`)

**2 floating breakout cards** — break frame boundary by ~24px:
- Bottom-left: "Latest Payout · RM 45,200" — white, 12px radius, lift shadow
- Top-right: "Active Members · 128,492 · ↑ 1.2%" — same treatment
- These overlap the frame edge. They feel discovered, not placed.

### 3. How It Works
**Layout:** 2-col. Left 55%: section label + H2 + 3 stacked steps. Right 45%: static dashboard wireframe panel (ambient context, not interactive).

- Steps divided by `1px #E5E7EB` horizontal rules — no numbered circles
- Step number: Inter 500 12px `#9CA3AF`, zero-padded ("01" "02" "03"), left of title
- Active step: title `#111827` + description visible. Inactive: title `#6B7280`, description collapsed (JS toggle on click)
- Right panel: smaller version of hero wireframe SVG, static
- Section bg: `#F9FAFB`

### 4. Features — Bento Grid
**NOT a uniform 3-col grid.** Asymmetric bento using CSS Grid named areas:

```
"large  tall"    ← row 1: large=2/3, tall=1/3 spanning rows 1+2
"a      tall"    ← row 2: a=1/3, tall continues
"b      c   "    ← row 3: b=1/2, c=1/2
```

Each card: **unique SVG UI fragment** in upper portion (~160px tall area), then overline + H4 title + 2-line description below.

Fragment per card (wireframe style, 3–5 elements max):
- Policy engine → policy rule table fragment
- Wallet → balance display + spend bar
- Settlement → ledger rows + "Trigger Payout" button
- Analytics → mini bar chart (matches hero style)
- Multi-org → org list with status badges
- Compliance → checklist UI

Card: white bg, `1px #E5E7EB` border, 12px radius.
Hover: border → `#4F46E5`, `translateY(-2px)`, `box-shadow: 0 8px 24px rgba(79,70,229,0.08)`, 150ms ease.
The large + tall cards carry more visual weight — larger fragments, more internal whitespace.

Section bg: `#FFFFFF`.

### 5. Built for Everyone — Tab Switcher
**NOT 3 static cards.** One section, 3 perspectives via tab switcher.

Tab row: [HR Admin] [Employees] [Service Providers]
- Active: Inter 600 `#111827`, `border-bottom: 2px solid #4F46E5`
- Inactive: Inter 500 `#6B7280`, `border-bottom: 2px solid transparent`
- No tab background fill. Pure text + underline treatment.

Content area: 2-col.
- Left 55%: H3 title (Bricolage 700) + body (Inter 400 15px) + 3 bullet points (Phosphor CheckCircle 16px `#4F46E5`)
- Right 45%: wireframe fragment per tab (policy screen / wallet screen / SP portal)

Tab switch: opacity fade 150ms ease. No slide, no bounce.
Section bg: `#FFFFFF`.

### 6. CTA Band
**NOT centered.** Left-heavy layout.

- Left 60%: overline (`#C7D2FE` on dark bg) + H2 (Bricolage 700, white) + subtext (`#9CA3B8`) + "Talk to Us" button
- Right 40%: 2 stacked floating UI cards (same style as hero breakout, smaller). One: "Policy Active" status. One: a utilisation metric. Decorative but product-grounded.
- Bg: `#1E1B2E`
- Button: solid `#4F46E5`, white text, 8px radius

### 7. Footer
- Bg: `#111827`, `border-top: 1px solid #1F2937`
- 4-col: logo + tagline / Product / Company / Legal
- Links: Inter 400 14px `#6B7280`, hover `#D1D5DB`
- Copyright: Inter 400 13px `#4B5563`

---

## SVG Wireframe System

Shared visual language across all wireframe elements (hero frame, how-it-works panel, bento fragments, tab panels, CTA cards):

```
Inner bg:           #FFFFFF
Section fills:      #F9FAFB
Strokes / borders:  #E5E7EB
Empty fills:        #F3F4F6
Text line sims:     #E5E7EB (varying widths)
Active / brand:     #4F46E5 (nav pill, buttons inside frame)
Chart light:        #C7D2FE
Chart dark:         #4338CA
Success dots:       #10B981
Frame text:         #9CA3AF (readable labels)
Sidebar bg:         #1E1B2E
```

All fragments: minimal. 3–5 UI elements per bento card fragment. Suggest, don't explain.

---

## Motion

Nothing loops. Nothing auto-plays.

```
Nav blur:               CSS backdrop-filter on scroll, immediate
Hero H1:                words fade + slide up 12px, staggered 40ms/word, on mount
Hero floating cards:    fade in, 200ms delay after H1 completes
Section reveals:        fade + translateY(16px→0), IntersectionObserver threshold 0.15
Bento cards:            staggered 60ms per cell, reading order
Tab switch:             opacity 0→1, 150ms ease
Step toggle:            height + opacity, 200ms ease
Card hover:             border-color + translateY(-2px) + shadow, 150ms ease
Button hover:           background darken, 150ms ease
Button press:           scale(0.98), 100ms ease
```

`prefers-reduced-motion`: all transforms disabled, opacity-only fallback.

---

## Iconography

- **Library:** Lucide React
- **Style:** Outline, 20px (nav/body), 18px (bento cards), 16px (bullet checks)
- No filled icons. No illustrations. No stock photos. No emoji. No people.
- Check icons in audience bullets: Phosphor `CheckCircle` 16px `#4F46E5`

---

## Copy (locked)

**Hero badge:** "Corporate Wellness · Malaysia"
**H1:** "Benefits your employees actually use."
**Subtext:** "One platform for HR teams to set policies, employees to spend, and service providers to get paid."
**CTA primary:** "Talk to Us"
**CTA secondary:** "See how it works →"

**How it works H2:** "From setup to settled — in weeks."
**Steps:**
- 01 · HR sets the policy · Define budgets, eligibility, and categories in minutes.
- 02 · Employees spend · Browse providers, redeem vouchers, or walk in anywhere.
- 03 · SPs get paid · Automated settlements, no chasing, no paperwork.

**Features overline:** "PLATFORM"
**Features H2:** "Everything in one place. Finally."
**Features sub:** "No spreadsheets. No manual claims. No reconciliation headaches."

**Feature card labels + titles:**
- POLICY · Benefit policy engine
- WALLET · Digital vouchers & wallet
- SETTLEMENT · Automated settlements
- ANALYTICS · Real-time analytics
- MULTI-ORG · Multi-org management
- COMPLIANCE · Built-in compliance

**Audience overline:** "BUILT FOR"
**Audience H2:** "One platform. Three stakeholders."
**Tabs:** HR Admin / Employees / Service Providers

**HR Admin:** "Total control, zero spreadsheets." · Set policies, assign budgets, and track utilisation across your entire workforce — without touching a single receipt. · Instant policy deployment / Real-time budget tracking / Automated tax reporting

**Employees:** "Benefits you'll actually spend." · Browse hundreds of verified wellness providers, pay with your corporate wallet, and redeem in-app or walk in anywhere. · Seamless mobile wallet / Zero out-of-pocket surprises / Access to premium providers

**Service Providers:** "Grow your business. Get paid on time." · Join a network of corporate clients and get guaranteed, automated payments — no more chasing invoices. · Instant transaction settlements / Automated invoicing / Direct corporate client access

**CTA overline:** "READY TO INVEST IN YOUR PEOPLE?"
**CTA H2:** "Your people deserve better benefits."
**CTA sub:** "Join forward-thinking Malaysian companies using WellUber to close the gap between policy and reality."
**CTA button:** "Talk to Us"

---

## Stack

```
Framework:      Next.js 14+ (App Router)
Language:       TypeScript
Styling:        Tailwind CSS v3
Components:     shadcn/ui + custom
Animation:      Framer Motion
Icons:          Lucide React
Fonts:          next/font/google — Bricolage_Grotesque (700, 600) + Inter (400, 500, 600)
Route:          app/(marketing)/page.tsx
Layout:         app/(marketing)/layout.tsx
```

**Engineering flags:**
- [ ] `(marketing)` route group — separate layout from `(portal)`. No sidebar or topbar inherited.
- [ ] `framer-motion` installed before any animated component is scaffolded
- [ ] Bricolage Grotesque loaded in marketing layout only — not in root layout
- [ ] `prefers-reduced-motion` in `globals.css` — disables all Framer Motion transforms
- [ ] `NEXT_PUBLIC_CONTACT_URL` env var for all "Talk to Us" CTAs
- [ ] Bento grid: CSS Grid with named template areas — not flexbox, not a component library grid
- [ ] Tab switcher: `useState` in React — no URL params, no router push
- [ ] All wireframe SVGs built as React components in `components/wireframes/` — not inline in page files

---

## Anti-patterns (zero tolerance)

- No indigo gradients
- No centered hero — asymmetric always
- No uniform 3-col card grids — bento only, unequal sizing
- No stock photos, no people, no illustrations, no emoji
- No lorem ipsum — locked copy above is the only copy
- No pill buttons — 8px radius only
- No decorative shadows — functional only
- No looping or auto-play animations
- No Inter at H1/H2/H3 sizes — Bricolage only for display
- No numbered circles for steps — zero-padded text labels only
- No left-border accent cards — tab switcher pattern for audience section
- No centered CTA band — left-heavy always
- No icon-in-a-circle — square wells (10px radius) or no container
- No 3 static audience cards — tab switcher only
