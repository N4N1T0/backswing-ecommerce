'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { DialogDescription } from '@radix-ui/react-dialog'
import { User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ForgotPasswordForm } from './forgot-password-form'
import { SignInForm } from './sign-in-form'
import { SignUpForm } from './sign-up-form'

export function AuthDialog() {
  // STATE
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('signin')
  const router = useRouter()

  // HANDLERS
  const handleSuccess = () => {
    setOpen(false)
    router.refresh()
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogHeader className='sr-only'>
        <DialogTitle>Sign In</DialogTitle>
        <DialogDescription>
          Sign in to your account to continue
        </DialogDescription>
      </DialogHeader>
      <DialogTrigger asChild>
        <Button size='icon' variant='outline'>
          <User className='size-5' />
        </Button>
      </DialogTrigger>

      <DialogContent className='sm:max-w-md w-full p-0 mx-1 rounded-none border-2 border-gray-200 bg-primary'>
        <Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>
          <TabsList className='grid w-full grid-cols-3 rounded-none bg-gray-200 p-1 h-auto'>
            <TabsTrigger
              value='signin'
              className='rounded-none py-3 px-4 text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-none border-gray-300 border-r-0'
            >
              Iniciar
            </TabsTrigger>
            <TabsTrigger
              value='signup'
              className='rounded-none py-3 px-4 text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-none border-gray-300 border-r-0'
            >
              Registrar
            </TabsTrigger>
            <TabsTrigger
              value='forgot'
              className='rounded-none py-3 px-4 text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-none border-r border-gray-300'
            >
              Recuperar
            </TabsTrigger>
          </TabsList>

          <div className='p-8'>
            <ScrollArea className='max-h-[70vh] h-full'>
              <TabsContent value='signin' className='mt-0'>
                <SignInForm
                  onSuccess={handleSuccess}
                  onSwitchToTab={setActiveTab}
                />
              </TabsContent>

              <TabsContent value='signup' className='mt-0'>
                <SignUpForm
                  onSuccess={handleSuccess}
                  onSwitchToTab={setActiveTab}
                />
              </TabsContent>

              <TabsContent value='forgot' className='mt-0'>
                <ForgotPasswordForm onSwitchToTab={setActiveTab} />
              </TabsContent>
            </ScrollArea>
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
