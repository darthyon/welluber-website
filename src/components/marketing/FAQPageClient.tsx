'use client'

import { useState, useMemo } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Input } from '@/components/ui/input'
import { Container } from '@/components/shared/Container'
import { MagnifyingGlass, X } from '@phosphor-icons/react'

const faqGroups = [
  {
    audience: 'For HR Teams',
    items: [
      {
        q: 'How do employees access their benefits?',
        a: 'Employees log in using their corporate email. Once HR activates their account and assigns a benefit policy, their wallet is live — they can browse providers, purchase vouchers, or walk in to any listed service provider.',
      },
      {
        q: "What happens if an employee doesn't spend their full allocation?",
        a: "You decide — balances can roll over, expire at cycle end, or be redistributed. The policy is yours to configure; nothing moves without it.",
      },
      {
        q: 'Can we set different benefit policies for different employee groups?',
        a: 'Yes. You can assign policies by role, department, or employment type. Full-time and part-time employees can have entirely separate entitlements.',
      },
      {
        q: 'How does WellUber handle compliance and reporting?',
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
        a: "Apply through the WellUber SP portal. We verify your business details, set up your service categories, and you're live on the platform. The process typically takes 3–5 business days.",
      },
      {
        q: 'When and how do I receive payment?',
        a: 'Payments are settled monthly to your registered bank account. You can view your pending payouts, transaction history, and settlement status in real time through the SP portal.',
      },
      {
        q: 'Do employees pay me directly or does WellUber?',
        a: 'For online voucher purchases, WellUber collects payment and settles with you after deducting the agreed commission. For walk-in claims, employees pay their co-payment directly to you — WellUber covers the corporate-funded portion in the next settlement cycle.',
      },
    ],
  },
  {
    audience: 'General',
    items: [
      {
        q: 'Is there a mobile app?',
        a: 'The member experience is a responsive web app optimised for mobile — no App Store download required. A native iOS and Android app is on the roadmap for Phase 2.',
      },
      {
        q: 'How long does setup take?',
        a: 'Most organisations are live within 1–2 weeks. That includes HR onboarding, policy configuration, and employee activation. Service providers are typically approved within 3–5 business days of submitting their application.',
      },
    ],
  },
]

export function FAQPageClient() {
  const [query, setQuery] = useState('')

  const filteredGroups = useMemo(() => {
    if (!query.trim()) return faqGroups

    const q = query.toLowerCase()

    return faqGroups
      .map((group) => ({
        ...group,
        items: group.items.filter(
          (item) =>
            item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
        ),
      }))
      .filter((group) => group.items.length > 0)
  }, [query])

  const hasResults = filteredGroups.length > 0

  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <Container className="max-w-[720px]">
        {/* Header */}
        <div className="text-center">
          <p className="font-geist text-xs font-semibold uppercase tracking-[0.08em] text-brand">
            Questions
          </p>
          <h1 className="mt-3 font-poppins text-2xl font-bold leading-[1.15] tracking-[-0.06em] text-gray-900 sm:text-3xl lg:text-[40px]">
            Before you call us, read this.
          </h1>
        </div>

        {/* Search */}
        <div className="relative mx-auto mt-8 max-w-md sm:mt-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlass size={18} className="text-gray-400" />
          </div>
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions or answers..."
            className="pl-10 pr-10 font-geist"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 transition-colors hover:text-gray-600"
              aria-label="Clear search"
            >
              <X size={16} weight="bold" />
            </button>
          )}
        </div>

        {/* Results */}
        <div className="mt-10 space-y-8 sm:space-y-10">
          {hasResults ? (
            filteredGroups.map((group, gi) => (
              <div key={gi}>
                <p className="mb-3 font-geist text-[11px] font-semibold uppercase tracking-[0.08em] text-gray-500 sm:mb-4">
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
                        <AccordionTrigger className="font-geist text-[15px] font-medium text-gray-900">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="font-geist text-sm leading-relaxed text-gray-500">
                            {faq.a}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    )
                  })}
                </Accordion>
              </div>
            ))
          ) : (
            <div className="py-12 text-center">
              <p className="font-geist text-base text-gray-500">
                No questions match your search.
              </p>
              <p className="mt-1 font-geist text-sm text-gray-400">
                Try a different keyword or browse the categories above.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
