import PromotionPic from '@/assets/artur-kornakov-ArI-foyWnfA-unsplash.webp'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger
} from '@/components/ui/dialog'
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog'
import Image from 'next/image'

const PromotionDialog = ({
  children
}: {
  children: React.ReactNode
}): React.ReactElement => {
  return (
    <Dialog>
      <DialogHeader className='sr-only'>
        <DialogTitle>Descuento exclusivo para los subscritos</DialogTitle>
        <DialogDescription>
          Recibe un 20% de descuento en tu primer pago con tarjeta de crédito
        </DialogDescription>
      </DialogHeader>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='flex bg-white text-center'>
        <div className='w-full px-4 mb-10 md:w-1/2 md:mb-0 relative text-center hidden md:block'>
          <Image
            src={PromotionPic}
            alt='Un niño jugando padel'
            title='Llévate un descuento para tu camiseta o la de tu hijo'
            fill
            className='w-auto h-auto'
          />
        </div>
        <form className='w-full px-4 md:w-1/2 '>
          <h2 className='mb-4 text-3xl font-bold text-gray-950'>
            20% Descuento
          </h2>
          <p className='mb-4 text-sm text-gray-700'>
            Descuento exclusivo para los subscritos a nuestro newsletter, donde
            encontraras información actual sobre el padel y mucho mas!
          </p>
          <span className='block shadow-xs '>
            <input
              type='email'
              className='w-full px-4 py-4 mb-4 border border-gray-400 '
              name='promotion-email'
              placeholder='Tu Email@...'
              required
            />
            <button
              className='inline-flex justify-center w-full px-4 py-4 text-white bg-black focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 hover:bg-gray-600 transition-colors duration-200'
              type='submit'
            >
              Enviar
            </button>
          </span>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default PromotionDialog
