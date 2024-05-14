'use client'

import React from 'react'
import LastChance from './last-chance'
import Checkout from './checkout'
import useShoppingCart from '@/stores/shopping-cart-store'
import { calculateTotal } from '@/lib/utils'

const CheckoutCoupon = () => {
  const [count] = useShoppingCart()
  const shipping = count.length === 0 ? 0 : 20
  const total = calculateTotal(count)

  return (
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
        {count.length !== 0 && <LastChance />}

      </div >
      {/* Checkout */}
      <Checkout total={total} count={count} shipping={shipping} />
    </div>
  )
}

export default CheckoutCoupon
