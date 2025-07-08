import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email().min(2, {
    message: 'El email es requerido'
  }),
  password: z.string().min(2, {
    message: 'La contraseña es requerida'
  })
})

export const contactFormSchema = z.object({
  nombre: z.string().min(2, {
    message: 'El nombre es requerido'
  }),
  email: z.string().email({
    message: 'El email debe ser válido'
  }),
  asunto: z.string().min(5, {
    message: 'El asunto debe tener al menos 5 caracteres'
  }),
  mensaje: z.string().min(10, {
    message: 'El mensaje debe tener al menos 10 caracteres'
  })
})

export const newsletterSchema = z.object({
  email: z.string().email({
    message: 'El email debe ser válido'
  })
})

export const signUpSchema = z
  .object({
    name: z.string().min(6, {
      message: 'El nombre debe tener al menos 6 caracteres'
    }),
    email: z.string().email({
      message: 'El email debe ser válido'
    }),
    password: z.string().min(6, {
      message: 'La contraseña debe tener al menos 6 caracteres'
    }),
    confirmPassword: z.string().min(6, {
      message: 'La confirmación de contraseña es requerida'
    })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword']
  })

export const forgotPasswordSchema = z.object({
  email: z.string().email('Ingresa un correo electrónico válido')
})

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>
export type ContactFormSchema = z.infer<typeof contactFormSchema>
export type NewsletterSchema = z.infer<typeof newsletterSchema>
export type SignUpSchema = z.infer<typeof signUpSchema>
export type LoginSchema = z.infer<typeof loginSchema>
