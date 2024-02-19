import PromotionDialog from '../shared/promotion-dialog'

const Announcement = () => {
  return (
    <div className='bg-accent px-4 py-3 text-white'>
      <p className='text-center text-sm font-medium'>
        Llevate 20% de descuento por subsicribirte a nuestro {' '}
        <PromotionDialog><span className='inline-block underline uppercase cursor-pointer'>Newsletter</span></PromotionDialog>
      </p>
    </div>
  )
}

export default Announcement
