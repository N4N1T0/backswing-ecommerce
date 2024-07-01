// UI Imports
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
	PopoverClose,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'

// Assets Imports
import { User } from 'lucide-react'

// Auth Imports
import { auth } from '@/auth'
import { login, logout } from '@/actions/login'

// Next.js Imports
import Link from 'next/link'

// Queries Imports
import { createCostumer } from '@/lib/queries'

/**
 * Asynchronous function to display the profile popup based on the user's session information.
 *
 * @return {Promise<JSX.Element>} The JSX element representing the profile popup.
 */
const ProfilePopup = async (): Promise<JSX.Element> => {
	// Retrieve the user's session information
	const session = await auth()
	// Retrieve the user's costumer information from the database
	const user = await createCostumer(session?.user?.email, session?.user?.name)

	return (
		<Popover>
			{/* Trigger for the profile popup */}
			<PopoverTrigger className='p-2 hover:bg-gray-300 rounded-lg transition-colors ease-out duration-300'>
				<span className='sr-only'>Profile Popup</span>
				<User />
			</PopoverTrigger>
			{/* Content of the profile popup */}
			<PopoverContent className='bg-white p-5 w-fit'>
				<ul>
					<li>
						{/* Conditional rendering based on if the user is logged in */}
						{session === null ? (
							<form action={login}>
								{/* Button for the user to log in */}
								<Button
									type='submit'
									variant='outline'
									className='hover:bg-gray-900 hover:text-gray-100 duration-200 transition-colors'
								>
									Login Google
								</Button>
							</form>
						) : (
							<form action={logout} className='flex flex-col gap-2'>
								{/* Button for the user to log out */}
								<PopoverClose asChild>
									<Button
										type='submit'
										variant='outline'
										className='hover:bg-gray-900 hover:text-gray-100 duration-200 transition-colors'
									>
										Logout
									</Button>
								</PopoverClose>
								{/* Button for the user to access their profile */}
								<PopoverClose asChild>
									<Button
										asChild
										variant='outline'
										className='hover:bg-gray-900 hover:text-gray-100 duration-200 transition-colors'
									>
										<Link href={`/perfil/${user?.id}`}>Usuario</Link>
									</Button>
								</PopoverClose>
							</form>
						)}
					</li>
				</ul>
			</PopoverContent>
		</Popover>
	)
}

export default ProfilePopup
