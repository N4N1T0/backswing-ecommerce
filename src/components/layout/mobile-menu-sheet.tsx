'use client'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet'
import { navItems } from '@/contants'
import { Menu } from 'lucide-react'
import Link from 'next/link'

const MobileMenuSheet = () => {
  return (
    <Sheet>
      <SheetTrigger className='p-2 hover:bg-gray-300 rounded-lg transition-colors duration-300 block md:hidden'>
        <span className='sr-only'>Mobile Menu Sheet</span>
        <Menu />
      </SheetTrigger>
      <SheetContent side='left'>
        <SheetHeader className='my-10'>
          <SheetTitle>Nuestros Links para navegar en nuetra Web</SheetTitle>
        </SheetHeader>
        <nav aria-label='Mobile Navbar'>
          <ul className='flex flex-col mt-10 items-center gap-6 text-sm'>
            {navItems.map((item) => (
              <li key={item.label}>
                <SheetClose asChild>
                  <Link className='text-gray-700 hover:text-gray-500/75 transition-colors' href={item.route} >{item.label}</Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>

  )
}

export default MobileMenuSheet
