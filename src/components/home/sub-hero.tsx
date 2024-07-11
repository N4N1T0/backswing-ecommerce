// Next.js Imports
import Link from 'next/link'
import Image from 'next/image'

// Utils Imports
import { parseStaticProductContent } from '@/lib/utils'

// Data Imports
import { subHeroStaticProducts as products } from '@/contants/static-products'

/**
 * Renders the SubHero section of the webpage with dynamic product content.
 *
 * @return {JSX.Element} The JSX element representing the SubHero section.
 */
const SubHero = (): JSX.Element => (
	<section id='sub-hero'>
		<div className='mx-auto max-w-screen-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
			<ul className='mt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
				{products.map((product, index) => {
					// Parse the static product data
					const { category, gender, id, image, parsedName } =
						parseStaticProductContent(product)

					return (
						<li
							key={id}
							// Apply different styles to the 5th item to make it larger
							className={`${
								index === 4
									? 'lg:col-span-2 lg:row-span-2 lg:row-start-1 lg:col-start-1'
									: ''
							} group relative block overflow-hidden bg-gradient-to-r from-[#A8A8A8] from-50% to-50% to-white`}
						>
							<Link
								href={`/${gender?.toLowerCase()}/${category?.toLowerCase()}/${id}`}
							>
								<Image
									src={image.sourceUrl}
									alt={parsedName}
									className='aspect-square object-contain transition-transform duration-300 ease-out group-hover:scale-110 w-auto h-auto'
									width={index === 4 ? 1000 : 400}
									height={index === 4 ? 1000 : 400}
									priority
								/>
								{/* Display the product name on top of the image */}
								<h3 className='text-xl text-gray-100 uppercase font-semibold bg-gray-900 px-3 py-2 absolute bottom-3 left-3'>
									{parsedName}
								</h3>
							</Link>
						</li>
					)
				})}
			</ul>
		</div>
	</section>
)

export default SubHero
