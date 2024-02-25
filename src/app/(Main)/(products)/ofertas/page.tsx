import ProductCard from '@/components/products/product-card'
import { staticsProducts } from '@/contants/static-products'
import { getRandomProductsFeatured } from '@/lib/utils'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ofertas'
}

const OfertasPage = () => {
  const products = getRandomProductsFeatured(staticsProducts, 12)
  return (
    <section id='oferta colection' className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 md:gap-y-10'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} route='ofertas' />
      ))}
    </section>
  )
}

export default OfertasPage
