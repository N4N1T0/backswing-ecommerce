import Link from 'next/link'
import { staticsProducts } from '@/contants/static-products'
import { useEuros, useCapitalize, getRandomProductsCollection } from '@/lib/utils'

const Collection = ({ direction, colection }: { direction: 'right' | 'left', colection: 'hombre' | 'mujer' | 'niño' }) => {
  const products = getRandomProductsCollection(staticsProducts, colection, 4)
  return (
    <section>
      <div className='mx-auto max-w-screen-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
        <header className={`w-full flex flex-col ${direction === 'right' ? 'items-end' : 'items-start'}`}>
          <h2 className='text-xl font-bold text-gray-900 sm:text-3xl'>Colección para {useCapitalize(colection)}</h2>

          {colection === 'hombre'
            ? <p className='mt-4 max-w-md text-gray-500'>Descubre nuestra selección de camisetas para hombres que aman el pádel y el estilo. Calidad premium y diseño vanguardista garantizados.</p>
            : <p className='mt-4 max-w-md text-gray-500'>Camisetas de alta calidad y diseño moderno para mujeres apasionadas del pádel y la moda. ¡Estilo impecable en cada partida!</p>
          }
        </header>

        <ul className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {products.map(product => (
            <li key={product.id}>
              <Link href={`/product/${product.id}`} className='group block overflow-hidden'>
                <img
                  src={product.image}
                  alt=''
                  className='h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]'
                />

                <div className='relative bg-white pt-3'>
                  <h3 className='text-gray-700 group-hover:underline group-hover:underline-offset-4 uppercase font-medium'>
                    {product.name}
                  </h3>

                  <p className='mt-2'>
                    <span className='sr-only'> Regular Price </span>

                    <span className='tracking-wider text-gray-900'> {useEuros.format(product.price)} </span>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Collection
