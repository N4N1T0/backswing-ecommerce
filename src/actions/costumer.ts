/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'

import { auth } from '@/auth'
import { sanityClientRead, sanityClientWrite } from '@/sanity/lib/client'
import { GET_COSTUMER_BY_EMAIL, GET_COSTUMER_BY_ID } from '@/sanity/queries'
import { Address, Costumer } from '@/sanity/types'
import { uuid } from '@sanity/uuid'
import { Session } from 'next-auth'
import { revalidatePath } from 'next/cache'

export interface CreateCustomerData {
  email: string
  firstName: string
  lastName: string
  password?: string
  userName?: string
  IdDocument?: string
  companyName?: string
  billingAddress: Address
  shippingAddresses?: Address[]
  isGuest: boolean
}

export async function processCustomerCheckout(
  data: CreateCustomerData,
  existingCustomerId?: string
) {
  try {
    console.log(
      'Processing customer checkout:',
      data,
      'existingId:',
      existingCustomerId
    )

    let result
    let customerId: string

    // If we have an existing customer ID, update the customer
    if (existingCustomerId) {
      result = await updateCustomer(existingCustomerId, data)
      customerId = existingCustomerId
    } else {
      // Always check for existing customer by email first to prevent duplicates
      const existingCustomer = await getCustomerByEmail(data.email)

      if (existingCustomer.success) {
        // Customer exists, update instead of creating
        result = await updateCustomer(existingCustomer.data._id, data)
        customerId = existingCustomer.data._id
      } else {
        // Customer doesn't exist, create new one
        result = await createCustomer(data)
        if (result.success && result.data) {
          customerId = result.data._id
        } else {
          throw new Error(result.error || 'Failed to create customer')
        }
      }
    }

    if (result.success) {
      return {
        success: true,
        data: {
          customerId,
          customer: result.data
        },
        message: existingCustomerId
          ? 'Cliente actualizado exitosamente'
          : 'Cliente procesado exitosamente'
      }
    } else {
      return {
        success: false,
        error: result.error || 'Error processing customer',
        message: 'Error al procesar la información del cliente'
      }
    }
  } catch (error) {
    console.error('Error in processCustomerCheckout:', error)
    return {
      success: false,
      error: 'Error al procesar el cliente',
      message:
        'Hubo un problema al procesar la información del cliente. Inténtelo de nuevo.'
    }
  }
}

export async function createCustomer(data: CreateCustomerData) {
  try {
    console.log('Creating customer:', data)
    const session = await auth()
    const avatar = await avatarImage(session)

    // Check if customer already exists by email (unless it's a guest)
    if (!data.isGuest) {
      const existingCustomer = await getCustomerByEmail(data.email)
      if (existingCustomer.success) {
        return {
          success: false,
          error: 'El cliente ya existe',
          message: 'Ya existe un cliente con este correo electrónico.'
        }
      }
    }

    // Create customer document in Sanity
    const customerDoc: Costumer = {
      _id: uuid(),
      _createdAt: new Date().toISOString(),
      _updatedAt: new Date().toISOString(),
      _rev: '',
      _type: 'costumer',
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.userName,
      IdDocument: data.IdDocument,
      companyName: data.companyName,
      billingAddress: data.billingAddress
        ? [{ ...data.billingAddress, _key: uuid() }]
        : [],
      shippingAddresses: data.shippingAddresses
        ? data.shippingAddresses.map((addr) => ({ ...addr, _key: uuid() }))
        : [],
      isGuest: data.isGuest,
      isPayingCustomer: false,
      password: data.password,
      avatarUrl: avatar
    }

    const customer =
      await sanityClientWrite.createIfNotExists<Costumer>(customerDoc)

    revalidatePath('/checkout')

    return {
      success: true,
      data: customer,
      message: 'Cliente creado exitosamente'
    }
  } catch (error) {
    console.error('Error creating customer:', error)
    return {
      success: false,
      error: 'Error al crear el cliente',
      message: 'Hubo un problema al crear el cliente. Inténtelo de nuevo.'
    }
  }
}

export async function updateCustomer(
  customerId: string,
  data: Partial<CreateCustomerData>
) {
  try {
    console.log('Updating customer:', customerId, data)

    const updateData: any = {}

    if (data.email) updateData.email = data.email
    if (data.firstName) updateData.firstName = data.firstName
    if (data.lastName) updateData.lastName = data.lastName
    if (data.userName) updateData.userName = data.userName
    if (data.IdDocument) updateData.IdDocument = data.IdDocument
    if (data.companyName) updateData.companyName = data.companyName
    if (data.password) updateData.password = data.password
    if (data.isGuest !== undefined) updateData.isGuest = data.isGuest

    if (data.billingAddress) {
      updateData.billingAddress = [data.billingAddress]
    }
    if (data.shippingAddresses) {
      updateData.shippingAddresses = data.shippingAddresses
    }

    const updatedCustomer = await sanityClientWrite
      .patch(customerId)
      .set(updateData)
      .commit()

    revalidatePath('/checkout')

    return {
      success: true,
      data: updatedCustomer,
      message: 'Cliente actualizado exitosamente'
    }
  } catch (error) {
    console.error('Error updating customer:', error)
    return {
      success: false,
      error: 'Error al actualizar el cliente'
    }
  }
}

export async function getCustomerById(customerId: string) {
  try {
    const customer = await sanityClientRead.fetch(GET_COSTUMER_BY_ID, {
      customerId
    })

    if (!customer) {
      return {
        success: false,
        error: 'Cliente no encontrado'
      }
    }

    return {
      success: true,
      data: customer
    }
  } catch (error) {
    console.error('Error fetching customer:', error)
    return {
      success: false,
      error: 'Error al obtener el cliente'
    }
  }
}

export async function getCustomerByEmail(email: string) {
  try {
    const customer = await sanityClientRead.fetch(GET_COSTUMER_BY_EMAIL, {
      email
    })

    if (!customer) {
      return {
        success: false,
        error: 'Cliente no encontrado'
      }
    }

    return {
      success: true,
      data: customer
    }
  } catch (error) {
    console.error('Error fetching customer by email:', error)
    return {
      success: false,
      error: 'Error al obtener el cliente'
    }
  }
}

// HELPERS FUNCTIONS
const avatarImage = async (session: Session | null) => {
  if (session?.user?.image && session.user.name) {
    const image = await sanityClientWrite.assets.upload(
      'image',
      Buffer.from(session.user.image),
      {
        filename: session.user.name
      }
    )

    return {
      _type: 'image' as const,
      asset: {
        _ref: image._id,
        _type: 'reference' as const
      }
    }
  }

  return {
    _type: 'image' as const,
    asset: {
      _ref: 'image-b1625ce0eeed9972dc9a045bfdff747ced3b649d-96x96-webp',
      _type: 'reference' as const
    }
  }
}
