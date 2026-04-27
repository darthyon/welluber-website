import { Marquee } from '@/components/magicui/marquee'

const stats = [
  { label: 'Active Members', value: '128,492' },
  { label: 'Organisations', value: '1,042' },
  { label: 'Service Providers', value: '248' },
  { label: 'Pending Payouts', value: 'RM 18.2M' },
  { label: 'Platform Profitability', value: 'RM 2.4M' },
  { label: 'Settlement Accuracy', value: '99.8%' },
  { label: 'Avg. Setup Time', value: '< 2 weeks' },
  { label: 'Benefit Categories', value: '12+' },
]

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm sm:px-5 sm:py-2.5">
      <span className="font-[family-name:var(--font-inter)] text-xs font-semibold text-gray-900 sm:text-sm">
        {value}
      </span>
      <span className="h-1 w-1 rounded-full bg-[color:var(--color-brand-mid)]" />
      <span className="font-[family-name:var(--font-inter)] text-xs text-gray-400 sm:text-sm">
        {label}
      </span>
    </div>
  )
}

export function StatsMarquee() {
  return (
    <div className="relative border-y border-gray-100 bg-gray-50 py-4">
      {/* Fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent sm:w-24 md:w-32" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent sm:w-24 md:w-32" />

      <Marquee pauseOnHover className="[--duration:35s] [--gap:0.75rem]">
        {stats.map((s) => (
          <StatPill key={s.label} {...s} />
        ))}
      </Marquee>
    </div>
  )
}
