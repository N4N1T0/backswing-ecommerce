import { auth } from '@/auth'
import CheckoutCostumerPart from './costumer-part'

export default async function CheckoutPageClient() {
  const session = await auth()

  return (
    <div className='min-h-screen bg-gray-200'>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <h1 className='text-3xl font-bold text-black'>Finalizar Compra</h1>

        <div className='grid lg:grid-cols-2 gap-8'>
          <CheckoutCostumerPart session={session} />
          {/* <CheckoutPaymentPart /> */}
        </div>
      </div>
    </div>
  )
}
