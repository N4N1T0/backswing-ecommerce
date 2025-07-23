import { SupportInfoProps } from '@/types'

export function SupportInfo({
  email = 'info@backswingpadel.com',
  phone = '+34632949476'
}: SupportInfoProps) {
  return (
    <div className='mt-12 text-center'>
      <p className='text-gray-600 text-sm mb-2'>
        ¿Necesitas ayuda? Contacta con nuestro servicio de atención al cliente
      </p>
      <p className='text-black font-semibold'>
        <a href={`mailto:${email}`} className='hover:underline'>
          {email}
        </a>{' '}
        |{' '}
        <a href={`tel:${phone}`} className='hover:underline'>
          {phone}
        </a>
      </p>
    </div>
  )
}
