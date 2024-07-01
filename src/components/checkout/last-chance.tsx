// Components Imports
import CountDown from '@/components/checkout/countdown'

// Next.js Imports
import Link from 'next/link'
import Image from 'next/image'

// Queries Imports
import { getProductsByFeatured } from '@/lib/queries'

// Utils Imports
import { parseProductContent } from '@/lib/utils'

/**
 * Asynchronously fetches featured products and renders them with specific styling.
 *
 * @return {Promise<JSX.Element>} The JSX element representing the last chance products section.
 */
const LastChance = async (): Promise<JSX.Element> => {
	// Fetch featured products
	const products = await getProductsByFeatured()

	return (
		<div className='p-6 border bg-red-50 border-gray-300 md:p-8'>
			{/* Title and countdown */}
			<div className='flex items-center justify-between mb-4 '>
				<h2 className='text-3xl font-bold text-gray-700'>Ultimas unidades</h2>
				<CountDown />
			</div>
			{/* Products grid */}
			<div className='grid grid-cols-2 gap-3'>
				{/* Map over the first 4 featured products */}
				{products?.slice(0, 4).map((product) => {
					// Parse product content
					const { id, parsedName, parsedPrice, image, category, gender } =
						parseProductContent(product)

					return (
						<div key={id} className='col-span-1 flex gap-3'>
							{/* Product image */}
							<Image
								src={image.sourceUrl}
								alt={parsedName}
								width={100}
								height={100}
								className='aspect-square'
							/>
							{/* Product details */}
							<div className='flex flex-col justify-between items-start'>
								<p className='text-gray-700'>{parsedName}</p>
								<p className='text-lg font-bold text-gray-950 mr-2'>
									{parsedPrice}
								</p>
								{/* Add to cart button */}
								<Link
									href={`/${gender?.toLowerCase()}/${category?.toLowerCase()}/${id}`}
									target='_blank' // Remove this if you don't want to open in a new tab
									className='w-fit flex items-center justify-center px-4 py-2 bg-gray-950 text-white hover:bg-gray-700 transition-colors duration-200'
								>
									Agregar
								</Link>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default LastChance
