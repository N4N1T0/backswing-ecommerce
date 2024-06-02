'use client'

import { useFormStatus } from 'react-dom'
import Spinner from '@/components/ui/spinner'

const SubmitButton = () => {
	const { pending } = useFormStatus()
	return (
		<div
			className={`bg-gray-900 text-gray-100 hover:bg-gray-700 duration-200 transition-colors px-6 py-4 rounded flex gap-x-3 ${
				pending ? 'pointer-events-none bg-gray-500' : 'cursor-pointer'
			}`}
			aria-disabled={pending}
		>
			{pending && <Spinner />}
			<button type='submit' className='uppercase'>
				<span className='py-2'>{pending ? 'Buscando...' : 'Personalizar'}</span>
			</button>
		</div>
	)
}

export default SubmitButton
