import type { ReactNode } from 'react'
import { Poppins, Geist } from 'next/font/google'
import { Navbar } from '@/components/marketing/Navbar'
import { Footer } from '@/components/marketing/Footer'
import { ContactModalProvider } from '@/components/marketing/ContactModal'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

type MarketingLayoutProps = {
  children: ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className={`${poppins.variable} ${geist.variable} font-geist`}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <ContactModalProvider>
        <Navbar />
        {children}
      </ContactModalProvider>
      <Footer />
    </div>
  )
}
