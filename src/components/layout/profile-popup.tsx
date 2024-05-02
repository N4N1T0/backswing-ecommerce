import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose
} from '@/components/ui/popover'
import { User } from 'lucide-react'
import { auth } from '@/auth'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { login, logout } from '@/actions/login'
import { createCostumer } from '@/lib/queries'
// import Link from 'next/link'

const ProfilePopup = async () => {
  const session = await auth()
  const user = await createCostumer(session?.user?.email, session?.user?.name)
  console.log('🚀 ~ ProfilePopup ~ user:', user)

  return (
    <Popover>
      <PopoverTrigger className='p-2 hover:bg-gray-300 rounded-lg transition-colors ease-out duration-300'>
        <span className='sr-only'>Profile Popup</span>
        <User />
      </PopoverTrigger>
      <PopoverContent className='bg-white p-5 w-fit'>
        <ul>
          <li>
            {session === null
              ? (
                <form
                  action={login}
                >
                  <Button type='submit' variant='outline' className='hover:bg-gray-900 hover:text-gray-100 duration-200 transition-colors'>Login Google</Button>
                </form>
              )
              : (
                <form
                  action={logout}
                  className='flex flex-col gap-2'
                >
                  <PopoverClose asChild>
                    <Button type='submit' variant='outline' className='hover:bg-gray-900 hover:text-gray-100 duration-200 transition-colors'>Logout</Button>
                  </PopoverClose>
                  <PopoverClose asChild>
                    <Button asChild variant='outline' className='hover:bg-gray-900 hover:text-gray-100 duration-200 transition-colors'>
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
