'use client'

import { useEffect, useRef, useState } from 'react'
import { Buildings, UserCircle, Storefront } from '@phosphor-icons/react'
import { useInView } from 'motion/react'
import { AnimatedBeam } from '@/components/magicui/animated-beam'
import { BlurFade } from '@/components/magicui/blur-fade'
import { Ripple } from '@/components/magicui/ripple'
import { Container } from '@/components/shared/Container'

function Node({
  nodeRef,
  icon,
  label,
  sublabel,
}: {
  nodeRef: React.RefObject<HTMLDivElement | null>
  icon: React.ReactNode
  label: string
  sublabel: string
}) {
  return (
    <div
      ref={nodeRef}
      className="flex flex-col items-center gap-2.5 rounded-2xl border border-gray-200 bg-white px-4 py-4 text-center shadow-sm sm:gap-3 sm:px-8 sm:py-6"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[color:var(--color-brand-faint)] text-[color:var(--color-brand)] sm:h-12 sm:w-12">
        {icon}
      </div>
      <div className="text-center">
        <p className="font-[family-name:var(--font-inter)] text-sm font-semibold text-gray-900 sm:text-base">
          {label}
        </p>
        <p className="font-[family-name:var(--font-inter)] text-xs text-gray-500 sm:text-sm">
          {sublabel}
        </p>
      </div>
    </div>
  )
}

export function NetworkSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const centerRef = useRef<HTMLDivElement>(null)
  const hrRef = useRef<HTMLDivElement>(null)
  const employeeRef = useRef<HTMLDivElement>(null)
  const spRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { amount: 0.2 })
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduceMotion(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <Container>
        <BlurFade inView delay={0.1}>
          <div className="mb-10 text-center sm:mb-12 lg:mb-16">
            <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--color-brand)]">
              THE PLATFORM
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-bricolage)] text-2xl font-bold leading-[1.15] tracking-[-0.06em] text-gray-900 sm:text-3xl lg:text-[40px]">
              One platform. Every party wins.
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-[family-name:var(--font-inter)] text-base text-gray-500">
              Most benefits platforms serve one stakeholder. Welluber was built for all three.
            </p>
          </div>
        </BlurFade>

        {/* Beam diagram */}
        <div
          ref={containerRef}
          className="relative mx-auto flex min-h-[300px] max-w-[900px] items-center justify-center px-2 sm:min-h-[360px] sm:px-4 md:min-h-[420px]"
        >
          {/* Beams rendered first — sit behind cards via z-0 */}
          {isInView && !reduceMotion ? (
            <>
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={centerRef}
                toRef={hrRef}
                pathColor="var(--color-brand-mid)"
                pathWidth={2}
                gradientStartColor="var(--color-brand)"
                gradientStopColor="var(--color-brand-mid)"
                duration={4}
                curvature={-30}
                className="z-0"
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={hrRef}
                toRef={centerRef}
                pathColor="var(--color-brand-mid)"
                pathWidth={2}
                gradientStartColor="var(--color-brand-mid)"
                gradientStopColor="var(--color-brand)"
                duration={4}
                curvature={-30}
                reverse
                className="z-0"
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={centerRef}
                toRef={spRef}
                pathColor="var(--color-brand-mid)"
                pathWidth={2}
                gradientStartColor="var(--color-brand)"
                gradientStopColor="var(--color-brand-mid)"
                duration={4}
                curvature={-30}
                className="z-0"
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={spRef}
                toRef={centerRef}
                pathColor="var(--color-brand-mid)"
                pathWidth={2}
                gradientStartColor="var(--color-brand-mid)"
                gradientStopColor="var(--color-brand)"
                duration={4}
                curvature={-30}
                reverse
                className="z-0"
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={centerRef}
                toRef={employeeRef}
                pathColor="var(--color-brand-mid)"
                pathWidth={2}
                gradientStartColor="var(--color-brand)"
                gradientStopColor="var(--color-brand-mid)"
                duration={4}
                className="z-0"
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={employeeRef}
                toRef={centerRef}
                pathColor="var(--color-brand-mid)"
                pathWidth={2}
                gradientStartColor="var(--color-brand-mid)"
                gradientStopColor="var(--color-brand)"
                duration={4}
                reverse
                className="z-0"
              />
            </>
          ) : null}

          {/* HR — top left */}
          <div className="absolute left-2 z-10 top-4 sm:left-4 sm:top-6 md:left-0 md:top-0">
            <Node
              nodeRef={hrRef}
              icon={<Buildings size={28} weight="regular" />}
              label="HR Admin"
              sublabel="Sets policy & budget"
            />
          </div>

          {/* SP — top right */}
          <div className="absolute right-2 z-10 top-4 sm:right-4 sm:top-6 md:right-0 md:top-0">
            <Node
              nodeRef={spRef}
              icon={<Storefront size={28} weight="regular" />}
              label="Service Providers"
              sublabel="Get paid automatically"
            />
          </div>

          {/* Center — Welluber logo with Ripple */}
          <div className="relative z-10 flex items-center justify-center">
            <Ripple
              mainCircleSize={72}
              mainCircleOpacity={0.12}
              numCircles={4}
              className="absolute"
            />
            <div
              ref={centerRef}
              className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-[color:var(--color-brand)] shadow-lg"
            >
              <img
                src="/img_logomark.svg"
                alt="Welluber"
                className="h-10 w-10 object-contain brightness-0 invert"
                draggable={false}
              />
            </div>
          </div>

          {/* Employee — bottom center */}
          <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 sm:bottom-6 md:bottom-0">
            <Node
              nodeRef={employeeRef}
              icon={<UserCircle size={28} weight="regular" />}
              label="Employees"
              sublabel="Spend benefits"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
