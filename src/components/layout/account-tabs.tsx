'use client'

import { login } from '@/actions/login'
import React, {
	type SetStateAction,
	type Dispatch,
	useState,
	type FormEvent,
} from 'react'
import { Button } from '../ui/button'
import { createCostumer } from '@/lib/queries'
import { signIn } from 'next-auth/react'

const AccountTabs = ({
	setOpen,
}: { setOpen: Dispatch<SetStateAction<boolean>> }) => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const [status, setStatus] = useState<string | null>(null)

	const handleSignInWithCredentials = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setLoading(true)
		setError(null)

		const formData = new FormData(e.currentTarget)

		try {
			const email = formData.get('email') as string
			const password = formData.get('password') as string

			const response = await signIn('credentials', {
				email,
				password,
				redirect: false,
			})

			if (response?.error === null) {
				setOpen(false)
			} else {
				setStatus('error')
				setError('Contraseña o email incorrectos, intenta de nuevo')
			}
		} catch (error) {
			console.error(error)
		} finally {
			setLoading(false)
		}
	}

	return (
		<>
			{/* Login Form with Credentials */}
			<form
				className='space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8'
				onSubmit={handleSignInWithCredentials}
			>
				<div className='border-t border-gray-300 pt-4'>
					<label
						htmlFor='email'
						className='text-sm font-medium text-gray-900 block mb-2'
					>
						Tu email
					</label>
					<input
						disabled={loading}
						type='email'
						name='email'
						id='email'
						className='disabled:opacity-50 disabled:pointer-events-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
						placeholder='name@company.com'
						required
					/>
				</div>
				<div>
					<label
						htmlFor='password'
						className='text-sm font-medium text-gray-900 block mb-2 '
					>
						tu contraseña
					</label>
					<input
						disabled={loading}
						type='password'
						name='password'
						id='password'
						placeholder='••••••••'
						className='disabled:opacity-50 disabled:pointer-events-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
						required
					/>
				</div>
				<Button
					disabled={loading}
					type='submit'
					className='disabled:opacity-50 disabled:pointer-events-none w-full text-white bg-gray-950 hover:bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
				>
					{loading ? 'Loading...' : 'Login'}
				</Button>
				{error && status === 'error' && (
					<p className='text-red-500 mt-2'>{error}</p>
				)}
				{error && status === 'success' && (
					<p className='text-green-500 mt-2'>{error}</p>
				)}
			</form>

			{/* Login with Google */}
			<form
				action={login}
				className='text-sm font-medium text-gray-500 space-y-3 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8'
			>
				<hr />
				<legend>O puedes usar tu cuenta de Google</legend>
				<Button
					disabled={loading}
					type='submit'
					className='disabled:opacity-50 disabled:pointer-events-none w-full text-white bg-blue-700 hover:bg-blue-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
				>
					Google
				</Button>
			</form>
		</>
	)
}

const RegisterAcount = () => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const [status, setStatus] = useState<string | null>(null)

	const handleRegisterCostumer = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setLoading(true)
		setError(null)

		const email = e.currentTarget.email.value
		const password = e.currentTarget.password.value

		try {
			const user = await createCostumer(email, password)
			if (user) {
				setStatus('success')
				setError(
					'se ha registrado con exito, ahora puedes iniciar sesion en Login',
				)
			}
		} catch (error) {
			console.error(error)
			setStatus('error')
			setError(
				'hay un error al registrar el cliente, refresca la pagina e intentalo de nuevo',
			)
		} finally {
			setLoading(false)
		}
	}

	return (
		<form
			className='space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8'
			onSubmit={handleRegisterCostumer}
		>
			<div className='border-t border-gray-300 pt-4'>
				<label
					htmlFor='email'
					className='text-sm font-medium text-gray-900 block mb-2'
				>
					Tu email
				</label>
				<input
					disabled={loading}
					type='email'
					name='email'
					id='email'
					className='disabled:opacity-50 disabled:pointer-events-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
					placeholder='name@company.com'
					required
				/>
			</div>
			<div>
				<label
					htmlFor='password'
					className='text-sm font-medium text-gray-900 block mb-2 '
				>
					tu contraseña
				</label>
				<input
					disabled={loading}
					type='password'
					name='password'
					id='password'
					placeholder='••••••••'
					className='disabled:opacity-50 disabled:pointer-events-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
					required
				/>
			</div>
			<Button
				disabled={loading}
				type='submit'
				className='disabled:opacity-50 disabled:pointer-events-none w-full text-white bg-gray-950 hover:bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
			>
				{loading ? 'Registrando...' : 'Registrarte'}
			</Button>
			{error && status === 'error' && (
				<p className='text-red-500 mt-2'>{error}</p>
			)}
			{error && status === 'success' && (
				<p className='text-green-500 mt-2'>{error}</p>
			)}
		</form>
	)
}

export { AccountTabs, RegisterAcount }
