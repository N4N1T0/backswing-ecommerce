'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { OrderSummaryProps } from '@/types'
import { CouponSection } from './coupon-section'
import { OrderTotals } from './order-totals'
import { ProductList } from './product-list'

export function OrderSummary({
  handleCouponApplied,
  discountPercentage,
  disabled = false,
  summary
}: OrderSummaryProps) {
  return (
    <Card
      className={cn('border-black pt-0', disabled ? 'opacity-50' : 'bg-white')}
    >
      <CardHeader className='border-b border-black bg-gray-300 pt-5'>
        <CardTitle className='text-xl text-black'>Resumen del Pedido</CardTitle>
        {disabled && (
          <p className='text-sm text-gray-600'>
            Complete la información del cliente para continuar
          </p>
        )}
      </CardHeader>
      <CardContent className='px-6 space-y-4 bg-white'>
        <ProductList disabled={disabled} />

        <Separator className='bg-black h-0.5' />

        <CouponSection
          onCouponApplied={handleCouponApplied}
          disabled={disabled}
        />

        <Separator className='bg-black h-0.5' />

        <OrderTotals
          orderSummary={summary}
          discountPercentage={discountPercentage}
        />
      </CardContent>
    </Card>
  )
}
