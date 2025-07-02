import { Address, Costumer } from '@/sanity/types'

export function validateContactInfo(customer: Partial<Costumer> | null) {
  if (!customer) return false

  const requiredFields = ['firstName', 'lastName', 'email']
  const hasRequiredFields = requiredFields.every((field) => {
    const value = customer[field as keyof Costumer]
    return value && String(value).trim() !== ''
  })

  // If creating account, also need username and password
  if (!customer.isGuest) {
    return (
      hasRequiredFields && customer.password && customer.password.trim() !== ''
    )
  }

  return hasRequiredFields
}

export function validateAddress(address: Partial<Address>): boolean {
  if (!address) return false

  const requiredFields = ['address1', 'city', 'state', 'postcode']
  return requiredFields.every((field) => {
    const value = address[field as keyof Address]
    return value && String(value).trim() !== ''
  })
}

export function validateShippingAddress(
  differentShipping: boolean,
  shippingAddress: Partial<Address>
): boolean {
  if (!differentShipping) return true
  return validateAddress(shippingAddress)
}

// Helper function to create validation key for memoization
export function createValidationKey(
  customer: Partial<Costumer>,
  billingAddress: Partial<Address>,
  shippingAddress: Partial<Address>,
  differentShipping: boolean
): string {
  return JSON.stringify({
    customer: {
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      userName: customer.userName,
      password: customer.password ? '***' : undefined,
      isGuest: customer.isGuest
    },
    billingAddress,
    shippingAddress: differentShipping ? shippingAddress : {},
    differentShipping
  })
}
