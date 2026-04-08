'use client'

import { ShieldCheck, Scales, ClockCounterClockwise } from '@phosphor-icons/react'
import { BorderBeam } from '@/components/magicui/border-beam'

const rows = [
  { label: '256-bit Encrypted', icon: ShieldCheck, iconColor: 'text-[#059669]', weight: 'fill' as const },
  { label: 'PDPA Compliant',    icon: Scales,      iconColor: 'text-[#4F46E5]', weight: 'regular' as const },
  { label: 'Full Audit Trail',  icon: ClockCounterClockwise, iconColor: 'text-[#4F46E5]', weight: 'regular' as const },
]

export function TrustFragment() {
  return (
    <div className="flex h-full items-center justify-center p-4">
      <div className="relative w-full rounded-[10px] border border-[#E5E7EB] bg-white px-5 py-4">
        <BorderBeam size={120} duration={6} colorFrom="#4F46E5" colorTo="#C7D2FE" borderWidth={1.5} />
        <div className="relative flex flex-col gap-2.5">
          {rows.map(({ label, icon: Icon, iconColor, weight }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2"
            >
              <Icon size={12} weight={weight} className={`shrink-0 ${iconColor}`} />
              <span className="font-[family-name:var(--font-inter)] text-[12px] font-medium text-[#374151]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
