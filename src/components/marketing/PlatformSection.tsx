'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useInView } from 'motion/react'
import { Buildings, UserCircle, Storefront, CheckCircle, ArrowRight } from '@phosphor-icons/react'
import { AnimatedBeam } from '@/components/magicui/animated-beam'
import { BlurFade } from '@/components/magicui/blur-fade'
import { Ripple } from '@/components/magicui/ripple'
import { Container } from '@/components/shared/Container'
import { TabPanelHR } from '@/components/wireframes/TabPanelHR'
import { TabPanelEmployee } from '@/components/wireframes/TabPanelEmployee'
import { TabPanelSP } from '@/components/wireframes/TabPanelSP'
import { useContactModal } from './ContactModal'

type PersonaKey = 'hr' | 'employee' | 'sp'

interface PersonaData {
  key: PersonaKey
  label: string
  title: string
  body: string
  bullets: string[]
  cta?: { label: string; reason?: string }
  visual: React.ReactNode
  image: string
  icon: React.ReactNode
}

const personas: PersonaData[] = [
  {
    key: 'hr',
    label: 'HR Admin',
    title: 'Set policies in minutes.',
    body: 'Create benefit rules, assign them to teams, and watch utilisation in real time.',
    bullets: ['Target by role, department, or tier', 'Auto-enforce spending limits', 'Full audit trail, export-ready'],
    cta: { label: 'Talk to Us', reason: 'hr' },
    visual: <TabPanelHR />,
    image: '/hr-admin.webp',
    icon: <Buildings size={20} weight="regular" />,
  },
  {
    key: 'employee',
    label: 'Employees',
    title: 'Spend your balance, your way.',
    body: 'One wallet for fitness, wellness, and lifestyle — online or walk-in.',
    bullets: ['Browse 248+ verified providers', 'Instant redemption, zero forms', 'See balance and history in real time'],
    cta: { label: 'Recommend Us', reason: 'employee' },
    visual: <TabPanelEmployee />,
    image: '/employee.webp',
    icon: <UserCircle size={20} weight="regular" />,
  },
  {
    key: 'sp',
    label: 'Service Providers',
    title: 'Get paid. No chasing.',
    body: 'Accept corporate wallet payments and receive settlements on schedule.',
    bullets: ['Multi-org payout dashboard', 'Guaranteed monthly settlements', 'New corporate clients, zero sales effort'],
    cta: { label: 'Apply as a provider', reason: 'provider' },
    visual: <TabPanelSP />,
    image: '/sp-admin.webp',
    icon: <Storefront size={20} weight="regular" />,
  },
]

const tabOrder: PersonaKey[] = ['hr', 'employee', 'sp']
const AUTOPLAY_INTERVAL = 5000

export function PlatformSection() {
  const [activePersona, setActivePersona] = useState<PersonaKey>('hr')
  const [reduceMotion, setReduceMotion] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const centerRef = useRef<HTMLDivElement>(null)
  const hrRef = useRef<HTMLDivElement>(null)
  const employeeRef = useRef<HTMLDivElement>(null)
  const spRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { amount: 0.2 })
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const { setOpen: setContactOpen, setInitialReason } = useContactModal()

  const refs: Record<PersonaKey, React.RefObject<HTMLDivElement | null>> = {
    hr: hrRef,
    employee: employeeRef,
    sp: spRef,
  }

  const activeData = personas.find((p) => p.key === activePersona)!

  // Reduced motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduceMotion(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  // Autoplay
  const startAutoplay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    autoPlayRef.current = setInterval(() => {
      setActivePersona((prev) => {
        const idx = tabOrder.indexOf(prev)
        return tabOrder[(idx + 1) % tabOrder.length]
      })
    }, AUTOPLAY_INTERVAL)
  }, [])

  const stopAutoplay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
      autoPlayRef.current = null
    }
  }, [])

  useEffect(() => {
    if (isAutoPlaying) startAutoplay()
    return () => stopAutoplay()
  }, [isAutoPlaying, startAutoplay, stopAutoplay])

  const selectPersona = (key: PersonaKey) => {
    setIsAutoPlaying(false)
    setActivePersona(key)
  }

  return (
    <section id="platform" className="bg-gray-50 py-14 sm:py-16 lg:py-20 scroll-mt-24">
      <Container>
        {/* Header */}
        <BlurFade inView delay={0.1}>
          <div className="mb-8 text-center sm:mb-10 lg:mb-12">
            <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--color-brand)]">
              The Platform
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-poppins)] text-2xl font-bold leading-[1.15] tracking-[-0.06em] text-gray-900 sm:text-3xl lg:text-[40px]">
              One wallet. Three sides. No paperwork in between.
            </h2>
          </div>
        </BlurFade>

        {/* Beam container */}
        <div ref={containerRef} className="relative mx-auto max-w-[900px]">
          {/* Animated beams — behind content */}
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
                curvature={40}
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
                curvature={0}
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
                curvature={40}
                className="z-0"
              />
            </>
          ) : null}

          {/* Content — in front of beams */}
          <div className="relative z-10">
            {/* Center node */}
            <div className="flex justify-center">
              <div className="relative flex items-center justify-center">
                <Ripple
                  mainCircleSize={64}
                  mainCircleOpacity={0.12}
                  numCircles={4}
                  className="absolute"
                />
                <div
                  ref={centerRef}
                  className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-[color:var(--color-brand)] shadow-lg"
                >
                  <img
                    src="/favicon-white.svg"
                    alt="Welluber"
                    className="h-9 w-9 object-contain"
                    draggable={false}
                  />
                </div>
              </div>
            </div>

            {/* Persona cards row */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-3">
              {personas.map((persona) => (
                <button
                  key={persona.key}
                  onClick={() => selectPersona(persona.key)}
                  className={`relative flex min-h-[120px] overflow-hidden rounded-xl border text-left transition-all duration-200 sm:min-h-[140px] ${
                    activePersona === persona.key
                      ? '-translate-y-0.5 border-transparent bg-gradient-to-b from-[color:var(--color-brand-faint)] to-white shadow-[0_0_24px_rgba(67,56,202,0.08),0_8px_24px_rgba(67,56,202,0.04)]'
                      : 'border-gray-200 bg-white opacity-80 hover:opacity-100 hover:border-gray-300'
                  }`}
                  aria-pressed={activePersona === persona.key}
                >
                  {/* Beam anchor at top-center */}
                  <div
                    ref={refs[persona.key]}
                    className="pointer-events-none absolute top-0 left-1/2 h-px w-px -translate-x-1/2"
                  />

                  {/* Left — icon + name */}
                  <div className="flex flex-1 flex-col gap-2 p-4">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-200 ${
                        activePersona === persona.key
                          ? 'bg-[color:var(--color-brand)]/10 text-[color:var(--color-brand)]'
                          : 'bg-[color:var(--color-brand-faint)] text-[color:var(--color-brand)]'
                      }`}
                    >
                      {persona.icon}
                    </div>
                    <p className="font-[family-name:var(--font-poppins)] text-sm font-bold text-gray-900 sm:text-base">
                      {persona.label}
                    </p>
                  </div>

                  {/* Right — persona image */}
                  <div className="relative flex w-[38%] shrink-0 items-end justify-center overflow-hidden">
                    <div className="flex h-[100px] w-[100px] items-end justify-center sm:h-[120px] sm:w-[120px]">
                      <img
                        src={persona.image}
                        alt={persona.label}
                        className="max-h-full max-w-full object-contain"
                        style={{
                          transform:
                            persona.key === 'hr'
                              ? 'scale(1.35)'
                              : persona.key === 'employee'
                                ? 'scale(1.35)'
                                : 'scale(1)',
                          transformOrigin: 'bottom center',
                        }}
                        draggable={false}
                      />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Persona content */}
        <div className="mx-auto mt-8 max-w-[900px] sm:mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePersona}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-[1fr_1fr] lg:items-stretch"
            >
              {/* Left — copy */}
              <div className="flex min-w-0 flex-col items-start lg:h-[300px]">
                <h3 className="font-[family-name:var(--font-poppins)] text-lg font-bold leading-[1.3] tracking-[-0.04em] text-gray-900 sm:text-xl">
                  {activeData.title}
                </h3>
                <p className="mt-3 font-[family-name:var(--font-inter)] text-sm leading-relaxed text-gray-500 sm:text-[15px]">
                  {activeData.body}
                </p>
                <ul className="mt-4 space-y-2">
                  {activeData.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle
                        size={14}
                        weight="fill"
                        className="mt-0.5 shrink-0 text-[color:var(--color-brand)]"
                      />
                      <span className="font-[family-name:var(--font-inter)] text-sm text-gray-600">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                {activeData.cta && (
                  <button
                    onClick={() => {
                      if (activeData.cta?.reason) setInitialReason(activeData.cta.reason)
                      setContactOpen(true)
                    }}
                    className="mt-auto inline-flex items-center gap-1.5 rounded-lg border border-[color:var(--color-brand)] px-5 py-2.5 font-[family-name:var(--font-inter)] text-sm font-medium text-[color:var(--color-brand)] transition-all duration-150 hover:bg-[color:var(--color-brand-faint)]"
                  >
                    {activeData.cta.label}
                    <ArrowRight size={14} />
                  </button>
                )}
              </div>

              {/* Right — wireframe visual */}
              <div className="min-w-0">
                {activeData.visual}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  )
}
