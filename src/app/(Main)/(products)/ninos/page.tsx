import ProductCard from '@/components/products/product-card'
import { staticsProducts } from '@/contants/static-products'
import { getRandomProductsCollection } from '@/lib/utils'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Niños'
}

const NinoPage = () => {
  const products = getRandomProductsCollection(staticsProducts, 'ninos', 12)
  return (
    <section id='niños colection' className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} route='ninos' />
      ))}
    </section>
  )
}

export default NinoPage
