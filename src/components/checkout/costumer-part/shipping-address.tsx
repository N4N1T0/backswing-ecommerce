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
import { ShippingAddressProps } from '@/types'
import { Truck } from 'lucide-react'

export function ShippingAddress({
  address,
  onAddressChange,
  differentShipping,
  setDifferentShipping
}: ShippingAddressProps) {
  // HANDLERS
  const handleInputChange = (field: keyof Address, value: string) => {
    onAddressChange({
      ...address,
      [field]: value
    })
  }

  const handleDifferentShippingChange = (_value: boolean) => {
    setDifferentShipping(_value)
    onAddressChange({
      ...address,
      address1: '',
      address2: '',
      city: '',
      state: '',
      postcode: ''
    })
  }

  return (
    <Card className='border-black bg-white pt-0'>
      <CardHeader className='border-b border-black bg-gray-200 pt-5'>
        <CardTitle className='flex items-center gap-2 text-xl text-black'>
          <Truck className='h-5 w-5' />
          Dirección de Envío
        </CardTitle>
      </CardHeader>
      <CardContent className='px-6 space-y-4 bg-white'>
        <div className='flex items-center gap-2 p-4 mb-4 bg-gray-100 border border-gray-300'>
          <Checkbox
            id='differentShipping'
            checked={differentShipping}
            onCheckedChange={() =>
              handleDifferentShippingChange(!differentShipping)
            }
            className='border-black data-[state=checked]:bg-black'
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
                className='text-black font-medium mb-2'
              >
                Dirección *
              </Label>
              <Input
                id='shippingStreet'
                value={address.address1 || ''}
                onChange={(e) => handleInputChange('address1', e.target.value)}
                className='border-gray-400 focus:border-black bg-white'
                required
              />
            </div>
            <div>
              <Label
                htmlFor='shippingApartment'
                className='text-black font-medium mb-2'
              >
                Apartamento, suite, etc. (opcional)
              </Label>
              <Input
                id='shippingApartment'
                value={address.address2 || ''}
                onChange={(e) => handleInputChange('address2', e.target.value)}
                className='border-gray-400 focus:border-black bg-white'
              />
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <Label
                  htmlFor='shippingCity'
                  className='text-black font-medium mb-2'
                >
                  Ciudad *
                </Label>
                <Input
                  id='shippingCity'
                  value={address.city || ''}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className='border-gray-400 focus:border-black bg-white'
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor='shippingState'
                  className='text-black font-medium mb-2'
                >
                  Estado/Provincia *
                </Label>
                <Select
                  onValueChange={(value) => handleInputChange('state', value)}
                >
                  <SelectTrigger className='border-gray-400 focus:border-black bg-white w-full'>
                    <SelectValue placeholder='Seleccionar estado' />
                  </SelectTrigger>
                  <SelectContent className='bg-white border-black'>
                    {comunidadesAutonomas.map((comunidad) => (
                      <SelectItem
                        key={comunidad}
                        value={comunidad}
                        className='hover:gray-200'
                      >
                        {comunidad}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <Label
                  htmlFor='shippingZip'
                  className='text-black font-medium mb-2'
                >
                  Código Postal *
                </Label>
                <Input
                  id='shippingZip'
                  value={address.postcode || ''}
                  onChange={(e) =>
                    handleInputChange('postcode', e.target.value)
                  }
                  className='border-gray-400 focus:border-black bg-white'
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
