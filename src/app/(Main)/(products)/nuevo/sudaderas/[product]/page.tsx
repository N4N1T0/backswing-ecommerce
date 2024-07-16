// Components Imports
import ProductPageClient from '@/components/products/product-page'
import Breadcrumbs from '@/components/shared/breadcrumbs'

// Queries Imports
import { getSingleProductById } from '@/lib/queries'

// Next.js Imports
import type { Metadata, ResolvingMetadata } from 'next'

/**
 * Generates metadata for a product based on the provided parameters.
 *
 * @param {{ product: string }} params - The parameters containing the product ID.
 * @param {ResolvingMetadata} parent - The parent metadata for resolving.
 * @return {Promise<Metadata>} The metadata object containing title, description, and openGraph images.
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
 * Asynchronously fetches a product by its ID and returns a component that displays the product information.
 *
 * @param {Object} params - An object containing the product ID.
 * @param {string} params.product - The ID of the product to fetch.
 * @return {Promise<JSX.Element>} A promise that resolves to a React component displaying the product information.
 */
const ProductPage = async ({
	params,
}: { params: { product: string } }): Promise<JSX.Element> => {
	const productInfo = await getSingleProductById(params.product)

	return (
		<>
			<Breadcrumbs productName={productInfo.name} />
			<ProductPageClient productInfo={productInfo} />
		</>
	)
}

export default ProductPage
