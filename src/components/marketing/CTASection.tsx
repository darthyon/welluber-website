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
            <p className="font-geist text-xs font-semibold uppercase tracking-[0.08em] text-brand-muted">
              READY TO INVEST IN YOUR PEOPLE?
            </p>
            <h2 className="mt-3 font-poppins text-[40px] font-bold leading-[1.15] tracking-[-0.8px] text-white">
              Stop chasing claim forms. Start seeing the spend.
            </h2>
            <p className="mt-4 font-geist text-base leading-relaxed text-dark-muted">
              Early adopters work directly with our founders, help shape what we build next, and lock in their pricing from day one.
            </p>
            <button
              onClick={() => setContactOpen(true)}
              className="mt-8 inline-block rounded-lg bg-brand px-6 py-3 font-geist text-sm font-medium text-white transition-all duration-150 hover:bg-brand-dark active:scale-[0.98]"
            >
              Talk to Us
            </button>
          </div>
        </BlurFade>
      </Container>
    </section>
  )
}
