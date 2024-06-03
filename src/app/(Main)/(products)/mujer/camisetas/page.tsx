import ProductCard from '@/components/products/product-card'
import type { Metadata } from 'next'
import { getProductsByCategories } from '@/lib/queries'
import type { WPProduct } from '@/types'

export const dynamic = 'force-static'

export const metadata: Metadata = {
	title: 'Mujer - Camisetas',
	description: 'Diseños de camisetas para mujer amantes del Padel',
}

const MujerCamisetasPage = async () => {
	const products: WPProduct[] = await getProductsByCategories(
		'camisetas',
		'mujer',
	)

	return (
		<section
			id='mujer camietas collection'
			className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 md:gap-y-10'
		>
			{products.map((product) => (
				<ProductCard
					key={product.id}
					product={product}
					route='mujer/camisetas'
				/>
			))}
		</section>
	)
}

export default MujerCamisetasPage
