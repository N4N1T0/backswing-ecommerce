'use client'

import { SquarePlaceholder } from '@/assets/placeholder'
import CheckoutQuantity from '@/components/checkout/checkout-quantity'
import { calculateTotal, useEuros } from '@/lib/utils'
import useShoppingCart from '@/stores/shopping-cart-store'
import Image from 'next/image'
import Link from 'next/link'

const CheckoutTable = () => {
  const [count] = useShoppingCart()
  const total = calculateTotal(count)

  return (
    <div className='p-6 mb-8 border bg-gray-100 border-gray-300'>
      {/* Table header */}
      <div className='flex-wrap items-center hidden mb-6 -mx-4 md:flex md:mb-8'>
        <div className='w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0'>
          <h2 className='font-bold text-gray-700'>Nombre del Producto</h2>
        </div>
        <div className='hidden px-4 lg:block lg:w-2/12'>
          <h2 className='font-bold text-gray-700'>Precio</h2>
        </div>
        <div className='w-auto px-4 md:w-1/6 lg:w-2/12 '>
          <h2 className='font-bold text-gray-700'>Cantidad</h2>
        </div>
        <div className='w-auto px-4 text-right md:w-1/6 lg:w-2/12 '>
          <h2 className='font-bold text-gray-700'> Subtotal</h2>
        </div>
      </div>

      {/* Table body */}
      <div className='py-4 mb-8 border-t border-b border-gray-200'>
        {/* Display message if there are no products */}
        {count.length === 0 ? (
          <div className='w-full flex justify-between items-center'>
            <h3>No hay productos</h3>
            <p>
              Puedes hechar un vistazo a nuestras{' '}
              <Link
                href='/ofertas'
                className='mx-2 inline-block uppercase tracking-wide bg-gray-950 py-2 font-bold px-5 text-gray-100 hover:bg-gray-700 duration-200 transition-colors'
              >
                Ofertas
              </Link>{' '}
              o a nuestros{' '}
              <Link
                href='/nuevo'
                className='mx-2 inline-block uppercase tracking-wide bg-gray-950 py-2 font-bold px-5 text-gray-100 hover:bg-gray-700 duration-200 transition-colors'
              >
                Nuevos
              </Link>{' '}
              productos
            </p>
          </div>
        ) : (
          count.map((item) => {
            const { id, title, format, excerpt } = item

            return (
              <div
                key={`checkout-${id}`}
                className='flex flex-wrap items-center mb-6 -mx-4 md:mb-8'
              >
                <div className='w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0'>
                  <div className='flex flex-wrap items-center -mx-4'>
                    <div className='w-full px-4 mb-3 md:w-1/3'>
                      <div className='w-full h-96 md:h-24 md:w-24'>
                        <Image
                          src={format.color.images[0].url || SquarePlaceholder}
                          placeholder='blur'
                          blurDataURL={
                            format.color.images[0].blur ||
                            SquarePlaceholder.blurDataURL
                          }
                          alt={title || 'SquarePlaceholder'}
                          title={title || 'SquarePlaceholder'}
                          width={100}
                          height={100}
                          className='object-cover w-full h-full'
                        />
                      </div>
                    </div>
                    <div className='w-2/3 px-4'>
                      <h4 className='mb-2 text-xl text-gray-950 font-bold uppercase'>
                        {title}
                      </h4>
                      <p className='text-gray-500 text-xs'>{excerpt}</p>
                    </div>
                  </div>
                </div>
                <div className='hidden px-4 lg:block lg:w-2/12' />
                <div className='w-auto px-4 md:w-1/6 lg:w-2/12 '>
                  <CheckoutQuantity product={item} />
                </div>
                <div className='w-auto px-4 text-right md:w-1/6 lg:w-2/12 '>
                  <p className='text-lg font-bold text-gray-900'>
                    {useEuros.format(total)}
                  </p>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default CheckoutTable
