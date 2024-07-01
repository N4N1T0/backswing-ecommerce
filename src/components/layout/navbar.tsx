// Next.js Imports
import Link from 'next/link'
import Image from 'next/image'

// Components Imports
import ShoppingCartSheet from '@/components/layout/shopping-cart-sheet'
import MobileMenuSheet from '@/components/layout/mobile-menu-sheet'
import Search from '@/components/layout/search'
import Announcement from '@/components/layout/annoucement'
import ProfilePopup from '@/components/layout/profile-popup'
import MobileSearch from '@/components/layout/mobile-search'

// Assets Imports
import { navItems } from '@/contants'
import Logo from '@/assets/82f78b35-02e0-4783-aa65-b1b40b34ed51.png'

/**
 * Renders the Navbar component with different sections like left and right containing various elements.
 *
 * @return {JSX.Element} The Navbar component.
 */
const Navbar = (): JSX.Element => {
	return (
		<header className='bg-white' id='navbar'>
			{/* Container */}
			<div className='mx-auto max-w-screen-3xl px-4 sm:px-6 lg:px-8'>
				{/* Header Content */}
				<div className='flex h-16 xl:h-20 items-center justify-between'>
					{/* Left Section */}
					<div className='flex gap-3'>
						{/* Mobile Menu Sheet */}
						<MobileMenuSheet />
						{/* Logo */}
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
						{/* Desktop Navbar */}
						<div className='hidden lg:flex md:items-center md:gap-12 pl-12'>
							<nav aria-label='Desktop Navbar'>
								<ul className='flex items-center gap-6'>
									{/* Render each navigation item */}
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
							{/* Search */}
							<Search />
						</div>
						{/* Mobile Search */}
						<MobileSearch />
						{/* Profile Popup */}
						<ProfilePopup />
						{/* Shopping Cart Sheet */}
						<ShoppingCartSheet />
					</div>
				</div>
			</div>
			{/* Announcement */}
			<Announcement />
		</header>
	)
}

export default Navbar
