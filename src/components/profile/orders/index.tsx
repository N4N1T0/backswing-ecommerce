import { GET_USER_PROFILE_WITH_ORDERSResult } from '@/sanity/types'
import OrderCard from './orders-card'

export default function OrderList({
  orders,
  billingAddress
}: {
  orders: GET_USER_PROFILE_WITH_ORDERSResult['orders']
  billingAddress:
    | GET_USER_PROFILE_WITH_ORDERSResult['orders'][number]['shippingAddress']
    | undefined
}) {
  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <h2 className='text-xl font-semibold text-black'>
          Historial de Pedidos
        </h2>
        <p className='text-gray-600'>{orders.length} pedidos</p>
      </div>

      <div className='space-y-6'>
        {orders.map((order) => (
          <OrderCard order={{ ...order, billingAddress }} key={order.id} />
        ))}
      </div>
    </div>
  )
}
