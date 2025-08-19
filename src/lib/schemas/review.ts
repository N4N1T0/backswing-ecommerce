import { z } from 'zod'

export const reviewSchema = z.object({
  rating: z
    .number('La calificación es requerida')
    .min(1, { message: 'La calificación mínima es 1 estrella' }),
  title: z
    .string('El título es requerido')
    .min(5, { message: 'El título debe tener al menos 5 caracteres' }),
  comment: z
    .string('El comentario es requerido')
    .min(10, { message: 'El comentario debe tener al menos 10 caracteres' })
})

export type ReviewFormData = z.infer<typeof reviewSchema>
