'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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
import { BillingAddressProps } from '@/types'
import { MapPin } from 'lucide-react'

export function BillingAddress({
  address,
  onAddressChange
}: BillingAddressProps) {
  // HANDLERS
  const handleInputChange = (field: keyof Address, value: string) => {
    onAddressChange({
      ...address,
      [field]: value
    })
  }

  return (
    <Card className='border-black bg-white pt-0'>
      <CardHeader className='border-b-2 border-black bg-gray-100 pt-5 rounded-t-2xl'>
        <CardTitle className='flex items-center gap-2 text-xl text-black'>
          <MapPin className='h-5 w-5' />
          Dirección de Facturación
        </CardTitle>
      </CardHeader>
      <CardContent className='p-6 space-y-4 bg-white'>
        <div>
          <Label
            htmlFor='billingStreet'
            className='text-black font-medium mb-2'
          >
            Dirección *
          </Label>
          <Input
            id='billingStreet'
            value={address.address1 || ''}
            onChange={(e) => handleInputChange('address1', e.target.value)}
            className='border-gray-400 focus:border-black bg-white'
            required
          />
        </div>
        <div>
          <Label
            htmlFor='billingApartment'
            className='text-black font-medium mb-2'
          >
            Apartamento, suite, etc. (opcional)
          </Label>
          <Input
            id='billingApartment'
            value={address.address2 || ''}
            onChange={(e) => handleInputChange('address2', e.target.value)}
            className='border-gray-400 focus:border-black bg-white'
          />
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <Label
              htmlFor='billingCity'
              className='text-black font-medium mb-2'
            >
              Ciudad *
            </Label>
            <Input
              id='billingCity'
              value={address.city || ''}
              onChange={(e) => handleInputChange('city', e.target.value)}
              className='border-gray-400 focus:border-black bg-white'
              required
            />
          </div>
          <div>
            <Label
              htmlFor='billingState'
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
                  <SelectItem key={comunidad} value={comunidad}>
                    {comunidad}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Label htmlFor='billingZip' className='text-black font-medium mb-2'>
            Código Postal *
          </Label>
          <Input
            id='billingZip'
            value={address.postcode || ''}
            onChange={(e) => handleInputChange('postcode', e.target.value)}
            className='border-gray-400 focus:border-black bg-white'
            required
          />
        </div>
      </CardContent>
    </Card>
  )
}
