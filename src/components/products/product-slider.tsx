import Image from 'next/image'

const ProductSlider = ({ image, name }: { image: string, name: string }) => {
  return (
    <div className='w-full px-4 md:w-1/2'>
      <div className='relative mb-4 lg:mb-8'>
        <Image src={image} alt={name} height={1000} width={1000} priority title={name}
          className='object-cover aspect-square h-auto w-auto' />
      </div>
    </div>
  )
}

export default ProductSlider
