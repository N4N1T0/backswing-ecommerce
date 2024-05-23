import Link from 'next/link'
import Image from 'next/image'
import { parseStaticProductContent } from '@/lib/utils'
import { subHeroStaticProducts as products } from '@/contants/static-products'

// This is a functional component that fetches the latest 5 products from the API and renders them in a grid.
// The component is a section with the id 'sub-hero'.
// It uses Tailwind CSS classes to style the layout.
const SubHero = () => {
	// Render the product grid.
	return (
		<section id='sub-hero'>
			{/* Center the grid horizontally and add padding. */}
			<div className='mx-auto max-w-screen-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
				{/* Create a grid with 1 column on small devices, 2 columns on medium devices, 3 columns on large devices, and 4 columns on extra large devices. */}
				<ul className='mt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
					{/* Loop through each product. */}
					{products.map((product, index) => {
						// Parse the product content to extract the category, gender, ID, image, description, and parsed name.
						const { category, gender, id, image, parsedName } =
							parseStaticProductContent(product)

						// Render a grid item with a link to the product page.
						return (
							<li
								key={id}
								className={`${
									index === 4
										? 'lg:col-span-2 lg:row-span-2 lg:row-start-1 lg:col-start-1'
										: ''
								} group relative block overflow-hidden`}
							>
								{/* Link to the product page. */}
								<Link
									href={`/${gender?.toLowerCase()}/${category?.toLowerCase()}/${id}`}
								>
									{/* Render the product image. */}
									<Image
										src={image.sourceUrl}
										alt={parsedName}
										className='aspect-square object-center transition-transform duration-300 ease-out group-hover:scale-110 w-auto h-auto'
										width={index === 4 ? 1000 : 400}
										height={index === 4 ? 1000 : 400}
										priority
									/>
									{/* Render the product name as a heading. */}
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
}

export default SubHero
