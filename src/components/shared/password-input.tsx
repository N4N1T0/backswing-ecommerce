import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Costumer } from '@/sanity/types'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { useState } from 'react'

function PasswordInput({
  customer,
  handleInputChange
}: {
  customer: Partial<Costumer> | null
  handleInputChange: (_field: keyof Costumer, _value: string | boolean) => void
}) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div>
      <Input name='username' type='text' value={customer?.email || ''} hidden />
      <Label htmlFor='password' className='text-black font-medium mb-2'>
        Contraseña *
      </Label>
      <div className='relative'>
        <Input
          id='password'
          type={showPassword ? 'text' : 'password'}
          value={customer?.password || ''}
          onChange={(e) => handleInputChange('password', e.target.value)}
          className='border border-gray-400 focus:border-black bg-white pr-10'
          required
          autoComplete='current-password'
        />
        <button
          type='button'
          className='absolute right-2 top-1/2 -translate-y-1/2'
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeOffIcon className='h-5 w-5 text-gray-500' />
          ) : (
            <EyeIcon className='h-5 w-5 text-gray-500' />
          )}
        </button>
      </div>
    </div>
  )
}

export default PasswordInput
