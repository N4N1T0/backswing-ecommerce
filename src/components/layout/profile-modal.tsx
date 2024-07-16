'use client'

// UI Imports
import {
	Dialog,
	DialogContent,
	DialogTrigger,
	DialogTitle,
	DialogDescription,
} from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'

// Assets Imports
import { User } from 'lucide-react'

// Auth Imports
import { logout } from '@/actions/login'
import { useSession, signOut } from 'next-auth/react'

// Queries Imports
import { AccountTabs, RegisterAcount } from './account-tabs'

// Next Imports
import Link from 'next/link'

// React Imports
import { type FormEvent, useState } from 'react'

/**
 * Asynchronous function to display the profile popup based on the user's session information.
 *
 * @return {Promise<JSX.Element>} The JSX element representing the profile popup.
 */
const ProfileModal = (): JSX.Element => {
	const { data: session } = useSession()
	const [open, setOpen] = useState(false)

	const handleSignOut = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const response = await signOut()
		setOpen(false)
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger
				className='p-2 hover:bg-gray-300 rounded-lg transition-colors ease-out duration-300'
				onClick={() => setOpen(true)}
			>
				<span className='sr-only'>Profile Popup</span>
				<User />
			</DialogTrigger>

			<DialogContent id='authentication-modal' className='bg-gray-50'>
				<DialogTitle className='sr-only'>Registro y Login</DialogTitle>
				<DialogDescription className='sr-only'>
					Login o registrate para continuar
				</DialogDescription>
				{session === null ? (
					<Tabs defaultValue='account' className='w-full'>
						<TabsList>
							<TabsTrigger
								value='account'
								className='hover:bg-gray-950 hover:text-gray-50 transition-colors duration-150 ease-out rounded-lg ml-5 data-[state=active]:bg-gray-300 px-10 data-[state=active]:pointer-events-none'
							>
								Login
							</TabsTrigger>
							<TabsTrigger
								value='register'
								className='hover:bg-gray-950 hover:text-gray-50 transition-colors duration-150 ease-out rounded-lg ml-5 data-[state=active]:bg-gray-300 px-10 data-[state=active]:pointer-events-none'
							>
								Registrarte
							</TabsTrigger>
						</TabsList>
						<TabsContent value='account'>
							<AccountTabs setOpen={setOpen} />
						</TabsContent>
						<TabsContent value='register'>
							<RegisterAcount />
						</TabsContent>
					</Tabs>
				) : (
					<>
						<form onSubmit={handleSignOut} className='flex flex-col gap-2'>
							<legend className='text-lg'>Ya estas logeado</legend>
							<Button
								type='submit'
								variant='outline'
								className='w-full text-white bg-gray-950 hover:bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
							>
								Logout
							</Button>
						</form>
						<Button
							asChild
							variant='outline'
							className='w-full text-white bg-gray-950 hover:bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
						>
							<Link href={`/perfil/${session.user?.id}`}>Perfil Usuario</Link>
						</Button>
					</>
				)}
			</DialogContent>
		</Dialog>
	)
}

export default ProfileModal
