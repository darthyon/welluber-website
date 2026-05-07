# BRIEF_LANDING_PAGE.md — WellUber Landing Page
**For:** Claude Code  
**Version:** 1.0 | **Date:** April 2026  
**Status:** Ready to build

---

## Before you write a single line of code

1. Read `DESIGN.md` fully.
2. Recite back the last section ("Anti-patterns") — all items. This confirms you've read it.
3. Only then proceed.

DESIGN.md is the source of truth. This brief adds implementation detail. If anything conflicts, DESIGN.md wins.

---

## Confirmation gate

Before starting, confirm:
- [ ] DESIGN.md read and anti-patterns recited
- [ ] `public/logo.svg` exists
- [ ] Brand color is oklch(0.457 0.24 277.023) = `#4F46E5` (indigo-600)
- [ ] CTA destination is `mailto:contact@welluber.com`
- [ ] Icon library is Phosphor React — not Lucide, not heroicons

---

## Project context

WellUber is a B2B corporate wellness benefits platform for the Malaysian market. Multi-tenant SaaS. Three stakeholders: HR Admin (sets policy + budget), Employees (spend benefits), Service Providers (deliver services, receive payment).

This is the public marketing landing page. It lives at `app/(marketing)/page.tsx`. It must not inherit the portal layout (no sidebar, no topbar).

No clients yet. No real metrics. No testimonials. Strategy: show the network model as the proof — the three-way connection between stakeholders is the value proposition.

---

## Tech stack

```
Framework:      Next.js 14+ (App Router)
Language:       TypeScript
Styling:        Tailwind CSS v3
Components:     shadcn/ui
Animation:      Framer Motion
Icons:          Phosphor React (not Lucide)
Fonts:          next/font/google — Bricolage_Grotesque + Inter
```

---

## Setup — run these first

```bash
# Phosphor icons
npm install @phosphor-icons/react

# Magic UI components (install CLI, then add individually)
npx shadcn@latest add "https://magicui.design/r/animated-beam"
npx shadcn@latest add "https://magicui.design/r/bento-grid"
npx shadcn@latest add "https://magicui.design/r/blur-fade"
npx shadcn@latest add "https://magicui.design/r/number-ticker"
npx shadcn@latest add "https://magicui.design/r/text-animate"
npx shadcn@latest add "https://magicui.design/r/border-beam"
npx shadcn@latest add "https://magicui.design/r/safari"

# shadcn Accordion (for FAQ)
npx shadcn@latest add accordion
```

---

## Route structure

```
app/
  (marketing)/
    layout.tsx        ← marketing layout — NO sidebar, NO topbar
    page.tsx          ← landing page root
  (portal)/
    layout.tsx        ← existing portal layout, untouched

components/
  marketing/
    Navbar.tsx
    HeroSection.tsx
    NetworkSection.tsx
    HowItWorksSection.tsx
    FeaturesSection.tsx
    AudienceSection.tsx
    FAQSection.tsx
    CTASection.tsx
    Footer.tsx
  wireframes/
    DashboardWireframe.tsx    ← hero + how-it-works panel
    PolicyFragment.tsx        ← bento card visual
    WalletFragment.tsx
    SettlementFragment.tsx
    AnalyticsFragment.tsx
    OrgListFragment.tsx
    ComplianceFragment.tsx
    TabPanelHR.tsx            ← audience tab visuals
    TabPanelEmployee.tsx
    TabPanelSP.tsx
```

---

## Marketing layout

```tsx
// app/(marketing)/layout.tsx
import { Bricolage_Grotesque, Inter } from 'next/font/google'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-bricolage',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})

export default function MarketingLayout({ children }) {
  return (
    <div className={`${bricolage.variable} ${inter.variable}`}>
      {children}
    </div>
  )
}
```

---

## Color tokens

Add to `tailwind.config.ts` under `extend.colors`:

```ts
colors: {
  brand: {
    DEFAULT: '#4F46E5',   // oklch(0.457 0.24 277.023)
    dark:    '#4338CA',   // hover state
    faint:   '#EEF2FF',   // badge bg, icon wells
    mid:     '#C7D2FE',   // badge borders, dividers
    muted:   '#818CF8',   // on dark bg labels
  }
}
```

Add to `globals.css`:

```css
:root {
  --brand:       #4F46E5;
  --brand-dark:  #4338CA;
  --brand-faint: #EEF2FF;
  --brand-mid:   #C7D2FE;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Section 1 — Navbar

**Component:** `components/marketing/Navbar.tsx`

**Behaviour:**
- `position: sticky; top: 0; z-index: 50`
- `bg-white/90 backdrop-blur-md border-b border-gray-200`
- Height: 60px
- On scroll past 10px: border becomes visible (default hidden)

**Layout:** Logo left / links center / CTA right

**Logo:** `<img src="/logo.svg" alt="WellUber" height={28} />`

**Nav links:** Solutions / How it works / For HR / For Providers  
Inter 500 14px `text-gray-500` hover `text-gray-900` transition 150ms

**CTA button:**
```
bg-brand text-white rounded-lg px-4 py-2 text-sm font-medium
hover:bg-brand-dark transition-colors duration-150
```
Label: "Talk to Us"  
href: `mailto:contact@welluber.com`

**No mobile hamburger for MVP** — hide links below `md:`, show CTA only on mobile.

---

## Section 2 — Hero

**Component:** `components/marketing/HeroSection.tsx`

**Layout:** Asymmetric 2-col. `grid grid-cols-2 gap-16 items-center`  
Left col: 52% — badge + H1 + subtext + CTAs  
Right col: 48% — wireframe frame + 2 floating breakout cards

**Left col — exact order:**

1. Badge pill:
```tsx
<span className="inline-flex items-center gap-1.5 bg-brand-faint border border-brand-mid 
  text-brand text-xs font-medium px-3 py-1 rounded-full">
  <span className="w-1.5 h-1.5 rounded-full bg-brand" />
  Corporate Wellness · Malaysia
</span>
```

2. H1 — use Magic UI `TextAnimate` component:
```tsx
<TextAnimate
  animation="blurInUp"
  by="word"
  className="font-bricolage text-6xl font-bold text-gray-900 leading-[1.05] tracking-[-1.5px] mt-4"
>
  Benefits your employees actually use.
</TextAnimate>
```

3. Subtext — animate in after H1 with 400ms delay:
```tsx
<motion.p
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.3 }}
  className="font-inter text-lg text-gray-500 leading-relaxed max-w-md mt-5"
>
  One platform for HR teams to set policies, employees to spend, 
  and service providers to get paid.
</motion.p>
```

4. CTAs — same delay pattern (500ms):
```tsx
<div className="flex items-center gap-3 mt-9">
  <a href="mailto:contact@welluber.com"
    className="bg-brand text-white rounded-lg px-6 py-2.5 text-sm font-medium
    hover:bg-brand-dark active:scale-[0.98] transition-all duration-150">
    Talk to Us
  </a>
  <a href="#how-it-works"
    className="text-gray-600 text-sm font-medium hover:text-gray-900 
    transition-colors flex items-center gap-1">
    See how it works
    <ArrowRight size={14} weight="regular" />  {/* Phosphor */}
  </a>
</div>
```

**Right col — wireframe frame:**

Use Magic UI `Safari` component as the browser chrome wrapper.  
Inside: `<DashboardWireframe />` (see wireframes section below).

```tsx
<div className="relative">
  <Safari
    url="app.welluber.com"
    className="shadow-[0_24px_64px_rgba(0,0,0,0.10),0_4px_16px_rgba(0,0,0,0.06)]"
  >
    <DashboardWireframe />
  </Safari>

  {/* Floating card 1 — bottom left, breaks frame */}
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6 }}
    className="absolute -bottom-4 -left-8 bg-white border border-gray-200 
      rounded-xl px-4 py-3 shadow-lg z-10"
  >
    <p className="text-xs text-gray-400 font-inter">Latest Payout</p>
    <NumberTicker
      value={45200}
      className="text-lg font-semibold text-gray-900 font-inter"
      prefix="RM "
    />
  </motion.div>

  {/* Floating card 2 — top right, breaks frame */}
  <motion.div
    initial={{ opacity: 0, y: -8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.7 }}
    className="absolute -top-4 -right-8 bg-white border border-gray-200 
      rounded-xl px-4 py-3 shadow-lg z-10"
  >
    <p className="text-xs text-gray-400 font-inter">Active Members</p>
    <div className="flex items-center gap-2">
      <NumberTicker
        value={128492}
        className="text-lg font-semibold text-gray-900 font-inter"
      />
      <span className="text-xs text-emerald-500 font-medium">↑ 1.2%</span>
    </div>
  </motion.div>
</div>
```

**Note on floating card numbers:** These are aspirational projections shown as platform capacity, not claimed metrics. They represent what the platform is designed to handle. Do not present as current stats.

---

## Section 3 — Network Visual

**Component:** `components/marketing/NetworkSection.tsx`  
**Magic UI component:** `AnimatedBeam`

**Purpose:** Replace the logo strip. No fake clients. Show the three-way connection model — this is the proof.

**Section bg:** `#F9FAFB`  
**Section label:** "THE PLATFORM"  
**H2:** "One platform. Every party wins."  
**Sub:** "WellUber closes the loop between corporate budgets and real-world spending — automatically."

**Layout:** Heading centered above. AnimatedBeam diagram centered below. 600px wide max, centered in container.

**Node structure:**

```
         [HR Admin]
              |
    [Employee]—[WELLUBER]—[Service Provider]
```

Center node: WellUber logo mark (indigo square, white W — 48px)  
Three outer nodes: Phosphor icon + label pill

```tsx
// Node config
const nodes = [
  {
    id: 'hr',
    icon: <Buildings size={24} weight="regular" />,
    label: 'HR Admin',
    sublabel: 'Sets policy & budget',
    position: 'top-left'
  },
  {
    id: 'employee', 
    icon: <UserCircle size={24} weight="regular" />,
    label: 'Employees',
    sublabel: 'Spend benefits',
    position: 'bottom'
  },
  {
    id: 'sp',
    icon: <Storefront size={24} weight="regular" />,
    label: 'Service Providers',
    sublabel: 'Get paid automatically',
    position: 'top-right'
  }
]
```

Each node: white bg, `border border-gray-200`, `rounded-2xl`, `p-4`, icon in brand-faint well, label Inter 600 14px, sublabel Inter 400 12px gray-400.

AnimatedBeam config:
- `pathColor`: `#C7D2FE` (brand-mid)
- `pathWidth`: 2
- `gradientStartColor`: `#4F46E5`
- `gradientStopColor`: `#C7D2FE`
- `duration`: 4 (slow, subtle)
- Beams run bidirectionally: center ↔ each outer node

---

## Section 4 — How It Works

**Component:** `components/marketing/HowItWorksSection.tsx`  
**Section id:** `how-it-works`  
**Section bg:** `#F9FAFB`

**Section label:** "HOW IT WORKS"  
**H2:** "From setup to settled — in weeks."

**Layout:** 2-col. `grid grid-cols-[55fr_45fr] gap-16 items-start`  
Left: steps. Right: static `<DashboardWireframe />` (smaller, ~80% scale, same component as hero).

**Steps — left col:**

3 steps separated by `border-t border-gray-200`. Each step is clickable — clicking expands that step's description. Step 1 open by default.

```tsx
const steps = [
  {
    number: '01',
    title: 'HR sets the policy',
    description: 'Define budgets, eligibility, and categories in minutes. Changes apply forward — past records stay immutable.',
  },
  {
    number: '02', 
    title: 'Employees spend',
    description: 'Browse verified providers, redeem vouchers, or walk in anywhere. The wallet handles the rest.',
  },
  {
    number: '03',
    title: 'SPs get paid',
    description: 'Automated settlements, zero invoice chasing. Providers see exactly what\'s owed and when it arrives.',
  },
]
```

Step anatomy:
- Number: Inter 500 12px `text-gray-400` — "01" "02" "03" zero-padded. Left of title, vertically centered.
- Title: Inter 600 16px. Active: `text-gray-900`. Inactive: `text-gray-400`
- Description: Inter 400 15px `text-gray-500`. Hidden when inactive. Height animated with Framer Motion `AnimatePresence`.
- Active indicator: `2px solid #4F46E5` left border on the step row

**Step reveal:** BlurFade with 80ms stagger between steps.

---

## Section 5 — Features Bento

**Component:** `components/marketing/FeaturesSection.tsx`  
**Section bg:** `#FFFFFF`

**Section label:** "PLATFORM"  
**H2:** "Everything in one place. Finally."  
**Sub:** "No spreadsheets. No manual claims. No reconciliation headaches."

**Grid:** Magic UI `BentoGrid` with named CSS Grid areas:

```css
grid-template-areas:
  "policy  policy  settlement"
  "wallet  analytics  settlement"
  "org     org     compliance"
```

```
[policy — 2/3]        [settlement — 1/3, tall]
[wallet — 1/3] [analytics — 1/3] [settlement cont.]
[org — 2/3]           [compliance — 1/3]
```

**Each card structure:**
```tsx
<BentoCard>
  {/* Upper visual area ~160px */}
  <div className="h-40 rounded-lg bg-gray-50 border border-gray-100 overflow-hidden p-3">
    <PolicyFragment />  {/* or relevant wireframe */}
  </div>
  
  {/* Lower content */}
  <p className="text-xs font-semibold uppercase tracking-widest text-brand mt-4">
    POLICY
  </p>
  <h4 className="font-inter font-semibold text-base text-gray-900 mt-1">
    Benefit policy engine
  </h4>
  <p className="font-inter text-sm text-gray-500 leading-relaxed mt-1">
    Define pools, set categories, assign eligibility by role. Changes apply forward.
  </p>
</BentoCard>
```

**Large card (policy, 2/3 width):** `BorderBeam` applied — subtle animated border. Only on this card.

**Card hover:** `hover:border-brand hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(79,70,229,0.08)] transition-all duration-150`

**BlurFade reveal:** Wrap each BentoCard in `<BlurFade delay={index * 0.06}>` for staggered scroll entrance.

**Card content:**

| Area | Label | Title | Description |
|---|---|---|---|
| policy | POLICY | Benefit policy engine | Define pools, categories, eligibility by role. Changes apply forward — past records immutable. |
| wallet | WALLET | Digital vouchers & wallet | Employees browse, purchase, redeem in-app or walk in. No cash, no receipts. |
| settlement | SETTLEMENT | Automated settlements | Commission splits, payout cycles, and ledgers handled automatically. |
| analytics | ANALYTICS | Real-time analytics | Utilisation rates, voucher lifecycle, settlement volume — live. No waiting for month-end. |
| org | MULTI-ORG | Multi-org management | Manage multiple companies under one roof. Each with its own wallet, policies, roster. |
| compliance | COMPLIANCE | Built-in compliance | Audit trails, role-based access, immutable transaction records. |

---

## Section 6 — Audience Tab Switcher

**Component:** `components/marketing/AudienceSection.tsx`  
**Section bg:** `#FFFFFF`

**Section label:** "BUILT FOR"  
**H2:** "One platform. Three stakeholders."

**Tab row:** `[HR Admin] [Employees] [Service Providers]`

Tab styling:
- Container: `border-b border-gray-200`
- Each tab: Inter 500 14px, `pb-3 px-1`
- Active: `text-gray-900 font-semibold border-b-2 border-brand -mb-px`
- Inactive: `text-gray-400 border-b-2 border-transparent -mb-px hover:text-gray-600`
- Transition: border-color 150ms ease. No background fill.

**Content area:** `grid grid-cols-[55fr_45fr] gap-16 items-center mt-12`

Tab content switch: `<AnimatePresence mode="wait">` with opacity 0→1, 150ms. No slide.

**Content per tab:**

```tsx
const tabs = {
  hr: {
    title: 'Total control, zero spreadsheets.',
    body: 'Set policies, assign budgets, and track utilisation across your entire workforce — without touching a single receipt.',
    bullets: [
      'Instant policy deployment',
      'Real-time budget tracking', 
      'Automated tax reporting',
    ],
    visual: <TabPanelHR />,
  },
  employee: {
    title: "Benefits you'll actually spend.",
    body: 'Browse hundreds of verified wellness providers, pay with your corporate wallet, and redeem in-app or walk in anywhere.',
    bullets: [
      'Seamless mobile wallet',
      'Zero out-of-pocket surprises',
      'Access to premium providers',
    ],
    visual: <TabPanelEmployee />,
  },
  sp: {
    title: 'Grow your business. Get paid on time.',
    body: 'Join a network of corporate clients and receive guaranteed, automated payments — no more chasing invoices.',
    bullets: [
      'Instant transaction settlements',
      'Automated invoicing',
      'Direct corporate client access',
    ],
    visual: <TabPanelSP />,
  },
}
```

Bullet point icon: `<CheckCircle size={16} weight="fill" className="text-brand mt-0.5 shrink-0" />`  
Bullet text: Inter 400 14px `text-gray-600`

---

## Section 7 — FAQ

**Component:** `components/marketing/FAQSection.tsx`  
**shadcn/ui:** `Accordion` (already installed)  
**Section bg:** `#F9FAFB`

**Section label:** "QUESTIONS"  
**H2:** "Before you call us, read this."

**Layout:** Single column, max-width 720px, centered. Full-width `Accordion`.

**Questions:**

```tsx
const faqs = [
  // HR Admin
  {
    q: 'How do employees access their benefits?',
    a: 'Employees log in to the WellUber member app using their corporate email. Once HR activates their account and assigns a benefit policy, their wallet is live — they can browse providers, purchase vouchers, or walk in to any listed service provider.',
  },
  {
    q: 'What happens if an employee doesn\'t spend their full allocation?',
    a: 'Unspent balances behave according to the policy you set — they can roll over, expire, or be redistributed. You control the rules. Nothing moves without your configuration.',
  },
  {
    q: 'Can we set different benefit policies for different employee groups?',
    a: 'Yes. WellUber supports multiple benefit policies per organisation. You can assign policies by role, department, or employment type. Full-time and part-time employees can have entirely separate entitlements.',
  },
  {
    q: 'How does WellUber handle compliance and reporting?',
    a: 'Every transaction is logged with a full audit trail — who spent what, where, when, and against which policy. Reports are available in real time. Past records are immutable and cannot be edited after the fact.',
  },
  {
    q: 'What\'s the minimum company size to get started?',
    a: 'There\'s no minimum. We work with companies from 20 employees to 2,000+. Pricing scales with your headcount — talk to us and we\'ll put together a plan that fits.',
  },
  // Service Providers
  {
    q: 'How do I list my business as a service provider?',
    a: 'Apply through the WellUber SP portal. We verify your business details, set up your service categories, and you\'re live on the platform. The process typically takes 3–5 business days.',
  },
  {
    q: 'When and how do I receive payment?',
    a: 'Payments are settled on a monthly cycle to your registered bank account. You can view your pending payouts, transaction history, and settlement status in real time through the SP portal.',
  },
  {
    q: 'Do employees pay me directly or does WellUber?',
    a: 'For online voucher purchases, WellUber collects payment and settles with you after deducting the agreed commission. For walk-in claims, employees pay their co-payment directly to you — WellUber covers the corporate-funded portion in the next settlement cycle.',
  },
  // Both
  {
    q: 'Is there a mobile app?',
    a: 'The member experience is currently a responsive web app optimised for mobile — no App Store download required. A native iOS and Android app is on the roadmap for Phase 2.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most organisations are live within 1–2 weeks. That includes HR onboarding, policy configuration, and employee activation. Service providers are typically approved within 3–5 business days of submitting their application.',
  },
]
```

**Accordion styling:**
- `type="single" collapsible defaultValue="item-0"`
- Trigger: Inter 500 15px `text-gray-900`
- Content: Inter 400 14px `text-gray-500` leading-relaxed
- Chevron icon: Phosphor `CaretDown` 16px, rotates 180° when open
- Border: `border-b border-gray-200` between items. No outer border.

---

## Section 8 — CTA Band

**Component:** `components/marketing/CTASection.tsx`  
**Section bg:** `#1E1B2E`

**Layout:** `grid grid-cols-[60fr_40fr] gap-12 items-center`  
NOT centered. Left-heavy.

**Left col:**
```tsx
<p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
  READY TO INVEST IN YOUR PEOPLE?
</p>
<h2 className="font-bricolage text-4xl font-bold text-white leading-[1.15] 
  tracking-[-0.8px] mt-3">
  Your people deserve<br />better benefits.
</h2>
<p className="font-inter text-base text-[#9CA3B8] leading-relaxed mt-4 max-w-md">
  Join forward-thinking Malaysian companies using WellUber to close 
  the gap between policy and reality.
</p>
<a href="mailto:contact@welluber.com"
  className="inline-block mt-8 bg-brand text-white rounded-lg px-6 py-3 
  text-sm font-medium hover:bg-brand-dark active:scale-[0.98] 
  transition-all duration-150">
  Talk to Us
</a>
```

**Right col:** 2 stacked floating UI cards — white bg, 12px radius, lift shadow.  
Card 1: "Policy Active · Comprehensive Health" with a green status dot  
Card 2: "Utilisation this month · 68%" with a simple progress bar (brand color, `#EEF2FF` track)

These are decorative product-grounded elements. Build as simple hardcoded JSX — not real components.

---

## Section 9 — Footer

**Component:** `components/marketing/Footer.tsx`  
**Bg:** `#111827` `border-t border-[#1F2937]`

**Layout:** `grid grid-cols-[2fr_1fr_1fr_1fr] gap-8`

**Col 1 — Brand:**
```tsx
<img src="/logo.svg" alt="WellUber" height={24} className="brightness-0 invert" />
<p className="font-inter text-sm text-gray-500 mt-3 max-w-[200px] leading-relaxed">
  The architectural standard for corporate benefits and employee wellness ecosystems.
</p>
```

**Col 2 — Product:**
Links: Platform / Pricing / Case Studies *(placeholder — no href needed for MVP)*

**Col 3 — Company:**
Links: About Us / Careers / Blog

**Col 4 — Legal:**
Links: Privacy Policy / Terms of Service / Cookies

All links: Inter 400 14px `text-gray-500` hover `text-gray-300` transition 150ms

**Bottom bar:** `border-t border-[#1F2937] mt-10 pt-6 flex justify-between items-center`  
Left: `© 2024 WellUber B2B. All rights reserved.` Inter 400 13px `text-gray-600`  
Right: nothing for MVP

---

## Wireframe components

All wireframes live in `components/wireframes/`. They are SVG React components — not images. They share one visual language:

```
Bg:            #FFFFFF
Surface fill:  #F9FAFB
Stroke:        #E5E7EB (1px)
Empty blocks:  #F3F4F6
Text sims:     #E5E7EB (varying widths, 8px height)
Brand active:  #4F46E5 (nav pill, buttons)
Chart light:   #C7D2FE
Chart dark:    #818CF8
Success dot:   #10B981
Sidebar bg:    #1E1B2E
Label text:    #9CA3AF (when text is readable)
```

### DashboardWireframe.tsx

Renders the full dashboard layout from the uploaded screenshots.

Structure:
- Left sidebar 148px: `#1E1B2E` bg, logo area, 6 nav items (active one in brand pill)
- Main content: white bg
  - Search bar row at top
  - 4 KPI stat cards in a row (Active Members / Organizations / Service Providers / Profitability)
  - Below: bar chart (left 65%) + settlement panel (right 35%)
- Bar chart: 12 bars in 2 alternating colors (`#C7D2FE` and `#818CF8`), Jan–Dec labels
- Settlement panel: "Settlement status" header, green dot, "Pending payouts" label, large "RM 18.2M", progress bar, "Trigger Payout →" button

Use the uploaded screenshots as the exact structural reference. Replicate the layout, not pixel-perfect — it's a wireframe, not a screenshot.

### PolicyFragment.tsx (bento — large card)
Mini policy table: 3 rows. Columns: Category / Benefit / Amount. Indigo pill for "Active" status. Row hover state visible on row 1.

### WalletFragment.tsx (bento)
Balance display: "Available Balance" label, "RM 2,450.00" in large text. Thin spend bar below (60% filled, brand color).

### SettlementFragment.tsx (bento — tall card)
Ledger: 3 rows showing SP name + amount + status badge. Bottom: "Next payout: May 01" + "Trigger Payout →" button.

### AnalyticsFragment.tsx (bento)
Mini bar chart: 7 bars (Mon–Sun), one bar highlighted in brand color.

### OrgListFragment.tsx (bento — large card)
3 org rows: name + status badge (Active/Pending/Suspended) + utilisation %.

### ComplianceFragment.tsx (bento)
3-item checklist: 2 checked (brand fill), 1 unchecked. Labels: "KYC verified" / "Policy assigned" / "First transaction".

### TabPanelHR.tsx
Policy configuration screen fragment: form fields for policy name, budget, employee group selector. "Save Policy" button.

### TabPanelEmployee.tsx
Wallet screen: balance pill, 3 provider cards with category tags and "Redeem" button.

### TabPanelSP.tsx
SP dashboard: "Pending Payout RM 12,400" card + 3 recent transaction rows.

---

## Scroll reveal — global pattern

Wrap every major section content block in `<BlurFade>`:

```tsx
import { BlurFade } from '@/components/magicui/blur-fade'

// Usage
<BlurFade delay={0.1} inView>
  <SectionContent />
</BlurFade>
```

Stagger child elements (cards, steps, etc.) with `delay={index * 0.06}`.  
All reveals are `inView` only — never trigger on mount unless the element is already visible.

---

## Phosphor icon reference

```tsx
import {
  Buildings,       // HR Admin node, multi-org card
  UserCircle,      // Employee node
  Storefront,      // SP node
  ClipboardText,   // Policy card
  Wallet,          // Wallet card
  ArrowsLeftRight, // Settlement card
  ChartBar,        // Analytics card
  ShieldCheck,     // Compliance card
  CheckCircle,     // Audience bullets (weight="fill")
  CaretDown,       // FAQ accordion
  ArrowRight,      // Secondary CTA
} from '@phosphor-icons/react'
```

Default weight: `regular`. Exception: `CheckCircle` uses `fill` for audience bullets.  
Default size: 20px nav/section, 18px inside cards, 16px inline.

---

## Anti-pattern enforcement

Before marking any section complete, verify:

- [ ] No indigo gradients anywhere
- [ ] Hero is asymmetric — not centered
- [ ] Features use BentoGrid — not a uniform 3-col card grid
- [ ] No stock photos, illustrations, emoji, or people
- [ ] All copy matches DESIGN.md exactly — no lorem ipsum
- [ ] Buttons are 8px radius — no pill shapes
- [ ] No decorative shadows — only frame lift + card hover + floating cards
- [ ] No looping or auto-play animations
- [ ] H1/H2/H3 use Bricolage Grotesque — Inter is body/UI only
- [ ] Step numbers are zero-padded text ("01") — no circles
- [ ] Audience section is a tab switcher — not 3 static cards
- [ ] CTA band is left-heavy — not centered
- [ ] Icon library is Phosphor — not Lucide, not heroicons
- [ ] All CTAs link to `mailto:contact@welluber.com`

---

## Build order

Build in this exact sequence. Don't skip ahead.

```
1. Setup: install packages, configure fonts, add color tokens, globals.css
2. Marketing layout (app/(marketing)/layout.tsx)
3. DashboardWireframe.tsx — needed by hero and how-it-works
4. Navbar
5. HeroSection (with Safari mock + floating cards)
6. NetworkSection (AnimatedBeam)
7. HowItWorksSection
8. All bento wireframe fragments
9. FeaturesSection (BentoGrid)
10. Tab panel wireframes
11. AudienceSection (tab switcher)
12. FAQSection (Accordion)
13. CTASection
14. Footer
15. Final pass: verify all anti-patterns, test scroll reveals, 
    test tab switching, test reduced motion
```

---

## Session start instruction

Send this to Claude Code verbatim before anything else:

> Read DESIGN.md fully. Then read BRIEF_LANDING_PAGE.md fully.  
> Before writing any code, recite the anti-patterns section from DESIGN.md.  
> Then confirm: icon library, brand color hex, CTA destination, and build order step 1.  
> Only start after I confirm your answers are correct.
