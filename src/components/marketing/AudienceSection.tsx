'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from '@phosphor-icons/react'
import { BlurFade } from '@/components/magicui/blur-fade'
import { TabPanelHR } from '@/components/wireframes/TabPanelHR'
import { TabPanelEmployee } from '@/components/wireframes/TabPanelEmployee'
import { TabPanelSP } from '@/components/wireframes/TabPanelSP'
import { Container } from '@/components/shared/Container'
import { useContactModal } from './ContactModal'

type TabKey = 'hr' | 'employee' | 'sp'

const tabs: Record<
  TabKey,
  {
    label: string
    hash: string
    title: string
    body: string
    bullets: string[]
    cta?: { label: string; reason?: string }
    visual: React.ReactNode
  }
> = {
  hr: {
    label: 'HR Admin',
    hash: 'audience-hr',
    title: 'Total control. Complete visibility.',
    body: 'Define policies by role, set spending limits, and monitor utilisation across your entire workforce — with a full audit trail built in from day one.',
    bullets: [
      'Policy deployed in minutes, not weeks',
      'Real-time budget tracking per employee and category',
      'Immutable records, compliance-ready at all times',
    ],
    visual: <TabPanelHR />,
  },
  employee: {
    label: 'Employees',
    hash: 'audience-employee',
    title: 'Your benefits, on your terms.',
    body: 'The moment HR activates your account, your wallet is live. Browse verified providers, purchase in-app, or walk in — no forms, no reimbursements, no out-of-pocket surprises.',
    bullets: [
      '248+ verified wellness providers',
      'Spend online or walk in — one wallet, everywhere',
      'See your balance, history, and entitlements in real time',
    ],
    visual: <TabPanelEmployee />,
  },
  sp: {
    label: 'Service Providers',
    hash: 'audience-sp',
    title: 'Grow your clientele. Get paid reliably.',
    body: 'Access a network of corporate clients and receive guaranteed, automated settlements every cycle — so you can focus on delivering great service, not tracking down payments.',
    bullets: [
      'Monthly settlements, direct to your bank account',
      'Real-time payout and transaction visibility',
      'No invoicing, no follow-up, no delays',
    ],
    cta: {
      label: 'Apply as a provider',
      reason: 'provider',
    },
    visual: <TabPanelSP />,
  },
}

const tabKeys: TabKey[] = ['hr', 'employee', 'sp']

const hashToTab: Record<string, TabKey> = {
  'audience-hr': 'hr',
  'audience-employee': 'employee',
  'audience-sp': 'sp',
}

export function AudienceSection() {
  const [activeTab, setActiveTab] = useState<TabKey>('hr')
  const active = tabs[activeTab]
  const { setOpen: setContactOpen, setInitialReason } = useContactModal()
  const activeTabRef = useRef<TabKey>('hr')
  const tabRefs = useRef<Record<TabKey, HTMLButtonElement | null>>({
    hr: null,
    employee: null,
    sp: null,
  })

  const ids = useMemo(() => {
    const tabId = (key: TabKey) => `audience-tab-${key}`
    const panelId = (key: TabKey) => `audience-panel-${key}`
    return { tabId, panelId }
  }, [])

  const setTab = (key: TabKey) => {
    setActiveTab(key)
    window.location.hash = tabs[key].hash
  }

  useEffect(() => {
    activeTabRef.current = activeTab
  }, [activeTab])

  // Sync tab with URL hash (mount + any navigation that changes hash)
  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace('#', '')
      if (!(hash in hashToTab)) return

      const next = hashToTab[hash]
      if (next === activeTabRef.current) return

      setActiveTab(next)
    }

    syncFromHash()

    window.addEventListener('hashchange', syncFromHash)
    return () => {
      window.removeEventListener('hashchange', syncFromHash)
    }
  }, [])

  return (
    <section id="audience" className="bg-white py-16 sm:py-20 lg:py-24 scroll-mt-24">
      <Container>
        {/* Anchor targets for navbar links */}
        <span id="audience-hr" className="block scroll-mt-24" />
        <span id="audience-employee" className="block scroll-mt-24" />
        <span id="audience-sp" className="block scroll-mt-24" />

        <BlurFade inView delay={0.1}>
          <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--color-brand)]">
            BUILT FOR
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-bricolage)] text-2xl font-bold leading-[1.15] tracking-[-0.06em] text-gray-900 sm:text-3xl lg:text-[40px]">
            Pick your role. See what changes.
          </h2>
        </BlurFade>

        {/* Tab row */}
        <div className="mt-8 border-b border-gray-200 sm:mt-10">
          <div
            className="flex gap-4 overflow-x-auto pb-1 sm:gap-8"
            role="tablist"
            aria-label="Audience perspectives"
          >
            {tabKeys.map((key) => (
              <button
                key={key}
                ref={(el) => {
                  tabRefs.current[key] = el
                }}
                onClick={() => setTab(key)}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Home' || e.key === 'End') {
                    e.preventDefault()
                  } else {
                    return
                  }

                  const currentIndex = tabKeys.indexOf(key)
                  let nextIndex = currentIndex

                  if (e.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + tabKeys.length) % tabKeys.length
                  if (e.key === 'ArrowRight') nextIndex = (currentIndex + 1) % tabKeys.length
                  if (e.key === 'Home') nextIndex = 0
                  if (e.key === 'End') nextIndex = tabKeys.length - 1

                  const nextKey = tabKeys[nextIndex]
                  tabRefs.current[nextKey]?.focus()
                  setTab(nextKey)
                }}
                type="button"
                className={`-mb-px border-b-2 pb-3 px-1 font-[family-name:var(--font-inter)] text-sm transition-colors duration-150 ${
                  activeTab === key
                    ? 'border-[color:var(--color-brand)] font-semibold text-gray-900'
                    : 'border-transparent font-medium text-gray-400 hover:text-gray-600'
                }`}
                aria-selected={activeTab === key}
                role="tab"
                tabIndex={activeTab === key ? 0 : -1}
                id={ids.tabId(key)}
                aria-controls={ids.panelId(key)}
              >
                {tabs[key].label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16"
            role="tabpanel"
            id={ids.panelId(activeTab)}
            aria-labelledby={ids.tabId(activeTab)}
            tabIndex={0}
          >
            {/* Left — copy */}
            <div className="min-w-0">
              <h3 className="font-[family-name:var(--font-bricolage)] text-xl font-bold leading-[1.3] tracking-[-0.04em] text-gray-900 sm:text-[22px]">
                {active.title}
              </h3>
              <p className="mt-4 font-[family-name:var(--font-inter)] text-[15px] leading-relaxed text-gray-500">
                {active.body}
              </p>
              <ul className="mt-6 space-y-3">
                {active.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle
                      size={16}
                      weight="fill"
                      className="mt-0.5 shrink-0 text-[color:var(--color-brand)]"
                    />
                    <span className="font-[family-name:var(--font-inter)] text-sm text-gray-600">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Per-tab CTA */}
              {active.cta ? (
                <button
                  onClick={() => {
                    if (active.cta?.reason) setInitialReason(active.cta.reason)
                    setContactOpen(true)
                  }}
                  className="mt-8 inline-flex items-center gap-1.5 rounded-lg border border-[color:var(--color-brand)] px-5 py-2.5 font-[family-name:var(--font-inter)] text-sm font-medium text-[color:var(--color-brand)] transition-all duration-150 hover:bg-[color:var(--color-brand-faint)]"
                >
                  {active.cta.label}
                  <ArrowRight size={14} />
                </button>
              ) : (
                <button
                  onClick={() => setContactOpen(true)}
                  className="mt-8 inline-flex items-center gap-1.5 font-[family-name:var(--font-inter)] text-sm font-medium text-[color:var(--color-brand)] transition-colors hover:text-[color:var(--color-brand-dark)]"
                >
                  Talk to Us <ArrowRight size={14} />
                </button>
              )}
            </div>

            {/* Right — visual */}
            <div className="min-w-0 max-w-xl lg:max-w-none">{active.visual}</div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  )
}
