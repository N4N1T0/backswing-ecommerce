import ProductCard from '@/components/products/product-card'
import type { Metadata } from 'next'
import { getProductsByFeatured } from '@/lib/queries'
import type { WPProduct } from '@/types'

export const dynamic = 'force-static'

export const metadata: Metadata = {
	title: 'Nuevo - Camisetas',
	description: 'Diseños de camisetas para mujer amantes del Padel',
}

const NuevoCamisetasPage = async () => {
	const products: WPProduct[] = await getProductsByFeatured()

	return (
		<section
			id='nuevo camisetas collection'
			className='grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-8 md:gap-y-10'
		>
			{products.map((product) => (
				<ProductCard
					key={product.id}
					product={product}
					route='nuevo/camisetas'
				/>
			))}
		</section>
	)
}

export default NuevoCamisetasPage
