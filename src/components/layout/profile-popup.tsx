import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose
} from '@/components/ui/popover'
import { User } from 'lucide-react'
import Link from 'next/link'

const ProfilePopup = () => {
  return (
    <Popover>
      <PopoverTrigger className='p-2 hover:bg-gray-300 rounded-lg transition-colors duration-300'>
        <span className='sr-only'>Profile Popup</span>
        <User />
      </PopoverTrigger>
      <PopoverContent className='bg-white p-5 w-fit'>
        <ul>
          <li>
            <PopoverClose asChild>
              <Link href='/perfil' className='block rounded-lg px-5 py-2 font-medium text-gray-600 hover:bg-gray-200 hover:text-gray-800 ease-out'>Perfil de Usuario</Link>
            </PopoverClose>
          </li>
        </ul>
      </PopoverContent>
    </Popover>

  )
}

export default ProfilePopup
