import FailedPage from '@/components/payment/fallo'
import { processRestNotification } from '@/lib/clients/redsys'
import { sanityClientWrite } from '@/sanity/lib/client'
import { GET_ORDER_BY_ID } from '@/sanity/queries'
import { GET_ORDER_BY_ID_Result } from '@/types'
import { notFound } from 'next/navigation'

export default async function Page({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  let order: GET_ORDER_BY_ID_Result | null = null
  const {
    orderId,
    gateway,
    Ds_SignatureVersion,
    Ds_MerchantParameters,
    Ds_Signature
    // token
  } = await searchParams

  if (!orderId) {
    notFound()
  }

  // REDSYS GATEWAY CHECK
  if (gateway === 'RedSys') {
    const { Ds_Response } = processRestNotification({
      Ds_SignatureVersion: Ds_SignatureVersion as string,
      Ds_MerchantParameters: Ds_MerchantParameters as string,
      Ds_Signature: Ds_Signature as string
    })

    if (Ds_Response !== '0000') {
      notFound()
    }
  }

  // PAYPAL GATEWAY CHECK
  // if (gateway === 'PayPal') {
  //   const response = await paypal.captureOrder(token as string)
  //   if (response !== 'COMPLETED') {
  //     notFound()
  //   }
  // }

  try {
    order = await sanityClientWrite.fetch(GET_ORDER_BY_ID, {
      id: orderId
    })

    if (order === null) {
      throw new Error('Order does not exists')
    }

    await sanityClientWrite
      .patch(orderId as string)
      .set({ status: 'cancelado' })
      .commit()
  } catch (error) {
    console.log('🚀 ~ error:', error)
  }

  if (!order) {
    notFound()
  }
  return (
    <FailedPage
      order={order}
      errorCode='PAYMENT_DECLINED'
      errorMessage='Tu tarjeta de crédito fue rechazada. Verifica los datos o intenta con otro método de pago.'
      transactionId='TXN_2025_001234'
    />
  )
}
