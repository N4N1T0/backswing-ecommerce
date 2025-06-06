import { login, logout } from '@/actions/login'
import { auth } from '@/auth'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { User } from 'lucide-react'
import Link from 'next/link'

const ProfilePopup = async (): Promise<JSX.Element> => {
  const session = await auth()

  return (
    <Popover>
      <PopoverTrigger className='p-2 hover:bg-gray-300 rounded-lg transition-colors ease-out duration-300'>
        <span className='sr-only'>Profile Popup</span>
        <User />
      </PopoverTrigger>
      <PopoverContent className='bg-white p-5 w-fit'>
        <ul>
          <li>
            {session === null ? (
              <form action={login}>
                <Button
                  type='submit'
                  variant='outline'
                  className='hover:bg-gray-900 hover:text-gray-100 duration-200 transition-colors'
                >
                  Iniciar Sesión
                </Button>
              </form>
            ) : (
              <form action={logout} className='flex flex-col gap-2'>
                <PopoverClose asChild>
                  <Button
                    type='submit'
                    variant='outline'
                    className='hover:bg-gray-900 hover:text-gray-100 duration-200 transition-colors'
                  >
                    Cerrar Sesión
                  </Button>
                </PopoverClose>
                <PopoverClose asChild>
                  <Button
                    asChild
                    variant='outline'
                    className='hover:bg-gray-900 hover:text-gray-100 duration-200 transition-colors'
                  >
                    <Link href={`/perfil/${session?.user?.id}`}>Perfil</Link>
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
