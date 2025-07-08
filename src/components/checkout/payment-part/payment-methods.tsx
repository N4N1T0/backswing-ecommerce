'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'
import { CreditCard, ExternalLink } from 'lucide-react'

interface PaymentMethodsProps {
  paymentMethod: string
  onPaymentMethodChange: (_method: string) => void
  disabled?: boolean
}

export function PaymentMethods({
  paymentMethod,
  onPaymentMethodChange,
  disabled = false
}: PaymentMethodsProps) {
  return (
    <Card
      className={cn(
        'border border-black pt-0',
        disabled ? 'opacity-50' : 'bg-white'
      )}
    >
      <CardHeader className='border-b border-black bg-gray-300 pt-5'>
        <CardTitle className='flex items-center gap-2 text-xl text-black'>
          <CreditCard className='h-5 w-5' />
          Método de Pago
        </CardTitle>
      </CardHeader>
      <CardContent className='px-6 space-y-4 bg-white'>
        <RadioGroup
          value={paymentMethod}
          onValueChange={onPaymentMethodChange}
          disabled={disabled}
          defaultValue='transferencia'
        >
          <div
            className={cn(
              'flex items-center space-x-2 p-4 border border-gray-400',
              'bg-gray-100 select-none pointer-events-none opacity-50'
            )}
          >
            <RadioGroupItem
              value='tarjeta'
              id='tarjeta'
              className='border border-black'
              disabled={true}
            />
            <Label htmlFor='tarjeta' className='flex-1 text-black font-medium'>
              Tarjeta de Crédito/Débito
            </Label>
            <ExternalLink className='h-4 w-4 text-gray-500' />
          </div>

          <div
            className={cn(
              'flex items-center space-x-2 p-4 border border-gray-400',
              'bg-gray-100 select-none pointer-events-none opacity-50'
            )}
          >
            <RadioGroupItem
              value='paypal'
              id='paypal'
              className='border border-black'
              disabled={true}
            />
            <Label htmlFor='paypal' className='flex-1 text-black font-medium'>
              PayPal
            </Label>
            <ExternalLink className='h-4 w-4 text-gray-500' />
          </div>

          <div
            className={cn(
              'flex items-center space-x-2 p-4 border border-gray-400',
              disabled ? 'bg-gray-100' : 'bg-gray-50 hover:bg-gray-100'
            )}
          >
            <RadioGroupItem
              value='transferencia'
              id='transferencia'
              className='border border-black'
              disabled={disabled}
            />
            <div className='flex-1'>
              <Label
                htmlFor='transferencia'
                className='text-black font-medium cursor-pointer'
              >
                Transferencia Directa
              </Label>
              <p className='text-xs text-gray-600 mt-1'>
                Tienes 3 días hábiles para realizar la transferencia
              </p>
            </div>
            <ExternalLink className='h-4 w-4 text-gray-500' />
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  )
}
