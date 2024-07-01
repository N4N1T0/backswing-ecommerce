// Components Imports
import ProductPageClient from '@/components/products/product-page'

// Queries Imports
import { getProductsByCategories, getSingleProductById } from '@/lib/queries'

// Types Imports
import type { WPProduct } from '@/types'

// Next Imports
import type { Metadata, ResolvingMetadata } from 'next'

// Force Static Page
export const dynamic = 'force-static'

/**
 * Retrieves the static parameters for the generateStaticParams function.
 *
 * @return {Promise<{ product: string }[]>} An array of objects containing the product IDs.
 */
export async function generateStaticParams(): Promise<{ product: string }[]> {
	const products: WPProduct[] = await getProductsByCategories(
		'camisetas',
		'hombre',
	)

	return products.map((product) => ({ product: product.id }))
}

/**
 * Generates metadata for a product based on the provided parameters.
 *
 * @param {{ params: { product: string } }} params - Object containing the product ID.
 * @param {ResolvingMetadata} parent - Parent metadata for resolving.
 * @return {Promise<Metadata>} The generated metadata for the product.
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
 * Retrieves a single product by its ID and renders the product page.
 *
 * @param {Object} params - The parameters for the function.
 * @param {string} params.product - The ID of the product.
 * @return {Promise<JSX.Element>} A Promise that resolves to the rendered product page.
 */
const ProductPage = async ({
	params,
}: { params: { product: string } }): Promise<JSX.Element> => {
	const productInfo = await getSingleProductById(params.product)

	return <ProductPageClient productInfo={productInfo} />
}

export default ProductPage
