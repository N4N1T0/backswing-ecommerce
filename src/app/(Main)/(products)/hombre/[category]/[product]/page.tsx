import ProductPageClient from '@/components/products/product-page'
import { getSingleProductById } from '@/lib/queries'

// TODO Make generateMetadata

const ProductPage = async ({ params }: { params: { product: string } }) => {
  const productInfo = await getSingleProductById(params.product)

  return (
    <ProductPageClient productInfo={productInfo} />
  )
}

export default ProductPage
