'use client'

import { SuccessActionButtons } from '@/components/payment/exito/success-action-buttons'
import { OrderDetailsCard } from '@/components/payment/order-details-card'
import { PageHeader } from '@/components/payment/page-header'
import { ShippingInfoCard } from '@/components/payment/shipping-info-card'
import { SupportInfo } from '@/components/payment/support-info'
import { GET_ORDER_BY_ID_Result } from '@/types'
import { BillingInfoCard } from '../billing-info-card copy'

export default function SuccessPage({
  order
}: {
  order: GET_ORDER_BY_ID_Result
}) {
  const handleDownloadPDF = () => {
    const orderSummary = document.getElementById('order-summary')
    if (!orderSummary) return

    const printWindow = window.open('', '_blank')
    if (!printWindow) return

    printWindow.document.write(`
      <html>
        <head>
          <title>Order Summary</title>
          <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
          ${orderSummary.outerHTML}
        </body>
      </html>
    `)

    printWindow.document.close()
    printWindow.print()
    printWindow.close()
  }

  return (
    <div className='min-h-screen bg-white'>
      <div
        className='container mx-auto px-4 pt-16 max-w-2xl'
        id='order-summary'
      >
        <PageHeader
          type='success'
          title='¡Pedido Confirmado!'
          description='Gracias por tu compra. Tu pedido ha sido procesado exitosamente.'
        />

        <OrderDetailsCard order={order} type='success' />
        <ShippingInfoCard order={order} type='success' />
        <BillingInfoCard order={order} type='success' />
      </div>

      <div className='container mx-auto px-4 pb-16 max-w-2xl'>
        <SuccessActionButtons
          onDownloadPDF={handleDownloadPDF}
          user={order.user}
        />

        <SupportInfo />
      </div>
    </div>
  )
}
