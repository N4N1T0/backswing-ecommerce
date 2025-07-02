'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { comunidadesAutonomas } from '@/contants/ui-data'
import { Address } from '@/sanity/types'
import { Truck } from 'lucide-react'

interface ShippingAddressProps {
  address: Partial<Address>
  onAddressChange: (_address: Partial<Address>) => void
  differentShipping: boolean
  setDifferentShipping: (_value: boolean) => void
}

export function ShippingAddress({
  address,
  onAddressChange,
  differentShipping,
  setDifferentShipping
}: ShippingAddressProps) {
  const handleInputChange = (field: keyof Address, value: string) => {
    onAddressChange({
      ...address,
      [field]: value
    })
  }

  return (
    <Card className='border-2 border-black bg-white'>
      <CardHeader className='border-b-2 border-black bg-gray-200'>
        <CardTitle className='flex items-center gap-2 text-xl text-black'>
          <Truck className='h-5 w-5' />
          Dirección de Envío
        </CardTitle>
      </CardHeader>
      <CardContent className='p-6 space-y-4 bg-white'>
        <div className='flex items-center space-x-2 p-4 bg-gray-50 border-2 border-gray-300'>
          <Checkbox
            id='differentShipping'
            checked={differentShipping}
            onCheckedChange={() => setDifferentShipping(!differentShipping)}
            className='border-2 border-black data-[state=checked]:bg-black'
          />
          <Label htmlFor='differentShipping' className='text-black font-medium'>
            Enviar a una dirección diferente
          </Label>
        </div>

        {differentShipping && (
          <div className='space-y-4 pt-4'>
            <div>
              <Label
                htmlFor='shippingStreet'
                className='text-black font-medium'
              >
                Dirección *
              </Label>
              <Input
                id='shippingStreet'
                value={address.address1 || ''}
                onChange={(e) => handleInputChange('address1', e.target.value)}
                className='border-2 border-gray-400 focus:border-black bg-white'
                required
              />
            </div>
            <div>
              <Label
                htmlFor='shippingApartment'
                className='text-black font-medium'
              >
                Apartamento, suite, etc. (opcional)
              </Label>
              <Input
                id='shippingApartment'
                value={address.address2 || ''}
                onChange={(e) => handleInputChange('address2', e.target.value)}
                className='border-2 border-gray-400 focus:border-black bg-white'
              />
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <Label
                  htmlFor='shippingCity'
                  className='text-black font-medium'
                >
                  Ciudad *
                </Label>
                <Input
                  id='shippingCity'
                  value={address.city || ''}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className='border-2 border-gray-400 focus:border-black bg-white'
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor='shippingState'
                  className='text-black font-medium'
                >
                  Estado/Provincia *
                </Label>
                <Select
                  onValueChange={(value) => handleInputChange('state', value)}
                >
                  <SelectTrigger className='border-2 border-gray-400 focus:border-black bg-white'>
                    <SelectValue placeholder='Seleccionar estado' />
                  </SelectTrigger>
                  <SelectContent className='bg-white border-2 border-black'>
                    {comunidadesAutonomas.map((comunidad) => (
                      <SelectItem key={comunidad} value={comunidad}>
                        {comunidad}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <Label htmlFor='shippingZip' className='text-black font-medium'>
                  Código Postal *
                </Label>
                <Input
                  id='shippingZip'
                  value={address.postcode || ''}
                  onChange={(e) =>
                    handleInputChange('postcode', e.target.value)
                  }
                  className='border-2 border-gray-400 focus:border-black bg-white'
                  required
                />
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
