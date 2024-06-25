import ProductCard from '@/components/products/product-card'
import type { Metadata } from 'next'
import { getProductsByOffers } from '@/lib/queries'
import type { WPProduct } from '@/types'

export const dynamic = 'force-static'

export const metadata: Metadata = {
	title: 'Ofertas - Sudaderas',
	description: 'Diseños de sudaderas para hombres amantes del Padel',
}

const OffersSudaderasPage = async () => {
	const products: WPProduct[] = await getProductsByOffers('sudaderas')

	return (
		<section
			id='ofertas sudaderas collection'
			className='grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-8 md:gap-y-10'
		>
			{products.map((product) => (
				<ProductCard
					key={product.id}
					product={product}
					route='ofertas/sudaderas'
				/>
			))}
		</section>
	)
}

export default OffersSudaderasPage
