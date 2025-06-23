import ProductPageClient from '@/components/products/product-page'
import { sanityClientRead } from '@/sanity/lib/client'
import { GET_DESIGNS_BY_SLUG } from '@/sanity/queries'
import { SearchParamsProductIDType } from '@/types'
import { Metadata } from 'next'

export async function generateMetadata({
  params
}: {
  params: SearchParamsProductIDType
}): Promise<Metadata> {
  const { product } = await params
  const productInfo = await sanityClientRead.fetch(
    GET_DESIGNS_BY_SLUG,
    {
      slug: product
    },
    {
      cache: 'force-cache',
      next: {
        revalidate: 3600
      }
    }
  )

  return {
    title: productInfo.title,
    description: productInfo.excerpt
  }
}

const ProductPage = async ({
  params
}: {
  params: SearchParamsProductIDType
}) => {
  const { product } = await params

  const productInfo = await sanityClientRead.fetch(
    GET_DESIGNS_BY_SLUG,
    {
      slug: product
    },
    {
      cache: 'force-cache',
      next: {
        revalidate: 3600
      }
    }
  )

  return <ProductPageClient productInfo={productInfo} />
}

export default ProductPage
