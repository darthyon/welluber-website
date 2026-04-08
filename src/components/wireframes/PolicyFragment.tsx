import React from 'react'
import Image from 'next/image'
import {
  Heart,
  Barbell,
  Brain,
  Tooth,
  Eye,
  Leaf,
  FirstAid,
  PersonSimpleTaiChi,
  BoxingGlove,
  Racquet,
  HandsPraying,
} from '@phosphor-icons/react'
import { OrbitingCircles } from '@/components/magicui/orbiting-circles'

function Node({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-full border border-[#C7D2FE] bg-[#EEF2FF]">
      {children}
    </div>
  )
}

export function PolicyFragment() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#F9FAFB]">
      {/* Inner orbit */}
      <OrbitingCircles radius={110} duration={18} iconSize={40}>
        <Node><Heart size={18} className="text-[#4F46E5]" /></Node>
        <Node><Barbell size={18} className="text-[#4F46E5]" /></Node>
        <Node><Brain size={18} className="text-[#4F46E5]" /></Node>
        <Node><PersonSimpleTaiChi size={18} className="text-[#4F46E5]" /></Node>
        <Node><BoxingGlove size={18} className="text-[#4F46E5]" /></Node>
      </OrbitingCircles>

      {/* Outer orbit */}
      <OrbitingCircles radius={190} duration={25} iconSize={40} reverse>
        <Node><Tooth size={18} className="text-[#4F46E5]" /></Node>
        <Node><Eye size={18} className="text-[#4F46E5]" /></Node>
        <Node><Leaf size={18} className="text-[#4F46E5]" /></Node>
        <Node><FirstAid size={18} className="text-[#4F46E5]" /></Node>
        <Node><Racquet size={18} className="text-[#4F46E5]" /></Node>
        <Node><HandsPraying size={18} className="text-[#4F46E5]" /></Node>
      </OrbitingCircles>

      {/* Center node */}
      <div className="absolute left-1/2 top-1/2 z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[1.5px] border-[#C7D2FE] bg-white">
        <Image src="/img_logo.svg" alt="Welluber" width={22} height={22} />
      </div>
    </div>
  )
}
