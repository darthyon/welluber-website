import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900">
      <div className="mx-auto w-full max-w-[1200px] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-center sm:justify-center">
          {/* Links + copyright */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-[family-name:var(--font-inter)] text-gray-500 text-center">
            <Link href="/privacy-policy/" className="transition-colors duration-150 hover:text-gray-300">
              Privacy Policy
            </Link>
            <span className="h-4 w-px bg-gray-800" aria-hidden="true" />
            <Link href="/terms-of-service/" className="transition-colors duration-150 hover:text-gray-300">
              Terms of Service
            </Link>
            <span className="h-4 w-px bg-gray-800" aria-hidden="true" />
            <span className="text-[13px] text-gray-600">
              © 2026 Welluber Sdn Bhd. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
