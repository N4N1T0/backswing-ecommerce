import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose
} from '@/components/ui/sheet'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

const ShoppingCartSheet = () => {
  return (
    <Sheet>
      <SheetTrigger className='p-2 hover:bg-gray-300 rounded-lg transition-colors duration-300'>
        <span className='sr-only'>Shopping Cart Sheet</span>
        <ShoppingCart />
      </SheetTrigger>
      <SheetContent className='bg-white justify-between items-center flex flex-col p-5'>
        <SheetHeader>
          <SheetTitle className='text-lg md:text-2xl font-bold uppercase'>Carrito de la Compra
          </SheetTitle>
        </SheetHeader>
        <div className='w-full bg-white py-5 overflow-y-scroll overflow-x-hidden'>
          <div className='block my-3 py-3 border-b border-gray-400 md:flex'>
            <div className='flex w-full flex-1'>
              <img src='https://i.postimg.cc/hj6h6Vwv/pexels-artem-beliaikin-2292919.jpg' alt=''
                className='object-cover w-full h-full rounded-md' />
            </div>
            <div className='flex-1 px-4 space-y-1 flex flex-col items-center md:items-start'>
              <h2 className='text-lg font-bold text-gray-900'>Product Name</h2>
              <p className='text-sm text-gray-600 '> Quantity: 4</p>
              <p className='text-lg font-bold text-gray-900'>$299.00</p>
              <button
                className='px-3 py-1 font-medium text-center text-gray-900 border border-gray-900 rounded-md hover:bg-gray-900 hover:text-gray-100'>Remove</button>
            </div>
          </div>
          <div className='block my-3 py-3 border-b border-gray-400 md:flex'>
            <div className='flex w-full flex-1'>
              <img src='https://i.postimg.cc/hj6h6Vwv/pexels-artem-beliaikin-2292919.jpg' alt=''
                className='object-cover w-full h-full rounded-md' />
            </div>
            <div className='flex-1 px-4 space-y-1 flex flex-col items-center md:items-start'>
              <h2 className='text-lg font-bold text-gray-900'>Product Name</h2>
              <p className='text-sm text-gray-600 '> Quantity: 4</p>
              <p className='text-lg font-bold text-gray-900'>$299.00</p>
              <button
                className='px-3 py-1 font-medium text-center text-gray-900 border border-gray-900 rounded-md hover:bg-gray-900 hover:text-gray-100'>Remove</button>
            </div>
          </div>
          <div className='block my-3 py-3 border-b border-gray-400 md:flex'>
            <div className='flex w-full flex-1'>
              <img src='https://i.postimg.cc/hj6h6Vwv/pexels-artem-beliaikin-2292919.jpg' alt=''
                className='object-cover w-full h-full rounded-md' />
            </div>
            <div className='flex-1 px-4 space-y-1 flex flex-col items-center md:items-start'>
              <h2 className='text-lg font-bold text-gray-900'>Product Name</h2>
              <p className='text-sm text-gray-600 '> Quantity: 4</p>
              <p className='text-lg font-bold text-gray-900'>$299.00</p>
              <button
                className='px-3 py-1 font-medium text-center text-gray-900 border border-gray-900 rounded-md hover:bg-gray-900 hover:text-gray-100'>Remove</button>
            </div>
          </div>
        </div>
        <SheetFooter className='flex flex-col items-center'>
          <div className='gap-5 text-sm md:text-base text-gray-700 flex'>
            <p>Subtotal</p>
            <p>$400.00</p>
          </div>
          <Link href='/checkout'
            className='w-fit mt-3 py-2 px-3 text-base md:text-lg font-medium bg-gray-950 rounded-md text-gray-50 hover:bg-gray-700 transition-colors duration-200'>Checkout</Link>
          <SheetClose className='text-gray-700 hover:underline mt-3 text-sm md:text-base'>Seguir Comprando
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>

  )
}

export default ShoppingCartSheet
