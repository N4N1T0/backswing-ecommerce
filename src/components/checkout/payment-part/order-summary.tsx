'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { calculateTotal, cn } from '@/lib/utils'
import useShoppingCart from '@/stores/shopping-cart-store'
import { OrderSummaryProps } from '@/types'
import { useMemo } from 'react'
import { CouponSection } from './coupon-section'
import { OrderTotals } from './order-totals'
import { ProductList } from './product-list'

export function OrderSummary({
  handleCouponApplied,
  discountPercentage,
  disabled = false
}: OrderSummaryProps) {
  const [products] = useShoppingCart()

  const orderSummary = useMemo(() => {
    const orderTotal = calculateTotal(products)
    // TODO
    const subtotal = orderTotal * 0.79
    const shipping = 0
    const discount = orderTotal * discountPercentage
    const iva = orderTotal * 0.21
    const total = subtotal + shipping - discount + iva

    return {
      products,
      subtotal,
      shipping,
      discount,
      total,
      iva
    }
  }, [products, discountPercentage])

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
          orderSummary={orderSummary}
          discountPercentage={discountPercentage}
        />
      </CardContent>
    </Card>
  )
}
