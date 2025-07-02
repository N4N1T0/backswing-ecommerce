'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Costumer } from '@/sanity/types'
import { ContactInformationProps } from '@/types'
import { User } from 'lucide-react'
import { memo, useCallback, useState } from 'react'

export const ContactInformation = memo(function ContactInformation({
  customer,
  onCustomerChange
}: ContactInformationProps) {
  console.log('🚀 ~ customer:', customer)

  // STATE
  const [wantsAccount, setWantsAccount] = useState(false)

  // HANDLERS
  const handleInputChange = useCallback(
    (field: keyof Costumer, value: string | boolean) => {
      onCustomerChange({
        ...customer,
        [field]: value
      })
    },
    [customer, onCustomerChange]
  )

  const toggleAccountCreation = useCallback(() => {
    const newWantsAccount = !wantsAccount
    setWantsAccount(newWantsAccount)
    onCustomerChange({
      ...customer,
      isGuest: !newWantsAccount
    })
  }, [wantsAccount, customer, onCustomerChange])

  return (
    <Card className='border border-black bg-white pt-0'>
      <CardHeader className='border-b border-black bg-gray-100 pt-5 rounded-t-2xl'>
        <CardTitle className='flex items-center gap-2 text-xl text-black'>
          <User className='h-5 w-5' />
          Información de Contacto
        </CardTitle>
      </CardHeader>
      <CardContent className='px-6 space-y-4 bg-white'>
        <div className='space-y-4'>
          {customer === null && (
            <div className='flex items-center gap-2 p-4 mb-8 bg-gray-100 border border-gray-300'>
              <Checkbox
                id='createAccount'
                checked={wantsAccount}
                onCheckedChange={toggleAccountCreation}
                className='border border-black data-[state=checked]:bg-black'
              />
              <Label htmlFor='createAccount' className='text-sm'>
                Crear una cuenta para futuras compras
              </Label>
            </div>
          )}

          <div className='grid grid-cols-2 gap-4'>
            <div>
              <Label
                htmlFor='firstName'
                className='text-black font-medium mb-2'
              >
                Nombre *
              </Label>
              <Input
                id='firstName'
                value={customer?.firstName || ''}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className='border border-gray-400 focus:border-black bg-white'
                required
              />
            </div>
            <div>
              <Label htmlFor='lastName' className='text-black font-medium mb-2'>
                Apellido *
              </Label>
              <Input
                id='lastName'
                value={customer?.lastName || ''}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className='border border-gray-400 focus:border-black bg-white'
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor='email' className='text-black font-medium mb-2'>
              Correo Electrónico *
            </Label>
            <Input
              id='email'
              type='email'
              value={customer?.email || ''}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className='border border-gray-400 focus:border-black bg-white'
              required
            />
          </div>

          <div>
            <Label htmlFor='IdDocument' className='text-black font-medium mb-2'>
              Documento de Identidad
            </Label>
            <Input
              id='IdDocument'
              value={customer?.IdDocument || ''}
              onChange={(e) => handleInputChange('IdDocument', e.target.value)}
              className='border border-gray-400 focus:border-black bg-white'
            />
          </div>

          <div>
            <Label
              htmlFor='companyName'
              className='text-black font-medium mb-2'
            >
              Nombre de la Empresa (Opcional)
            </Label>
            <Input
              id='companyName'
              value={customer?.companyName || ''}
              onChange={(e) => handleInputChange('companyName', e.target.value)}
              className='border border-gray-400 focus:border-black bg-white'
            />
          </div>

          {wantsAccount && (
            <>
              <div>
                <Label
                  htmlFor='userName'
                  className='text-black font-medium mb-2'
                >
                  Nombre de Usuario *
                </Label>
                <Input
                  id='userName'
                  value={customer?.userName || ''}
                  onChange={(e) =>
                    handleInputChange('userName', e.target.value)
                  }
                  className='border border-gray-400 focus:border-black bg-white'
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor='password'
                  className='text-black font-medium mb-2'
                >
                  Contraseña *
                </Label>
                <Input
                  id='password'
                  type='password'
                  value={customer?.password || ''}
                  onChange={(e) =>
                    handleInputChange('password', e.target.value)
                  }
                  className='border border-gray-400 focus:border-black bg-white'
                  required
                />
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
})
