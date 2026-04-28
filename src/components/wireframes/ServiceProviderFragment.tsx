'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Ripple } from '@/components/magicui/ripple'
import { MapPin } from '@phosphor-icons/react'

const branches = [
  { name: 'KL Sentral',    in: 34, redemptions: 28 },
  { name: 'Bangsar',       in: 21, redemptions: 17 },
  { name: 'PJ Damansara',  in: 8,  redemptions: 6  },
]

const QR_MATRIX: number[][] = [
  [1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1],
  [1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1],
  [1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1],
  [1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1],
  [1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1],
  [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
  [1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1],
  [0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0],
  [1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1],
  [0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0],
  [1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1],
  [1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1],
  [1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1],
]

const CELL = 6
const QR_SIZE = QR_MATRIX.length * CELL

function QRCode() {
  return (
    <svg
      width={QR_SIZE}
      height={QR_SIZE}
      viewBox={`0 0 ${QR_SIZE} ${QR_SIZE}`}
      shapeRendering="crispEdges"
    >
      {QR_MATRIX.map((row, r) =>
        row.map((cell, c) =>
          cell ? (
            <rect
              key={`${r}-${c}`}
              x={c * CELL}
              y={r * CELL}
              width={CELL}
              height={CELL}
              fill="var(--color-brand)"
            />
          ) : null,
        ),
      )}
    </svg>
  )
}

export function ServiceProviderFragment() {
  const qrRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative flex h-full flex-row overflow-hidden">


      {/* Left — branch cards */}
      <div className="relative z-10 flex w-[55%] flex-col justify-center px-4 py-3">
        <span className="mb-2 font-geist text-[10px] font-semibold uppercase tracking-wider text-gray-400">
          Manage branches
        </span>

        <div className="space-y-1.5">
          {branches.map((b) => (
            <div
              key={b.name}
              className="flex items-center justify-between rounded-lg border border-gray-100 bg-white px-2.5 py-2 shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
            >
              <div className="flex min-w-0 items-center gap-1.5">
                <MapPin size={10} weight="fill" className="shrink-0 text-brand opacity-60" />
                <div className="min-w-0">
                  <p className="truncate font-geist text-[10px] font-semibold text-gray-800">{b.name}</p>
                  <p className="font-geist text-[9px] text-gray-400">{b.in} checked in</p>
                </div>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-brand-faint px-2 py-0.5">
                <span className="font-geist text-[9px] font-semibold text-brand">{b.redemptions}</span>
                <span className="font-geist text-[9px] text-gray-400">redeemed</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-2.5 flex items-center gap-1.5 rounded-lg border border-gray-100 bg-gray-50 px-3 py-1.5">
          <div className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="font-geist text-[10px] text-gray-500">63 redemptions today</span>
        </div>
      </div>

      {/* Right — QR panel */}
      <div className="relative flex w-[45%] flex-col items-center justify-center overflow-hidden bg-gray-50/80 py-4">
        <Ripple mainCircleSize={52} mainCircleOpacity={0.1} numCircles={4} />

        <div
          ref={qrRef}
          className="relative z-10 overflow-hidden rounded-xl border border-brand/20 bg-white p-2.5 shadow-md"
        >
          <QRCode />
          <motion.div
            className="pointer-events-none absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand to-transparent opacity-80"
            style={{ filter: 'blur(0.5px)' }}
            animate={{ top: ['5%', '92%', '5%'] }}
            transition={{ duration: 2, ease: 'linear', repeat: Infinity }}
          />
        </div>

        <p className="relative z-10 mt-2 font-geist text-[9px] text-gray-400">Scan to redeem</p>
      </div>
    </div>
  )
}
