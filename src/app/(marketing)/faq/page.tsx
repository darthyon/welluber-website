import type { Metadata } from 'next'
import { FAQPageClient } from '@/components/marketing/FAQPageClient'

export const metadata: Metadata = {
  title: 'FAQ — WellUber',
  description: 'Find answers to common questions about WellUber for HR teams, service providers, and employees.',
}

export default function FAQPage() {
  return (
    <main id="main-content">
      <FAQPageClient />
    </main>
  )
}
