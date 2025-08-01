'use client'

import { Separator } from '@/components/ui/separator'
import { eurilize } from '@/lib/utils'
import { OrderSummaryType } from '@/types'

interface OrderTotalsProps {
  orderSummary: OrderSummaryType
  discountPercentage: number
}

export function OrderTotals({
  orderSummary,
  discountPercentage
}: OrderTotalsProps) {
  // CONST
  const { subtotal, shipping, iva, discount, total } = orderSummary
  return (
    <div className='space-y-2 p-4 bg-gray-50 border border-gray-300'>
      <div className='flex justify-between text-gray-700'>
        <span>Subtotal</span>
        <span>{eurilize(subtotal.toFixed(2))}</span>
      </div>
      <div className='flex justify-between text-gray-700'>
        <span>IVA</span>
        <span>{eurilize(iva.toFixed(2))}</span>
      </div>
      <div className='flex justify-between text-gray-700'>
        <span>Envío</span>
        <span>
          {shipping === 0
            ? 'Gratis'
            : eurilize(orderSummary.shipping.toFixed(2))}
        </span>
      </div>
      {discountPercentage > 0 && (
        <div className='flex justify-between text-green-600'>
          <span>Descuento ({(discountPercentage * 100).toFixed(0)}%)</span>
          <span>-{eurilize(discount.toFixed(2))}</span>
        </div>
      )}
      <Separator className='bg-black h-0.5' />
      <div className='flex justify-between font-bold text-lg text-black'>
        <span>Total</span>
        <span>{eurilize(total.toFixed(2))}</span>
      </div>
    </div>
  )
}
