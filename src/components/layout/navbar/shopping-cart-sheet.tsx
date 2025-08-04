'use client'

import { SquarePlaceholder } from '@/assets/placeholder'
import { Button, buttonVariants } from '@/components/ui/button'
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
import {
  calculateTotal,
  eurilize,
  productKeyMake,
  removeFromCart
} from '@/lib/utils'
import { sanityClientRead } from '@/sanity/lib/client'
import { GET_SHIPPING_CONFIG } from '@/sanity/queries'
import useShoppingCart from '@/stores/shopping-cart-store'
import { ShoppingCart, Trash2, Truck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'

const ShoppingCartSheet = () => {
  const [count, setCount] = useShoppingCart()
  const total = calculateTotal(count)

  const { data: shippingConfig } = useSWR(
    'shipping-config',
    () => sanityClientRead.fetch(GET_SHIPPING_CONFIG),
    {
      fallbackData: { amount: 5, freeCartTotal: 50 },
      revalidateOnFocus: false
    }
  )

  const shipping =
    total >= (shippingConfig?.freeCartTotal || 50)
      ? 0
      : shippingConfig?.amount || 5
  const remainingForFreeShipping = Math.max(
    0,
    (shippingConfig?.freeCartTotal || 50) - total
  )

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size='icon'
          className='relative hover:scale-105 transition-transform duration-200'
        >
          {count.length > 0 && (
            <span className='absolute -top-2 -right-2 flex h-5 w-5 animate-in fade-in duration-200'>
              <span className='inline-flex size-full rounded-full bg-black text-white justify-center items-center text-xs font-medium'>
                {count.length}
              </span>
            </span>
          )}
          <ShoppingCart className='h-5 w-5' />
        </Button>
      </SheetTrigger>

      <SheetContent className='flex flex-col gap-6 bg-white p-6'>
        <SheetHeader>
          <SheetTitle className='text-2xl font-bold tracking-tight'>
            Carrito de la Compra
          </SheetTitle>
        </SheetHeader>

        {count.length === 0 ? (
          <div className='flex-1 flex items-center justify-center'>
            <p className='text-lg text-gray-500'>
              No hay productos en el carrito
            </p>
          </div>
        ) : (
          <div className='flex-1 overflow-y-auto'>
            <div className='space-y-4'>
              {count.map((product) => {
                const { title, format, id, quantity, talla } = product
                const mainImage = Number(format.color.mainImage) || 0
                return (
                  <div
                    key={`shopping-cart-${productKeyMake(product)}`}
                    className='flex gap-4 p-4 bg-gray-100 border border-gray-200 hover:shadow-sm transition-shadow'
                  >
                    <div className='aspect-[9/10] h-auto w-24 flex-shrink-0 overflow-hidden border'>
                      <Image
                        src={
                          format.color.images[mainImage].url ||
                          SquarePlaceholder
                        }
                        placeholder='blur'
                        blurDataURL={
                          format.color.images[mainImage].blur ||
                          SquarePlaceholder.blurDataURL
                        }
                        alt={title || 'Product image'}
                        width={100}
                        height={100}
                        className='h-full w-full object-cover object-center'
                      />
                    </div>

                    <div className='flex flex-1 flex-col'>
                      <div className='flex justify-between'>
                        <h3 className='text-base font-medium text-gray-900'>
                          {title}
                        </h3>
                        <Button
                          variant='ghost'
                          size='icon'
                          className='h-8 w-8 text-gray-500 hover:text-red-600'
                          onClick={() =>
                            setCount((prev) => removeFromCart(prev, id))
                          }
                        >
                          <Trash2 className='h-4 w-4' />
                        </Button>
                      </div>

                      <div className='mt-1 flex flex-col gap-1 text-xs text-gray-500'>
                        <p>Cantidad: {quantity}</p>
                        <p>Modelo: {format.title}</p>
                        <div className='flex items-center gap-2'>
                          <span>Color:</span>
                          <span
                            style={{
                              backgroundColor:
                                colorList[
                                  format.color.title as keyof typeof colorList
                                ]
                            }}
                            className='inline-block w-4 h-4 rounded-full border border-gray-200'
                          />
                        </div>
                        <p>Talla: {talla}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {count.length > 0 && (
          <SheetFooter className='border-t pt-4'>
            <div className='w-full space-y-4'>
              <div className='space-y-2'>
                <div className='flex items-center justify-between text-base font-medium text-gray-900'>
                  <p>Subtotal</p>
                  <p>{eurilize(total)}</p>
                </div>

                <div className='flex items-center justify-between text-sm text-gray-600'>
                  <div className='flex items-center gap-1'>
                    <Truck className='h-4 w-4' />
                    <span>Envío</span>
                  </div>
                  <p>{shipping === 0 ? 'Gratis' : eurilize(shipping)}</p>
                </div>

                {remainingForFreeShipping > 0 && (
                  <div className='bg-blue-50 border border-blue-200 rounded-lg p-3'>
                    <p className='text-xs text-blue-800'>
                      ¡Añade {eurilize(remainingForFreeShipping)} más para envío
                      gratuito!
                    </p>
                  </div>
                )}

                {shipping === 0 &&
                  total >= (shippingConfig?.freeCartTotal || 50) && (
                    <div className='bg-green-50 border border-green-200 rounded-lg p-3'>
                      <p className='text-xs text-green-800 flex items-center gap-1'>
                        <Truck className='h-3 w-3' />
                        ¡Felicidades! Tienes envío gratuito
                      </p>
                    </div>
                  )}
              </div>

              <div className='flex flex-col gap-2 w-full'>
                <SheetClose asChild>
                  <Link
                    href='/checkout'
                    className={buttonVariants({
                      className: 'w-full'
                    })}
                  >
                    Iniciar Compra
                  </Link>
                </SheetClose>

                <SheetClose
                  className={buttonVariants({
                    variant: 'outline',
                    className: 'w-full'
                  })}
                >
                  Seguir Comprando
                </SheetClose>
              </div>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  )
}

export default ShoppingCartSheet
