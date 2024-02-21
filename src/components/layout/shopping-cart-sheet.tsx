import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { ShoppingCart } from 'lucide-react'

const ShoppingCartSheet = () => {
  return (
    <Sheet>
      <SheetTrigger className='p-2 hover:bg-gray-300 rounded-lg transition-colors duration-300'>
        <span className='sr-only'>Shopping Cart Sheet</span>
        <ShoppingCart />
      </SheetTrigger>
      <SheetContent className='bg-white'>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>

  )
}

export default ShoppingCartSheet
