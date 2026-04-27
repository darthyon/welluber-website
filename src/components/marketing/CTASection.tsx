'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'motion/react'
import { BlurFade } from '@/components/magicui/blur-fade'
import { Container } from '@/components/shared/Container'
import { Meteors } from '@/components/magicui/meteors'
import { useContactModal } from './ContactModal'

export function CTASection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { amount: 0.2 })
  const [reduceMotion, setReduceMotion] = useState(false)
  const { setOpen: setContactOpen } = useContactModal()

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduceMotion(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return (
    <section ref={ref} className="relative overflow-hidden bg-dark-surface py-16 sm:py-20 lg:py-24">
      {isInView && !reduceMotion ? <Meteors number={16} /> : null}
      <Container className="relative">
        <BlurFade inView delay={0.1}>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-12">
            {/* Left — copy */}
            <div>
              <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.08em] text-brand-muted">
                READY TO INVEST IN YOUR PEOPLE?
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-bricolage)] text-[40px] font-bold leading-[1.15] tracking-[-0.8px] text-white">
                Your people deserve benefits<br />that actually reach them.
              </h2>
              <p className="mt-4 max-w-md font-[family-name:var(--font-inter)] text-base leading-relaxed text-dark-muted">
                Join the companies using Welluber to close the gap between wellness budgets and real outcomes — for HR, employees, and providers alike.
              </p>
              <button
                onClick={() => setContactOpen(true)}
                className="mt-8 inline-block rounded-lg bg-[color:var(--color-brand)] px-6 py-3 font-[family-name:var(--font-inter)] text-sm font-medium text-white transition-all duration-150 hover:bg-[color:var(--color-brand-dark)] active:scale-[0.98]"
              >
                Talk to Us
              </button>
            </div>

            {/* Right — decorative cards */}
            <div className="flex flex-col gap-4">
              {/* Card 1 — Policy Active */}
              <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 shadow-lg backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="font-[family-name:var(--font-inter)] text-xs font-semibold text-white">
                    Policy Active
                  </span>
                </div>
                <p className="mt-1 font-[family-name:var(--font-inter)] text-sm text-dark-muted">
                  Comprehensive Health · 1,240 employees
                </p>
              </div>

              {/* Card 2 — Utilisation */}
              <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 shadow-lg backdrop-blur-sm">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-[family-name:var(--font-inter)] text-xs font-semibold text-white">
                    Utilisation this month: 68%
                  </span>
                </div>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-brand-faint/10">
                  <div className="h-full w-[68%] rounded-full bg-brand" />
                </div>
                <div className="mt-1.5 flex justify-between">
                  <span className="font-[family-name:var(--font-inter)] text-[11px] text-dark-muted">
                    RM 136,000 spent
                  </span>
                  <span className="font-[family-name:var(--font-inter)] text-[11px] text-dark-muted">
                    of RM 200,000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      </Container>
    </section>
  )
}
