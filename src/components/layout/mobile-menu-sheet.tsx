'use client'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { navItems } from '@/contants'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const MobileMenuSheet = () => {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open}>
      <SheetTrigger className='p-2 hover:bg-gray-300 rounded-lg transition-colors duration-300 block md:hidden' onClick={() => { setOpen(true) }}>
        <span className='sr-only'>Mobile Menu Sheet</span>
        <Menu />
      </SheetTrigger>
      <SheetContent side='left'>
        <SheetHeader>
          <SheetTitle>Use this links to navigate in our Website</SheetTitle>
        </SheetHeader>
        <nav aria-label='Global' className='hidden md:block'>
          <ul className='flex items-center gap-6 text-sm'>
            {navItems.map((item) => (
              <li key={item.label}>
                <Link className='text-gray-700 hover:text-gray-500/75 transition-colors' href={item.route} onClick={() => { setOpen(false) }}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>

  )
}

export default MobileMenuSheet
