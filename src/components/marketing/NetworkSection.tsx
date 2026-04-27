'use client'

import { useEffect, useRef, useState } from 'react'
import { Buildings, UserCircle, Storefront } from '@phosphor-icons/react'
import { useInView } from 'motion/react'
import Image from 'next/image'
import { AnimatedBeam } from '@/components/magicui/animated-beam'
import { BlurFade } from '@/components/magicui/blur-fade'
import { Ripple } from '@/components/magicui/ripple'
import { Container } from '@/components/shared/Container'

type PersonaCardProps = {
  nodeRef: React.RefObject<HTMLDivElement | null>
  icon: React.ReactNode
  role: string
  description: string
  photo: string
  photoAlt: string
}

function PersonaCard({ nodeRef, icon, role, description, photo, photoAlt }: PersonaCardProps) {
  return (
    <div className="relative flex min-h-[160px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Left — icon + copy */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[color:var(--color-brand-faint)] text-[color:var(--color-brand)]">
          {icon}
        </div>
        <div>
          <p className="font-[family-name:var(--font-poppins)] text-base font-bold text-gray-900">
            {role}
          </p>
          <p className="mt-1.5 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-gray-500">
            {description}
          </p>
        </div>
      </div>

      {/* Right — person photo */}
      <div className="relative w-[42%] shrink-0 self-stretch">
        <Image
          src={photo}
          alt={photoAlt}
          fill
          className="object-cover object-top"
          sizes="(min-width: 1024px) 15vw, 40vw"
        />
      </div>

      {/* Beam anchor at bottom-center of card */}
      <div
        ref={nodeRef}
        className="pointer-events-none absolute bottom-0 left-1/2 h-px w-px -translate-x-1/2"
      />
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
    <section id="network" className="bg-gray-50 py-16 sm:py-20 lg:py-24 scroll-mt-24">
      <Container>
        <BlurFade inView delay={0.1}>
          <div className="mb-10 text-center sm:mb-12 lg:mb-16">
            <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--color-brand)]">
              THE PLATFORM
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-poppins)] text-2xl font-bold leading-[1.15] tracking-[-0.06em] text-gray-900 sm:text-3xl lg:text-[40px]">
              One wallet. Three sides. No paperwork in between.
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-[family-name:var(--font-inter)] text-base text-gray-500">
              Most benefits platforms serve one stakeholder. WellUber was built for all three.
            </p>
          </div>
        </BlurFade>

        <div ref={containerRef} className="relative mx-auto max-w-[960px]">
          {/* 3 persona cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <PersonaCard
              nodeRef={hrRef}
              icon={<Buildings size={22} weight="regular" />}
              role="HR Admins"
              description="Design, manage, and measure benefits with confidence."
              photo="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
              photoAlt="HR admin reviewing benefits at laptop"
            />
            <PersonaCard
              nodeRef={employeeRef}
              icon={<UserCircle size={22} weight="regular" />}
              role="Employees"
              description="Browse and redeem benefits that support everyday well-being."
              photo="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
              photoAlt="Employee browsing benefits on phone"
            />
            <PersonaCard
              nodeRef={spRef}
              icon={<Storefront size={22} weight="regular" />}
              role="Service Providers"
              description="Reach the right audience and grow your impact."
              photo="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80"
              photoAlt="Service provider at business"
            />
          </div>

          {/* WellUber center node */}
          <div className="mt-12 flex justify-center">
            <div className="relative flex items-center justify-center">
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
                  src="/favicon-white.svg"
                  alt="Welluber"
                  className="h-10 w-10 object-contain"
                  draggable={false}
                />
              </div>
            </div>
          </div>

          {/* Animated beams */}
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
                curvature={60}
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
                curvature={0}
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
                curvature={60}
              />
            </>
          ) : null}
        </div>
      </Container>
    </section>
  )
}
