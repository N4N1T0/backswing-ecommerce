import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { generateStrongPassword } from '@/lib/utils'
import { Costumer } from '@/sanity/types'
import { EyeIcon, EyeOffIcon, Wand2 } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../ui/button'

function PasswordInput({
  customer,
  handleInputChange
}: {
  customer: Partial<Costumer> | null
  handleInputChange: (_field: keyof Costumer, _value: string | boolean) => void
}) {
  const [showPassword, setShowPassword] = useState(false)
  const handleGeneratePassword = () => {
    const password = generateStrongPassword()
    handleInputChange('password', password)
  }

  return (
    <div>
      <Input
        name='username'
        type='text'
        defaultValue={customer?.email || ''}
        hidden
        autoComplete='username'
      />
      <Label htmlFor='password' className='text-black font-medium mb-2'>
        Contraseña *
      </Label>
      <div className='relative flex gap-2'>
        <Input
          id='password'
          type={showPassword ? 'text' : 'password'}
          value={customer?.password || ''}
          onChange={(e) => handleInputChange('password', e.target.value)}
          className='border border-gray-400 focus:border-black bg-white pr-24 h-10'
          required
          autoComplete='current-password'
        />
        <div className='absolute right-12 top-1/2 -translate-y-1/2 flex gap-2'>
          <Button
            type='button'
            size='icon'
            variant='ghost'
            className='hover:text-black text-gray-500 transition-colors'
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOffIcon className='size-5' />
            ) : (
              <EyeIcon className='size-5' />
            )}
          </Button>
        </div>
        <Button
          type='button'
          size='icon'
          variant='outline'
          onClick={handleGeneratePassword}
          title='Generar una contraseña segura'
          className='border-gray-400 text-gray-600'
        >
          <Wand2 className='h-5 w-5' />
        </Button>
      </div>
    </div>
  )
}

export default PasswordInput
