// Components Imports
import ProductPageClient from '@/components/products/product-page'

// Queries Imports
import { getProductsByOffers, getSingleProductById } from '@/lib/queries'

// Types Imports
import type { WPProduct } from '@/types'

// Next.js Imports
import type { Metadata, ResolvingMetadata } from 'next'

// Force Static Page
export const dynamic = 'force-static'

/**
 * Asynchronously generates static parameters based on products fetched by offers.
 *
 * @return {Promise<{ product: string }[]>} An array of objects containing product IDs.
 */
export async function generateStaticParams(): Promise<{ product: string }[]> {
	const products: WPProduct[] = await getProductsByOffers()

	return products.map((product) => ({ product: product.id }))
}

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

	return <ProductPageClient productInfo={productInfo} />
}

export default ProductPage
