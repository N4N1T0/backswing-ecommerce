// Components Imports
import ProductPageClient from '@/components/products/product-page'
import Breadcrumbs from '@/components/shared/breadcrumbs'

// Queries Imports
import { getSingleProductById } from '@/lib/queries'

// Next.js Imports
import type { Metadata, ResolvingMetadata } from 'next'

/**
 * Generates metadata for a product.
 *
 * @param {Object} params - The parameters for the function.
 * @param {string} params.product - The ID of the product.
 * @param {ResolvingMetadata} parent - The parent resolving metadata.
 * @returns {Promise<Metadata>} - The generated metadata.
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
 * Renders the product page for a specific product.
 *
 * @param {Object} params - The parameters for the function.
 * @param {string} params.product - The ID of the product.
 * @return {Promise<JSX.Element>} A React component representing the product page.
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
