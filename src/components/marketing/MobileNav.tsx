'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { List } from '@phosphor-icons/react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'
import { useContactModal } from './ContactModal'

export function MobileNav() {
  const pathname = usePathname()
  const { setOpen: setContactOpen } = useContactModal()
  const isHome = pathname === '/' || pathname === ''

  const linkClass =
    'block py-3 font-[family-name:var(--font-inter)] text-base font-medium text-gray-600 transition-colors hover:text-gray-900'

  return (
    <Sheet>
      <SheetTrigger
        className="inline-flex h-10 w-10 items-center justify-center rounded-md text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 md:hidden"
        aria-label="Open menu"
      >
        <List size={24} weight="regular" />
      </SheetTrigger>

      <SheetContent side="right" className="w-[300px] bg-white p-0 sm:w-[360px]">
        <SheetHeader className="sr-only">
          <SheetTitle>Navigation menu</SheetTitle>
        </SheetHeader>

        <div className="flex h-full flex-col">
          {/* Close button row — positioned top-right by default in Sheet, so just add top padding */}
          <nav className="flex-1 px-6 pt-14">
            <div className="flex flex-col">
              {isHome ? (
                <>
                  <SheetClose asChild>
                    <a href="#features" className={linkClass}>
                      Solutions
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a href="#audience-hr" className={linkClass}>
                      For HR
                    </a>
                  </SheetClose>
                  <SheetClose asChild>
                    <a href="#audience-sp" className={linkClass}>
                      For Providers
                    </a>
                  </SheetClose>
                </>
              ) : (
                <>
                  <SheetClose asChild>
                    <Link href="/#features" className={linkClass}>
                      Solutions
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/#audience-hr" className={linkClass}>
                      For HR
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/#audience-sp" className={linkClass}>
                      For Providers
                    </Link>
                  </SheetClose>
                </>
              )}
            </div>
          </nav>

          <div className="border-t border-gray-100 p-6">
            <SheetClose asChild>
              <button
                onClick={() => setContactOpen(true)}
                className="w-full rounded-lg bg-[color:var(--color-brand)] px-4 py-3 font-[family-name:var(--font-inter)] text-sm font-medium text-white transition-colors duration-150 hover:bg-[color:var(--color-brand-dark)] active:scale-[0.98]"
              >
                Talk to Us
              </button>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
