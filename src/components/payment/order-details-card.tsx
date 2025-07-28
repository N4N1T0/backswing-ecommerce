'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  calculateDiscount,
  calculateSubtotal,
  cn,
  eurilize,
  formatDate,
  getStatusColor,
  getStatusText
} from '@/lib/utils'
import useShoppingCart from '@/stores/shopping-cart-store'
import { GET_ORDER_BY_ID_Result } from '@/types'
import { useEffect, useRef } from 'react'

export function OrderDetailsCard({
  order,
  type
}: {
  order: GET_ORDER_BY_ID_Result
  type: 'success' | 'failed'
}) {
  // STATE
  const [products, mutate] = useShoppingCart()
  const renderedProductsRef = useRef<typeof products>([])

  // EFFECT
  useEffect(() => {
    if (products.length > 0) {
      renderedProductsRef.current = products
      mutate([])
    }
  }, [products, mutate])

  // CONST
  const bgColor = type === 'success' ? 'bg-green-600' : 'bg-red-600'

  return (
    <Card className='border border-black mb-8 pt-0'>
      <CardHeader
        className={cn('text-gray-50 border-b pt-5 border-black', bgColor)}
      >
        <h2 className='text-xl font-semibold'>Detalles del Pedido</h2>
      </CardHeader>
      <CardContent className='px-6'>
        <div className='space-y-4'>
          <div className='flex justify-between items-center'>
            <span className='text-gray-600'>Número de Pedido:</span>
            <span className='font-semibold text-black'>
              #{order.id.slice(-8).toUpperCase()}
            </span>
          </div>
          <div className='flex justify-between items-center'>
            <span className='text-gray-600'>Fecha:</span>
            <span className='font-semibold text-black'>
              {formatDate(order.purchaseDate)}
            </span>
          </div>
          <div className='flex justify-between items-center'>
            <span className='text-gray-600'>Estado:</span>
            <span className={`font-semibold ${getStatusColor(order.status)}`}>
              {getStatusText(order.status)}
            </span>
          </div>
          <div className='flex justify-between items-center'>
            <span className='text-gray-600'>Método de Pago:</span>
            <span className='font-semibold text-black'>
              {order.paymentMethod}
            </span>
          </div>

          <Separator className='bg-gray-300' />

          {/* Order Items */}
          <div className='space-y-3'>
            <h3 className='font-semibold text-black'>Productos:</h3>
            <div className='space-y-3'>
              {renderedProductsRef.current.map(
                ({ id, title, format, quantity, price, offer }) => {
                  const formattedPrice = offer ? offer : price
                  return (
                    <div key={id} className='border border-gray-200 p-3'>
                      <div className='flex justify-between items-start mb-2'>
                        <div className='flex-1'>
                          <h4 className='font-medium text-black'>{title}</h4>
                          <div className='text-sm text-gray-600 space-y-1'>
                            <p>Formato: {format.title}</p>
                            <p>Color: {format.color.title}</p>
                            <p>Cantidad: {quantity}</p>
                          </div>
                        </div>
                        <div className='text-right'>
                          <p className='font-semibold text-black'>
                            {eurilize(formattedPrice || 1 * quantity)}
                          </p>
                          <p className='text-sm text-gray-600'>
                            {eurilize(formattedPrice)} c/u
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                }
              )}
            </div>
          </div>

          <Separator className='bg-gray-300' />

          {/* Order Summary */}
          <div className='space-y-2'>
            <div className='flex justify-between'>
              <span className='text-gray-600'>Subtotal:</span>
              <span className='text-black'>
                {eurilize(calculateSubtotal(renderedProductsRef.current))}
              </span>
            </div>

            <div className='flex justify-between'>
              <span className='text-gray-600'>IVA:</span>
              <span className='text-black'>
                {eurilize(
                  order.totalAmount && Number(order.totalAmount) * 0.21
                )}
              </span>
            </div>

            {order.discountCoupon && (
              <div className='flex justify-between text-green-600'>
                <span>Descuento ({order.discountCoupon.code}):</span>
                <span>
                  -
                  {eurilize(
                    calculateDiscount(
                      order.discountCoupon,
                      calculateSubtotal(renderedProductsRef.current)
                    ).toFixed(2)
                  )}
                </span>
              </div>
            )}

            <Separator className='bg-gray-300' />
            <div className='flex justify-between text-lg font-bold'>
              <span className='text-black'>Total:</span>
              <span className='text-black'>{eurilize(order.totalAmount)}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
