// Next.js Imports
import Link from 'next/link'

// Utils Imports
import { useCapitalize, parseStaticProductContent } from '@/lib/utils'

// Next.js Image
import Image from 'next/image'

// Assets Imports
import {
	collectionMenStaticProducts,
	collectionWomenStaticProducts,
} from '@/contants/static-products'

/**
 * Renders a collection section based on the provided direction and collection type.
 *
 * @param {string} direction - The direction of the collection section ('right' or 'left').
 * @param {string} props.collection - The type of collection ('hombre' for men, 'mujer' for women, or 'niño' for children).
 * @return {JSX.Element} The collection section JSX element.
 */
const Collection = ({
	direction,
	collection,
}: {
	direction: 'right' | 'left'
	collection: 'hombre' | 'mujer' | 'niño'
}): JSX.Element => {
	// Determine the appropriate set of static products based on the collection type
	const products =
		collection === 'hombre'
			? collectionMenStaticProducts
			: collectionWomenStaticProducts

	return (
		<section id={`${collection}-collection`}>
			<div className='mx-auto max-w-screen-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
				{/* Header section with title and description */}
				<header
					className={`w-full flex flex-col ${
						direction === 'right' ? 'items-end' : 'items-start'
					}`}
				>
					<h2 className='text-xl font-bold text-gray-900 sm:text-3xl'>
						{useCapitalize(collection)}
					</h2>

					{/* Display description based on the collection type */}
					{collection === 'hombre' ? (
						<p
							className={`${
								direction === 'right' ? 'text-right' : 'text-left'
							} mt-4 max-w-md text-gray-500`}
						>
							Descubre nuestra nueva coleccion de camisetas para Hombres
						</p>
					) : (
						<p
							className={`${
								direction === 'right' ? 'text-right' : 'text-left'
							} mt-4 max-w-md text-gray-500`}
						>
							Descubre nuestra nueva coleccion de camisetas para Mujeres
						</p>
					)}
				</header>

				{/* Product grid */}
				<ul className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
					{/* Map over the products and render a product card for each */}
					{products.map((product) => {
						const { category, gender, id, image, parsedName, parsedPrice } =
							parseStaticProductContent(product)

						return (
							<li key={product.id} className='relative'>
								{/* Link to the product page */}
								<Link
									href={`/${gender?.toLocaleLowerCase()}/${category?.toLocaleLowerCase()}/${id}`}
									className='group block overflow-hidden bg-gradient-to-r from-[#A8A8A8] from-50% to-50% to-white'
								>
									{/* Product image */}
									<Image
										src={image.sourceUrl}
										alt={parsedName}
										title={parsedName}
										width={350}
										height={450}
										loading='lazy'
										className='w-full h-auto object-contain transition-transform ease-out duration-300 group-hover:scale-105 aspect-square'
									/>

									{/* Product details */}
									<div className='relative bg-white pt-3'>
										<h3 className='text-gray-700 group-hover:underline group-hover:underline-offset-4 uppercase font-medium'>
											{parsedName}
										</h3>

										<p className='mt-2'>
											<span className='sr-only'>Regular Price</span>

											<span className='tracking-wider text-gray-900'>
												{parsedPrice}
											</span>
										</p>
									</div>
								</Link>
							</li>
						)
					})}
				</ul>
			</div>
		</section>
	)
}

export default Collection
