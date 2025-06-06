'use client'

// UI Imports
import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetClose,
} from '@/components/ui/sheet'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

// Next.js Imports
import { usePathname } from 'next/navigation'
import Link from 'next/link'

// Utils Imports
import { accordionPathname } from '@/lib/utils'

// Data Imports
import { sidebarAccordion } from '@/contants'

/**
 * Renders the Navbar Filter Sheet component with accordion functionality.
 *
 * @return {JSX.Element} The JSX element representing the Navbar Filter Sheet.
 */
const NavbarFilterSheet = (): JSX.Element => {
	// Get the current pathname
	const pathname = usePathname()
	// Calculate the accordion path based on the current pathname
	const accordionPath = accordionPathname(
		pathname,
		sidebarAccordion.map((accordion) => accordion.label),
	)

	return (
		<Sheet>
			{/* Trigger for the sheet */}
			<SheetTrigger className='w-full backdrop:text-center border border-secondary text-secondary bg-white hover:bg-secondary hover:text-white transition-colors duration-200 py-3'>
				Filtros
			</SheetTrigger>
			{/* Content of the sheet */}
			<SheetContent side='left' className='bg-white'>
				{/* Accordion component */}
				<Accordion
					type='multiple'
					className='pr-5'
					defaultValue={accordionPath}
				>
					{/* Loop over the sidebarAccordion array */}
					{sidebarAccordion.map((accordion) => (
						<AccordionItem
							value={accordion.label}
							key={accordion.label}
							className='relative'
						>
							{/* Accordion trigger */}
							<AccordionTrigger
								disabled={accordion.commingSoon}
								className={`${
									accordion.commingSoon
										? 'cursor-not-allowed pointer-events-none opacity-50 relative'
										: ''
								}`}
							>
								{/* Display 'Niños' instead of 'Ninos' */}
								{accordion.label === 'Ninos' ? 'Niños' : accordion.label}
							</AccordionTrigger>
							{/* Display a 'pronto' badge if the accordion is comming soon */}
							{accordion.commingSoon && (
								<span className='absolute top-2 -right-1 text-xs text-white bg-red-500 rounded-full px-1.5 py-0.5 pointer-events-none'>
									pronto
								</span>
							)}
							{/* Content of the accordion */}
							<AccordionContent className='space-y-2'>
								{/* Loop over the products of the accordion */}
								{accordion.products.map((product) => (
									<li
										key={product.label}
										className='list-none ml-5 hover:text-gray-500 duration-200 transition-colors'
									>
										{/* Close the sheet when a product is clicked */}
										<SheetClose asChild>
											{/* Link to the product */}
											<Link href={product.route}>{product.label}</Link>
										</SheetClose>
									</li>
								))}
							</AccordionContent>
						</AccordionItem>
					))}
					{/* Custom sheet close for the 'Personalizar' link */}
					<SheetClose>
						<Link
							href='/personalizar'
							className='flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline relative'
						>
							Personalizar
							{/* Display a 'nuevo' badge */}
							<span className='absolute top-2 -right-1 text-xs text-white bg-gray-900 rounded-full px-1.5 py-0.5 pointer-events-none'>
								nuevo
							</span>
						</Link>
					</SheetClose>
				</Accordion>
			</SheetContent>
		</Sheet>
	)
}

export default NavbarFilterSheet
