import ProductCard from '@/components/products/product-card'
import { getRandomProductsCollection } from '@/lib/utils'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Niños'
}

const NinoPage = () => {
  const products = getRandomProductsCollection('ninos', 12)
  return (
    <section id='niños colection' className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 md:gap-y-10'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} route='ninos' />
      ))}
    </section>
  )
}

export default NinoPage
