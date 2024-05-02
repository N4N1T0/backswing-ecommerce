'use client'

import useShoppingCart from '@/stores/shopping-cart-store'
import { type StaticProductsTypes } from '@/types'
import { useState } from 'react'

const CheckoutQuantity = ({ product }: { product: StaticProductsTypes }) => {
  const [, setCount] = useShoppingCart()
  const [quantity, setQuantity] = useState(product.quantity)

  const plusQuantity = () => {
    setCount(prev =>
      prev.map(item => item.id === product.id ? { ...item, quantity: quantity + 1 } : item)
    )
    setQuantity(prev => prev + 1)
  }

  const minusQuantity = () => {
    if (quantity === 1) return
    setCount(prev =>
      prev.map(item => item.id === product.id ? { ...item, quantity: quantity - 1 } : item)
    )
    setQuantity(prev => prev - 1)
  }

  return (
    <div className='w-full my-8 flex justify-between items-center h-10'>
      <div>
        <label htmlFor='Quantity' className='sr-only'> Quantity </label>

        <div className='flex items-center gap-1'>
          <button type='button' className='size-10 leading-10 text-secondary transition hover:opacity-75 text-3xl' onClick={minusQuantity}>
            -
          </button>

          <input
            type='number'
            id='Quantity'
            min={1}
            value={quantity}
            className='h-10 w-16 rounded border-secondary/50 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none'
          />

          <button type='button' className='size-10 leading-10 text-secondary transition hover:opacity-75 text-3xl' onClick={plusQuantity}>
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutQuantity
