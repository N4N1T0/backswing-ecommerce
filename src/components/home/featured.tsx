// Next.js Imports
import Image from 'next/image'
import Link from 'next/link'

// Utils Imports
import { parseStaticProductContent } from '@/lib/utils'

// Data Imports
import { newProducts as products } from '@/contants/static-products'

/**
 * Renders the featured section of the homepage.
 *
 * @return {JSX.Element} The featured section component.
 */
const Featured = (): JSX.Element => {
	return (
		<section id='featured'>
			<div className='mx-auto max-w-screen-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
				{/* Grid container for the featured section */}
				<div className='grid grid-cols-1 gap-4 lg:grid-cols-3 xl:grid-cols-4 lg:items-stretch'>
					{/* Featured text and link section */}
					<div className='grid place-content-center bg-gray-300 p-6 sm:p-8'>
						<div className='mx-auto max-w-md text-center lg:text-left'>
							{/* Heading */}
							<header>
								<h2 className='text-xl font-bold text-gray-900 sm:text-3xl uppercase text-wrap'>
									Sudaderas Unisex
								</h2>
								{/* Description */}
								<p className='mt-4 text-gray-700'>
									Explora nuestra nueva colección de sudaderas, gorros y más.
									Con calidad premium y diseños vanguardistas, cada artículo
									está diseñado para hombres y mujeres que adoran el pádel y la
									moda.
								</p>
							</header>
							{/* Link to the products page */}
							<Link
								href='/nuevo/sudaderas'
								className='mt-8 inline-block bg-gray-950 px-12 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-gray-700'
							>
								Verlos Todos
							</Link>
						</div>
					</div>
					{/* Products section */}
					<div className='lg:col-span-2 xl:col-span-3 lg:py-8'>
						<ul className='grid grid-cols-2 xl:grid-cols-4 gap-4'>
							{/* Mapping through the products */}
							{products.map((product) => {
								const { id, image, parsedPrice, parsedName } =
									parseStaticProductContent(product)

								return (
									<li key={product.id} className='relative group'>
										<Link
											href={`/sudaderas/${id}`}
											className='flex justify-center items-center bg-linear-to-r from-[#A8A8A8] from-50% to-50% to-white'
										>
											<Image
												src={image.sourceUrl}
												alt={parsedName}
												title={parsedName}
												width={500}
												height={500}
												loading='lazy'
												className='aspect-square w-full object-scale-down h-auto'
											/>
										</Link>
										<div className='mt-3'>
											<h3 className='font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4'>
												{parsedName}
											</h3>
											<p className='mt-1 text-sm text-gray-700'>
												{parsedPrice}
											</p>
										</div>
									</li>
								)
							})}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Featured
