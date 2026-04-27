import { Marquee } from '@/components/magicui/marquee'

const categories = [
  'Fitness',
  'Mental Health',
  'Learning & Development',
  'Meal Allowance',
  'Movie Tickets',
  'Grab Vouchers',
  'Pharmacy',
  'Childcare',
  'Recreation',
  'Spa & Wellness',
  'Sports Equipment',
  'Online Courses',
  'Team Lunches',
  'Gym Memberships',
  'Music Streaming',
  'Transportation',
  'Books & Subscriptions',
  'Wellness Retreats',
]

function CategoryPill({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm sm:px-5 sm:py-2.5">
      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-brand-mid)]" />
      <span className="font-[family-name:var(--font-inter)] text-xs text-gray-600 sm:text-sm">
        {label}
      </span>
    </div>
  )
}

export function StatsMarquee() {
  return (
    <div className="relative border-y border-gray-100 bg-gray-50 py-4">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent sm:w-24 md:w-32" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent sm:w-24 md:w-32" />

      <Marquee pauseOnHover className="[--duration:40s] [--gap:0.75rem]">
        {categories.map((label) => (
          <CategoryPill key={label} label={label} />
        ))}
      </Marquee>
    </div>
  )
}
