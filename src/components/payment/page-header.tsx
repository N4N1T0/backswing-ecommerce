import { cn } from '@/lib/utils'
import { Check, X } from 'lucide-react'

interface PageHeaderProps {
  type: 'success' | 'failed'
  title: string
  description: string
}

export function PageHeader({ type, title, description }: PageHeaderProps) {
  const Icon = type === 'success' ? Check : X
  const bgColor = type === 'success' ? 'bg-green-600' : 'bg-red-600'
  const textColor = type === 'success' ? 'text-green-400' : 'text-red-400'

  return (
    <div className={cn('text-center mb-12', textColor)}>
      <div
        className={cn(
          'inline-flex items-center justify-center w-20 h-20 text-white mb-6',
          bgColor
        )}
      >
        <Icon className='w-10 h-10' />
      </div>
      <h1 className='text-3xl font-bold mb-4'>{title}</h1>
      <p className='text-gray-600 text-lg'>{description}</p>
    </div>
  )
}
