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
      <PopoverContent className='bg-white p-5'>
        <ul>
          <li>
            <PopoverClose asChild>
              <Link href='/perfil'>Perfil</Link>
            </PopoverClose>
          </li>
        </ul>
      </PopoverContent>
    </Popover>

  )
}

export default ProfilePopup
