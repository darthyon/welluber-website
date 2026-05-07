'use client'

import { useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle } from '@phosphor-icons/react'
import { Marquee } from '@/components/magicui/marquee'
import { BlurFade } from '@/components/magicui/blur-fade'
import { Container } from '@/components/shared/Container'
import { TabPanelHR } from '@/components/wireframes/TabPanelHR'
import { TabPanelEmployee } from '@/components/wireframes/TabPanelEmployee'
import { TabPanelSP } from '@/components/wireframes/TabPanelSP'
import { useContactModal } from './ContactModal'

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

type RoleKey = 'hr' | 'employee' | 'sp'

interface PainPoint {
  avatar: string
  alt: string
  role: string
  roleKey: RoleKey
  quote: string
}

const roleColors: Record<RoleKey, { ring: string; bg: string; dot: string }> = {
  hr: { ring: 'ring-brand', bg: 'bg-brand/10', dot: 'bg-brand' },
  employee: { ring: 'ring-emerald-500', bg: 'bg-emerald-50', dot: 'bg-emerald-500' },
  sp: { ring: 'ring-amber-500', bg: 'bg-amber-50', dot: 'bg-amber-500' },
}

const row1: PainPoint[] = [
  {
    avatar: '/images/avatars/hr-1.webp',
    alt: 'HR Admin avatar',
    role: 'HR Admin',
    roleKey: 'hr',
    quote: 'I spent months building a benefits playbook. Nobody opened and read it.',
  },
  {
    avatar: '/images/avatars/emp-1.webp',
    alt: 'Employee avatar',
    role: 'Employee',
    roleKey: 'employee',
    quote: 'I have no idea what benefits I\'m even entitled to.',
  },
  {
    avatar: '/images/avatars/sp-1.webp',
    alt: 'Service Provider avatar',
    role: 'Service Provider',
    roleKey: 'sp',
    quote: 'I\'m still waiting for payments from last quarter.',
  },
  {
    avatar: '/images/avatars/emp-2.webp',
    alt: 'Employee avatar',
    role: 'Employee',
    roleKey: 'employee',
    quote: 'I prepaid for a gym membership I\'ll never use.',
  },
]

const row2: PainPoint[] = [
  {
    avatar: '/images/avatars/hr-2.webp',
    alt: 'HR Admin avatar',
    role: 'HR Admin',
    roleKey: 'hr',
    quote: 'I\'m drowning in spreadsheets tracking who spent what.',
  },
  {
    avatar: '/images/avatars/sp-2.webp',
    alt: 'Service Provider avatar',
    role: 'Service Provider',
    roleKey: 'sp',
    quote: 'Every corporate client has a different invoice process.',
  },
  {
    avatar: '/images/avatars/emp-3.webp',
    alt: 'Employee avatar',
    role: 'Employee',
    roleKey: 'employee',
    quote: 'Filing a claim means a week of back-and-forth.',
  },
  {
    avatar: '/images/avatars/hr-3.webp',
    alt: 'HR Admin avatar',
    role: 'HR Admin',
    roleKey: 'hr',
    quote: 'We spend thousands on benefits nobody uses.',
  },
]

/* ------------------------------------------------------------------ */
/*  Tab content                                                        */
/* ------------------------------------------------------------------ */

type TabKey = 'hr' | 'employee' | 'sp'

interface TabContent {
  label: string
  title: string
  body: string
  bullets: string[]
  visual: React.ReactNode
}

const tabs: Record<TabKey, TabContent> = {
  hr: {
    label: 'HR Admin',
    title: 'Total control. Complete visibility.',
    body: 'Define policies by role, set spending limits, and monitor utilisation across your entire workforce — with a full audit trail built in from day one.',
    bullets: [
      'Policy deployed in minutes, not weeks',
      'Real-time budget tracking per employee and category',
      'Immutable records, compliance-ready at all times',
    ],
    visual: <TabPanelHR />,
  },
  sp: {
    label: 'Service Providers',
    title: 'Grow your clientele. Get paid reliably.',
    body: 'Access a network of corporate clients and receive guaranteed, automated settlements every cycle — so you can focus on delivering great service, not tracking down payments.',
    bullets: [
      'Monthly settlements, direct to your bank account',
      'Real-time payout and transaction visibility',
      'No invoicing, no follow-up, no delays',
    ],
    visual: <TabPanelSP />,
  },
  employee: {
    label: 'Employees',
    title: 'Your benefits, on your terms.',
    body: 'The moment HR activates your account, your wallet is live. Browse verified providers, purchase in-app, or walk in — no forms, no reimbursements, no out-of-pocket surprises.',
    bullets: [
      'Access verified service providers',
      'Spend online or walk in — one wallet, everywhere',
      'See your balance, history, and entitlements in real time',
    ],
    visual: <TabPanelEmployee />,
  },
}

const tabKeys: TabKey[] = ['hr', 'sp', 'employee']

/* ------------------------------------------------------------------ */
/*  Avatar component                                                   */
/* ------------------------------------------------------------------ */

function AvatarCircle({
  src,
  alt,
  roleKey,
}: {
  src: string
  alt: string
  roleKey: RoleKey
}) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className={`h-10 w-10 shrink-0 rounded-full ${roleColors[roleKey].bg}`}
      />
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className={`h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-offset-1 ${roleColors[roleKey].ring}`}
      draggable={false}
    />
  )
}

/* ------------------------------------------------------------------ */
/*  Pain point card                                                    */
/* ------------------------------------------------------------------ */

function PainPointCard({ point }: { point: PainPoint }) {
  return (
    <div className="flex w-[280px] shrink-0 flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:w-[300px]">
      {/* Avatar + role badge row */}
      <div className="flex items-center gap-2.5">
        <AvatarCircle
          src={point.avatar}
          alt={point.alt}
          roleKey={point.roleKey}
        />
        <div className="inline-flex items-center gap-1.5 rounded-full border border-gray-200/60 bg-white/80 px-2.5 py-0.5">
          <span
            className={`h-1.5 w-1.5 rounded-full ${roleColors[point.roleKey].dot}`}
          />
          <span className="font-geist text-xs font-medium text-gray-600">
            {point.role}
          </span>
        </div>
      </div>

      {/* Quote — no quotation marks, reads as dialogue */}
      <p className="font-geist text-sm leading-relaxed text-gray-700">
        {point.quote}
      </p>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main section                                                       */
/* ------------------------------------------------------------------ */

export function PlatformSection() {
  const [activeTab, setActiveTab] = useState<TabKey>('hr')
  const active = tabs[activeTab]
  const { setOpen: setContactOpen } = useContactModal()

  const selectTab = useCallback((key: TabKey) => {
    setActiveTab(key)
  }, [])

  return (
    <section id="platform" className="overflow-hidden bg-gray-50 py-16 sm:py-20 lg:py-24 scroll-mt-24">
      <Container>
        {/* ════════ HEADER ════════ */}
        <BlurFade inView delay={0.1}>
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-geist text-xs font-semibold uppercase tracking-[0.08em] text-brand">
              THE GAP
            </p>
            <h2 className="mt-3 font-poppins text-2xl font-bold leading-[1.15] tracking-[-0.06em] text-gray-900 sm:text-3xl lg:text-[40px]">
              What we heard. What we built.
            </h2>
            <p className="mt-4 font-geist text-base leading-relaxed text-gray-500">
              We talked to HR teams, employees, and providers. Here&apos;s what
              they told us — and what we built to fix it.
            </p>
          </div>
        </BlurFade>

        {/* ════════ PAIN POINT MARQUEE ════════ */}
        <div className="relative mt-10 sm:mt-12">
          {/* Edge fade masks — wider for smooth transition */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-gray-50 to-transparent sm:w-36 lg:w-48" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-gray-50 to-transparent sm:w-36 lg:w-48" />

          <div className="space-y-4">
            {/* Row 1 — scrolls left */}
            <Marquee pauseOnHover className="[--duration:35s] [--gap:1rem]">
              {row1.map((point, i) => (
                <PainPointCard key={`r1-${i}`} point={point} />
              ))}
            </Marquee>

            {/* Row 2 — scrolls right */}
            <Marquee reverse pauseOnHover className="[--duration:40s] [--gap:1rem]">
              {row2.map((point, i) => (
                <PainPointCard key={`r2-${i}`} point={point} />
              ))}
            </Marquee>
          </div>
        </div>

        {/* ════════ TRANSITION HEADER ════════ */}
        <BlurFade inView delay={0.1}>
          <div className="mx-auto mt-16 max-w-xl text-center sm:mt-20">
            <p className="font-geist text-xs font-semibold uppercase tracking-[0.08em] text-brand">
              THE FIX
            </p>
            <h3 className="mt-3 font-poppins text-xl font-bold leading-[1.2] tracking-[-0.04em] text-gray-900 sm:text-2xl">
              Pick your role. See how WellUber changes things.
            </h3>
          </div>
        </BlurFade>

        {/* ════════ TABS ════════ */}
        <div className="mt-8 border-b border-gray-200 sm:mt-10">
          <div className="flex justify-center gap-4 overflow-x-auto pb-1 sm:gap-8">
            {tabKeys.map((key) => (
              <button
                key={key}
                onClick={() => selectTab(key)}
                type="button"
                className={`-mb-px border-b-2 pb-3 px-1 font-geist text-sm transition-colors duration-150 ${
                  activeTab === key
                    ? 'border-brand font-semibold text-gray-900'
                    : 'border-transparent font-medium text-gray-400 hover:text-gray-600'
                }`}
                aria-selected={activeTab === key}
                role="tab"
              >
                {tabs[key].label}
              </button>
            ))}
          </div>
        </div>

        {/* ════════ TAB CONTENT ════════ */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16"
            role="tabpanel"
          >
            {/* Left — copy */}
            <div className="min-w-0">
              <h3 className="font-poppins text-xl font-bold leading-[1.3] tracking-[-0.04em] text-gray-900 sm:text-[22px]">
                {active.title}
              </h3>
              <p className="mt-4 font-geist text-[15px] leading-relaxed text-gray-500">
                {active.body}
              </p>
              <ul className="mt-6 space-y-3">
                {active.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle
                      size={16}
                      weight="fill"
                      className="mt-0.5 shrink-0 text-brand"
                    />
                    <span className="font-geist text-sm text-gray-600">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>


            </div>

            {/* Right — visual */}
            <div className="min-w-0 max-w-xl lg:max-w-none">
              {active.visual}
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  )
}
