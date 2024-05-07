import ProductCard from '@/components/products/product-card'
import { type Metadata } from 'next'
import { getProductsByCategories } from '@/lib/queries'
import { type WPProduct } from '@/types'

export async function generateMetadata ({ params }: { params: { category: string } }): Promise<Metadata> {
  return {
    title: `Hombre - ${params.category}`,
    description: `Diseños de ${params.category} para hombres amantes del Padel`
  }
}

const HombrePage = async ({ params }: { params: { category: string } }) => {
  const products: WPProduct[] = await getProductsByCategories(params.category, 'hombre')

  return (
    <section id={`hombre ${params.category} colection`} className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 md:gap-y-10'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} route={`hombre/${params.category}`} />
      ))}
    </section>
  )
}

export default HombrePage
