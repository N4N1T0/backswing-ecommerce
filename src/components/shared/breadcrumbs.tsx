'use client'

// Utils Imports
import { pathnameCrumbs } from '@/lib/utils'

// Next.js Imports
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// React Imports
import React from 'react'

/**
 * Renders a breadcrumb navigation component.
 * @param {string} productName - The name of the product.
 *
 * @return {JSX.Element} The breadcrumb navigation component.
 */
const Breadcrumbs = ({
	productName,
}: { productName?: string }): JSX.Element => {
	// Get the current pathname from Next.js's usePathname hook
	const pathname = usePathname()
	// Generate the breadcrumbs based on the current pathname
	let crumbs = pathnameCrumbs(pathname)

	if (crumbs.length === 3 && productName) {
		const newCrumbs = crumbs.slice(0, 2)
		newCrumbs.push({
			name: productName,
			href: '#',
		})
		crumbs = newCrumbs
	}

	return (
		<nav aria-label='Breadcrumb'>
			{/* Render the breadcrumb navigation as an unordered list */}
			<ul className='flex items-center gap-1 text-sm text-gray-800'>
				{/* Render the home link */}
				<li>
					<Link href='/' className='block transition hover:text-gray-500'>
						<span className='sr-only'> Home </span>
						{/* Render the home icon */}
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-4 w-4'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<title>Arrow</title>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
							/>
						</svg>
					</Link>
				</li>
				{/* Render the arrow icon */}
				<li>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-4 w-4'
						viewBox='0 0 20 20'
						fill='currentColor'
					>
						<title>Arrow</title>
						<path
							fillRule='evenodd'
							d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
							clipRule='evenodd'
						/>
					</svg>
				</li>
				{/* Render each breadcrumb item */}
				{crumbs.map((crumb, index) => (
					<React.Fragment key={`${crumb.name}-${index}`}>
						<li>
							{/* Render the breadcrumb link */}
							<Link
								href={crumb.href}
								className='block transition hover:text-gray-500'
							>
								{/* Render the breadcrumb name */}
								{crumb.name}
							</Link>
						</li>
						{/* Render the arrow icon if we're not on the last item */}
						{index !== crumbs.length - 1 && (
							<li key={`${crumb.name}-${index}-Arrow`}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-4 w-4'
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<title>Arrow</title>
									<path
										fillRule='evenodd'
										d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
										clipRule='evenodd'
									/>
								</svg>
							</li>
						)}
					</React.Fragment>
				))}
			</ul>
		</nav>
	)
}

export default Breadcrumbs
