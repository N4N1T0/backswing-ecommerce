'use client'

import { useFormStatus } from 'react-dom'
import { ArrowRight, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const SubmitButton = () => {
  // Retrieve the form status
  const { pending } = useFormStatus()

  // Render the submit button
  return (
    <button
      type='submit'
      className={cn(
        'bg-gray-900 text-white px-8 py-4 font-bold text-lg border border-gray-900 hover:bg-gray-800 hover:border-gray-800 transition-colors duration-200',
        pending && 'opacity-75 cursor-not-allowed'
      )}
      disabled={pending}
    >
      <span className='flex items-center gap-3'>
        {pending ? (
          <>
            <Loader2 className='w-5 h-5 animate-spin' />
            <span>Procesando...</span>
          </>
        ) : (
          <>
            <span>Continuar</span>
            <ArrowRight className='w-5 h-5' />
          </>
        )}
      </span>
    </button>
  )
}

export default SubmitButton
