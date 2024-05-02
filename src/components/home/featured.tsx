import { getRandomProductsNew, urlizeNames, useEuros } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const Featured = () => {
  const products = getRandomProductsNew(4)
  return (
    <section>
      <div className='mx-auto max-w-screen-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 xl:grid-cols-4 lg:items-stretch'>
          <div className='grid place-content-center bg-gray-300 p-6 sm:p-8'>
            <div className='mx-auto max-w-md text-center lg:text-left'>
              <header>
                <h2 className='text-xl font-bold text-gray-900 sm:text-3xl'>Productos Nuevos</h2>

                <p className='mt-4 text-gray-700'>
                  Explora nuestra nueva colección de sudaderas, gorros y más. Con calidad premium y diseños vanguardistas, cada artículo está diseñado para hombres y mujeres que adoran el pádel y la moda.
                </p>
              </header>

              <ul>

              </ul>

              <Link
                href='/nuevo'
                className='mt-8 inline-block bg-gray-950 px-12 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-gray-700'
              >
                Verlos Todos
              </Link>
            </div>
          </div>

          <div className='lg:col-span-2 xl:col-span-3 lg:py-8'>
            <ul className='grid grid-cols-2 xl:grid-cols-4 gap-4'>
              {products.map((product) => (
                <li key={product.id} className='relative'>
                  {product.new && <p className='text-xs uppercase tracking-wide bg-gray-900 py-1 px-3 text-gray-100 absolute right-3 top-3 z-50'> Nuevo </p>}
                  <Link href={`/${product.gender}/${product.category}/${urlizeNames(product.name)}`} className='group block'>
                    <Image
                      src={product.image}
                      alt={product.name}
                      title={product.name}
                      width={500}
                      height={500}
                      className='aspect-square w-full object-cover transition-opacity duration-300 ease-out group-hover:opacity-70 h-auto'
                    />

                    <div className='mt-3'>
                      <h3
                        className='font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4'
                      >
                        {product.name}
                      </h3>

                      <p className='mt-1 text-sm text-gray-700'>{useEuros.format(product.price)}</p>
                    </div>
                  </Link>
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
