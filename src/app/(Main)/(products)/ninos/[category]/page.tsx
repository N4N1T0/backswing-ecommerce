import ProductCard from '@/components/products/product-card'
import { getProductsByCategories } from '@/lib/queries'
import type { WPProduct } from '@/types'
import type { Metadata } from 'next'

export const dynamic = 'force-static'

export async function generateStaticParams() {
	return [{ category: 'camisetas' }, { category: 'sudaderas' }]
}

export async function generateMetadata({
	params,
}: { params: { category: string } }): Promise<Metadata> {
	return {
		title: `Niños - ${params.category}`,
		description: `Diseños de ${params.category} para niños amantes del Padel`,
	}
}

const NinoPage = async ({ params }: { params: { category: string } }) => {
	const products: WPProduct[] = await getProductsByCategories(
		params.category,
		'ninos',
	)

	return (
		<section
			id={`niños ${params.category} colection`}
			className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 md:gap-y-10'
		>
			{products.map((product) => (
				<ProductCard
					key={product.id}
					product={product}
					route={`ninos/${params.category}`}
				/>
			))}
		</section>
	)
}

export default NinoPage
