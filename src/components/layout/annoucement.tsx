import PromotionDialog from '@/components/shared/promotion-dialog'

const Announcement = () => {
  return (
    <div className='bg-gray-950 px-4 py-3 text-white animate-fade-in-down animate-delay-300 absolute top-16 md:top-20 left-0 right-0 z-40'>
      <div className='text-center text-xs md:text-sm font-medium'>
        Llévate 20% de descuento por suscribirte a nuestro{' '}
        <PromotionDialog>
          <span className='inline-block underline uppercase cursor-pointer hover:text-gray-300 transition-colors duration-200'>
            Newsletter
          </span>
        </PromotionDialog>
      </div>
    </div>
  )
}

export default Announcement
