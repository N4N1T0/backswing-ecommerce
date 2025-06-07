import PromotionDialog from '@/components/shared/promotion-dialog'

const Announcement = () => {
  return (
    <div className='bg-gray-950 px-4 py-3 text-white'>
      <p className='text-center text-sm font-medium'>
        Llévate 20% de descuento por suscribirte a nuestro{' '}
        <PromotionDialog>
          <span className='inline-block underline uppercase cursor-pointer hover:text-gray-300 transition-colors duration-200'>
            Newsletter
          </span>
        </PromotionDialog>
      </p>
    </div>
  )
}

export default Announcement
