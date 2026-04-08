'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'
import Image from 'next/image'
import { TextAnimate } from '@/components/magicui/text-animate'
import { NumberTicker } from '@/components/magicui/number-ticker'
import { Safari } from '@/components/magicui/safari'
import { GridPattern } from '@/components/magicui/grid-pattern'
import { Container } from '@/components/shared/Container'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Subtle grid background */}
      <GridPattern
        width={40}
        height={40}
        className="[mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)] opacity-40"
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16">
          {/* Left col */}
          <div className="min-w-0">
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-brand-mid)] bg-[color:var(--color-brand-faint)] px-3 py-1 font-[family-name:var(--font-inter)] text-xs font-medium text-[color:var(--color-brand)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-brand)]" />
              Corporate Wellness · Malaysia
            </span>

            {/* H1 */}
            <h1 className="mt-4 font-[family-name:var(--font-bricolage)] text-4xl font-bold leading-[1.05] tracking-[-0.06em] text-gray-900 sm:text-5xl lg:text-[62px]">
              <TextAnimate animation="blurInUp" by="word">
                Benefits your employees actually use.
              </TextAnimate>
            </h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="mt-5 max-w-xl font-[family-name:var(--font-inter)] text-base leading-relaxed text-gray-500 sm:text-lg"
            >
              One platform for HR teams to set policies, employees to spend, and service providers to get paid.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="mailto:contact@welluber.com"
                className="rounded-lg bg-[color:var(--color-brand)] px-6 py-3 font-[family-name:var(--font-inter)] text-sm font-medium text-white transition-all duration-150 hover:bg-[color:var(--color-brand-dark)] active:scale-[0.98]"
              >
                Talk to Us
              </a>
              <a
                href="#features"
                className="flex items-center gap-1 font-[family-name:var(--font-inter)] text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
              >
                See how it works
                <ArrowRight size={14} weight="regular" />
              </a>
            </motion.div>
          </div>

          {/* Right col — real screenshot */}
          <div className="relative min-w-0 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <Safari
                url="app.welluber.com"
                className="shadow-[0_24px_64px_rgba(0,0,0,0.10),0_4px_16px_rgba(0,0,0,0.06)]"
              >
                {/* Real product screenshot */}
                <Image
                  src="/img1.webp"
                  alt="Welluber admin dashboard showing system overview, KPI metrics, performance chart, and settlement panel"
                  width={1600}
                  height={877}
                  priority
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className="h-auto w-full"
                  draggable={false}
                />
              </Safari>
            </motion.div>

            {/* Floating card 1 — bottom left */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-4 left-0 z-10 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-lg sm:-left-6 md:-left-8"
            >
              <p className="font-[family-name:var(--font-inter)] text-[10px] font-medium uppercase tracking-wide text-gray-400">
                Platform capacity
              </p>
              <p className="font-[family-name:var(--font-inter)] text-xs text-gray-400">Latest Payout</p>
              <div className="font-[family-name:var(--font-inter)] text-lg font-semibold text-gray-900">
                RM <NumberTicker value={45200} className="text-gray-900" />
              </div>
            </motion.div>

            {/* Floating card 2 — top right */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute -top-4 right-0 z-10 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-lg sm:-right-6 md:-right-8"
            >
              <p className="font-[family-name:var(--font-inter)] text-[10px] font-medium uppercase tracking-wide text-gray-400">
                Platform capacity
              </p>
              <p className="font-[family-name:var(--font-inter)] text-xs text-gray-400">Active Members</p>
              <div className="flex items-center gap-2">
                <span className="font-[family-name:var(--font-inter)] text-lg font-semibold text-gray-900">
                  <NumberTicker value={128492} className="text-gray-900" />
                </span>
                <span className="font-[family-name:var(--font-inter)] text-xs font-medium text-emerald-500">↑ 1.2%</span>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
