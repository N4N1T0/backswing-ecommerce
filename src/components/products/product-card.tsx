import { parseProductContent } from '@/lib/utils'
import type { WPProduct } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import WishlistHeart from './wishlist-heart'
import ColorPicker from './color-picker'

const ProductCard = React.memo(
	({ product, route }: { product: WPProduct; route: string }) => {
		const { parsedName, isNew, parsedPrice, colors, image, id, onSale } =
			parseProductContent(product)

		return (
			<div className='block'>
				<Link
					prefetch
					href={`/${route}/${id}`}
					className='relative h-[300px] sm:h-[400px] overflow-hidden block group'
				>
					<Image
						src={image.sourceUrl}
						alt={parsedName}
						title={parsedName}
						fill
						priority
						sizes='(max-width: 768px) 200px (max-width: 1200px) 400px'
						className={`aspect-square object-center transition-transform ease-out duration-300 group-hover:scale-110 h-auto w-auto ${
							isNew ? 'relative' : ''
						}`}
					/>
					{isNew && (
						<p className='text-xs uppercase tracking-wide bg-gray-900 py-1 px-3 text-gray-100 absolute right-3 top-3 z-50'>
							Nuevo
						</p>
					)}
				</Link>

				<div className='relative pt-3'>
					<div className='w-full flex justify-between items-center'>
						<h3 className='text-gray-950 font-medium uppercase text-sm md:text-base'>
							{parsedName}
						</h3>
						<WishlistHeart product={product} />
					</div>

					<ColorPicker colors={colors} isProductCard />

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
