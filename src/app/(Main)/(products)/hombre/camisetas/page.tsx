// Components Imports
import ProductCard from '@/components/products/product-card'

// Types Imports
import type { Metadata } from 'next'
import type { WPProduct } from '@/types'

// Queries Imports
import { getProductsByCategories } from '@/lib/queries'
import Breadcrumbs from '@/components/shared/breadcrumbs'

// Metadata for the page
export const metadata: Metadata = {
	title: 'Hombre - Camisetas',
	description: 'Diseños de camisetas para hombres amantes del Padel',
}

/**
 * Renders a section displaying a collection of men's t-shirts.
 * The section is divided into a grid with 2 columns on small screens,
 * 3 columns on medium screens, and 4 columns on extra large screens.
 * Each t-shirt is rendered as a ProductCard component with the product's id,
 * product details, and the route to the men's t-shirts page.
 *
 * @return {JSX.Element} A section containing a grid of ProductCard components.
 */
const HombreCamisetasPage = async (): Promise<JSX.Element> => {
	const products: WPProduct[] = await getProductsByCategories(
		'camisetas',
		'hombre',
	)

	return (
		<section id='hombre camietas collection'>
			<Breadcrumbs />
			<div className='grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-8 md:gap-y-10 mt-5'>
				{products.map((product, index) => (
					<ProductCard
						key={product.id}
						product={product}
						route='hombre/camisetas'
						priority={index}
					/>
				))}
			</div>
		</section>
	)
}

export default HombreCamisetasPage
