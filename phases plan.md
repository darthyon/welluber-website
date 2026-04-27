# WellUber Landing Page — Improvements Plan

## Context

The live site at `welluber-website.vercel.app` is a well-built foundation. This plan implements the strategic direction in `LANDING_DIRECTION.md` — removing fake credibility signals, sharpening the mechanism-first narrative, introducing the two-track humanization system (real photos + capsule poses), and refining section copy and visuals throughout.

**Repo:** `/Users/yonyusuff/Projects/welluber-website/`  
**Register:** Brand (marketing landing page)  
**Constraint:** No fake metrics, no fake logos, no geography-first framing.

---

## UX Assessment — Where I Agree and Where I'd Refine

### Strong calls (agree fully)

- Drop "Corporate Wellness · Malaysia" eyebrow — geo-restricts and uses banned vocabulary
- Cut fake metrics (128,492 members, RM 12.3M payouts) from hero floating cards and StatsMarquee — credibility risk
- Mechanism-focused sub-copy ("Fund a wallet. Employees redeem instantly...") — speaks directly to HR Finance buyer
- Role-labeled candid photos in PersonaRow — contextual anchoring makes photos earn their place
- Pose scarcity rules (1/viewport, 1 heart/page) — prevents visual noise
- Founding cohort strip instead of logo strip — honest zero-social-proof alternative
- Remove Meteors from CTA — they fight the calm/geometric personality
- No fake testimonials — pre-launch, no users yet. Testimonial section dropped entirely.

### Refinements to the direction

1. **StatsMarquee fate is implicit but must be explicit.** Current marquee contains banned fake metrics. Replace with a benefit categories Marquee (e.g., "Health & Wellness · Fitness · Optical · Dental · Mental Health · Pharmacy · Transport · Learning..."). Shows product depth without fabricating numbers.

2. **Border Beam "single slow pass" needs clarification.** If truly one-pass-then-static, needs custom CSS animation. A very slow continuous loop (10–12s cycle, 60% opacity) achieves the same effect with simpler code. Plan implements slow loop.

3. **PersonaRow photos:** Use Unsplash placeholders with role labels. Swap when real photos are available.

4. **Pose-flip loader timing:** Direction specifies 600ms/frame (2.4s cycle). For page transitions this works; for form submission it reads as slow. Plan implements 350ms/frame (1.4s cycle) — snappier without losing the animated character. Direction's `prefers-reduced-motion` fallback stays.

5. **Eyebrow "Benefits, better connected."** is tagline language, not category anchoring. It works fine on the brand — keeping it per direction. Trade-off noted: slightly soft as an eyebrow signal but aligns with the promote-from-footer intent.

---

## Implementation Phases

### Phase 1 — Copy sweep (text-only, no layout changes)
Fastest wins. All copy changes, zero risk.

**Files:**
- `src/components/marketing/HeroSection.tsx`
  - Eyebrow: `"Corporate Wellness · Malaysia"` → `"Benefits, better connected."`
  - Sub: `"One platform for HR teams..."` → `"Fund a wallet. Employees redeem instantly. Providers get auto-settled. You see every transaction, in real time."`
  - Secondary CTA label: `"See how it works"` → `"See how it works ↓"`
- `src/components/marketing/NetworkSection.tsx`
  - Headline → `"One wallet. Three sides. No paperwork in between."`
  - Sub → `"Most benefits platforms serve one stakeholder. WellUber was built for all three."`
- `src/components/marketing/AudienceSection.tsx`
  - Headline → `"Pick your role. See what changes."`
- `src/components/marketing/CTASection.tsx`
  - Headline: `"Your people deserve benefits that actually reach them."` → `"Stop chasing claim forms. Start seeing the spend."`
  - Sub → `"Founding-cohort companies get founder-led onboarding, direct input on roadmap, and pricing locked in for as long as you stay."`
  - CTA label stays `"Talk to Us"`

---

### Phase 2 — Cut banned elements
Remove or replace all fabricated signals.

**Files:**
- `src/components/marketing/HeroSection.tsx`
  - Remove both floating NumberTicker cards (128,492 members + RM 45,200 payout)
  - Add "founding cohort" strip below CTAs: `"Now onboarding the founding cohort →"` — small, typographic, links to ContactModal
- `src/components/marketing/StatsMarquee.tsx`
  - Replace all 8 fake metric pills with benefit category pills
  - Service categories (show variety — these are examples, not exhaustive): Fitness · Mental Health · Learning & Development · Meal Allowance · Movie Tickets · Grab Vouchers · Pharmacy · Childcare · Recreation · Spa & Wellness · Sports Equipment · Online Courses · Team Lunches · Gym Memberships · Music Streaming · etc.
  - Optical and Dental removed (gray area)
  - "etc." energy is intentional — Marquee shows breadth, not a closed list
  - Keep Marquee animation, swap content
- `src/components/marketing/CTASection.tsx`
  - Remove `<Meteors>` component entirely
  - Keep dark background (`bg-dark-surface`), add subtle `DotPattern` at 4% opacity instead

---

### Phase 3 — Hero visual update
Add geometric texture, product mockup animation, Border Beam.

**Files:**
- `src/components/marketing/HeroSection.tsx`
  - Swap `GridPattern` → `DotPattern` (need to add DotPattern to magicui — see below)
  - Add `<BorderBeam>` on the Safari mockup wrapper — slow continuous loop (duration 12s, size 80, colorFrom brand indigo, colorTo brand-mid, 60% opacity)
  - Add auto-cycling dashboard views: 3 screenshots cycle every 6s, paused on hover, `prefers-reduced-motion` shows static first view
  - Add capsule pose SVG (StandingPresenting, ~280px) overlapping bottom-left of mockup (deferred until Phase 7)
- `src/components/magicui/dot-pattern.tsx` — ADD (copy from Magic UI registry, not currently in project)

**Dashboard view cycling spec:**
```tsx
const views = [img1Dashboard, img1Wallet, img1Settlement] // 3 static screenshots
const [current, setCurrent] = useState(0)
// useEffect with 6s interval, clear on hover, respect prefers-reduced-motion
```
Note: The 3 product screenshots (HR dashboard, employee wallet, SP settlement) need to be captured from the admin console and placed in `/public/`. This is a content dependency, not a code dependency — build the cycle logic first, add images when ready.

---

### Phase 4 — New PersonaRow section
New section between NetworkSection and AudienceSection.

**New file:** `src/components/marketing/PersonaRow.tsx`

**Layout:**
- 3-column CSS grid on desktop (`repeat(3, 1fr)`), stacked mobile
- Each card: photo (rounded-xl, aspect-[3/4], ~280px tall) + role tag chip + 2-line description
- No card border/shadow — let the photo carry the weight
- BlurFade on scroll (stagger 0.1s between cards)

**Cards:**
| Role | Unsplash query | Role tag | Copy |
|---|---|---|---|
| HR Admin | woman at laptop, candid, office | `HR Admin` | **Design, manage, measure.** Set policies, track utilisation, prove ROI without spreadsheets. |
| Employee | person on phone, candid | `Employee` | **Browse. Tap. Redeem.** Instant access to the benefits you actually use. No claim forms. |
| Service Provider | small business owner, gym or clinic | `Service Provider` | **Get listed. Get paid.** No invoice chasing. Settlement on schedule, every cycle. |

**Unsplash photo IDs** (to be selected — use `photo-[id]?auto=format&fit=crop&w=600&q=80`). Choose candid, non-posed, role-appropriate. Asian subjects preferred.

**Page assembly:** `src/app/(marketing)/page.tsx` — insert `<PersonaRow />` between `<NetworkSection />` and `<AudienceSection />`

---

### Phase 5 — Bento grid refinements
Formalize Magic UI placements already implied by direction.

**File:** `src/components/marketing/FeaturesSection.tsx`
- Settlement card: add `<AnimatedList>` (already installed in magicui) — list of recent settlements cycling in
- Analytics card: verify `NumberTicker` is running on utilisation/spend figure — add if not present
- Multi-org card: assess whether `DottedMap` adds value without crowding — add only if the card has space (skip if tight)

**File:** `src/components/magicui/dotted-map.tsx` — ADD if multi-org card gets it (low priority)

---

### Phase 6 — Capsule pose SVG system
Build the 5 core poses as React SVG components. These unblock Hero pose, FAQ sub-card, CTA pose, and footer.

**New directory:** `src/components/poses/`

**Components:**
| File | Pose | Used in |
|---|---|---|
| `StandingPresenting.tsx` | 3-circle standing, arm gesture | Hero (280px), CTA (200px) |
| `Sitting.tsx` | 2-circle sitting | FAQ sub-card (120px), Footer (40px) |
| `SittingHeart.tsx` | Sitting with coral heart | FAQ sub-card variant |
| `ArmsUpHeart.tsx` | Arms-up celebration with coral heart | Success/loader states |
| `SittingSlumped.tsx` | Sitting, slumped | Error/empty states |

**Sizing:** each component accepts a `size` prop (number, maps to height). Width scales proportionally.  
**Heart rule:** heart only renders if `showHeart` prop is true. Default false. Coral color: `oklch(0.75 0.18 30)` (warm coral).  
**Scarcity enforced:** heart prop forces intentional opt-in per instance.

**Implementation notes:**
- Capsule = circle (head) + rounded rect (body). 2 or 3 stacked with slight positional offset for sitting/standing.
- Keep SVG simple — these are brand marks, not illustrations. No outlines, no faces. Brand indigo + warm stone + coral accent only.

**Wire poses into sections after building:**
- `HeroSection.tsx` — StandingPresenting at 280px, bottom-left of mockup
- `FAQSection.tsx` — SittingHeart at 120px in sub-card
- `CTASection.tsx` — StandingPresenting at 200px beside policy card
- `Footer.tsx` — Sitting at 40px near logo

---

### Phase 7 — FAQ sub-card
Add "Still have questions?" support card to the FAQ section.

**File:** `src/components/marketing/FAQSection.tsx`

**Layout change:** from single-column to 2-column on desktop (FAQ accordions left, sub-card right, sticky)

**Sub-card contents:**
- Headline: `"Still have questions?"`
- Sub: `"Our team is here to help."`
- CTA button: `"Contact support"` → opens ContactModal
- Visual: `<SittingHeart size={120} />` above the text

---

### Phase 8 — CTA section layout + pose
Complete the CTA visual direction.

**File:** `src/components/marketing/CTASection.tsx`

**Layout:** split — copy left 40% / policy card right 60% (update from current single-column or centered layout)

**Copy block (left):**
- Eyebrow: `"READY TO INVEST IN YOUR PEOPLE?"` (keep)
- Headline: from Phase 1
- Sub: from Phase 1
- CTA: `"Talk to Us"` button

**Visual block (right):**
- Existing `PolicyFragment` or policy card screenshot — keep
- `<StandingPresenting size={200} />` positioned beside/behind the policy card
- Background: deep indigo surface (use `--brand` at 85% lightness variant, or `bg-[oklch(0.18_0.06_277)]`)

---

### Phase 9 — Final pass
Quality gate before ship.

- [ ] One pose per viewport — audit all sections
- [ ] One heart per page — audit all pose instances
- [ ] Zero fake metrics anywhere — grep for hardcoded numbers
- [ ] Zero banned copy — grep for "empower", "seamless", "revolutionize", "unlock", "elevate", "leverage", "supercharge", "journey", "best-in-class", "holistic", "end-to-end"
- [ ] `prefers-reduced-motion` respected in: hero auto-cycle, Border Beam, AnimatedList, NumberTicker, TextAnimate, BlurFade
- [ ] Mobile responsive: PersonaRow stacks, Hero splits to single column, FAQ sub-card stacks
- [ ] Pose scarcity: count StandingPresenting instances — if Hero has one AND CTA has one, confirm they're not in the same viewport
- [ ] North Star test: looks like benefits infrastructure for HR Finance, not a wellness brand

---

## Design system safety rules

**Do not touch `src/app/globals.css` token variables without asking first.** Tokens (OKLCH colors, typography, radius, animations) were defined today and are load-bearing.

Allowed without asking:
- Adding new Tailwind utility classes in component files
- Using existing CSS variables (e.g., `var(--brand)`, `var(--brand-faint)`)
- Adding new component-scoped CSS if truly needed

Ask before:
- Adding or modifying CSS variables in `globals.css`
- Changing any existing token value
- Adding new animation keyframes (existing ones may be used elsewhere)

Pose SVG components use inline OKLCH values for the 3-color system (brand indigo + warm stone + coral). No new tokens needed — these are one-off values in SVG fill attributes.

---

## Files Changed Summary

### New files
```
src/components/marketing/PersonaRow.tsx
src/components/poses/StandingPresenting.tsx
src/components/poses/Sitting.tsx
src/components/poses/SittingHeart.tsx
src/components/poses/ArmsUpHeart.tsx
src/components/poses/SittingSlumped.tsx
src/components/magicui/dot-pattern.tsx         (copy from Magic UI registry)
src/components/magicui/dotted-map.tsx          (optional, Phase 5)
```

### Modified files
```
src/components/marketing/HeroSection.tsx       (phases 1, 2, 3, 7)
src/components/marketing/StatsMarquee.tsx      (phase 2)
src/components/marketing/NetworkSection.tsx    (phase 1)
src/components/marketing/AudienceSection.tsx   (phase 1)
src/components/marketing/FeaturesSection.tsx   (phase 5)
src/components/marketing/FAQSection.tsx        (phase 8)
src/components/marketing/CTASection.tsx        (phases 1, 2, 9)
src/components/marketing/Footer.tsx            (phase 7)
src/app/(marketing)/page.tsx                   (phase 4)
```

---

## Content dependencies (not code)

| Asset | Needed for | Status |
|---|---|---|
| 3 product screenshots (HR dashboard, wallet, SP settlement) | Hero auto-cycle | Need to capture from admin console |
| 3 role Unsplash photos | PersonaRow | To be selected |

These are fill-in slots — code ships with placeholders, content drops in without code changes.

---

## Verification

1. `pnpm dev` in `/Users/yonyusuff/Projects/welluber-website/`
2. Visit `/` — check section order, copy, no fake metrics
3. Resize to mobile — PersonaRow stacks, Hero is single column
4. Hover over Safari mockup — Border Beam visible, auto-cycle pauses
5. Open browser devtools → simulate `prefers-reduced-motion: reduce` — all animations fall back
6. Open ContactModal — form works, no console errors
7. Check FAQ — sub-card visible on desktop, stacks on mobile
8. North Star test: screenshot the hero and CTA — ask "does this look like a wellness brand?"
