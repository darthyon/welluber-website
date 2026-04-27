import type { ReactNode } from 'react'
import { Bricolage_Grotesque, Inter } from 'next/font/google'
import { Navbar } from '@/components/marketing/Navbar'
import { Footer } from '@/components/marketing/Footer'
import { ContactModalProvider } from '@/components/marketing/ContactModal'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-bricolage',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})

type MarketingLayoutProps = {
  children: ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className={`${bricolage.variable} ${inter.variable} font-[family-name:var(--font-inter)]`}>
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
