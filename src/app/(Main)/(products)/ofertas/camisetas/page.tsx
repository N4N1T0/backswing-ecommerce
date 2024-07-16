// Components Imports
import ProductCard from '@/components/products/product-card'

// Types Imports
import type { Metadata } from 'next'
import type { WPProduct } from '@/types'

// Queries Imports
import { getProductsByOffers } from '@/lib/queries'
import Breadcrumbs from '@/components/shared/breadcrumbs'

// Metadata for the page
export const metadata: Metadata = {
	title: 'Ofertas - Camisetas',
	description: 'Diseños de camisetas para mujer amantes del Padel',
}

/**
 * Renders the Offers Camisetas Page asynchronously.
 *
 * @return {Promise<JSX.Element>} A section element containing a grid of ProductCard components for the offers on camisetas.
 */
const OffersCamisetasPage = async (): Promise<JSX.Element> => {
	const products: WPProduct[] = await getProductsByOffers()

	return (
		<section id='ofertas camisetas collection'>
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

export default OffersCamisetasPage
