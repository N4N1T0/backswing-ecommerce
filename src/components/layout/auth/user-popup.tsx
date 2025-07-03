import { auth, signOut } from '@/auth'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { CreditCard, HelpCircle, LogOut, Settings, User } from 'lucide-react'
import Form from 'next/form'
import { AuthDialog } from './auth-dialog'

export async function UserPopup() {
  const session = await auth()

  if (!session?.user) {
    return <AuthDialog />
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          className='border-2 border-gray-300 hover:bg-gray-50 rounded-none px-4 py-2 bg-transparent flex items-center gap-2'
        >
          <div className='w-8 h-8 bg-black text-white flex items-center justify-center'>
            <User size={16} />
          </div>
          <div className='text-left hidden sm:block'>
            <div className='text-sm font-medium text-black'>
              {session.user.name}
            </div>
            <div className='text-xs text-gray-600'>{session.user.email}</div>
          </div>
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className='w-64 p-0 rounded-none border-2 border-gray-200'
        align='end'
      >
        <div className='p-4 border-b border-gray-200'>
          <div className='flex items-center gap-3'>
            <div className='w-10 h-10 bg-black text-white flex items-center justify-center'>
              <User size={20} />
            </div>
            <div>
              <div className='font-medium text-black'>{session.user.name}</div>
              <div className='text-sm text-gray-600'>{session.user.email}</div>
            </div>
          </div>
        </div>

        <div className='p-2'>
          <Button
            variant='ghost'
            className='w-full justify-start rounded-none hover:bg-gray-100 px-3 py-2 h-auto'
          >
            <User size={16} className='mr-3' />
            <span className='text-sm'>Profile</span>
          </Button>

          <Button
            variant='ghost'
            className='w-full justify-start rounded-none hover:bg-gray-100 px-3 py-2 h-auto'
          >
            <Settings size={16} className='mr-3' />
            <span className='text-sm'>Settings</span>
          </Button>

          <Button
            variant='ghost'
            className='w-full justify-start rounded-none hover:bg-gray-100 px-3 py-2 h-auto'
          >
            <CreditCard size={16} className='mr-3' />
            <span className='text-sm'>Billing</span>
          </Button>

          <Button
            variant='ghost'
            className='w-full justify-start rounded-none hover:bg-gray-100 px-3 py-2 h-auto'
          >
            <HelpCircle size={16} className='mr-3' />
            <span className='text-sm'>Help & Support</span>
          </Button>

          <Separator className='my-2 bg-gray-200' />

          <Form action={() => signOut()}>
            <Button
              variant='ghost'
              className='w-full justify-start rounded-none hover:bg-red-50 hover:text-red-600 px-3 py-2 h-auto text-gray-700'
            >
              <LogOut size={16} className='mr-3' />
              <span className='text-sm'>Sign Out</span>
            </Button>
          </Form>
        </div>
      </PopoverContent>
    </Popover>
  )
}
