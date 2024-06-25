import ProductCard from '@/components/products/product-card'
import type { Metadata } from 'next'
import { getProductsByCategories } from '@/lib/queries'
import type { WPProduct } from '@/types'

export const dynamic = 'force-static'

export const metadata: Metadata = {
	title: 'Hombre - Camisetas',
	description: 'Diseños de camisetas para hombres amantes del Padel',
}

const HombreCamisetasPage = async () => {
	const products: WPProduct[] = await getProductsByCategories(
		'camisetas',
		'hombre',
	)

	return (
		<section
			id='hombre camietas collection'
			className='grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-8 md:gap-y-10'
		>
			{products.map((product) => (
				<ProductCard
					key={product.id}
					product={product}
					route='hombre/camisetas'
				/>
			))}
		</section>
	)
}

export default HombreCamisetasPage
