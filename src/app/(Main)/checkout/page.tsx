import CheckoutPageClient from '@/components/checkout/checkout-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Checkout'
}

export default async function CheckoutPage() {
  return <CheckoutPageClient />
}
