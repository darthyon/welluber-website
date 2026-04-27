'use client'

import { ShieldCheck, Scales, ClockCounterClockwise } from '@phosphor-icons/react'
import { BorderBeam } from '@/components/magicui/border-beam'

const rows = [
  { label: '256-bit Encrypted', icon: ShieldCheck, iconColor: 'text-emerald-600', weight: 'fill' as const },
  { label: 'PDPA Compliant',    icon: Scales,      iconColor: 'text-brand', weight: 'regular' as const },
  { label: 'Full Audit Trail',  icon: ClockCounterClockwise, iconColor: 'text-brand', weight: 'regular' as const },
]

export function TrustFragment() {
  return (
    <div className="flex h-full items-center justify-center p-4">
      <div className="relative w-full rounded-[10px] border border-gray-200 bg-white px-5 py-4">
        <BorderBeam size={120} duration={6} colorFrom="var(--color-brand)" colorTo="var(--color-brand-mid)" borderWidth={1.5} />
        <div className="relative flex flex-col gap-2.5">
          {rows.map(({ label, icon: Icon, iconColor, weight }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2"
            >
              <Icon size={12} weight={weight} className={`shrink-0 ${iconColor}`} />
              <span className="font-geist text-[12px] font-medium text-gray-700">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
