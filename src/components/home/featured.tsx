import { parseStaticProductContent } from '@/lib/utils'
import { newProducts as products } from '@/contants/static-products'
import Image from 'next/image'
import Link from 'next/link'

const Featured = () => {
	/**
	 * This component renders the "Featured" section on the home page.
	 * It's a grid of products, with a heading, a paragraph, and
	 * links to view all products in the featured collection.
	 *
	 * The grid is divided into three columns on medium screens and
	 * four columns on large screens. The first column contains the
	 * heading and paragraph, while the other columns contain the
	 * product grid.
	 */

	return (
		<section>
			{/* The container for the featured section. It has some padding
      and is centered on medium screens. */}
			<div className='mx-auto max-w-screen-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
				{/* The grid container. It's divided into columns on medium screens and
        large screens. The first column contains the heading and paragraph, while
        the other columns contain the product grid. */}
				<div className='grid grid-cols-1 gap-4 lg:grid-cols-3 xl:grid-cols-4 lg:items-stretch'>
					{/* The first column contains the heading and paragraph. */}
					<div className='grid place-content-center bg-gray-300 p-6 sm:p-8'>
						{/* The container for the heading and paragraph. */}
						<div className='mx-auto max-w-md text-center lg:text-left'>
							{/* The heading. It's a h2 element with a font size class that
              makes it larger on medium screens. */}
							<header>
								<h2 className='text-xl font-bold text-gray-900 sm:text-3xl uppercase text-wrap'>
									Sudaderas Unisex
								</h2>
								{/* The paragraph. It explains what the featured collection is
                and why it's cool. */}
								<p className='mt-4 text-gray-700'>
									Explora nuestra nueva colección de sudaderas, gorros y más.
									Con calidad premium y diseños vanguardistas, cada artículo
									está diseñado para hombres y mujeres que adoran el pádel y la
									moda.
								</p>
							</header>
							{/* The unordered list of links to view all products in the
              featured collection. */}
							<ul />
							{/* The link to view all products in the featured collection.
              It's styled with a hover effect that changes the background color. */}
							<Link
								href='/nuevo/sudaderas'
								className='mt-8 inline-block bg-gray-950 px-12 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-gray-700'
							>
								Verlos Todos
							</Link>
						</div>
					</div>
					{/* The second column contains the product grid. */}
					<div className='lg:col-span-2 xl:col-span-3 lg:py-8'>
						{/* The container for the product grid. */}
						<ul className='grid grid-cols-2 xl:grid-cols-4 gap-4'>
							{/* The products are rendered in a loop using the map function. */
							/* Each product is rendered as a li element with a link to the
              product page. The link contains a group hover effect that
              changes the opacity of the image. The image is also styled
              with a aspect ratio and object centering. The h3 and p
              elements contain the product name and price, respectively. */}
							{products.map((product) => {
								const { category, gender, id, image, parsedPrice, parsedName } =
									parseStaticProductContent(product)

								return (
									<li key={product.id} className='relative'>
										<Link
											href={`/${gender?.toLowerCase()}/${category?.toLowerCase()}/${id}`}
											className='group block'
										>
											<Image
												src={image.sourceUrl}
												alt={parsedName}
												title={parsedName}
												width={500}
												height={500}
												className='aspect-square w-full object-center transition-opacity duration-300 ease-out group-hover:opacity-70 h-auto'
											/>
											<div className='mt-3'>
												<h3 className='font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4'>
													{parsedName}
												</h3>
												<p className='mt-1 text-sm text-gray-700'>
													{parsedPrice}
												</p>
											</div>
										</Link>
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
