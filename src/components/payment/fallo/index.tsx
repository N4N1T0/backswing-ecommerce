import { ErrorInfoCard } from '@/components/payment/fallo/error-info-card'
import { FailedActionButtons } from '@/components/payment/fallo/failed-action-buttons'
import { OrderDetailsCard } from '@/components/payment/order-details-card'
import { PageHeader } from '@/components/payment/page-header'
import { SupportInfo } from '@/components/payment/support-info'
import { GET_ORDER_BY_ID_Result } from '@/types'
import { FailedPaymentForm } from './failed-form'

interface FailedPageProps {
  order: GET_ORDER_BY_ID_Result
  errorCode?: string
  errorMessage?: string
  transactionId?: string
}

export default function FailedPage({
  order,
  errorCode,
  errorMessage,
  transactionId
}: FailedPageProps) {
  return (
    <div className='min-h-screen bg-white'>
      <div className='container mx-auto px-4 py-16 max-w-2xl'>
        <PageHeader
          type='failed'
          title='Error en el Pago'
          description='Lo sentimos, no pudimos procesar tu pago. Por favor, revisa la información e inténtalo de nuevo.'
        />

        <FailedPaymentForm orderId={order.id} />

        <ErrorInfoCard
          errorCode={errorCode}
          errorMessage={errorMessage}
          transactionId={transactionId}
        />

        <OrderDetailsCard order={order} type='failed' />

        <FailedActionButtons />

        <SupportInfo />
      </div>
    </div>
  )
}
