'use client'

import {
  ClipboardText,
  Wallet,
  ArrowsLeftRight,
  ChartBar,
  Buildings,
  ShieldCheck,
} from '@phosphor-icons/react'
import { BlurFade } from '@/components/magicui/blur-fade'
import { BorderBeam } from '@/components/magicui/border-beam'
import { MagicCard } from '@/components/magicui/magic-card'
import { PolicyFragment } from '@/components/wireframes/PolicyFragment'
import { WalletFragment } from '@/components/wireframes/WalletFragment'
import { SettlementFragment } from '@/components/wireframes/SettlementFragment'
import { AnalyticsFragment } from '@/components/wireframes/AnalyticsFragment'
import { OrgListFragment } from '@/components/wireframes/OrgListFragment'
import { TrustFragment } from '@/components/wireframes/TrustFragment'
import { Container } from '@/components/shared/Container'

interface CardProps {
  icon: React.ReactNode
  overline: string
  title: string
  description: string
  visual: React.ReactNode
  featured?: boolean
  delay?: number
}

function BentoCard({ icon, overline, title, description, visual, featured, delay = 0 }: CardProps) {
  return (
    <BlurFade inView delay={delay} className="h-full">
      <MagicCard className="h-full">
        <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white p-6 transition-all duration-150 hover:-translate-y-0.5 hover:border-brand hover:shadow-[0_8px_24px_rgba(67,56,202,0.08)] sm:p-7">
          {featured && <BorderBeam colorFrom="var(--color-brand)" colorTo="var(--color-brand-mid)" duration={8} />}
          {/* Visual area — grows to fill available space */}
          <div className="min-h-[160px] overflow-hidden rounded-lg border border-gray-100 bg-gray-50 sm:min-h-[200px] sm:h-auto sm:flex-1">
            {visual}
          </div>
          {/* Icon + overline row */}
          <div className="mt-4 flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded text-brand">
              {icon}
            </div>
            <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.08em] text-brand">
              {overline}
            </p>
          </div>
          <h4 className="mt-1 font-[family-name:var(--font-inter)] text-base font-semibold text-gray-900">
            {title}
          </h4>
          <p className="mt-1 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-gray-500">
            {description}
          </p>
        </div>
      </MagicCard>
    </BlurFade>
  )
}

export function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-16 sm:py-20 lg:py-24 scroll-mt-24">
      <Container>
        <BlurFade inView delay={0.1}>
          <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.08em] text-brand">
            Built for Everyone
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-poppins)] text-2xl font-bold leading-[1.15] tracking-[-0.06em] text-gray-900 sm:text-3xl lg:text-[40px]">
            One platform. Three perspectives.
          </h2>
          <p className="mt-4 max-w-2xl font-[family-name:var(--font-inter)] text-base text-gray-500">
            HR admins set the rules. Employees spend freely. Providers get paid on time. No spreadsheets, no manual claims, no reconciliation headaches.
          </p>
        </BlurFade>

        {/* Bento grid — responsive named areas */}
        <div
          className="mt-10 grid gap-4 sm:mt-12 sm:[grid-template-columns:minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] sm:[grid-template-rows:minmax(320px,auto)_minmax(320px,auto)_minmax(320px,auto)] sm:[grid-template-areas:'policy_policy_settlement''wallet_analytics_settlement''org_org_compliance']"
        >
          {/* Policy — first cell, spans 2 cols on desktop via named area */}
          <div className="sm:[grid-area:policy]">
            <BentoCard
              icon={<ClipboardText size={16} />}
              overline="POLICY"
              title="Benefit policy engine"
              description="Set rules by role, department, or employment type. Changes apply forward — past records stay locked."
              visual={<PolicyFragment />}
              delay={0.1}
            />
          </div>

          {/* Settlement — last column, spans rows 1+2 via named area */}
          <div className="sm:[grid-area:settlement]">
            <BentoCard
              icon={<ArrowsLeftRight size={16} />}
              overline="SETTLEMENT"
              title="Automated settlements"
              description="Commission splits, payout cycles, and ledger reconciliation — handled on schedule, every time."
              visual={<SettlementFragment />}
              delay={0.13}
            />
          </div>

          {/* Wallet */}
          <div className="sm:[grid-area:wallet]">
            <BentoCard
              icon={<Wallet size={16} />}
              overline="WALLET"
              title="Digital vouchers & wallet"
              description="Employees browse, purchase, and redeem in-app or walk in. No cash. No paper receipts."
              visual={<WalletFragment />}
              delay={0.16}
            />
          </div>

          {/* Analytics */}
          <div className="sm:[grid-area:analytics]">
            <BentoCard
              icon={<ChartBar size={16} />}
              overline="ANALYTICS"
              title="Real-time analytics"
              description="Utilisation rates, voucher lifecycle, and settlement volume — live, not at month-end."
              visual={<AnalyticsFragment />}
              delay={0.19}
            />
          </div>

          {/* Org — spans 2 cols via named area */}
          <div className="sm:[grid-area:org]">
            <BentoCard
              icon={<Buildings size={16} />}
              overline="MULTI-ORG"
              title="Every org. Every branch. One view."
              description="Onboard any number of organisations and branches. Each runs independently. You see everything."
              visual={<OrgListFragment />}
              delay={0.22}
            />
          </div>

          {/* Trust */}
          <div className="sm:[grid-area:compliance]">
            <BentoCard
              icon={<ShieldCheck size={16} />}
              overline="TRUST"
              title="Bank-grade security"
              description="Every transaction encrypted, logged, and tamper-proof at every layer."
              visual={<TrustFragment />}
              delay={0.25}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
