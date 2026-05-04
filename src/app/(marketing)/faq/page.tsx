import type { Metadata } from 'next'
import { FAQPageClient } from '@/components/marketing/FAQPageClient'

export const metadata: Metadata = {
  title: 'FAQ — Welluber',
  description: 'Find answers to common questions about Welluber for HR teams, service providers, and employees.',
}

export default function FAQPage() {
  return (
    <main id="main-content">
      <FAQPageClient />
    </main>
  )
}
