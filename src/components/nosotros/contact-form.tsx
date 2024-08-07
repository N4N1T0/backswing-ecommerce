// React Imports
import React from 'react'

/**
 * Renders a contact form component.
 *
 * @return {JSX.Element} The contact form component.
 */
const ContactForm = (): JSX.Element => {
	return (
		<form action='' className='p-6 bg-gray-200'>
			<label className='block font-bold text-gray-800 uppercase mb-6'>
				{' '}
				Nombre
				<input
					type='text'
					placeholder='Juan Perez'
					required
					id='nombre'
					name='nombre'
					className='block w-full px-4 py-3 my-3 leading-tight text-gray-700 bg-gray-50 border border-gray-300 rounded'
				/>
			</label>
			<label className='block font-bold text-gray-800 uppercase mb-6'>
				{' '}
				Email
				<input
					type='email'
					placeholder='juan@perez.com'
					required
					id='email'
					name='email'
					className='block w-full px-4 py-3 my-3 leading-tight text-gray-700 bg-gray-50 border border-gray-300 rounded'
				/>
			</label>
			<div className='mb-6 '>
				<label
					htmlFor='mensaje'
					className='block mb-2 font-bold text-gray-800 uppercase'
				>
					Mensage
				</label>
				<textarea
					placeholder='Describe your problem'
					id='mensaje'
					rows={5}
					name='mensaje'
					required
					className='block w-full px-4 leading-tight text-gray-700 bg-gray-50 border border-gray-300 rounded'
				/>
			</div>
			<button
				type='submit'
				className='px-4 py-2 font-medium text-gray-100 bg-gray-950 rounded shadow hover:bg-gray-700 transition-colors duration-200'
			>
				Enviar
			</button>
		</form>
	)
}

export default ContactForm
