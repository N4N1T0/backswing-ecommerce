import { Button } from '@/components/ui/button'
import useShoppingCart from '@/stores/shopping-cart-store'
import { useCallback, useState, useTransition } from 'react'
import { OrderSummary } from './order-summary'
import { PaymentMethods } from './payment-methods'

export default function CheckoutPaymentPart() {
  // STATE
  const [paymentMethod, setPaymentMethod] = useState('tarjeta')
  const [discountPercentage, setDiscountPercentage] = useState(0)
  const [appliedCoupon, setAppliedCoupon] = useState<string>()
  const [products] = useShoppingCart()
  const [isPending, startTransition] = useTransition()

  // HANDLERS
  const handleCouponApplied = useCallback(
    (discount: number, couponCode?: string) => {
      setDiscountPercentage(discount)
      setAppliedCoupon(couponCode)
    },
    []
  )

  const handlePlaceOrder = useCallback(() => {
    if (!canProceed) return

    startTransition(async () => {
      try {
        // First create or update customer
        let customerId = urlParams.userId

        if (!customerId) {
          const customerResult = await createCustomer({
            email: customer.email!,
            firstName: customer.firstName!,
            lastName: customer.lastName!,
            password: customer.password,
            userName: customer.userName,
            IdDocument: customer.IdDocument,
            companyName: customer.companyName,
            billingAddress: billingAddress as Address,
            shippingAddresses: differentShipping
              ? [shippingAddress as Address]
              : [],
            isGuest: customer.isGuest!
          })

          if (!customerResult.success) {
            alert(customerResult.message)
            return
          }

          customerId = customerResult.data?._id
        }

        // Create order
        const orderResult = await createOrder({
          userEmail: customer.email!,
          products: products.map((p) => ({
            productId: p.id,
            quantity: p.quantity
          })),
          totalAmount: 200,
          paymentMethod,
          shippingAddress: differentShipping
            ? (shippingAddress as Address)
            : (billingAddress as Address),
          discountCoupon: appliedCoupon
        })

        if (orderResult.success) {
          // Redirect based on payment method
          const redirectUrls = {
            tarjeta: `/payment/card?orderId=${orderResult.orderId}`,
            paypal: `/payment/paypal?orderId=${orderResult.orderId}`,
            transferencia: `/payment/transfer?orderId=${orderResult.orderId}`
          }

          window.location.href =
            redirectUrls[paymentMethod as keyof typeof redirectUrls]
        } else {
          alert(orderResult.message)
        }
      } catch (error) {
        console.error('Error placing order:', error)
        alert('Hubo un error al procesar su pedido. Inténtelo de nuevo.')
      }
    })
  }, [paymentMethod, appliedCoupon, products])

  return (
    <div className='space-y-6' id='order-summary'>
      <OrderSummary
        handleCouponApplied={handleCouponApplied}
        discountPercentage={discountPercentage}
        disabled={!canProceed}
      />

      <PaymentMethods
        paymentMethod={paymentMethod}
        onPaymentMethodChange={setPaymentMethod}
        disabled={!canProceed}
      />

      {/* Botón de Finalizar Compra */}
      <Button
        size='lg'
        onClick={handlePlaceOrder}
        disabled={products.length === 0 || isPending}
        className={`w-full text-lg py-6 border-2 border-black ${
          canProceed && products.length > 0 && !isPending
            ? 'bg-black text-white hover:bg-gray-800'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        {isPending ? (
          <div className='flex items-center gap-2'>
            <Loader2 className='h-5 w-5 animate-spin' />
            Procesando...
          </div>
        ) : products.length === 0 ? (
          'Carrito Vacío'
        ) : (
          `Realizar Pedido - $${200}`
        )}
      </Button>

      <div className='text-center text-sm text-gray-600 p-4 bg-gray-100 border-2 border-gray-300'>
        <p>Al realizar el pedido, acepta nuestros términos y condiciones</p>
      </div>
    </div>
  )
}
