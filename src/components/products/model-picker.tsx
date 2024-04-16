import Image from 'next/image'
import React from 'react'

const ModelPicker = ({ image, name, setModel }: { image: string, name: string, setModel: React.Dispatch<React.SetStateAction<string>> }) => {
  // TODO Add a special class for the current image to show it as selected
  return (
    <div>
      <h5 className='bg-gray-900 text-gray-100 px-3 py-1 text-xs uppercase w-fit'>
        4 Modelos
      </h5>
      <div className='flex-wrap flex mt-1'>
        <div className='w-1/2 p-2 sm:w-1/4'>
          <button
            onClick={() => { setModel(image) }}
            className='block border hover:border-gray-400'>
            <Image src={image} alt={name} height={200} width={200} title={name}
              className='object-cover aspect-square h-auto w-auto' />
          </button>
        </div>
        <div className='w-1/2 p-2 sm:w-1/4'>
          <button
            onClick={() => { setModel(image) }}
            className='block border border-transparent hover:border-gray-400'>
            <Image src={image} alt={name} height={200} width={200} title={name}
              className='object-cover aspect-square h-auto w-auto' />
          </button>
        </div>
        <div className='w-1/2 p-2 sm:w-1/4'>
          <button
            onClick={() => { setModel(image) }}
            className='block border border-transparent hover:border-gray-400'>
            <Image src={image} alt={name} height={200} width={200} title={name}
              className='object-cover aspect-square h-auto w-auto' />
          </button>
        </div>
        <div className='w-1/2 p-2 sm:w-1/4'>
          <button
            onClick={() => { setModel(image) }}
            className='block border border-transparent hover:border-gray-400'>
            <Image src={image} alt={name} height={200} width={200} title={name}
              className='object-cover aspect-square h-auto w-auto' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModelPicker
