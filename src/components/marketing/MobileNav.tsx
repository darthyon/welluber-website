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

export function MobileNav() {
  const pathname = usePathname()

  const linkClass =
    'block py-3 font-geist text-base font-medium text-gray-600 transition-colors hover:text-gray-900'

  const activeLinkClass = 'text-gray-900'

  return (
    <Sheet>
      <SheetTrigger
        className="inline-flex h-10 w-10 items-center justify-center rounded-md text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
        aria-label="Open menu"
      >
        <List size={24} weight="regular" />
      </SheetTrigger>

      <SheetContent side="right" className="w-[300px] bg-white p-0 sm:w-[360px]">
        <SheetHeader className="sr-only">
          <SheetTitle>Navigation menu</SheetTitle>
        </SheetHeader>

        <nav className="flex h-full flex-col px-6 pt-14">
          <div className="flex flex-col">
            <SheetClose asChild>
              <Link
                href="/about-us"
                className={`${linkClass} ${pathname === '/about-us' ? activeLinkClass : ''}`}
              >
                About Us
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/faq"
                className={`${linkClass} ${pathname === '/faq' ? activeLinkClass : ''}`}
              >
                FAQ
              </Link>
            </SheetClose>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
