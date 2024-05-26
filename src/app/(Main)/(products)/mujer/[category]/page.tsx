import ProductCard from '@/components/products/product-card'
import { getProductsByCategories } from '@/lib/queries'
import type { WPProduct } from '@/types'
import type { Metadata } from 'next'

export async function generateMetadata({
	params,
}: { params: { category: string } }): Promise<Metadata> {
	return {
		title: `Mujer - ${params.category}`,
		description: `Diseños de ${params.category} para mujeres amantes del Padel`,
	}
}

const MujerPage = async ({ params }: { params: { category: string } }) => {
	const products: WPProduct[] = await getProductsByCategories(
		params.category,
		'mujer',
	)

	return (
		<section
			id={`mujer ${params.category} colection`}
			className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 md:gap-y-10'
		>
			{products.map((product) => (
				<ProductCard
					key={product.id}
					product={product}
					route={`mujer/${params.category}`}
				/>
			))}
		</section>
	)
}

export async function generateStaticParams() {
	return [{ category: 'camisetas' }, { category: 'sudaderas' }]
}

export default MujerPage
