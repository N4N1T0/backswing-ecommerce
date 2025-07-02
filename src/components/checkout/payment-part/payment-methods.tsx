'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
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
      className={`border-2 border-black ${disabled ? 'opacity-50' : 'bg-white'}`}
    >
      <CardHeader className='border-b-2 border-black bg-gray-300'>
        <CardTitle className='flex items-center gap-2 text-xl text-black'>
          <CreditCard className='h-5 w-5' />
          Método de Pago
        </CardTitle>
      </CardHeader>
      <CardContent className='p-6 space-y-4 bg-white'>
        <RadioGroup
          value={paymentMethod}
          onValueChange={onPaymentMethodChange}
          disabled={disabled}
        >
          <div
            className={`flex items-center space-x-2 p-4 border-2 border-gray-400 ${disabled ? 'bg-gray-100' : 'bg-gray-50 hover:bg-gray-100'}`}
          >
            <RadioGroupItem
              value='tarjeta'
              id='tarjeta'
              className='border-2 border-black'
              disabled={disabled}
            />
            <Label
              htmlFor='tarjeta'
              className='flex-1 text-black font-medium cursor-pointer'
            >
              Tarjeta de Crédito/Débito
            </Label>
            <ExternalLink className='h-4 w-4 text-gray-500' />
          </div>

          <div
            className={`flex items-center space-x-2 p-4 border-2 border-gray-400 ${disabled ? 'bg-gray-100' : 'bg-gray-50 hover:bg-gray-100'}`}
          >
            <RadioGroupItem
              value='paypal'
              id='paypal'
              className='border-2 border-black'
              disabled={disabled}
            />
            <Label
              htmlFor='paypal'
              className='flex-1 text-black font-medium cursor-pointer'
            >
              PayPal
            </Label>
            <ExternalLink className='h-4 w-4 text-gray-500' />
          </div>

          <div
            className={`flex items-center space-x-2 p-4 border-2 border-gray-400 ${disabled ? 'bg-gray-100' : 'bg-gray-50 hover:bg-gray-100'}`}
          >
            <RadioGroupItem
              value='transferencia'
              id='transferencia'
              className='border-2 border-black'
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
