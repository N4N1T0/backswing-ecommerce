import ProductPageClient from '@/components/products/product-page'
import { sanityClientRead } from '@/sanity/lib/client'
import { GET_DESIGNS_BY_SLUG } from '@/sanity/queries'
import { SearchParamsProductIDType } from '@/types'

// export async function generateMetadata(
//   { params }: { params: { product: string } },
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   const productInfo = await getSingleProductById(params.product)
//   const previousImages = (await parent).openGraph?.images || []

//   return {
//     title: productInfo.name,
//     description: productInfo.content,
//     openGraph: {
//       images: [
//         productInfo.variations.nodes[0].image.sourceUrl,
//         ...previousImages
//       ]
//     }
//   }
// }

const ProductPage = async ({
  params
}: {
  params: SearchParamsProductIDType
}) => {
  const { product } = await params

  const productInfo = await sanityClientRead.fetch(GET_DESIGNS_BY_SLUG, {
    slug: product
  })
  console.log('🚀 ~ productInfo:', productInfo)
  return <ProductPageClient productInfo={productInfo} />
}

export default ProductPage
