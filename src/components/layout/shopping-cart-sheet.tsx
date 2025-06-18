'use client'

import { SquarePlaceholder } from '@/assets/placeholder'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { colorList } from '@/contants'
import { calculateTotal, removeFromCart, useEuros } from '@/lib/utils'
import useShoppingCart from '@/stores/shopping-cart-store'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const ShoppingCartSheet = () => {
  // STATE
  const [count, setCount] = useShoppingCart()

  // CONST
  const total = calculateTotal(count)

  return (
    <Sheet>
      <SheetTrigger className='p-2 py-4 hover:bg-gray-300 rounded-lg transition-colors duration-300 ease-out relative'>
        <span className='sr-only'>Shopping Cart Sheet</span>
        {count.length !== 0 && (
          <span className='absolute top-0 right-0 flex h-5 w-5'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-950 opacity-25' />
            <span className='inline-flex rounded-full h-full w-full bg-gray-950 justify-center items-center text-gray-100'>
              {count.length}
            </span>
          </span>
        )}
        <ShoppingCart />
      </SheetTrigger>

      <SheetContent className='bg-white justify-between items-center flex flex-col p-5'>
        <SheetHeader>
          <SheetTitle className='text-lg md:text-2xl font-bold uppercase mt-5 md:mt-0'>
            Carrito de la Compra
          </SheetTitle>
        </SheetHeader>

        {count.length !== 0 ? (
          <div className='w-full bg-white py-5 overflow-y-scroll overflow-x-hidden'>
            {count.map((item) => {
              const { title, format } = item
              return (
                <div
                  key={`shopping-cart-${title}`}
                  className='my-3 py-3 border-b border-gray-400 flex'
                >
                  <div className='w-full flex-1 aspect-square object-center'>
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

                  <div className='flex-1 px-4 space-y-1 flex flex-col items-start'>
                    <h2 className='text-sm md:text-lg font-bold text-gray-900'>
                      {title}
                    </h2>
                    <p className='text-xs md:text-sm text-gray-600 '>
                      Cantidad: {item.quantity}
                    </p>
                    <p className='text-xs md:text-sm text-gray-600 '>
                      Modelo: {format.title}
                    </p>
                    <p className='text-xs md:text-sm text-gray-600 flex justify-center items-center'>
                      Color:{' '}
                      <span
                        style={{
                          backgroundColor:
                            colorList[
                              format.color.title as keyof typeof colorList
                            ]
                        }}
                        className='inline-block w-4 h-4 rounded-full ml-2'
                      />
                    </p>
                    <p className='text-sm text-gray-600 '>
                      {' '}
                      Talla: {item.talla}
                    </p>
                    <button
                      type='button'
                      onClick={() => {
                        setCount((prev) => removeFromCart(prev, item.id))
                      }}
                      className='text-sm md:text-base px-3 py-1 font-medium text-center text-gray-900 border border-gray-900 hover:bg-gray-900 hover:text-gray-100'
                    >
                      Quitar
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <p className='text-xl text-gray-900'>
            No hay productos en el carrito
          </p>
        )}

        {count.length !== 0 && (
          <SheetFooter className='flex flex-row md:flex-col gap-5 md:gap-0 items-center justify-center'>
            <div className='gap-3 text-sm md:text-base text-gray-700 flex'>
              <p>Subtotal</p>
              <p className='font-bold'>{useEuros.format(total)}</p>
            </div>

            <SheetClose asChild>
              <Link
                href='/checkout'
                className='w-fit mt-0 md:mt-3 py-2 px-3 text-base md:text-lg font-medium bg-gray-950 rounded-md text-gray-50 hover:bg-gray-700 transition-colors duration-200'
              >
                Checkout
              </Link>
            </SheetClose>

            <SheetClose className='text-gray-700 hover:underline mt-3 text-sm md:text-base hidden md:block'>
              Seguir Comprando
            </SheetClose>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  )
}

export default ShoppingCartSheet
