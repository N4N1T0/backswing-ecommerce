import { signOutAction } from '@/actions/auth'
import { auth } from '@/auth'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { CircleDollarSign, Heart, LogOut, User } from 'lucide-react'
import Form from 'next/form'
import Link from 'next/link'
import { AuthDialog } from './auth-dialog'

export async function UserPopup() {
  const session = await auth()

  if (!session?.user) {
    return <AuthDialog />
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size='icon' className='animate-fade-in-up animate-delay-500'>
          <User className='size-5' />
        </Button>
      </PopoverTrigger>

      <PopoverContent className='w-56 p-2 rounded-none bg-gray-100' align='end'>
        <div className='flex px-3 py-1'>
          <span className='text-sm line-clamp-1 text-ellipsis'>
            {session.user.email}
          </span>
        </div>

        <Separator className='my-2 bg-gray-200' />

        <div>
          <PopoverClose asChild>
            <Link
              href={`/perfil/${session.user.id}`}
              className={buttonVariants({
                variant: 'outline',
                className:
                  'w-full justify-start rounded-none hover:bg-gray-100 px-3 py-2 h-auto border-none mb-1'
              })}
            >
              <User className='mr-3 size-5' />
              <span className='text-sm'>Perfil</span>
            </Link>
          </PopoverClose>
          <PopoverClose asChild>
            <Link
              href={`/perfil/${session.user.id}?tab=wishlist`}
              className={buttonVariants({
                variant: 'outline',
                className:
                  'w-full justify-start rounded-none hover:bg-gray-100 px-3 py-2 h-auto border-none mb-1'
              })}
            >
              <Heart className='mr-3 size-5' />
              <span className='text-sm'>Lista de Deseos</span>
            </Link>
          </PopoverClose>
          <PopoverClose asChild>
            <Link
              href={`/perfil/${session.user.id}?tab=orders`}
              className={buttonVariants({
                variant: 'outline',
                className:
                  'w-full justify-start rounded-none hover:bg-gray-100 px-3 py-2 h-auto border-none mb-1'
              })}
            >
              <CircleDollarSign className='mr-3 size-5' />
              <span className='text-sm'>Ordenes</span>
            </Link>
          </PopoverClose>

          <Separator className='my-2 bg-gray-200' />

          <Form action={signOutAction}>
            <Button
              variant='ghost'
              type='submit'
              className='w-full justify-start rounded-none hover:bg-red-50 hover:text-red-600 px-3 py-2 h-auto text-gray-700'
            >
              <LogOut size={16} className='mr-3' />
              <span className='text-sm'>Cerrar sesión</span>
            </Button>
          </Form>
        </div>
      </PopoverContent>
    </Popover>
  )
}
