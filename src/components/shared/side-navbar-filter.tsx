'use client'

// UI Imports
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

// Next.js Imports
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Data Imports
import { sidebarAccordion } from '@/contants'

// Utils Imports
import { accordionPathname } from '@/lib/utils'

/**
 * Renders the side navigation bar filter.
 *
 * @return {JSX.Element} The JSX element representing the side navigation bar filter.
 */
const SideNavbarFilter = (): JSX.Element => {
	// Get the current pathname
	const pathname = usePathname()
	// Calculate the accordion path based on the current pathname
	const accordionPath = accordionPathname(
		pathname,
		sidebarAccordion.map((accordion) => accordion.label),
	)

	return (
		// Render an accordion component
		<Accordion type='multiple' className='pr-5' defaultValue={accordionPath}>
			{/* Loop over the sidebarAccordion array */}
			{sidebarAccordion.map((accordion) => (
				// Render an accordion item
				<AccordionItem
					value={accordion.label}
					key={accordion.label}
					className='relative'
				>
					{/* Render the accordion trigger */}
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
					{/* Render the accordion content */}
					<AccordionContent className='space-y-2'>
						{/* Loop over the products in the accordion and render a link for each */}
						{accordion.products.map((product) => (
							<li
								key={product.label}
								className='list-none ml-5 hover:text-gray-500 duration-200 transition-colors'
							>
								<Link href={product.route}>{product.label}</Link>
							</li>
						))}
					</AccordionContent>
				</AccordionItem>
			))}
			{/* Render a link to the personalize page with a 'new' badge */}
			<Link
				href='/personalizar'
				className='flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline relative'
			>
				Personalizar
				<span className='absolute top-2 -right-1 text-xs text-white bg-gray-900 rounded-full px-1.5 py-0.5 pointer-events-none'>
					nuevo
				</span>
			</Link>
		</Accordion>
	)
}

export default SideNavbarFilter
