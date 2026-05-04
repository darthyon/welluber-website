'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from '@phosphor-icons/react'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-4 py-2.5 text-gray-400 shadow-lg backdrop-blur-sm transition-colors hover:border-brand hover:text-brand active:scale-95"
          aria-label="Back to top"
        >
          <motion.span
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex items-center gap-2"
          >
            <ArrowUp size={18} weight="bold" />
            <span className="font-geist text-sm font-medium">Back to top</span>
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
