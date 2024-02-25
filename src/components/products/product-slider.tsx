import Image from 'next/image'

const ProductSlider = ({ image, name }: { image: string, name: string }) => {
  return (
    <div className='w-full px-4 md:w-1/2'>
      <div className='relative mb-4 lg:mb-8'>
        <Image src={image} alt={name} height={1000} width={1000} priority title={name}
          className='object-cover aspect-square h-auto w-auto' />
      </div>
      <div className='flex-wrap flex'>
        <div className='w-1/2 p-2 sm:w-1/4'>
          <a href='#'
            className='block border hover:border-gray-400'>
            <Image src={image} alt={name} height={200} width={200} title={name}
              className='object-cover aspect-square h-auto w-auto' />
          </a>
        </div>
        <div className='w-1/2 p-2 sm:w-1/4'>
          <a href='#'
            className='block border border-transparent hover:border-gray-400'>
            <Image src={image} alt={name} height={200} width={200} title={name}
              className='object-cover aspect-square h-auto w-auto' />
          </a>
        </div>
        <div className='w-1/2 p-2 sm:w-1/4'>
          <a href='#'
            className='block border border-transparent hover:border-gray-400'>
            <Image src={image} alt={name} height={200} width={200} title={name}
              className='object-cover aspect-square h-auto w-auto' />
          </a>
        </div>
        <div className='w-1/2 p-2 sm:w-1/4'>
          <a href='#'
            className='block border border-transparent hover:border-gray-400'>
            <Image src={image} alt={name} height={200} width={200} title={name}
              className='object-cover aspect-square h-auto w-auto' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProductSlider
