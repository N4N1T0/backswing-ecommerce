import Logo from '@/assets/82f78b35-02e0-4783-aa65-b1b40b34ed51.png'
import UserPopup from '@/components/layout/auth/user-popup'
import MobileMenuSheet from '@/components/layout/navbar/mobile-menu-sheet'
import Search from '@/components/layout/navbar/search'
import ShoppingCartSheet from '@/components/layout/navbar/shopping-cart-sheet'
import Image from 'next/image'
import Link from 'next/link'
import NavItems from './nav-items'

const MiddleNavbar = () => {
  return (
    <header
      className='bg-white overflow-y-hidden w-full fixed top-0 left-0 right-0 z-50 shadow-xs'
      id='navbar'
    >
      <div className='mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 container'>
        <div className='flex h-16 xl:h-20 items-center justify-between'>
          <div className='flex gap-3'>
            <MobileMenuSheet />
            <Link
              className='hidden md:flex justify-center items-center animate-fade-in-up'
              href='/'
            >
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
            <NavItems />
          </div>

          <div className='flex items-center gap-3'>
            <div className='animate-fade-in-up animate-delay-400'>
              <Search />
            </div>
            <UserPopup />
            <ShoppingCartSheet />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MiddleNavbar
