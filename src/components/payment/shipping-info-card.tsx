import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { GET_ORDER_BY_ID_Result } from '@/types'

export function ShippingInfoCard({
  order,
  type
}: {
  order: GET_ORDER_BY_ID_Result
  type: 'success' | 'failed'
}) {
  // CONST
  const shippingAddress = order?.shippingAddress
    ? order.shippingAddress
    : order.user.billingAddress
  const bgColor = type === 'success' ? 'bg-green-600' : 'bg-red-600'
  const formattedName = order.user.firstName + ' ' + order.user.lastName

  if (!shippingAddress) return null

  return (
    <Card className='border border-black mb-8 pt-0'>
      <CardHeader
        className={cn('text-gray-50 border-b pt-5 border-black', bgColor)}
      >
        <h2 className='text-xl font-semibold'>Información de Envío</h2>
      </CardHeader>
      <CardContent className='px-6'>
        <div className='space-y-2'>
          <p className='text-black font-semibold'>{formattedName}</p>
          <p className='text-gray-600'>
            {shippingAddress.address1} / {shippingAddress.address2}
          </p>
          <p className='text-gray-600'>
            {shippingAddress.postcode} {shippingAddress.city}, España
          </p>
          <p className='text-gray-600'>Teléfono: {shippingAddress.phone}</p>
        </div>
        <div className='mt-4 p-4 bg-gray-50 border-2 border-gray-300'>
          <p className='text-sm text-gray-600'>
            <strong>Tiempo estimado de entrega:</strong> 3-5 días laborables
          </p>
          <p className='text-sm text-gray-600'>
            Recibirás un email con el número de seguimiento una vez que tu
            pedido sea enviado.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
