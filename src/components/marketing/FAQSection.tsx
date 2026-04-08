'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { BlurFade } from '@/components/magicui/blur-fade'
import { Container } from '@/components/shared/Container'

const faqGroups = [
  {
    audience: 'For HR Teams',
    items: [
      {
        q: 'How do employees access their benefits?',
        a: 'Employees log in to the Welluber member app using their corporate email. Once HR activates their account and assigns a benefit policy, their wallet is live — they can browse providers, purchase vouchers, or walk in to any listed service provider.',
      },
      {
        q: "What happens if an employee doesn't spend their full allocation?",
        a: "You decide — balances can roll over, expire at cycle end, or be redistributed. The policy is yours to configure; nothing moves without it.",
      },
      {
        q: 'Can we set different benefit policies for different employee groups?',
        a: 'Yes. Welluber supports multiple benefit policies per organisation. You can assign policies by role, department, or employment type. Full-time and part-time employees can have entirely separate entitlements.',
      },
      {
        q: 'How does Welluber handle compliance and reporting?',
        a: 'Every transaction is logged with a full audit trail — who spent what, where, when, and against which policy. Reports are available in real time. Past records are immutable and cannot be edited after the fact.',
      },
      {
        q: "What's the minimum company size to get started?",
        a: "There's no minimum. We work with companies from 20 employees to 2,000+. Pricing scales with your headcount — talk to us and we'll put together a plan that fits.",
      },
    ],
  },
  {
    audience: 'For Service Providers',
    items: [
      {
        q: 'How do I list my business as a service provider?',
        a: "Apply through the Welluber SP portal. We verify your business details, set up your service categories, and you're live on the platform. The process typically takes 3–5 business days.",
      },
      {
        q: 'When and how do I receive payment?',
        a: 'Payments are settled on a monthly cycle to your registered bank account. You can view your pending payouts, transaction history, and settlement status in real time through the SP portal.',
      },
      {
        q: 'Do employees pay me directly or does Welluber?',
        a: 'For online voucher purchases, Welluber collects payment and settles with you after deducting the agreed commission. For walk-in claims, employees pay their co-payment directly to you — Welluber covers the corporate-funded portion in the next settlement cycle.',
      },
    ],
  },
  {
    audience: 'General',
    items: [
      {
        q: 'Is there a mobile app?',
        a: 'The member experience is currently a responsive web app optimised for mobile — no App Store download required. A native iOS and Android app is on the roadmap for Phase 2.',
      },
      {
        q: 'How long does setup take?',
        a: 'Most organisations are live within 1–2 weeks. That includes HR onboarding, policy configuration, and employee activation. Service providers are typically approved within 3–5 business days of submitting their application.',
      },
    ],
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="bg-[#F9FAFB] py-16 sm:py-20 lg:py-24 scroll-mt-24">
      <Container className="max-w-[720px]">
        <BlurFade inView delay={0.1}>
          <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--color-brand)]">
            QUESTIONS
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-bricolage)] text-2xl font-bold leading-[1.15] tracking-[-0.06em] text-gray-900 sm:text-3xl lg:text-[40px]">
            Before you call us, read this.
          </h2>
        </BlurFade>

        <div className="mt-8 space-y-8 sm:mt-10 sm:space-y-10">
          {faqGroups.map((group, gi) => (
            <BlurFade key={gi} inView delay={0.15 + gi * 0.05}>
              <div>
                <p className="mb-3 font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.08em] text-gray-400 sm:mb-4">
                  {group.audience}
                </p>
                <Accordion
                  type="single"
                  collapsible
                  defaultValue={gi === 0 ? 'item-0' : undefined}
                >
                  {group.items.map((faq, i) => {
                    const itemKey = `group-${gi}-item-${i}`
                    return (
                      <AccordionItem key={itemKey} value={itemKey}>
                        <AccordionTrigger className="font-[family-name:var(--font-inter)] text-[15px] font-medium text-gray-900">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="font-[family-name:var(--font-inter)] text-sm leading-relaxed text-gray-500">
                            {faq.a}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    )
                  })}
                </Accordion>
              </div>
            </BlurFade>
          ))}
        </div>
      </Container>
    </section>
  )
}
