import type { Metadata } from 'next'
import { AboutUsPageClient } from '@/components/marketing/AboutUsPageClient'

export const metadata: Metadata = {
  title: 'About Us — WellUber',
  description: 'Learn more about WellUber and our mission to modernise employee benefits.',
}

export default function AboutUsPage() {
  return (
    <main id="main-content">
      <AboutUsPageClient />
    </main>
  )
}
