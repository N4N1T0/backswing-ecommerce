// Components Imports
import ProductPageClient from '@/components/products/product-page'
import Breadcrumbs from '@/components/shared/breadcrumbs'

// Queries Imports
import { getSingleProductById } from '@/lib/queries'

// Next.js Imports
import type { Metadata, ResolvingMetadata } from 'next'

/**
 * Asynchronously generates metadata for a product.
 *
 * @param {{ product: string }} params - The parameters object containing the product ID.
 * @param {ResolvingMetadata} parent - The parent ResolvingMetadata object.
 * @return {Promise<Metadata>} The metadata object with title, description, and images.
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
 * @param {Object} params - An object containing the product ID.
 * @param {string} params.product - The ID of the product to fetch.
 * @return {Promise<JSX.Element>} A Promise that resolves to a JSX element representing the rendered ProductPageClient component.
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
