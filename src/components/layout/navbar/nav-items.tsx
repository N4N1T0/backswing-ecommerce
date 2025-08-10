'use client'

import { navItems } from '@/contants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavItems() {
  const pathname = usePathname()
  return (
    <div className='hidden lg:flex md:items-center md:gap-12 pl-12 animate-fade-in-up animate-delay-200'>
      <nav aria-label='Desktop Navbar'>
        <ul className='flex items-center gap-6'>
          {navItems.map(({ label, route, commingSoon }) => {
            const isActive = pathname === route
            return (
              <li key={label} className='relative'>
                <Link
                  className={cn(
                    'text-gray-800 hover:text-gray-400 transition-colors duration-200',
                    isActive && 'underline',
                    commingSoon &&
                      'opacity-50 pointer-events-none cursor-not-allowed'
                  )}
                  href={route}
                >
                  {label}
                </Link>
                {commingSoon && (
                  <span className='absolute -top-2 -right-1 text-xs text-white bg-red-500 px-1.5 py-0.5 pointer-events-none'>
                    pronto
                  </span>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default NavItems
