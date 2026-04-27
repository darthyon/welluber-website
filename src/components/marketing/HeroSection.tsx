'use client'

import { motion } from 'framer-motion'
import { TextAnimate } from '@/components/magicui/text-animate'
import { DotPattern } from '@/components/magicui/dot-pattern'
import { Container } from '@/components/shared/Container'
import { HeroCardStack } from './HeroCardStack'
import { useContactModal } from './ContactModal'

export function HeroSection() {
  const { setOpen: setContactOpen } = useContactModal()

  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
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
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-mid bg-brand-faint px-3 py-1 font-geist text-xs font-medium text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Benefits, better connected.
            </span>

            <h1 className="mt-4 font-poppins text-4xl font-bold leading-[1.05] tracking-[-0.06em] text-gray-900 sm:text-5xl lg:text-[62px]">
              <TextAnimate animation="blurInUp" by="word">
                Benefits your employees actually use.
              </TextAnimate>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="mt-5 max-w-xl font-geist text-base leading-relaxed text-gray-500 sm:text-lg"
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
                className="rounded-lg bg-brand px-6 py-3 font-geist text-sm font-medium text-white transition-all duration-150 hover:bg-brand-dark active:scale-[0.98]"
              >
                Talk to Us
              </button>
              <a
                href="#features"
                className="font-geist text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
              >
                See how it works ↓
              </a>
            </motion.div>


          </div>

          {/* Right col — card stack */}
          <div className="relative min-w-0 lg:mt-0">
            <HeroCardStack />
          </div>
        </div>
      </Container>
    </section>
  )
}
