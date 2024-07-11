// Utils Imports
import { parseProductContent } from '@/lib/utils'

// Types Imports
import type { WPProduct } from '@/types'

// Next.js Imports
import Image from 'next/image'
import Link from 'next/link'

// React Imports
import React from 'react'

// Components Imports
import WishlistHeart from '@/components/products/wishlist-heart'
import ColorPicker from '@/components/products/color-picker'

/**
 * React component for rendering a model picker.
 *
 * @param {WPProduct} product - Product object.
 * @param {string} route - Route for the product.
 */
const ProductCard = React.memo(
	({
		product,
		route,
		priority,
	}: { product: WPProduct; route: string; priority: number }) => {
		// Extract relevant data from the product object
		const { parsedName, isNew, parsedPrice, colors, image, id, onSale } =
			parseProductContent(product)

		// Render the product card
		return (
			<div className='block'>
				{/* Link to the product page */}
				<Link
					href={`/${route}/${id}`}
					className='relative h-[250px] sm:h-[400px] overflow-hidden block group'
				>
					{/* Display the product image */}
					<Image
						src={image.sourceUrl}
						alt={parsedName}
						title={parsedName}
						fill
						priority={priority <= 8}
						loading={priority <= 8 ? 'eager' : 'lazy'}
						sizes='(max-width: 768px) 200px (max-width: 1200px) 400px'
						className={`aspect-square object-center transition-transform ease-out duration-300 group-hover:scale-110 h-auto w-auto ${
							isNew ? 'relative' : ''
						}`}
					/>
					{/* Display "Nuevo" badge if the product is new */}
					{isNew && (
						<p className='text-xs uppercase tracking-wide bg-gray-900 py-1 px-3 text-gray-100 absolute right-3 top-3 z-50'>
							Nuevo
						</p>
					)}
				</Link>

				{/* Display product information */}
				<div className='relative pt-3'>
					{/* Display product name and wishlist heart */}
					<div className='w-full flex justify-between items-center'>
						<h3 className='text-gray-950 font-medium uppercase text-sm md:text-base'>
							{parsedName}
						</h3>
						<WishlistHeart product={product} />
					</div>

					{/* Display color picker */}
					<ColorPicker colors={colors} isProductCard />

					{/* Display product price and sale badge */}
					<div className='mt-1.5 flex items-center justify-between text-gray-900'>
						<p className='tracking-wide font-medium'>{parsedPrice}</p>

						{onSale && (
							<p className='text-xs uppercase tracking-wide bg-gray-900 py-1 px-3 text-gray-100'>
								Oferta
							</p>
						)}
					</div>
				</div>
			</div>
		)
	},
)

export default ProductCard
