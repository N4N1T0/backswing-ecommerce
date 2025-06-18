import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email().min(2, {
    message: 'El email es requerido'
  }),
  password: z.string().min(2, {
    message: 'La contraseña es requerida'
  })
})

export type LoginSchema = z.infer<typeof loginSchema>
