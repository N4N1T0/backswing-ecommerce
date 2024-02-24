import ProductCard from '@/components/products/product-card'
import { type Metadata } from 'next'
import { getRandomProductsNew } from '@/lib/utils'
import { staticsProducts } from '@/contants/static-products'

export const metadata: Metadata = {
  title: 'Nuevo'
}

const NuevoPage = () => {
  const products = getRandomProductsNew(staticsProducts, 12)
  return (
    <section id='oferta colection' className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} route={product.gender} />
      ))}
    </section>
  )
}

export default NuevoPage
