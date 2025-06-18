'use client'

import useShoppingCart from '@/stores/shopping-cart-store'
import type { CartItem } from '@/types'
import { useState } from 'react'

const Quantity = ({ product }: { product: CartItem }) => {
  const [, setCount] = useShoppingCart()
  const [adding, setAdding] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const addToCart = () => {
    setAdding(true)
    setTimeout(() => {
      setAdding(false)
      setCount((prev) => [...prev, { ...product, quantity }])
    }, 1000)
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const qty = Number(e.target.value)
    setQuantity(qty)
  }

  return (
    <div className='w-full my-8 flex justify-between items-center h-10'>
      <div>
        <label htmlFor='Quantity' className='sr-only'>
          Quantity{' '}
        </label>
        <div className='flex items-center gap-1'>
          <button
            type='button'
            className='size-10 leading-10 text-secondary transition hover:opacity-75 text-3xl'
            onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : prev))}
          >
            -
          </button>

          <input
            type='number'
            id='Quantity'
            min={1}
            value={quantity}
            onChange={handleQuantityChange}
            className='h-10 w-16 rounded-sm border-secondary/50 text-center [-moz-appearance:textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none'
          />

          <button
            type='button'
            className='size-10 leading-10 text-secondary transition hover:opacity-75 text-3xl'
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
      </div>
      <button
        type='button'
        onClick={addToCart}
        className='w-fit flex items-center justify-center px-4 py-2 bg-gray-950 text-white hover:bg-gray-700 transition-colors duration-200'
      >
        {adding ? 'Agregando...' : 'Agregar al Carrito'}
      </button>
    </div>
  )
}

export default Quantity
