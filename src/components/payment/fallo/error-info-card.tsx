import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { AlertTriangle } from 'lucide-react'

interface ErrorInfoCardProps {
  errorCode?: string
  errorMessage?: string
  transactionId?: string
}

export function ErrorInfoCard({
  errorCode,
  errorMessage,
  transactionId
}: ErrorInfoCardProps) {
  return (
    <Card className='border border-red-600 mb-8 pt-0'>
      <CardHeader className='bg-red-50 border-b border-red-600 pt-5'>
        <div className='flex items-center gap-3'>
          <AlertTriangle className='w-6 h-6 text-red-600' />
          <h2 className='text-xl font-semibold text-red-600'>
            Información del Error
          </h2>
        </div>
      </CardHeader>
      <CardContent className='p-6'>
        <div className='space-y-4'>
          {errorCode && (
            <div className='flex justify-between items-center'>
              <span className='text-gray-600'>Código de Error:</span>
              <span className='font-semibold text-black'>{errorCode}</span>
            </div>
          )}
          {errorMessage && (
            <div className='flex justify-between items-start'>
              <span className='text-gray-600'>Descripción:</span>
              <span className='font-semibold text-black text-right max-w-xs'>
                {errorMessage}
              </span>
            </div>
          )}
          {transactionId && (
            <div className='flex justify-between items-center'>
              <span className='text-gray-600'>ID de Transacción:</span>
              <span className='font-semibold text-black'>{transactionId}</span>
            </div>
          )}
          <div className='mt-4 p-4 bg-red-50 border-2 border-red-200'>
            <p className='text-sm text-red-700'>
              <strong>¿Qué puedes hacer?</strong>
            </p>
            <ul className='text-sm text-red-600 mt-2 space-y-1'>
              <li>• Verifica que tu método de pago tenga fondos suficientes</li>
              <li>• Comprueba que los datos de tu tarjeta sean correctos</li>
              <li>• Intenta con un método de pago diferente</li>
              <li>• Contacta con tu banco si el problema persiste</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
