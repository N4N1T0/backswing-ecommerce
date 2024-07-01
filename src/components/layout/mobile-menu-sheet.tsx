'use client'

// Ui Imports
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
	SheetClose,
} from '@/components/ui/sheet'

// Data Imports
import { navItems } from '@/contants'

// Assets Imports
import { Menu } from 'lucide-react'
import LogoMobile from '@/assets/e9094108-15ea-477b-900e-7ef4183ac717.png'

// Next.js Imports
import Link from 'next/link'
import Image from 'next/image'

/**
 * Renders a mobile menu sheet component.
 *
 * @return {JSX.Element} The mobile menu sheet component.
 */
const MobileMenuSheet = (): JSX.Element => {
	// Render the mobile menu sheet component.
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
						<Image
							src={LogoMobile}
							alt='Mobile Logo'
							title='Mobile Logo'
							className='w-full h-auto'
						/>
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
