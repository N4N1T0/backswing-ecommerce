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
	title: 'Hombre - Sudaderas',
	description: 'Diseños de sudaderas para hombres amantes del Padel',
}

/**
 * Fetches and renders a collection of men's shirts.
 *
 * @return {Promise<JSX.Element>} A section containing a grid of ProductCard components.
 */
const HombreSudaderasPage = async (): Promise<JSX.Element> => {
	const products: WPProduct[] = await getProductsByCategories(
		'sudaderas',
		'hombre',
	)

	return (
		<section id='hombre sudaderas collection'>
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

export default HombreSudaderasPage
