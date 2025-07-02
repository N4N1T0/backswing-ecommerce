'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import useShoppingCart from '@/stores/shopping-cart-store'
import { useMemo } from 'react'
import { CouponSection } from './coupon-section'
import { OrderTotals } from './order-totals'
import { ProductList } from './product-list'

interface OrderSummaryProps {
  handleCouponApplied: (_discount: number, _couponCode?: string) => void
  discountPercentage: number
  disabled?: boolean
}

export function OrderSummary({
  handleCouponApplied,
  discountPercentage,
  disabled = false
}: OrderSummaryProps) {
  const [products] = useShoppingCart()

  const orderSummary = useMemo(() => {
    const subtotal = products.reduce(
      (sum, product) =>
        sum + (product.offer || product.price || 0) * product.quantity,
      0
    )
    const shipping = 15.99
    const tax = subtotal * 0.16 // IVA México
    const discount = subtotal * discountPercentage
    const total = subtotal + shipping + tax - discount

    return {
      products,
      subtotal,
      shipping,
      tax,
      discount,
      total
    }
  }, [products, discountPercentage])

  return (
    <Card
      className={`border-2 border-black ${disabled ? 'opacity-50' : 'bg-white'}`}
    >
      <CardHeader className='border-b-2 border-black bg-gray-400'>
        <CardTitle className='text-xl text-black'>Resumen del Pedido</CardTitle>
        {disabled && (
          <p className='text-sm text-gray-600'>
            Complete la información del cliente para continuar
          </p>
        )}
      </CardHeader>
      <CardContent className='p-6 space-y-4 bg-white'>
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
