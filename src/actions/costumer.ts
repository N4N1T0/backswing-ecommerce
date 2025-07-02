'use server'

import { sanityClientRead } from '@/sanity/lib/client'
import { GET_COSTUMER_BY_ID } from '@/sanity/queries'
import { Address } from '@/sanity/types'
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

export async function createCustomer(data: CreateCustomerData) {
  try {
    // Here you would integrate with Sanity to create the customer
    console.log('Creating customer:', data)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock response - replace with actual Sanity integration
    const customer = {
      _id: `customer_${Date.now()}`,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.userName,
      IdDocument: data.IdDocument,
      companyName: data.companyName,
      billingAddress: data.billingAddress,
      shippingAddresses: data.shippingAddresses || [],
      isGuest: data.isGuest,
      isPayingCustomer: false,
      createdAt: new Date().toISOString()
    }

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

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    revalidatePath('/checkout')

    return {
      success: true,
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
