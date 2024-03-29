import ProductCard from '@/components/products/product-card'
import { type Metadata } from 'next'
import { getRandomProductsNew } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Nuevo'
}

const NuevoPage = () => {
  const products = getRandomProductsNew(12)
  return (
    <section id='oferta colection' className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 md:gap-y-10'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} route='nuevo' />
      ))}
    </section>
  )
}

export default NuevoPage
