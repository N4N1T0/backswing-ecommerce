import Logo from '@/assets/82f78b35-02e0-4783-aa65-b1b40b34ed51.png'
import Announcement from '@/components/layout/annoucement'
import MobileMenuSheet from '@/components/layout/mobile-menu-sheet'
import MobileSearch from '@/components/layout/mobile-search'
import ProfilePopup from '@/components/layout/profile-popup'
import Search from '@/components/layout/search'
import ShoppingCartSheet from '@/components/layout/shopping-cart-sheet'
import { navItems } from '@/contants'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className='bg-white' id='navbar'>
      <div className='mx-auto max-w-screen-3xl px-4 sm:px-6 lg:px-8 container'>
        <div className='flex h-16 xl:h-20 items-center justify-between'>
          <div className='flex gap-3'>
            <MobileMenuSheet />
            <Link className='flex justify-center items-center' href='/'>
              <Image
                src={Logo}
                alt='Logo'
                title='Logo'
                priority
                height={50}
                width={50}
                className='w-auto h-auto'
              />
            </Link>
            <div className='hidden lg:flex md:items-center md:gap-12 pl-12'>
              <nav aria-label='Desktop Navbar'>
                <ul className='flex items-center gap-6'>
                  {navItems.map((item) => (
                    <li key={item.label} className='relative'>
                      <Link
                        className={`text-gray-800 hover:text-gray-400 transition-colors duration-200 ${
                          item.commingSoon &&
                          'opacity-50 pointer-events-none cursor-not-allowed'
                        }`}
                        href={item.route}
                      >
                        {item.label}
                      </Link>
                      {item.commingSoon && (
                        <span className='absolute -top-2 -right-1 text-xs text-white bg-red-500 rounded-full px-1.5 py-0.5 pointer-events-none'>
                          pronto
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className='flex items-center gap-3'>
            <div className='hidden md:block'>
              <Search />
            </div>
            <MobileSearch />
            <ProfilePopup />
            <ShoppingCartSheet />
          </div>
        </div>
      </div>
      <Announcement />
    </header>
  )
}

export default Navbar
