'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { TextAnimate } from '@/components/magicui/text-animate'
import { Safari } from '@/components/magicui/safari'
import { DotPattern } from '@/components/magicui/dot-pattern'
import { Container } from '@/components/shared/Container'
import { useContactModal } from './ContactModal'

const views = [
  { src: '/img1.webp', alt: 'Welluber HR dashboard — policy overview and KPI metrics' },
  { src: '/img1.webp', alt: 'Welluber employee wallet — benefits balance and redemption' },
  { src: '/img1.webp', alt: 'Welluber settlement panel — provider payouts and cycle status' },
]

export function HeroSection() {
  const { setOpen: setContactOpen } = useContactModal()
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mq.matches)
    const update = () => setReduceMotion(mq.matches)
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (reduceMotion || paused) return
    const id = setInterval(() => setCurrent((c) => (c + 1) % views.length), 6000)
    return () => clearInterval(id)
  }, [reduceMotion, paused])

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className="fill-gray-400/20 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)]"
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16">
          {/* Left col */}
          <div className="min-w-0">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-brand-mid)] bg-[color:var(--color-brand-faint)] px-3 py-1 font-[family-name:var(--font-inter)] text-xs font-medium text-[color:var(--color-brand)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-brand)]" />
              Benefits, better connected.
            </span>

            <h1 className="mt-4 font-[family-name:var(--font-bricolage)] text-4xl font-bold leading-[1.05] tracking-[-0.06em] text-gray-900 sm:text-5xl lg:text-[62px]">
              <TextAnimate animation="blurInUp" by="word">
                Benefits your employees actually use.
              </TextAnimate>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="mt-5 max-w-xl font-[family-name:var(--font-inter)] text-base leading-relaxed text-gray-500 sm:text-lg"
            >
              Fund a wallet. Employees redeem instantly. Providers get auto-settled. You see every transaction, in real time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <button
                onClick={() => setContactOpen(true)}
                className="rounded-lg bg-[color:var(--color-brand)] px-6 py-3 font-[family-name:var(--font-inter)] text-sm font-medium text-white transition-all duration-150 hover:bg-[color:var(--color-brand-dark)] active:scale-[0.98]"
              >
                Talk to Us
              </button>
              <a
                href="#features"
                className="font-[family-name:var(--font-inter)] text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
              >
                See how it works ↓
              </a>
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.3 }}
              onClick={() => setContactOpen(true)}
              className="mt-5 font-[family-name:var(--font-inter)] text-xs text-gray-400 transition-colors hover:text-[color:var(--color-brand)]"
            >
              Now onboarding the founding cohort →
            </motion.button>
          </div>

          {/* Right col — cycling screenshots */}
          <div className="relative min-w-0 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="relative overflow-hidden rounded-[15.5px] shadow-[0_24px_64px_rgba(0,0,0,0.10),0_4px_16px_rgba(0,0,0,0.06)]"
              style={{ padding: '1.5px' }}
            >
              {/* Rotating beam layer — sits behind Safari, visible only at 1.5px gap */}
              {!reduceMotion && (
                <motion.div
                  className="pointer-events-none absolute inset-[-100%] opacity-60"
                  style={{
                    background:
                      'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, var(--color-brand) 320deg, var(--color-brand-mid) 355deg, transparent 360deg)',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, ease: 'linear', repeat: Infinity }}
                />
              )}

              <Safari url="app.welluber.com" className="relative">
                <div className="relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src={views[current].src}
                        alt={views[current].alt}
                        width={1600}
                        height={877}
                        priority={current === 0}
                        fetchPriority={current === 0 ? 'high' : 'auto'}
                        sizes="(min-width: 1024px) 640px, 100vw"
                        className="h-auto w-full"
                        draggable={false}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </Safari>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
