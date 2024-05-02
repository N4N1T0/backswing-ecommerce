import OrdersSummary from '@/components/profile/orders-summary'
import Wishlist from '@/components/profile/wishlist'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Perfil de Usuario'
}

const ProfilePage = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <main className='max-w-screen-3xl mx-auto p-5 md:p-10 space-y-5 md:space-y-10 text-center'>
      <Wishlist />
      <OrdersSummary />
    </main>
  )
}

export default ProfilePage
