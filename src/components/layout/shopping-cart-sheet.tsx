'use client'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose
} from '@/components/ui/sheet'
import { removeFromCart } from '@/lib/utils'
import useShoppingCart from '@/stores/shopping-cart-store'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const ShoppingCartSheet = () => {
  const [count, setCount] = useShoppingCart()

  return (
    <Sheet>
      <SheetTrigger className='p-2 hover:bg-gray-300 rounded-lg transition-colors duration-300 ease-out relative'>
        <span className='sr-only'>Shopping Cart Sheet</span>
        {count.length !== 0 && (
          <span className='absolute top-0 right-0 flex h-5 w-5'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-950 opacity-25'></span>
            <span className='inline-flex rounded-full h-full w-full bg-gray-950 justify-center items-center text-gray-100'>{count.length}</span>
          </span>
        )}
        <ShoppingCart />
      </SheetTrigger>
      <SheetContent className='bg-white justify-between items-center flex flex-col p-5'>
        <SheetHeader>
          <SheetTitle className='text-lg md:text-2xl font-bold uppercase'>Carrito de la Compra
          </SheetTitle>
        </SheetHeader>
        <div className='w-full bg-white py-5 overflow-y-scroll overflow-x-hidden'>
          {count.length !== 0 && (
            count.map((item) => (
              <div key={`shoping-cart-${item.name}`} className='block my-3 py-3 border-b border-gray-400 md:flex'>
                <div className='flex w-full flex-1'>
                  <Image src={item.image} alt={item.name}
                    width={100}
                    height={100}
                    className='object-cover w-full h-full rounded-md' />
                </div>
                <div className='flex-1 px-4 space-y-1 flex flex-col items-center md:items-start'>
                  <h2 className='text-lg font-bold text-gray-900'>{item.name}</h2>
                  <p className='text-sm text-gray-600 '> Quantity: 4</p>
                  <p className='text-lg font-bold text-gray-900'>{item.price}</p>
                  <button
                    onClick={() => { setCount(prev => removeFromCart(prev, item.id)) }}
                    className='px-3 py-1 font-medium text-center text-gray-900 border border-gray-900 rounded-md hover:bg-gray-900 hover:text-gray-100'>Remove</button>
                </div>
              </div>
            )))}
        </div>
        <SheetFooter className='flex flex-col items-center'>
          <div className='gap-5 text-sm md:text-base text-gray-700 flex'>
            <p>Subtotal</p>
            <p>$400.00</p>
          </div>
          <SheetClose asChild>
            <Link href='/checkout'
              className='w-fit mt-3 py-2 px-3 text-base md:text-lg font-medium bg-gray-950 rounded-md text-gray-50 hover:bg-gray-700 transition-colors duration-200'>Checkout</Link>
          </SheetClose>
          <SheetClose className='text-gray-700 hover:underline mt-3 text-sm md:text-base'>Seguir Comprando
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>

  )
}

export default ShoppingCartSheet
