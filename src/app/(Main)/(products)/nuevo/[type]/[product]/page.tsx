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

  console.log('🚀 ~ product:', product)

  // const productInfo = await getSingleProductById(params.product)
  // return <ProductPageClient productInfo={productInfo} />
}

export default ProductPage
