import ProductCard from '@/components/products/product-card'
import { getProductsByOferts } from '@/lib/queries'
import type { Metadata } from 'next'

export const dynamic = 'force-static'

export async function generateStaticParams() {
	return [{ category: 'camisetas' }, { category: 'sudaderas' }]
}

export async function generateMetadata({
	params,
}: { params: { category: string } }): Promise<Metadata> {
	return {
		title: `Ofertas - ${params.category}`,
		description: `Diseños en ofertas de ${params.category} para los amantes del Padel`,
	}
}

const OfertasPage = async ({ params }: { params: { category: string } }) => {
	const products = await getProductsByOferts()

	return (
		<section
			id={`ofertas ${params.category} colection`}
			className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 md:gap-y-10'
		>
			{products.map((product) => (
				<ProductCard
					key={product.id}
					product={product}
					route={`ofertas/${params.category}`}
				/>
			))}
		</section>
	)
}

export default OfertasPage
