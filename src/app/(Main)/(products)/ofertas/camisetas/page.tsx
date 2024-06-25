import ProductCard from '@/components/products/product-card'
import type { Metadata } from 'next'
import { getProductsByOffers } from '@/lib/queries'
import type { WPProduct } from '@/types'

export const dynamic = 'force-static'

export const metadata: Metadata = {
	title: 'Ofertas - Camisetas',
	description: 'Diseños de camisetas para mujer amantes del Padel',
}

const OffersCamisetasPage = async () => {
	const products: WPProduct[] = await getProductsByOffers()

	return (
		<section
			id='ofertas camisetas collection'
			className='grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-8 md:gap-y-10'
		>
			{products.map((product) => (
				<ProductCard
					key={product.id}
					product={product}
					route='ofertas/camisetas'
				/>
			))}
		</section>
	)
}

export default OffersCamisetasPage
