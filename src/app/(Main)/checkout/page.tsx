'use client'

import CheckoutQuantity from '@/components/checkout/checkout-quantity'
import LastChance from '@/components/checkout/last-chance'
import { getRandomProductsFeatured, useEuros } from '@/lib/utils'
import useShoppingCart from '@/stores/shopping-cart-store'
import { Lock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Checkout = () => {
  const [count] = useShoppingCart()

  const total = count.map(item => {
    if (item.offer.onOffer) {
      return item.offer.price * item.quantity
    } else {
      return item.price * item.quantity
    }
  }
  ).reduce((a, b) => a + b, 0)

  const shipping = count.length === 0 ? 0 : 20

  const products = getRandomProductsFeatured(4)

  // TODO: Add Remove from Checkout
  // ? Put the remove inside the Quantity
  // TODO: Order Sumary Independent componnet

  return (
    <section className='py-24'>
      <div className='px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6'>
        <h1 className='mb-8 text-4xl font-bold'>Checkout</h1>
        <div className='p-6 mb-8 border bg-gray-100 border-gray-300'>
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
          <div className='py-4 mb-8 border-t border-b border-gray-200'>
            {count.length === 0
              ? (
                <div className='w-full flex justify-between items-center'>
                  <h3>No hay productos</h3>
                  <p>Puedes hechar un vistazo a nuetras <Link href='/ofertas' className='mx-2 inline-block uppercase tracking-wide bg-gray-950 py-2 font-bold px-5 text-gray-100 hover:bg-gray-700 duration-200 transition-colors'>Ofertas</Link> o a nuestros <Link href='/nuevo' className='mx-2 inline-block uppercase tracking-wide bg-gray-950 py-2 font-bold px-5 text-gray-100 hover:bg-gray-700 duration-200 transition-colors'>Nuevos</Link> productos</p>

                </div>
              )
              : (
                count.map(item => (
                  <div key={`checkout-${item.name}`} className='flex flex-wrap items-center mb-6 -mx-4 md:mb-8'>
                    <div className='w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0'>
                      <div className='flex flex-wrap items-center -mx-4'>
                        <div className='w-full px-4 mb-3 md:w-1/3'>
                          <div className='w-full h-96 md:h-24 md:w-24'>
                            <Image src={item.image} alt={item.name} title={item.name} width={100} height={100}
                              className='object-cover w-full h-full' />
                          </div>
                        </div>
                        <div className='w-2/3 px-4'>
                          <Link href={`/${item.gender}/${item.id}`} className='mb-2 text-xl text-gray-950 font-bold uppercase hover:text-gray-500 transition-colors ease-out duration-200'>{item.name}</Link>
                          <p className='text-gray-500 uppercase'>{item.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className='hidden px-4 lg:block lg:w-2/12'>
                      {item.offer.onOffer
                        ? <>{useEuros.format(item.offer.price)}{' '}<span className='text-base font-normal text-gray-500 line-through block'>{useEuros.format(item.price)}</span></>
                        : useEuros.format(item.price)
                      }
                    </div>
                    <div className='w-auto px-4 md:w-1/6 lg:w-2/12 '>
                      <CheckoutQuantity product={item} />
                    </div>
                    <div className='w-auto px-4 text-right md:w-1/6 lg:w-2/12 '>
                      <p className='text-lg font-bold text-gray-900'>{item.offer.onOffer ? useEuros.format(item.offer.price * item.quantity) : useEuros.format(item.price * item.quantity)}</p>
                    </div>
                  </div>
                ))
              )}
          </div>
        </div>

        {/* Checkout & Coupon */}
        <div className='flex flex-wrap justify-between'>
          <div className='w-full pr-4 mb-4 lg:w-1/2 space-y-5 '>

            {/* Coupon */}
            <div className='flex flex-wrap items-center gap-4'>
              <span className='text-gray-700'>Applicar Cupon</span>
              <input type='text'
                className='w-full px-8 py-4 font-normal placeholder-gray-400 border lg:flex-1'
                placeholder='x304k45' required />
              <button
                className='inline-block w-full px-8 py-4 font-bold text-center text-gray-100 bg-gray-950 lg:w-32 hover:bg-gray-700 transition-colors duration-200'>Aplicar</button>
            </div>

            {/* Add to the cart LAST CHANCE */}
            {count.length !== 0 && <LastChance products={products} />}

          </div >
          {/* Checkout */}
          <div className='w-full pl-4 mb-4 lg:w-1/2 '>
            <div className='p-6 border bg-gray-100 border-gray-300 md:p-8'>
              <h2 className='mb-8 text-3xl font-bold text-gray-700'>Resumen de Orden</h2>
              <div
                className='flex items-center justify-between pb-4 mb-4 border-b border-gray-300 '>
                <span className='text-gray-700'>Subtotal</span>
                <span className='text-xl font-bold text-gray-700 '>{useEuros.format(total)}</span>
              </div>
              <div className='flex items-center justify-between pb-4 mb-4 '>
                <span className='text-gray-700 '>Envio</span>
                {count.length === 0
                  ? (
                    <span className='text-xl font-bold text-gray-700 '>{useEuros.format(total)}</span>
                  )
                  : (
                    <span className='text-xl font-bold text-gray-700 '>{useEuros.format(shipping)}</span>
                  )}
              </div>
              <div className='flex items-center justify-between pb-4 mb-4 '>
                <span className='text-gray-700 font-semibold'>Total</span>
                <span className='text-xl font-bold text-gray-700'>{useEuros.format(total + shipping)}</span>
              </div>
              <h2 className='text-lg text-gray-500'>Ofrecemos pagos en:</h2>
              <div className='flex items-center gap-2 mb-4 '>
                <Image src='https://i.postimg.cc/g22HQhX0/70599-visa-curved-icon.png' alt='Visa' title='Visa Credit Card' height={56} width={64}
                  className='object-cover w-auto h-auto' />
                <Image src='https://i.postimg.cc/HW38JkkG/38602-mastercard-curved-icon.png' alt='Mastercard' title='Mastercard Credit Card' height={56} width={84}
                  className='object-cover w-auto h-auto' />
                <Image src='https://i.postimg.cc/HL57j0V3/38605-paypal-straight-icon.png' alt='Paypal' title='Paypal Credit Card' height={56} width={84}
                  className='object-cover w-auto h-auto' />
              </div>
              <div className='flex items-center justify-center w-full py-4 font-bold text-center text-gray-100 uppercase bg-gray-950 hover:bg-gray-700 transition-colors duration-200'>
                <span>Checkout</span>
                <Lock className='inline-block ml-2' size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Checkout
