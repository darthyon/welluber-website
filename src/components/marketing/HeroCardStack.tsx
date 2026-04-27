'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { StandingPresenting } from '@/components/poses'

/* ------------------------------------------------------------------ */
/*  Small favicon icon component                                       */
/* ------------------------------------------------------------------ */

function Favicon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" fill="none" className={className}>
      <path d="M217 39C217 17.46 234.46 0 256 0C277.54 0 295 17.46 295 39V157C295 178.54 277.54 196 256 196C234.46 196 217 178.54 217 157V39Z" fill="currentColor"/>
      <path d="M472 217C493.54 217 511 234.46 511 256C511 277.54 493.54 295 472 295H354C332.46 295 315 277.54 315 256C315 234.46 332.46 217 354 217H472Z" fill="currentColor"/>
      <path d="M437 382C451.91 396.91 451.91 421.09 437 436C422.09 450.91 397.91 450.91 383 436L298 351C283.09 336.09 283.09 311.91 298 297C312.91 282.09 337.09 282.09 352 297L437 382Z" fill="currentColor"/>
      <path d="M295 472C295 493.54 277.54 511 256 511C234.46 511 217 493.54 217 472V354C217 332.46 234.46 315 256 315C277.54 315 295 332.46 295 354V472Z" fill="currentColor"/>
      <path d="M129 436C114.09 450.91 89.91 450.91 75 436C60.09 421.09 60.09 396.91 75 382L160 297C174.91 282.09 199.09 282.09 214 297C228.91 311.91 228.91 336.09 214 351L129 436Z" fill="currentColor"/>
      <path d="M39 295C17.46 295 0 277.54 0 256C0 234.46 17.46 217 39 217H157C178.54 217 196 234.46 196 256C196 277.54 178.54 295 157 295H39Z" fill="currentColor"/>
      <path d="M75 129C60.09 114.09 60.09 89.91 75 75C89.91 60.09 114.09 60.09 129 75L214 160C228.91 174.91 228.91 199.09 214 214C199.09 228.91 174.91 228.91 160 214L75 129Z" fill="currentColor"/>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Sparkle burst helper                                               */
/* ------------------------------------------------------------------ */

function Sparkle({
  delay,
  x,
  y,
  size = 6,
  color = '#A78BFA',
}: {
  delay: number
  x: number
  y: number
  size?: number
  color?: string
}) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className="absolute"
      initial={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: 0 }}
      variants={{
        rest: { opacity: 0, scale: 0, x: 0, y: 0, rotate: 0 },
        hover: {
          opacity: [0, 1, 0],
          scale: [0, 1.2, 0],
          x: [0, x],
          y: [0, y],
          rotate: [0, 180],
          transition: { delay, duration: 0.6, ease: 'easeOut' },
        },
      }}
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </motion.svg>
  )
}

function SparkleBurst() {
  const sparkles = [
    { x: -90, y: -110, delay: 0, size: 7, color: '#C4B5FD' },
    { x: 80, y: -100, delay: 0.05, size: 5, color: '#A78BFA' },
    { x: -70, y: 90, delay: 0.1, size: 6, color: '#DDD6FE' },
    { x: 100, y: 80, delay: 0.08, size: 8, color: '#8B5CF6' },
    { x: 0, y: -130, delay: 0.12, size: 5, color: '#C4B5FD' },
    { x: -120, y: -40, delay: 0.06, size: 6, color: '#A78BFA' },
    { x: 120, y: -50, delay: 0.14, size: 5, color: '#DDD6FE' },
    { x: -50, y: 120, delay: 0.1, size: 7, color: '#8B5CF6' },
    { x: 60, y: 110, delay: 0.07, size: 4, color: '#C4B5FD' },
    { x: 0, y: 130, delay: 0.15, size: 6, color: '#A78BFA' },
    { x: -100, y: 20, delay: 0.09, size: 5, color: '#DDD6FE' },
    { x: 110, y: 30, delay: 0.11, size: 6, color: '#8B5CF6' },
  ]

  return (
    <div className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center">
      {sparkles.map((s, i) => (
        <Sparkle key={i} {...s} />
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Receipt / Invoice Card (jagged top edge)                           */
/* ------------------------------------------------------------------ */

function ReceiptCard() {
  // Build jagged clip-path polygon for both top and bottom edges
  const teeth = 22
  const topPoints: string[] = []
  const bottomPoints: string[] = []

  for (let i = 0; i <= teeth; i++) {
    const x = (i / teeth) * 100
    const yTop = i % 2 === 0 ? 0 : 6
    const yBottom = i % 2 === 0 ? 100 : 94
    topPoints.push(`${x}% ${yTop}%`)
    bottomPoints.push(`${x}% ${yBottom}%`)
  }

  // Start from top-left jagged edge, go across top, down right side,
  // across bottom jagged edge, up left side
  const clipPath = `polygon(${topPoints.join(', ')}, ${bottomPoints.reverse().join(', ')})`

  return (
    <div
      className="relative w-[220px] bg-[#F9F7F2] shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
      style={{
        height: 390,
        clipPath,
        paddingTop: 14,
        paddingBottom: 14,
      }}
    >
      <div className="flex h-full flex-col px-6 pt-2">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[color:var(--color-brand)]">
            <Favicon size={16} className="text-white" />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
            Welluber
          </p>
          <p className="mt-0.5 text-[10px] text-gray-300">28 Apr 2026 · #WB-2847</p>
        </div>

        {/* Items — flexi benefit related */}
        <div className="mt-5 space-y-3">
          {[
            { name: 'Fitness Membership', amt: '150.00' },
            { name: 'Yoga Classes', amt: '80.00' },
            { name: 'Dance Studio', amt: '60.00' },
            { name: 'Spa & Wellness', amt: '120.00' },
          ].map((item) => (
            <div key={item.name} className="flex justify-between text-[11px]">
              <span className="text-gray-500">{item.name}</span>
              <span className="font-medium text-gray-700">{item.amt}</span>
            </div>
          ))}
        </div>

        <div className="my-4 border-t border-dashed border-gray-200" />

        {/* Totals */}
        <div className="space-y-2 text-[11px]">
          <div className="flex justify-between text-gray-400">
            <span>Subtotal</span>
            <span>410.00</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>Tax (0%)</span>
            <span>0.00</span>
          </div>
        </div>

        <div className="my-3 border-t border-gray-300" />

        <div className="flex justify-between text-sm font-bold text-gray-800">
          <span>TOTAL</span>
          <span>RM 410.00</span>
        </div>

        {/* Paid stamp */}
        <div className="mt-auto pb-5 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="text-[10px] font-semibold uppercase tracking-wide text-emerald-600">
              Paid · Auto-Approved
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Voucher / Gift Card (behind receipt)                               */
/* ------------------------------------------------------------------ */

function VoucherCard() {
  return (
    <div
      className="relative w-[200px] overflow-hidden rounded-2xl bg-white shadow-[0_8px_32px_rgba(0,0,0,0.10)]"
      style={{ height: 340 }}
    >
      {/* Top purple header */}
      <div className="relative bg-gradient-to-br from-[#7C3AED] to-[#4C1D95] px-5 pb-5 pt-5 text-white">
        <div className="flex items-center gap-1.5">
          <Favicon size={12} className="text-white/70" />
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">
            Voucher
          </p>
        </div>
        <p className="mt-1 font-[family-name:var(--font-poppins)] text-3xl font-bold">
          RM 100
        </p>
        <p className="mt-0.5 text-[11px] opacity-80">Be Fit Programme</p>

        {/* Brand pose — white on purple */}
        <div
          className="absolute bottom-1 right-1 opacity-90"
          style={{ filter: 'brightness(0) invert(1)' }}
        >
          <StandingPresenting size={70} animate={false} />
        </div>
      </div>

      <div className="flex flex-col px-5 pt-4">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">
          Redeem at
        </p>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {['Royal Fitness', 'Gym', 'Yoga', 'Spa', 'Dance'].map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-gray-50 px-2 py-1 text-[10px] font-medium text-gray-500"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pb-5 pt-4">
          <div className="border-t border-dashed border-gray-200 pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] text-gray-400">Valid until</p>
                <p className="text-[11px] font-medium text-gray-600">
                  31 Dec 2026
                </p>
              </div>
              <div className="flex gap-0.5">
                {/* Mini barcode */}
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-gray-400"
                    style={{
                      width: i % 3 === 0 ? 2 : 1,
                      height: 20,
                      opacity: i % 2 === 0 ? 0.6 : 0.3,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Policy / Wellness Card                                             */
/* ------------------------------------------------------------------ */

function PolicyCard() {
  return (
    <div
      className="relative w-[190px] overflow-hidden rounded-2xl bg-[#0F172A] shadow-[0_8px_32px_rgba(0,0,0,0.18)]"
      style={{ height: 300 }}
    >
      {/* Subtle gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent" />

      <div className="relative flex h-full flex-col px-5 pt-5">
        {/* Top favicon + header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Favicon size={18} className="text-[#A78BFA]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Policy
            </span>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-[9px] font-semibold text-emerald-400">
              Active
            </span>
          </div>
        </div>

        {/* Plan name — one line, smaller */}
        <p className="mt-4 font-[family-name:var(--font-poppins)] text-base font-semibold text-white leading-tight">
          Wellness Policy
        </p>

        <p className="mt-1 text-[11px] text-slate-400">
          1,240 employees covered
        </p>

        {/* Stats */}
        <div className="mt-5 space-y-3">
          <div className="flex justify-between text-[11px]">
            <span className="text-slate-500">Annual limit</span>
            <span className="font-medium text-slate-200">RM 200,000</span>
          </div>
          <div className="flex justify-between text-[11px]">
            <span className="text-slate-500">Per employee</span>
            <span className="font-medium text-slate-200">RM 4,000</span>
          </div>
          <div className="flex justify-between text-[11px]">
            <span className="text-slate-500">Utilised</span>
            <span className="font-medium text-slate-200">68%</span>
          </div>
        </div>

        {/* Bottom icon row */}
        <div className="mt-auto flex items-center gap-2 pb-5">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#A78BFA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <span className="text-[10px] text-slate-500">
            Full coverage
          </span>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Hero Card Stack — Receipt front, Voucher & Policy behind           */
/* ------------------------------------------------------------------ */

export function HeroCardStack() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative flex items-center justify-center"
      style={{ perspective: 900 }}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
    >
      <motion.div
        className="relative"
        style={{ width: 580, height: 440 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial="rest"
        animate={isHovered ? 'hover' : 'rest'}
      >
        {/* Sparkle burst */}
        <SparkleBurst />

        {/* Back-left — Voucher (behind receipt) */}
        <motion.div
          className="absolute left-1/2 top-1/2 z-10"
          variants={{
            rest: {
              x: '-50%',
              y: '-50%',
              translateX: -150,
              translateY: 15,
              rotateZ: -10,
              rotateX: 2,
            },
            hover: {
              x: '-50%',
              y: '-50%',
              translateX: -230,
              translateY: 5,
              rotateZ: -15,
              rotateX: 1,
            },
          }}
          transition={{ type: 'spring', stiffness: 220, damping: 22 }}
          animate={{
            y: ['-50%', '-48%', '-50%'],
            rotateZ: [-10, -9, -10],
          }}
          style={{ originX: 0.5, originY: 0.5 }}
          // @ts-expect-error framer-motion infinite loop types
          transition={{
            y: { duration: 3.2, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' },
            rotateZ: { duration: 4, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' },
          }}
        >
          <VoucherCard />
        </motion.div>

        {/* Back-right — Policy (behind receipt) */}
        <motion.div
          className="absolute left-1/2 top-1/2 z-10"
          variants={{
            rest: {
              x: '-50%',
              y: '-50%',
              translateX: 130,
              translateY: 35,
              rotateZ: 10,
              rotateX: 2,
            },
            hover: {
              x: '-50%',
              y: '-50%',
              translateX: 210,
              translateY: 25,
              rotateZ: 15,
              rotateX: 1,
            },
          }}
          transition={{ type: 'spring', stiffness: 220, damping: 22 }}
          animate={{
            y: ['-50%', '-52%', '-50%'],
            rotateZ: [10, 11, 10],
          }}
          style={{ originX: 0.5, originY: 0.5 }}
          // @ts-expect-error framer-motion infinite loop types
          transition={{
            y: { duration: 3.8, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' },
            rotateZ: { duration: 4.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' },
          }}
        >
          <PolicyCard />
        </motion.div>

        {/* Front — Receipt (front layer) */}
        <motion.div
          className="absolute left-1/2 top-1/2 z-30"
          variants={{
            rest: {
              x: '-50%',
              y: '-50%',
              translateX: 0,
              translateY: 0,
              rotateZ: -2,
              rotateX: 0,
              scale: 1,
            },
            hover: {
              x: '-50%',
              y: '-50%',
              translateX: 10,
              translateY: -20,
              rotateZ: 0,
              rotateX: 0,
              scale: 1.04,
            },
          }}
          transition={{ type: 'spring', stiffness: 220, damping: 22 }}
          animate={{
            y: ['-50%', '-51%', '-50%'],
            rotateZ: [-2, -1.5, -2],
          }}
          style={{ originX: 0.5, originY: 0.5 }}
          // @ts-expect-error framer-motion infinite loop types
          transition={{
            y: { duration: 3.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' },
            rotateZ: { duration: 5, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' },
          }}
        >
          <ReceiptCard />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
