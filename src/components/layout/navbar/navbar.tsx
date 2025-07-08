import Logo from '@/assets/82f78b35-02e0-4783-aa65-b1b40b34ed51.png'
import Announcement from '@/components/layout/annoucement'
import MobileMenuSheet from '@/components/layout/navbar/mobile-menu-sheet'
import MobileSearch from '@/components/layout/navbar/mobile-search'
import Search from '@/components/layout/navbar/search'
import ShoppingCartSheet from '@/components/layout/navbar/shopping-cart-sheet'
import Image from 'next/image'
import Link from 'next/link'
import { UserPopup } from '../auth/user-popup'
import NavItems from './nav-items'

const Navbar = () => {
  return (
    <header className='bg-white' id='navbar'>
      <div className='mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 container'>
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
            <NavItems />
          </div>

          <div className='flex items-center gap-3'>
            <div className='hidden md:block'>
              <Search />
            </div>
            <MobileSearch />
            <UserPopup />
            <ShoppingCartSheet />
          </div>
        </div>
      </div>
      <Announcement />
    </header>
  )
}

export default Navbar
