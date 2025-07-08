'use client'

import { paymentLogic } from '@/actions/order'
import { Button } from '@/components/ui/button'
import useShoppingCart from '@/stores/shopping-cart-store'
import { Loader2 } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useMemo, useState, useTransition } from 'react'
import { toast } from 'sonner'
// import { RedsysPaymentForm } from '../redsys-payment-form'
import { cn } from '@/lib/utils'
import { Session } from 'next-auth'
import { OrderSummary } from './order-summary'
import { PaymentMethods } from './payment-methods'

export default function CheckoutPaymentPart({
  session
}: {
  session: Session | null
}) {
  // URL PARAMS
  const searchParams = useSearchParams()
  const router = useRouter()

  // STATE
  const [paymentMethod, setPaymentMethod] = useState('transferencia')
  const [discountPercentage, setDiscountPercentage] = useState(0)
  const [appliedCoupon, setAppliedCoupon] = useState<string>()
  const [products] = useShoppingCart()
  const [isPending, startTransition] = useTransition()
  const [loading, setLoading] = useState(false)
  // const [paymentForm, setPaymentForm] = useState<RedirectForm | null>(null)

  // COMPUTED VALUES
  const canProceed = useMemo(() => {
    const customerId = session
      ? session.user?.id
      : searchParams.get('customerId')
    const differentShipping = searchParams.get('differentShipping')
    return !!(customerId && differentShipping !== null)
  }, [searchParams, session])

  // CONST
  const customerId = searchParams.get('customerId')
  const differentShipping = searchParams.get('differentShipping') === 'true'
  const totalAmount = products.reduce(
    (sum, product) =>
      sum +
      (product.offer ? product.offer : product.price || 0) * product.quantity,
    0
  )

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

    setLoading(true)
    startTransition(async () => {
      try {
        const currentCustomerId = customerId

        if (!currentCustomerId) {
          console.log('No customer ID provided, proceeding as guest')
        }

        const orderResult = await paymentLogic(
          paymentMethod,
          totalAmount,
          currentCustomerId,
          products,
          differentShipping ? 'true' : 'false',
          appliedCoupon
        )

        if (orderResult.data === null) {
          setLoading(false)
          toast.error('Error al realizar el pago, por favor intente de nuevo')
          return
        }

        if (
          paymentMethod === 'transferencia' &&
          orderResult.success &&
          orderResult.data !== null
        ) {
          setLoading(false)
          router.push(orderResult.data as unknown as string)
        }

        // if (
        //   paymentMethod === 'tarjeta' &&
        //   orderResult.success &&
        //   orderResult.data !== null
        // ) {
        //   setLoading(false)
        //   setPaymentForm(orderResult.data as RedirectForm)
        // }

        // if (
        //   paymentMethod === 'paypal' &&
        //   orderResult.success &&
        //   orderResult.data !== null
        // ) {
        //   setLoading(false)
        //   window.location.href = orderResult.data as unknown as string
        // }
      } catch (error) {
        console.error('Error placing order:', error)
        setLoading(false)
        toast.error('Hubo un error al procesar su pedido. Inténtelo de nuevo.')
      }
    })
  }, [
    canProceed,
    customerId,
    paymentMethod,
    totalAmount,
    products,
    differentShipping,
    appliedCoupon,
    router
  ])

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
        disabled={products.length === 0 || isPending || loading}
        className={cn(
          'w-full text-lg py-6 border-2 border-black rounded-none',
          canProceed && products.length > 0 && !isPending && !loading
            ? 'bg-black text-white hover:bg-gray-800'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        )}
      >
        {isPending || loading ? (
          <div className='flex items-center gap-2'>
            <Loader2 className='h-5 w-5 animate-spin' />
            Procesando...
          </div>
        ) : products.length === 0 ? (
          'Carrito Vacío'
        ) : (
          `Realizar Pedido - $${totalAmount}`
        )}
      </Button>

      <div className='text-center text-sm text-gray-600 p-4 bg-gray-100 border-2 border-gray-300'>
        <p>Al realizar el pedido, acepta nuestros términos y condiciones</p>
      </div>
      {/* <RedsysPaymentForm form={paymentForm} /> */}
    </div>
  )
}
