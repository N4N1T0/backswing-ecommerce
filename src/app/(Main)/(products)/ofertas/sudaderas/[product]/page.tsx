// Components Imports
import ProductPageClient from '@/components/products/product-page'

// Queries Imports
import { getSingleProductById } from '@/lib/queries'

// Next.js Imports
import type { Metadata, ResolvingMetadata } from 'next'

/**
 * Asynchronously generates metadata for a product.
 *
 * @param {Object} params - An object containing the product ID.
 * @param {string} params.product - The ID of the product.
 * @param {ResolvingMetadata} parent - The parent ResolvingMetadata object.
 * @return {Promise<Metadata>} A Promise that resolves to a Metadata object containing the title, description, and images of the product.
 */
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

/**
 * Asynchronously fetches product information by ID and renders a ProductPageClient component with the fetched product information.
 *
 * @param {{ product: string }} params - The parameters object containing the product ID.
 * @return {Promise<JSX.Element>} A Promise that resolves to a JSX element representing the rendered ProductPageClient component.
 */
const ProductPage = async ({
	params,
}: { params: { product: string } }): Promise<JSX.Element> => {
	const productInfo = await getSingleProductById(params.product)

	return <ProductPageClient productInfo={productInfo} />
}

export default ProductPage
