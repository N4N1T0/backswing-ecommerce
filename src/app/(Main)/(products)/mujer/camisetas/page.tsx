// Components Imports
import ProductCard from '@/components/products/product-card'

// Types Imports
import type { Metadata } from 'next'
import type { WPProduct } from '@/types'

// Queries Imports
import { getProductsByCategories } from '@/lib/queries'

// Metadata for the page
export const metadata: Metadata = {
	title: 'Mujer - Camisetas',
	description: 'Diseños de camisetas para mujer amantes del Padel',
}

/**
 * Renders a section displaying a collection of women's t-shirts.
 *
 * @return {Promise<JSX.Element>} A section containing a grid of ProductCard components.
 */
const MujerCamisetasPage = async (): Promise<JSX.Element> => {
	const products: WPProduct[] = await getProductsByCategories(
		'camisetas',
		'mujer',
	)

	return (
		<section
			id='mujer camietas collection'
			className='grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-8 md:gap-y-10'
		>
			{products.map((product, index) => (
				<ProductCard
					key={product.id}
					product={product}
					route='hombre/camisetas'
					priority={index}
				/>
			))}
		</section>
	)
}

export default MujerCamisetasPage
