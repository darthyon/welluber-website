import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Welluber — Corporate Wellness Benefits',
  description: 'One platform for HR teams to set policies, employees to spend, and service providers to get paid.',
  icons: {
    icon: [{ url: '/favicon.svg' }, { url: '/img_logo.svg' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
