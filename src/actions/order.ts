'use server'

import { Address } from '@/sanity/types'
import { revalidatePath } from 'next/cache'

export interface CreateOrderData {
  userEmail: string
  products: Array<{
    productId: string
    quantity: number
    selectedOption?: string
  }>
  totalAmount: number
  paymentMethod: string
  shippingAddress?: Address
  discountCoupon?: string
}

export async function createOrder(data: CreateOrderData) {
  try {
    console.log('Creating order:', data)

    // Simulate API call to Sanity
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Mock order creation - replace with actual Sanity integration
    const order = {
      _id: `order_${Date.now()}`,
      userEmail: data.userEmail,
      products: data.products,
      totalAmount: data.totalAmount,
      purchaseDate: new Date().toISOString(),
      paymentMethod: data.paymentMethod,
      status: 'pendiente',
      shippingAddress: data.shippingAddress,
      discountCoupon: data.discountCoupon
    }

    revalidatePath('/orders')

    return {
      success: true,
      data: order,
      message: 'Orden creada exitosamente',
      orderId: order._id
    }
  } catch (error) {
    console.error('Error creating order:', error)
    return {
      success: false,
      error: 'Error al crear la orden',
      message: 'Hubo un problema al procesar su pedido. Inténtelo de nuevo.'
    }
  }
}

export async function updateOrderStatus(orderId: string, status: string) {
  try {
    console.log('Updating order status:', orderId, status)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    revalidatePath('/orders')
    revalidatePath(`/orders/${orderId}`)

    return {
      success: true,
      message: 'Estado de la orden actualizado'
    }
  } catch (error) {
    console.error('Error updating order status:', error)
    return {
      success: false,
      error: 'Error al actualizar el estado de la orden'
    }
  }
}

export async function validateCoupon(couponCode: string) {
  try {
    console.log('Validating coupon:', couponCode)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 300))

    // Mock coupon validation - replace with actual Sanity query
    const validCoupons = ['descuento10', 'bienvenido15', 'verano20']
    const isValid = validCoupons.includes(couponCode.toLowerCase())

    if (isValid) {
      const discountMap: Record<string, number> = {
        descuento10: 0.1,
        bienvenido15: 0.15,
        verano20: 0.2
      }

      return {
        success: true,
        data: {
          code: couponCode,
          discount: discountMap[couponCode.toLowerCase()],
          isValid: true
        },
        message: 'Cupón válido aplicado'
      }
    } else {
      return {
        success: false,
        error: 'Cupón inválido',
        message: 'El código de cupón no es válido'
      }
    }
  } catch (error) {
    console.error('Error validating coupon:', error)
    return {
      success: false,
      error: 'Error al validar el cupón'
    }
  }
}
