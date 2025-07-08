'use client'

import LogoMobile from '@/assets/e9094108-15ea-477b-900e-7ef4183ac717.png'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { navItems } from '@/contants'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const MobileMenuSheet = () => {
  return (
    <Sheet>
      {/* Trigger button for the mobile menu sheet */}
      <SheetTrigger className='p-2 hover:bg-gray-300 rounded-lg transition-colors duration-300 block md:hidden ease-out'>
        <span className='sr-only'>Mobile Menu Sheet</span>
        <Menu />
      </SheetTrigger>
      {/* Content of the mobile menu sheet */}
      <SheetContent side='left' className='bg-white py-5'>
        {/* Header of the mobile menu sheet */}
        <SheetHeader className='my-10'>
          <SheetTitle>
            {/* Mobile logo */}
            <Image src={LogoMobile} alt='Mobile Logo' title='Mobile Logo' />
          </SheetTitle>
        </SheetHeader>
        {/* Navigation menu of the mobile menu sheet */}
        <nav aria-label='Mobile Navbar' className='mb-5'>
          <ul className='flex flex-col mt-10 items-center gap-6 text-lg font-medium'>
            {/* Render each navigation item */}
            {navItems.map((item) => (
              <li key={item.label} className='relative'>
                {/* Close the sheet when an item is clicked */}
                <SheetClose asChild>
                  {/* Navigation item */}
                  <Link
                    className={`text-gray-800 hover:text-gray-400 transition-colors duration-200 ${
                      item.commingSoon && 'opacity-50 pointer-events-none'
                    }`}
                    href={item.route}
                  >
                    {item.label} {/* Coming soon label */}
                    {item.commingSoon && (
                      <span className='absolute -top-2 -right-1 text-xs text-white bg-red-500 rounded-full px-1.5 py-0.5'>
                        pronto
                      </span>
                    )}
                  </Link>
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
