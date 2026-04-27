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
  green:  { well: 'bg-emerald-100', icon: 'text-emerald-600' },
  indigo: { well: 'bg-brand-faint', icon: 'text-brand' },
  amber:  { well: 'bg-amber-100', icon: 'text-amber-600' },
  blue:   { well: 'bg-blue-100', icon: 'text-blue-600' },
}

function NotificationRow({ color, icon, title, sub }: NotificationItem) {
  const Icon = iconMap[icon]
  const { well, icon: iconColor } = colorStyles[color]

  return (
    <div className="flex items-center gap-2.5 rounded-lg border border-gray-200 bg-white px-2.5 py-2 shadow-xs">
      <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${well}`}>
        <Icon size={12} className={iconColor} />
      </div>
      <div className="min-w-0">
        <p className="truncate font-[family-name:var(--font-inter)] text-[12px] font-semibold text-gray-900">{title}</p>
        <p className="truncate font-[family-name:var(--font-inter)] text-[11px] text-gray-400">{sub}</p>
      </div>
    </div>
  )
}

const DELAY = 1200
const MAX_CYCLES = 3
const CYCLE_DURATION = DELAY * (notifications.length - 1) + 2000

export function SettlementFragment() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { amount: 0.3 })
  const [cycleKey, setCycleKey] = useState(0)
  const [cycleCount, setCycleCount] = useState(0)
  const prevInView = useRef(false)

  useEffect(() => {
    if (isInView && !prevInView.current) {
      setCycleCount(0)
      setCycleKey((k) => k + 1)
    }
    prevInView.current = isInView
  }, [isInView])

  useEffect(() => {
    if (!isInView || cycleCount >= MAX_CYCLES) return
    const timer = setTimeout(() => {
      setCycleCount((c) => c + 1)
      setCycleKey((k) => k + 1)
    }, CYCLE_DURATION)
    return () => clearTimeout(timer)
  }, [isInView, cycleCount])

  return (
    <div ref={ref} className="relative h-full min-h-0 overflow-hidden p-2">
      <div className="absolute inset-0 overflow-hidden p-2">
        <AnimatedList key={cycleKey} delay={DELAY} className="gap-1.5">
          {notifications.map((item, i) => (
            <NotificationRow key={i} {...item} />
          ))}
        </AnimatedList>
      </div>
      {/* Bottom fade mask */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-12"
        style={{ background: 'linear-gradient(to bottom, transparent, white)' }}
      />
    </div>
  )
}
