'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Container } from '@/components/shared/Container'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isHome = pathname === '/' || pathname === ''

  return (
    <header
      className={`sticky top-0 z-50 h-[60px] bg-white/90 backdrop-blur-md transition-shadow duration-150 ${
        scrolled ? 'border-b border-gray-200 shadow-sm' : 'border-b border-transparent'
      }`}
    >
      <Container className="flex h-full items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/img_logomark.svg"
            alt="Welluber"
            className="h-8 w-auto object-contain"
            draggable={false}
          />
        </Link>

        {/* Nav links — hidden below md */}
        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {isHome ? (
            <>
              <a
                href="#features"
                className="font-[family-name:var(--font-inter)] text-sm font-medium text-gray-500 transition-colors duration-150 hover:text-gray-900"
              >
                Solutions
              </a>
              <a
                href="#audience-hr"
                className="font-[family-name:var(--font-inter)] text-sm font-medium text-gray-500 transition-colors duration-150 hover:text-gray-900"
              >
                For HR
              </a>
              <a
                href="#audience-sp"
                className="font-[family-name:var(--font-inter)] text-sm font-medium text-gray-500 transition-colors duration-150 hover:text-gray-900"
              >
                For Providers
              </a>
            </>
          ) : (
            <>
              <Link
                href="/#features"
                className="font-[family-name:var(--font-inter)] text-sm font-medium text-gray-500 transition-colors duration-150 hover:text-gray-900"
              >
                Solutions
              </Link>
              <Link
                href="/#audience-hr"
                className="font-[family-name:var(--font-inter)] text-sm font-medium text-gray-500 transition-colors duration-150 hover:text-gray-900"
              >
                For HR
              </Link>
              <Link
                href="/#audience-sp"
                className="font-[family-name:var(--font-inter)] text-sm font-medium text-gray-500 transition-colors duration-150 hover:text-gray-900"
              >
                For Providers
              </Link>
            </>
          )}
        </nav>

        {/* CTA */}
        <a
          href="mailto:contact@welluber.com"
          className="rounded-lg bg-[color:var(--color-brand)] px-4 py-2.5 font-[family-name:var(--font-inter)] text-sm font-medium text-white transition-colors duration-150 hover:bg-[color:var(--color-brand-dark)]"
        >
          Talk to Us
        </a>
      </Container>
    </header>
  )
}
