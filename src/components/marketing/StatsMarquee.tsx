'use client'

import {
  Barbell,
  Brain,
  BookOpen,
  ForkKnife,
  FilmStrip,
  Pill,
  SoccerBall,
  HandHeart,
  Sneaker,
  GraduationCap,
  MusicNotes,
  Bus,
  Books,
  Heart,
} from '@phosphor-icons/react'
import { Marquee } from '@/components/magicui/marquee'

const categories = [
  { label: 'Health & Wellness', Icon: Heart },
  { label: 'Fitness', Icon: Barbell },
  { label: 'Mental Health', Icon: Brain },
  { label: 'Learning & Development', Icon: BookOpen },
  { label: 'Meal Allowance', Icon: ForkKnife },
  { label: 'Movie Tickets', Icon: FilmStrip },
  { label: 'Pharmacy', Icon: Pill },
  { label: 'Recreation', Icon: SoccerBall },
  { label: 'Spa & Wellness', Icon: HandHeart },
  { label: 'Sports Equipment', Icon: Sneaker },
  { label: 'Online Courses', Icon: GraduationCap },
  { label: 'Gym Memberships', Icon: Barbell },
  { label: 'Music Streaming', Icon: MusicNotes },
  { label: 'Transportation', Icon: Bus },
  { label: 'Books & Subscriptions', Icon: Books },
] as const

function CategoryPill({
  label,
  Icon,
}: {
  label: string
  Icon: React.ComponentType<{ size: number; className?: string }>
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm sm:px-5 sm:py-2.5">
      <Icon size={14} className="text-[color:var(--color-brand)]" />
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

      <Marquee pauseOnHover className="[--duration:50s] [--gap:0.75rem]">
        {categories.map(({ label, Icon }) => (
          <CategoryPill key={label} label={label} Icon={Icon} />
        ))}
      </Marquee>
    </div>
  )
}
