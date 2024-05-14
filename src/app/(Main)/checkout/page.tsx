import CheckoutCoupon from '@/components/checkout/checkout-coupon'
import CheckoutTable from '@/components/checkout/checkout-table'

const CheckoutPage = () => {
  // TODO: Add Remove from Checkout
  // ? Put the remove inside the Quantity
  // TODO: Order Sumary Independent componnet

  return (
    <section className='py-24'>
      <div className='px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6'>
        <h1 className='mb-8 text-4xl font-bold'>Checkout</h1>
        {/* Checkout */}
        <CheckoutTable />
        {/* Checkout & Coupon */}
        <CheckoutCoupon />
      </div>
    </section>
  )
}

export default CheckoutPage
