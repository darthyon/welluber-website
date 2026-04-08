'use client'

import { AnimatePresence, motion, Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

type AnimationType = 'blurInUp' | 'fadeIn' | 'slideUp'
type ByType = 'word' | 'character' | 'line'

interface TextAnimateProps {
  children: string
  className?: string
  animation?: AnimationType
  by?: ByType
  delay?: number
  duration?: number
  once?: boolean
}

const animations: Record<AnimationType, Variants> = {
  blurInUp: {
    hidden: { opacity: 0, y: 12, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
}

export function TextAnimate({
  children,
  className,
  animation = 'blurInUp',
  by = 'word',
  delay = 0,
  duration = 0.3,
}: TextAnimateProps) {
  const segments =
    by === 'word'
      ? children.split(' ')
      : by === 'character'
      ? children.split('')
      : [children]

  return (
    <AnimatePresence>
      <motion.span
        className={cn('inline', className)}
        initial="hidden"
        animate="visible"
        aria-label={children}
      >
        {segments.map((segment, i) => (
          <motion.span
            key={i}
            variants={animations[animation]}
            transition={{
              delay: delay + i * 0.04,
              duration,
              ease: 'easeOut',
            }}
            className="inline-block"
          >
            {segment}
            {by === 'word' && i < segments.length - 1 ? '\u00A0' : ''}
          </motion.span>
        ))}
      </motion.span>
    </AnimatePresence>
  )
}
