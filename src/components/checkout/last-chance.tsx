'use client'

import { useEuros } from '@/lib/utils'
import useShoppingCart from '@/stores/shopping-cart-store'
import { type StaticProductsTypes } from '@/types'
import Image from 'next/image'
import CountDown from './countdown'

const LastChance = ({ products }: { products: StaticProductsTypes[] }) => {
  const [, setCount] = useShoppingCart()

  const addToCart = (product: StaticProductsTypes) => {
    setTimeout(() => { setCount(prev => [...prev, product]) }, 1500)
  }

  return (
    <div className='p-6 border bg-red-50 border-gray-300 md:p-8'>
      <div className='flex items-center justify-between mb-4 '>
        <h2 className='text-3xl font-bold text-gray-700'>Ultimas unidades</h2>
        <CountDown />
      </div>
      <div className='grid grid-cols-2 gap-3'>
        {products.map((product) => (
          <div key={product.id} className='cols-span-1 flex gap-3'>
            <Image src={product.image} alt={product.name}
              width={100}
              height={100}
              className='aspect-square' />
            <div className='flex flex-col justify-between items-start'>
              <p className='text-gray-700'>{product.name}</p>
              <p className='text-lg font-bold text-gray-950 mr-2'>{useEuros.format(product.offer.price)}</p>
              <p className='font-bold text-gray-500 line-through'>{useEuros.format(product.price)}</p>
              <button
                onClick={() => { addToCart({ ...product, quantity: 1 }) }}
                className='w-fit flex items-center justify-center px-4 py-2 bg-gray-950 text-white hover:bg-gray-700 transition-colors duration-200'>
                Agregar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div >
  )
}

export default LastChance
