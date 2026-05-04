'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Container } from '@/components/shared/Container'
import { MobileNav } from './MobileNav'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass =
    'font-geist text-sm font-medium text-gray-500 transition-colors duration-150 hover:text-gray-900'

  const activeLinkClass = 'text-gray-900'

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
            width={120}
            height={32}
            fetchPriority="high"
            draggable={false}
          />
        </Link>

        {/* Nav links — right-aligned, hidden below md */}
        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          <Link
            href="/about-us"
            className={`${linkClass} ${pathname === '/about-us' ? activeLinkClass : ''}`}
          >
            About Us
          </Link>
          <Link
            href="/faq"
            className={`${linkClass} ${pathname === '/faq' ? activeLinkClass : ''}`}
          >
            FAQ
          </Link>
        </nav>

        {/* Mobile menu */}
        <div className="flex items-center md:hidden">
          <MobileNav />
        </div>
      </Container>
    </header>
  )
}
