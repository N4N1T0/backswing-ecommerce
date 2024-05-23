import Link from 'next/link'
import Image from 'next/image'

import ShoppingCartSheet from './shopping-cart-sheet'
import MobileMenuSheet from './mobile-menu-sheet'
import Search from './search'
import Announcement from './annoucement'
import ProfilePopup from './profile-popup'

import { navItems } from '@/contants'
import Logo from '@/assets/82f78b35-02e0-4783-aa65-b1b40b34ed51.png'
import MobileSearch from './mobile-search'

const Navbar = async () => {
	return (
		<header className='bg-white' id='navbar'>
			<div className='mx-auto max-w-screen-3xl px-4 sm:px-6 lg:px-8'>
				<div className='flex h-16 xl:h-20 items-center justify-between'>
					{/* Left Section */}
					<div className='flex gap-3'>
						<MobileMenuSheet />
						<Link className='flex justify-center items-center' href='/'>
							<span className='sr-only'>Home</span>
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

					{/* Right Section */}
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
