import ProductPageClient from '@/components/products/product-page'
import { getProductsByFeatured, getSingleProductById } from '@/lib/queries'
import type { WPProduct } from '@/types'
import type { Metadata, ResolvingMetadata } from 'next'

export const dynamic = 'force-static'

export async function generateStaticParams() {
	const products: WPProduct[] = await getProductsByFeatured()

	return products.map((product) => ({ product: product.id }))
}

export async function generateMetadata(
	{ params }: { params: { product: string } },
	parent: ResolvingMetadata,
): Promise<Metadata> {
	// fetch data
	const productInfo = await getSingleProductById(params.product)
	const previousImages = (await parent).openGraph?.images || []

	return {
		title: productInfo.name,
		description: productInfo.content,
		openGraph: {
			images: [
				productInfo.variations.nodes[0].image.sourceUrl,
				...previousImages,
			],
		},
	}
}

const ProductPage = async ({ params }: { params: { product: string } }) => {
	const productInfo = await getSingleProductById(params.product)

	return <ProductPageClient productInfo={productInfo} />
}

export default ProductPage
