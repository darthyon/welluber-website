'use client'

import React, { useRef, useState, useEffect } from 'react'
import { useInView } from 'motion/react'
import {
  CheckCircle,
  ArrowsLeftRight,
  Clock,
  Buildings,
  Ticket,
  MapPin,
  UserCircle,
  ShieldCheck,
} from '@phosphor-icons/react'
import { AnimatedList } from '@/components/magicui/animated-list'

type ColorKey = 'green' | 'indigo' | 'amber' | 'blue'
type IconKey = 'CheckCircle' | 'ArrowsLeftRight' | 'Clock' | 'Buildings' | 'Ticket' | 'MapPin' | 'UserCircle' | 'ShieldCheck'

interface NotificationItem {
  color: ColorKey
  icon: IconKey
  title: string
  sub: string
}

const notifications: NotificationItem[] = [
  { color: 'green',  icon: 'CheckCircle',     title: 'Payout completed',       sub: 'FitMalaysia Gyms · RM 4,200' },
  { color: 'indigo', icon: 'Ticket',          title: 'Voucher purchased',       sub: 'Sarah Tan · Yoga Class · RM 80' },
  { color: 'blue',   icon: 'MapPin',          title: 'Check-in recorded',       sub: 'Marcus Wong · WellSpa KL' },
  { color: 'amber',  icon: 'Clock',           title: 'Pending approval',        sub: 'NutriHub MY · RM 5,000' },
  { color: 'indigo', icon: 'UserCircle',      title: 'Member activated',        sub: 'Aisha Lim · Acme Corp' },
  { color: 'green',  icon: 'ArrowsLeftRight', title: 'Settlement processed',    sub: 'May cycle · 12 providers' },
  { color: 'blue',   icon: 'MapPin',          title: 'Check-in recorded',       sub: 'Raj Kumar · FitMalaysia Gyms' },
  { color: 'indigo', icon: 'Ticket',          title: 'Voucher redeemed',        sub: 'Chen Wei · Mental Health Session' },
  { color: 'green',  icon: 'CheckCircle',     title: 'Payout completed',        sub: 'MindCare Clinic · RM 3,200' },
  { color: 'blue',   icon: 'MapPin',          title: 'Check-in recorded',       sub: 'Nurul Ain · YogaFlow Studio' },
  { color: 'amber',  icon: 'Buildings',       title: 'Wallet topped up',        sub: 'Global Tech Solutions · RM 50,000' },
  { color: 'indigo', icon: 'Ticket',          title: 'Voucher purchased',       sub: 'Hafiz Azman · Physio Session · RM 120' },
  { color: 'green',  icon: 'CheckCircle',     title: 'Payout completed',        sub: 'YogaFlow Studio · RM 2,800' },
  { color: 'blue',   icon: 'MapPin',          title: 'Check-in recorded',       sub: 'Priya Nair · NutriHub MY' },
  { color: 'indigo', icon: 'UserCircle',      title: 'Organisation onboarded',  sub: 'Nexus Innovations · 850 employees' },
  { color: 'indigo', icon: 'Ticket',          title: 'Voucher redeemed',        sub: 'David Loh · Gym Monthly Pass · RM 150' },
  { color: 'green',  icon: 'ArrowsLeftRight', title: 'Commission calculated',   sub: 'Welluber 15% · RM 1,860' },
  { color: 'blue',   icon: 'MapPin',          title: 'Check-in recorded',       sub: 'Syafiq Roslan · MindCare Clinic' },
  { color: 'amber',  icon: 'Clock',           title: 'Awaiting bank transfer',  sub: 'WellSpa KL · RM 1,950' },
  { color: 'indigo', icon: 'ShieldCheck',     title: 'KYC verified',            sub: 'NutriHub MY · 3 documents approved' },
]

const iconMap: Record<IconKey, React.ComponentType<{ size: number; className?: string }>> = {
  CheckCircle: CheckCircle,
  ArrowsLeftRight: ArrowsLeftRight,
  Clock: Clock,
  Buildings: Buildings,
  Ticket: Ticket,
  MapPin: MapPin,
  UserCircle: UserCircle,
  ShieldCheck: ShieldCheck,
}

const colorStyles: Record<ColorKey, { well: string; icon: string }> = {
  green:  { well: 'bg-[#D1FAE5]', icon: 'text-[#059669]' },
  indigo: { well: 'bg-[#EEF2FF]', icon: 'text-[#4F46E5]' },
  amber:  { well: 'bg-[#FEF3C7]', icon: 'text-[#D97706]' },
  blue:   { well: 'bg-[#DBEAFE]', icon: 'text-[#2563EB]' },
}

function NotificationRow({ color, icon, title, sub }: NotificationItem) {
  const Icon = iconMap[icon]
  const { well, icon: iconColor } = colorStyles[color]

  return (
    <div className="flex items-center gap-3 rounded-[10px] border border-[#E5E7EB] bg-white px-3 py-2.5 shadow-xs">
      <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${well}`}>
        <Icon size={14} className={iconColor} />
      </div>
      <div className="min-w-0">
        <p className="truncate font-[family-name:var(--font-inter)] text-[13px] font-semibold text-gray-900">{title}</p>
        <p className="truncate font-[family-name:var(--font-inter)] text-[12px] text-gray-400">{sub}</p>
      </div>
    </div>
  )
}

const DELAY = 1400
const MAX_CYCLES = 2
// time to show all items + 2s pause before restarting
const CYCLE_DURATION = DELAY * (notifications.length - 1) + 2000

export function SettlementFragment() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { amount: 0.3 })
  const [cycleKey, setCycleKey] = useState(0)
  const [cycleCount, setCycleCount] = useState(0)
  const prevInView = useRef(false)

  // Reset and replay each time card enters viewport
  useEffect(() => {
    if (isInView && !prevInView.current) {
      setCycleCount(0)
      setCycleKey((k) => k + 1)
    }
    prevInView.current = isInView
  }, [isInView])

  // Advance cycle until MAX_CYCLES
  useEffect(() => {
    if (!isInView || cycleCount >= MAX_CYCLES) return
    const timer = setTimeout(() => {
      setCycleCount((c) => c + 1)
      setCycleKey((k) => k + 1)
    }, CYCLE_DURATION)
    return () => clearTimeout(timer)
  }, [isInView, cycleCount])

  return (
    <div ref={ref} className="relative h-full overflow-hidden p-3">
      <AnimatedList key={cycleKey} delay={DELAY} className="gap-2">
        {notifications.map((item, i) => (
          <NotificationRow key={i} {...item} />
        ))}
      </AnimatedList>
      {/* Bottom fade mask */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-14"
        style={{ background: 'linear-gradient(to bottom, transparent, white)' }}
      />
    </div>
  )
}
