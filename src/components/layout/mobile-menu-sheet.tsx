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
import Image from 'next/image'
import LogoMobile from '@/assets/e9094108-15ea-477b-900e-7ef4183ac717.png'

const MobileMenuSheet = () => {
  return (
    <Sheet>
      <SheetTrigger className='p-2 hover:bg-gray-300 rounded-lg transition-colors duration-300 block md:hidden ease-out'>
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
          <ul className='flex flex-col mt-10 items-center gap-6 text-lg font-medium'>
            {navItems.map((item) => (
              <li key={item.label} className='relative'>
                <SheetClose asChild>
                  <>
                    <Link className={`text-gray-800 hover:text-gray-400 transition-colors duration-200 ${item.commingSoon && 'opacity-50 pointer-events-none'}`} href={item.route}>{item.label}</Link>
                    {item.commingSoon && <span className='absolute -top-2 -right-1 text-xs text-white bg-red-500 rounded-full px-1.5 py-0.5'>soon</span>}
                  </>
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
