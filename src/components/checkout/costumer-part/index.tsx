'use client'

import {
  CreateCustomerData,
  getCustomerById,
  processCustomerCheckout
} from '@/actions/costumer'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  validateAddress,
  validateContactInfo,
  validateShippingAddress
} from '@/lib/validations'
import { Address, Costumer } from '@/sanity/types'
import { Session } from 'next-auth'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { toast } from 'sonner'
import { BillingAddress } from './billing-address'
import { ContactInformation } from './contact-information'
import { ShippingAddress } from './shipping-address'

export default function CheckoutCostumerPart({
  session
}: {
  session: Session | null
}) {
  // STATE
  const [customer, setCustomer] = useState<Partial<Costumer | null>>(null)
  const [billingAddress, setBillingAddress] = useState<Partial<Address>>({})
  const [shippingAddress, setShippingAddress] = useState<Partial<Address>>({})
  const [differentShipping, setDifferentShipping] = useState<boolean>(false)
  const [isLoadingUser, setIsLoadingUser] = useState<boolean>(false)
  const [userFetched, setUserFetched] = useState<boolean>(false)
  const [isProcessing, setIsProcessing] = useState<boolean>(false)

  // ROUTER
  const router = useRouter()
  const searchParams = useSearchParams()

  // EFFECT
  useEffect(() => {
    const fetchUserData = async () => {
      if (session?.user?.id && !userFetched) {
        setIsLoadingUser(true)
        try {
          const result = await getCustomerById(session.user.id)

          if (result.success && result.data) {
            const userData = result.data

            setCustomer({
              _id: userData._id,
              email: userData.email,
              firstName: userData.firstName,
              lastName: userData.lastName,
              userName: userData.userName,
              IdDocument: userData.IdDocument,
              companyName: userData.companyName,
              isGuest: userData.isGuest || false,
              isPayingCustomer: userData.isPayingCustomer
            })

            if (userData.billingAddress && userData.billingAddress.length > 0) {
              setBillingAddress(userData.billingAddress[0])
            }

            if (
              userData.shippingAddresses &&
              userData.shippingAddresses.length > 0
            ) {
              setShippingAddress(userData.shippingAddresses[0])
              setDifferentShipping(true)
            }
          }
        } catch (error) {
          console.error('Error fetching user data:', error)
          setCustomer({
            email: session.user.email || '',
            firstName: session.user.name?.split(' ')[0] || '',
            lastName: session.user.name?.split(' ')[1] || '',
            isGuest: false
          })
        } finally {
          setIsLoadingUser(false)
          setUserFetched(true)
        }
      } else if (!session?.user?.id && !userFetched) {
        setCustomer({
          isGuest: true
        })
        setUserFetched(true)
      }
    }

    fetchUserData()
  }, [session, userFetched])

  // CONST
  const canProceed = useMemo(() => {
    if (isLoadingUser) return false

    const contactValid = validateContactInfo(customer)
    const billingValid = validateAddress(billingAddress)
    const shippingValid = validateShippingAddress(
      differentShipping,
      shippingAddress
    )
    return contactValid && billingValid && shippingValid
  }, [
    billingAddress,
    customer,
    differentShipping,
    shippingAddress,
    isLoadingUser
  ])

  // HANDLERS
  const handleContinue = useCallback(async () => {
    if (!canProceed || !customer) return

    try {
      setIsProcessing(true)

      const customerData: CreateCustomerData = {
        email: customer.email || '',
        firstName: customer.firstName || '',
        lastName: customer.lastName || '',
        password: customer.password,
        userName: customer.userName,
        IdDocument: customer.IdDocument,
        companyName: customer.companyName,
        billingAddress: billingAddress as Address,
        shippingAddresses: differentShipping
          ? [shippingAddress as Address]
          : undefined,
        isGuest: customer.isGuest || false
      }

      // Use the new processCustomerCheckout action that handles duplicates
      const result = await processCustomerCheckout(customerData, customer._id)

      if (result.success && result.data) {
        const customerId = result.data.customerId
        toast.success(result.message)

        const params = new URLSearchParams(searchParams.toString())
        params.set('customerId', customerId)
        params.set('differentShipping', differentShipping.toString())

        router.push(`?${params.toString()}`, { scroll: false })

        setTimeout(() => {
          document
            .getElementById('order-summary')
            ?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        toast.error(
          result.message ||
            'Error processing customer information. Please try again.'
        )
        console.error('Error processing customer:', result.error)
      }
    } catch (error) {
      console.error('Error in handleContinue:', error)
      toast.error('Error processing information. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }, [
    canProceed,
    customer,
    billingAddress,
    differentShipping,
    shippingAddress,
    searchParams,
    router
  ])

  // LOADING
  if (isLoadingUser) {
    return (
      <div className='space-y-6'>
        <div className='flex items-center justify-center p-8'>
          <div className='text-center'>
            <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-black mx-auto mb-4'></div>
            <p className='text-gray-600'>Cargando información del usuario...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='space-y-6'>
      {/* USER STATUS */}
      {session?.user && (
        <div className='bg-green-50 border border-green-200 rounded-lg p-4 my-4'>
          <p className='text-green-800 text-sm'>
            ✓ Sesión iniciada como: {session.user.email}
          </p>
        </div>
      )}

      {!session?.user && (
        <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 my-4'>
          <p className='text-blue-800 text-sm'>
            ℹ️ Comprando como invitado. Puedes crear una cuenta durante el
            proceso.
          </p>
        </div>
      )}

      <ContactInformation customer={customer} onCustomerChange={setCustomer} />

      <BillingAddress
        address={billingAddress}
        onAddressChange={setBillingAddress}
      />

      <ShippingAddress
        address={shippingAddress}
        onAddressChange={setShippingAddress}
        differentShipping={differentShipping}
        setDifferentShipping={setDifferentShipping}
      />

      <div className='pt-4'>
        <Button
          size='lg'
          onClick={handleContinue}
          disabled={!canProceed || isProcessing}
          className={cn(
            'w-full text-lg py-6 border-2 border-black rounded-none',
            canProceed && !isProcessing
              ? 'bg-black text-white hover:bg-gray-800'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          )}
        >
          {isProcessing ? (
            <div className='flex items-center gap-2'>
              <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white'></div>
              Procesando...
            </div>
          ) : canProceed ? (
            'Continuar al Resumen'
          ) : (
            'Complete la Información Requerida'
          )}
        </Button>
      </div>
    </div>
  )
}
