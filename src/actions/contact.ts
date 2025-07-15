'use server'

import ContactEmail from '@/emails/contact-email'
import NewsletterWelcomeEmail from '@/emails/newsletter-welcome'
import { resendClient } from '@/lib/clients/resend'
import {
  contactFormSchema,
  newsletterSchema,
  type ContactFormSchema,
  type NewsletterSchema
} from '@/lib/schemas/login'

export async function sendContactEmail(values: ContactFormSchema) {
  const { success, error, data } = contactFormSchema.safeParse(values)

  if (!success && error) {
    return {
      success: false,
      error: error.errors[0].message
    }
  }

  try {
    await resendClient.emails.send({
      from: 'contacto@backswingpadel.com',
      to: 'info@backswingpadel.com',
      subject: 'Nuevo mensaje de contacto',
      react: ContactEmail({
        data: data
      })
    })

    return {
      success: true,
      data
    }
  } catch (error) {
    console.log('🚀 ~ sendContactEmail ~ error:', error)
    return {
      success: false,
      error: 'Error interno del servidor'
    }
  }
}

export async function subscribeToNewsletter(values: NewsletterSchema) {
  const { success, data, error } = newsletterSchema.safeParse(values)

  if (!success && error) {
    return {
      success: false,
      message: error.errors[0].message
    }
  }

  try {
    await resendClient.emails.send({
      from: 'newsletter@backswingpadel.com',
      to: data.email,
      bcc: 'info@backswingpadel.com',
      subject: '¡Bienvenido al Newsletter de Backswing! 🎾',
      react: NewsletterWelcomeEmail({
        data
      })
    })

    return {
      success: true,
      message: 'Suscripción exitosa'
    }
  } catch (error) {
    console.log('🚀 ~ error:', error)
    return {
      success: false,
      message: 'Error al enviar el email de bienvenida'
    }
  }
}
