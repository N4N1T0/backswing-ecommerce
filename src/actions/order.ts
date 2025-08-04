'use server'

import { createRedirectForm } from '@/lib/clients/redsys'
import { sanityClientWrite } from '@/sanity/lib/client'
import { GET_COSTUMER_BY_ID } from '@/sanity/queries'
import { Order } from '@/sanity/types'
import { CartItem } from '@/types'
import { uuid } from '@sanity/uuid'
import Decimal from 'decimal.js'
import { revalidatePath } from 'next/cache'
import {
  CURRENCIES,
  LANGUAGES,
  randomTransactionId,
  TRANSACTION_TYPES
} from 'redsys-easy'

const merchantInfo = {
  DS_MERCHANT_MERCHANTCODE: process.env.REDSYS_MERCHANT_CODE!,
  DS_MERCHANT_TERMINAL: process.env.REDSYS_TERMINAL!,
  DS_MERCHANT_TRANSACTIONTYPE: TRANSACTION_TYPES.AUTHORIZATION
}

const currency = 'EUR'

export async function paymentLogic(
  paymentType: FormDataEntryValue | null,
  totalAmount: number,
  userId: string | null,
  products: CartItem[],
  newAddress: string | string[] | undefined,
  discountCoupon: string | undefined
  // shipping: number | undefined
) {
  const orderId = randomTransactionId()
  const templateRedirectUrl = (page: string, gateway: string = 'RedSys') => {
    return `${process.env.NEXT_PUBLIC_URL}/${page}?orderId=${orderId}&gateway=${gateway}`
  }

  try {
    // CREATE PENDING ORDER IN SANITY
    await orderCreation(
      orderId,
      products,
      userId,
      newAddress,
      totalAmount,
      paymentType,
      discountCoupon
    )

    // CREATE REDSYS FORM
    if (paymentType === 'tarjeta') {
      const currencyInfo = CURRENCIES[currency]
      const redsysAmount = new Decimal(totalAmount)
        .mul(10 ** currencyInfo.decimals)
        .toFixed(0)
      const redsysCurrency = currencyInfo.num

      const form = createRedirectForm({
        ...merchantInfo,
        DS_MERCHANT_ORDER: orderId,
        DS_MERCHANT_AMOUNT: redsysAmount,
        DS_MERCHANT_CURRENCY: redsysCurrency,
        DS_MERCHANT_MERCHANTURL: templateRedirectUrl('api/redsys'),
        DS_MERCHANT_URLOK: templateRedirectUrl('exito'),
        DS_MERCHANT_URLKO: templateRedirectUrl('fallo'),
        DS_MERCHANT_TRANSACTIONDATE: new Date().toISOString(),
        DS_MERCHANT_CONSUMERLANGUAGE: LANGUAGES.es,
        DS_MERCHANT_SHIPPINGADDRESSPYP: 'S',
        DS_MERCHANT_MERCHANTNAME: 'Backswing'
      })

      return {
        success: true,
        data: form
      }
    }

    // CREATE TRANSFER ORDER
    if (paymentType === 'transferencia') {
      return {
        success: true,
        data: templateRedirectUrl('exito', 'transferencia')
      }
    }

    // CREATE PAYPAL ORDER
    // if (paymentType === 'paypal') {
    //   const redirectUrl = await paypal.createOrder(
    //     products,
    //     templateRedirectUrl,
    //     totalAmount,
    //     discountCoupon,
    //     shipping
    //   )

    //   return {
    //     success: true,
    //     data: redirectUrl
    //   }
    // }

    // INVALID PAYMENT TYPE
    return {
      success: false,
      data: null
    }
  } catch (error) {
    console.error('🚀 ~ error:', error)
    return {
      success: false,
      data: null
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

export async function updateOrderCancelReason(orderId: string, reason: string) {
  try {
    await sanityClientWrite
      .patch(orderId)
      .set({ cancelReason: reason, status: 'cancelado' })
      .commit()

    revalidatePath(`/profile/orders`)

    return {
      success: true,
      message: 'Motivo de cancelación actualizado correctamente.'
    }
  } catch (error) {
    console.error('Error updating order cancel reason:', error)
    return {
      success: false,
      error: 'Error al actualizar el motivo de la cancelación.'
    }
  }
}

export const orderCreation = async (
  orderId: string,
  products: CartItem[],
  userId: string | null,
  newAddress: string | string[] | undefined,
  total: number,
  gateway: FormDataEntryValue | null,
  discountCoupon: string | undefined
) => {
  const user = await sanityClientWrite.fetch(GET_COSTUMER_BY_ID, {
    customerId: userId
  })

  const address =
    newAddress === 'true'
      ? user?.shippingAddresses && user.shippingAddresses.length > 0
        ? [user.shippingAddresses[0]]
        : undefined
      : user?.billingAddress
        ? [user.billingAddress]
        : undefined

  const refactoredProducts: Order['products'] = products.map(
    ({ id, quantity, format: { color, title }, talla, price }) => ({
      product: {
        _ref: id.split(' - ')[0],
        _type: 'reference' as const
      },
      color: color.title || '',
      format: title || '',
      quantity,
      size: talla,
      price,
      _key: uuid()
    })
  )

  const order: Order = {
    _id: orderId,
    status: 'procesando',
    paymentMethod: gateway?.toString() || '',
    _type: 'order',
    _createdAt: new Date().toISOString(),
    _updatedAt: new Date().toISOString(),
    _rev: orderId,
    purchaseDate: new Date().toISOString(),
    totalAmount: Number(total),
    products: refactoredProducts,
    userEmail: {
      _ref: user?._id || '',
      _type: 'reference' as const
    },
    shippingAddress: address,
    discountCoupon: discountCoupon
      ? {
          _ref: discountCoupon || '',
          _type: 'reference' as const
        }
      : undefined
  }

  await sanityClientWrite.createIfNotExists(order, {
    autoGenerateArrayKeys: true
  })
}
