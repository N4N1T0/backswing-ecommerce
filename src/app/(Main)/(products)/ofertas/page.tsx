import ProductCard from '@/components/products/product-card'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ofertas'
}

const OfertasPage = () => {
  return (
    <section id='oferta colection' className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8'>
      {Array.from({ length: 12 }).map((_, index) => (
        <ProductCard key={index} />
      ))}
    </section>
  )
}

export default OfertasPage
