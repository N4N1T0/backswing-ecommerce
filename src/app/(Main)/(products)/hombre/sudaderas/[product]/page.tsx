// Components Imports
import ProductPageClient from '@/components/products/product-page'

// Queries Imports
import { getSingleProductById } from '@/lib/queries'

// Next Imports
import type { Metadata, ResolvingMetadata } from 'next'

/**
 * Asynchronously generates metadata for a product based on the provided parameters.
 *
 * @param {Object} params - An object containing the product ID.
 * @param {string} params.product - The ID of the product.
 * @param {ResolvingMetadata} parent - The parent metadata for resolving.
 * @returns {Promise<Metadata>} A Promise that resolves to the generated metadata for the product.
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
 * Renders a product page asynchronously.
 *
 * @param {{ params: { product: string } }} params - Object containing the product ID.
 * @return {Promise<JSX.Element>} The rendered product page.
 */
const ProductPage = async ({
	params,
}: { params: { product: string } }): Promise<JSX.Element> => {
	const productInfo = await getSingleProductById(params.product)

	return <ProductPageClient productInfo={productInfo} />
}

export default ProductPage
