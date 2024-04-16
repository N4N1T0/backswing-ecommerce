import ProductPageClient from '@/components/products/product-page'
import { getSingleProduct } from '@/lib/utils'
import { type Metadata } from 'next'

export async function generateMetadata ({ params }: { params: { product: string } }): Promise<Metadata> {
  const productInfo = getSingleProduct(params.product)

  return {
    title: productInfo.name,
    description: productInfo.description
  }
}

const ProductPage = ({ params }: { params: { product: string } }) => {
  const productInfo = getSingleProduct(params.product)

  return (
    <ProductPageClient productInfo={productInfo} />
  )
}

export default ProductPage
