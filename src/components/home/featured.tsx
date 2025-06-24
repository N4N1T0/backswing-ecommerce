// import { newProducts as products } from '@/contants/static-products'
// import { parseStaticProductContent } from '@/lib/utils'
// import Image from 'next/image'
import { sanityClientRead } from '@/sanity/lib/client'
import { GET_PRODUCTS_BY_CATEGORY } from '@/sanity/queries'
import Link from 'next/link'
import ProductCard from '../products/product-card'

const Featured = async () => {
  const type = ['sudaderas', 'mujer']
  const products = await sanityClientRead.fetch(GET_PRODUCTS_BY_CATEGORY, {
    type: type
  })

  const formattedProducts = products.designs
    .filter((design) => design.colors)
    .slice(0, 4)

  return (
    <section id='featured'>
      <div className='mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 xl:grid-cols-4 lg:items-stretch'>
          <div className='grid place-content-center bg-gray-300 p-6 sm:p-8'>
            <div className='mx-auto max-w-md text-center lg:text-left'>
              <header>
                <h2 className='text-xl font-bold text-gray-900 sm:text-3xl uppercase text-wrap'>
                  Sudaderas Unisex
                </h2>
                <p className='mt-4 text-gray-700'>
                  Explora nuestra nueva colección de sudaderas, gorros y más.
                  Con calidad premium y diseños vanguardistas, cada artículo
                  está diseñado para hombres y mujeres que adoran el pádel y la
                  moda.
                </p>
              </header>
              <Link
                href='/nuevo/sudaderas'
                className='mt-8 inline-block bg-gray-950 px-12 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-gray-700'
              >
                Verlos Todos
              </Link>
            </div>
          </div>
          <div className='lg:col-span-2 xl:col-span-3 lg:py-8'>
            <ul className='grid grid-cols-2 xl:grid-cols-4 gap-4'>
              {formattedProducts.map((product, index) => (
                <li key={product.id} className='relative group'>
                  <ProductCard
                    product={product}
                    route='mujer/camisetas'
                    priority={index}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featured
