'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BlurFade } from '@/components/magicui/blur-fade'
import { DashboardWireframe } from '@/components/wireframes/DashboardWireframe'
import { Container } from '@/components/shared/Container'

const steps = [
  {
    number: '01',
    title: 'HR sets the policy',
    description:
      'Define budgets, eligibility, and categories in minutes. Changes apply forward — past records stay immutable.',
  },
  {
    number: '02',
    title: 'Employees spend',
    description:
      'Browse verified providers, redeem vouchers, or walk in anywhere. The wallet handles the rest.',
  },
  {
    number: '03',
    title: 'Providers get paid',
    description:
      "Automated settlements, zero invoice chasing. Providers see exactly what's owed and when it arrives.",
  },
]

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="how-it-works" className="bg-[#F9FAFB] py-16 sm:py-20 lg:py-24 scroll-mt-24">
      <Container>
        <BlurFade inView delay={0.1}>
          <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--color-brand)]">
            HOW IT WORKS
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-bricolage)] text-2xl font-bold leading-[1.15] tracking-[-0.06em] text-gray-900 sm:text-3xl lg:text-[40px]">
            From setup to settled — in weeks.
          </h2>
        </BlurFade>

        <div className="mt-10 grid gap-10 lg:mt-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-16">
          {/* Steps — left */}
          <div className="min-w-0">
            {steps.map((step, i) => (
              <BlurFade key={i} inView delay={0.1 + i * 0.08}>
                <button
                  onClick={() => setActiveStep(i)}
                  type="button"
                  className={`w-full border-t border-gray-200 py-6 text-left transition-all duration-150 ${
                    activeStep === i ? 'border-l-2 border-l-[color:var(--color-brand)] pl-4' : 'pl-0'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-[family-name:var(--font-inter)] text-xs font-medium text-gray-400">
                      {step.number}
                    </span>
                    <span
                      className={`font-[family-name:var(--font-inter)] text-base font-semibold transition-colors duration-150 ${
                        activeStep === i ? 'text-gray-900' : 'text-gray-400'
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>

                  <AnimatePresence>
                    {activeStep === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 pl-8 font-[family-name:var(--font-inter)] text-[15px] leading-relaxed text-gray-500">
                          {step.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </BlurFade>
            ))}
            {/* Bottom border */}
            <div className="border-t border-gray-200" />
          </div>

          {/* Right — static wireframe */}
          <BlurFade inView delay={0.2}>
            <div className="min-w-0 origin-top lg:scale-[0.85]">
              <DashboardWireframe />
            </div>
          </BlurFade>
        </div>
      </Container>
    </section>
  )
}
