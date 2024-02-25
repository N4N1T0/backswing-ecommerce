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
import Search from './search'
import Image from 'next/image'
import LogoMobile from '@/assets/logos/e9094108-15ea-477b-900e-7ef4183ac717.png'

const MobileMenuSheet = () => {
  return (
    <Sheet>
      <SheetTrigger className='p-2 hover:bg-gray-300 rounded-lg transition-colors duration-300 block md:hidden'>
        <span className='sr-only'>Mobile Menu Sheet</span>
        <Menu />
      </SheetTrigger>
      <SheetContent side='left' className='bg-white py-5'>
        <SheetHeader className='my-10'>
          <SheetTitle>
            <Image src={LogoMobile} alt='Mobile Logo' title='Mobile Logo' className='w-full h-auto' />
          </SheetTitle>
        </SheetHeader>
        <nav aria-label='Mobile Navbar' className='mb-5'>
          <ul className='flex flex-col mt-10 items-center gap-6 text-sm'>
            {navItems.map((item) => (
              <li key={item.label}>
                <SheetClose asChild>
                  <Link className='text-gray-700 hover:text-gray-500/75 transition-colors' href={item.route} >{item.label}</Link>
                </SheetClose>
              </li>
            ))}
            <li>
              <Search />
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>

  )
}

export default MobileMenuSheet
