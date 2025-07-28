import { z } from 'zod'

export const failedPaymentFormSchema = z.object({
  reason: z.enum([
    'tarjeta_declinada',
    'fondos_insuficientes',
    'error_banco',
    'problema_tecnico',
    'informacion_incorrecta',
    'otro',
    ''
  ])
})

export type FailedPaymentFormSchema = z.infer<typeof failedPaymentFormSchema>
