'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn, productKeyMake } from '@/lib/utils'
import useShoppingCart from '@/stores/shopping-cart-store'
import type { CartItem } from '@/types'
import { memo, useCallback, useState } from 'react'
import { toast } from 'sonner'

const Quantity = memo(
  ({ product, className }: { product: CartItem; className?: string }) => {
    // STATE
    const [, setCount] = useShoppingCart()
    const [adding, setAdding] = useState(false)
    const [quantity, setQuantity] = useState(1)

    // HANDLERS
    const addToCart = useCallback(() => {
      setAdding(true)
      setTimeout(() => {
        setAdding(false)
        setCount((prev) => {
          const formattedId = productKeyMake(product)
          const existingItemIndex = prev.findIndex(
            (item) =>
              item.id === formattedId &&
              item.talla === product.talla &&
              item.format.color.title === product.format.color.title
          )

          if (existingItemIndex !== -1) {
            // Update existing item quantity
            const newCart = [...prev]
            newCart[existingItemIndex] = {
              ...prev[existingItemIndex],
              quantity: prev[existingItemIndex].quantity + quantity
            }
            toast.success('Cantidad actualizada en el carrito')
            return newCart
          } else {
            // Add new item
            toast.success('Producto agregado al carrito')
            return [...prev, { ...product, id: formattedId, quantity }]
          }
        })
      }, 1000)
    }, [product, quantity, setCount])

    const handleQuantityChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const qty = Number(e.target.value)
        setQuantity(qty)
      },
      []
    )

    const decrementQuantity = useCallback(() => {
      setQuantity((prev) => (prev > 1 ? prev - 1 : prev))
    }, [])

    const incrementQuantity = useCallback(() => {
      setQuantity((prev) => prev + 1)
    }, [])

    return (
      <div
        className={cn(
          'w-full my-8 flex justify-between items-center h-10',
          className
        )}
      >
        <div>
          <Label htmlFor='Quantity' className='sr-only'>
            Quantity{' '}
          </Label>
          <fieldset className='flex items-center gap-1'>
            <Button
              type='button'
              size='icon'
              variant='outline'
              className='text-secondary transition hover:opacity-75 text-3xl'
              onClick={decrementQuantity}
            >
              -
            </Button>

            <Input
              type='number'
              id='Quantity'
              min={1}
              value={quantity}
              onChange={handleQuantityChange}
              className='h-10 w-24 rounded-none border-secondary/50 text-center [-moz-appearance:textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none'
            />

            <Button
              type='button'
              size='icon'
              variant='outline'
              className='text-secondary transition hover:opacity-75 text-3xl'
              onClick={incrementQuantity}
            >
              +
            </Button>
          </fieldset>
        </div>
        <Button type='button' onClick={addToCart}>
          {adding ? 'Agregando...' : 'Agregar al Carrito'}
        </Button>
      </div>
    )
  }
)

Quantity.displayName = 'Quantity'

export default Quantity
