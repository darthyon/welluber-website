'use client'

import { useCallback, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface MagicCardProps {
  children: React.ReactNode
  className?: string
  gradientSize?: number
  gradientColor?: string
  gradientOpacity?: number
}

export function MagicCard({
  children,
  className,
  gradientSize = 200,
  gradientColor = 'var(--color-brand)',
  gradientOpacity = 0.08,
}: MagicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!cardRef.current) return
      const { left, top } = cardRef.current.getBoundingClientRect()
      const x = e.clientX - left
      const y = e.clientY - top
      cardRef.current.style.setProperty('--mouse-x', `${x}px`)
      cardRef.current.style.setProperty('--mouse-y', `${y}px`)
    },
    [],
  )

  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    card.addEventListener('mousemove', handleMouseMove)
    return () => card.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  return (
    <div
      ref={cardRef}
      className={cn('group relative', className)}
      style={
        {
          '--gradient-size': `${gradientSize}px`,
          '--gradient-color': gradientColor,
          '--gradient-opacity': gradientOpacity,
        } as React.CSSProperties
      }
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(var(--gradient-size) circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${gradientColor}${Math.round(gradientOpacity * 255).toString(16).padStart(2, '0')}, transparent 70%)`,
        }}
      />
      {children}
    </div>
  )
}
