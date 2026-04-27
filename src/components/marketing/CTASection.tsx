'use client'

import { BlurFade } from '@/components/magicui/blur-fade'
import { DotPattern } from '@/components/magicui/dot-pattern'
import { Container } from '@/components/shared/Container'
import { useContactModal } from './ContactModal'

export function CTASection() {
  const { setOpen: setContactOpen } = useContactModal()

  return (
    <section className="relative overflow-hidden bg-dark-surface py-16 sm:py-20 lg:py-24">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className="fill-white/[0.04]"
      />
      <Container className="relative">
        <BlurFade inView delay={0.1}>
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.08em] text-brand-muted">
              READY TO INVEST IN YOUR PEOPLE?
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-poppins)] text-[40px] font-bold leading-[1.15] tracking-[-0.8px] text-white">
              Stop chasing claim forms. Start seeing the spend.
            </h2>
            <p className="mt-4 font-[family-name:var(--font-inter)] text-base leading-relaxed text-dark-muted">
              Founding-cohort companies get founder-led onboarding, direct input on roadmap, and pricing locked in.
            </p>
            <button
              onClick={() => setContactOpen(true)}
              className="mt-8 inline-block rounded-lg bg-[color:var(--color-brand)] px-6 py-3 font-[family-name:var(--font-inter)] text-sm font-medium text-white transition-all duration-150 hover:bg-[color:var(--color-brand-dark)] active:scale-[0.98]"
            >
              Talk to Us
            </button>
          </div>
        </BlurFade>
      </Container>
    </section>
  )
}
