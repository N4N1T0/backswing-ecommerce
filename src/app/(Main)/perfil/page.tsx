import OrdersSummary from '@/components/profile/orders-summary'
import Wishlist from '@/components/profile/wishlist'

const ProfilePage = () => {
  return (
    <main className='max-w-screen-3xl mx-auto p-5 md:p-10 space-y-5 md:space-y-10 text-center'>
      <Wishlist />
      <OrdersSummary />
    </main>
  )
}

export default ProfilePage
