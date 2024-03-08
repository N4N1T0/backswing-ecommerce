import ProductCard from '@/components/products/product-card'
import { type Metadata } from 'next'
import { getRandomProductsCollection } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Hombre'
}

const HombrePage = () => {
  const products = getRandomProductsCollection('hombre', 12)
  return (
    <section id='hombre colection' className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 md:gap-y-10'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} route='hombre' />
      ))}
    </section>
  )
}

export default HombrePage
