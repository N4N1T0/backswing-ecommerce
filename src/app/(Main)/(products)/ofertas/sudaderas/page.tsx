// Components Imports
import ProductCard from '@/components/products/product-card'

// Types Imports
import type { Metadata } from 'next'
import type { WPProduct } from '@/types'

// Queries Imports
import { getProductsByOffers } from '@/lib/queries'

// Force Static Page
export const dynamic = 'force-static'

// Metadata for the page
export const metadata: Metadata = {
	title: 'Ofertas - Sudaderas',
	description: 'Diseños de sudaderas para hombres amantes del Padel',
}

/**
 * Fetches and renders a collection of offer products with the category "sudaderas".
 *
 * @return {Promise<JSX.Element>} A section element containing a grid of ProductCard components.
 */
const OffersSudaderasPage = async (): Promise<JSX.Element> => {
	const products: WPProduct[] = await getProductsByOffers('sudaderas')

	return (
		<section
			id='ofertas sudaderas collection'
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

export default OffersSudaderasPage
