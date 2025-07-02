'use client'

import { SquarePlaceholder } from '@/assets/placeholder'
import { Button } from '@/components/ui/button'
import { eurilize } from '@/lib/utils'
import useShoppingCart from '@/stores/shopping-cart-store'
import { CartItem } from '@/types'
import { Minus, Plus, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { memo, useCallback } from 'react'

interface ProductListProps {
  disabled?: boolean
}

const ProductItem = memo(function ProductItem({
  product,
  disabled = false
}: {
  product: CartItem
  disabled?: boolean
}) {
  // STATE
  const [cartItems, mutate] = useShoppingCart()

  // HANDLERS
  const handleDecrease = useCallback(() => {
    const newQuantity = Math.max(1, product.quantity - 1)
    const updatedCart = cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: newQuantity } : item
    )
    mutate(updatedCart)
  }, [product.id, product.quantity, cartItems, mutate])

  const handleIncrease = useCallback(() => {
    const newQuantity = product.quantity + 1
    const updatedCart = cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: newQuantity } : item
    )
    mutate(updatedCart)
  }, [product.id, product.quantity, cartItems, mutate])

  const handleDelete = useCallback(() => {
    const updatedCart = cartItems.filter((item) => item.id !== product.id)
    mutate(updatedCart)
  }, [product.id, cartItems, mutate])

  // CONST
  const { price, quantity, format, title, offer } = product
  const formattedPrice = offer ? offer : price
  return (
    <div
      className={`flex items-center gap-4 p-4 border border-gray-300 ${disabled ? 'bg-gray-200 opacity-50' : 'bg-gray-50'}`}
    >
      <div className='w-16 h-16 bg-gray-300 border border-gray-400'>
        <Image
          src={format.color.images[0].url || SquarePlaceholder}
          placeholder='blur'
          blurDataURL={
            format.color.images[0].blur || SquarePlaceholder.blurDataURL
          }
          alt={title || 'SquarePlaceholder'}
          title={title || 'SquarePlaceholder'}
          width={100}
          height={100}
          className='object-cover w-full h-full'
        />
      </div>
      <div className='flex-1'>
        <h3 className='font-medium text-black'>{title}</h3>
        <p className='text-sm text-gray-600'>{eurilize(formattedPrice)} c/u</p>
      </div>
      <div className='flex items-center gap-2'>
        <Button
          size='sm'
          variant='outline'
          onClick={handleDecrease}
          disabled={disabled || quantity <= 1}
          className='h-8 w-8 p-0 border border-gray-400 hover:bg-gray-100 bg-transparent'
        >
          <Minus className='h-3 w-3' />
        </Button>
        <span className='w-8 text-center font-medium'>{quantity}</span>
        <Button
          size='sm'
          variant='outline'
          onClick={handleIncrease}
          disabled={disabled}
          className='h-8 w-8 p-0 border border-gray-400 hover:bg-gray-100 bg-transparent'
        >
          <Plus className='h-3 w-3' />
        </Button>
      </div>
      <div className='text-right min-w-[80px]'>
        <p className='font-medium text-black'>
          {eurilize(formattedPrice && formattedPrice * quantity)}
        </p>
      </div>
      <Button
        size='sm'
        variant='outline'
        onClick={handleDelete}
        disabled={disabled}
        className='h-8 w-8 p-0 border border-red-400 hover:bg-red-50 text-red-600 bg-transparent'
      >
        <Trash2 className='h-3 w-3' />
      </Button>
    </div>
  )
})

export const ProductList = memo(function ProductList({
  disabled = false
}: ProductListProps) {
  const [products] = useShoppingCart()

  return (
    <div className='space-y-4'>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} disabled={disabled} />
      ))}
      {products.length === 0 && (
        <div className='text-center py-8 text-gray-500'>
          No hay productos en el carrito
        </div>
      )}
    </div>
  )
})
