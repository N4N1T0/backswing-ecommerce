'use client'

const Quantity = () => {
  return (
    <div className='w-full my-8 flex justify-between items-center h-10'>
      <div>
        <label htmlFor='Quantity' className='sr-only'> Quantity </label>

        <div className='flex items-center gap-1'>
          <button type='button' className='size-10 leading-10 text-secondary transition hover:opacity-75 text-3xl'>
            -
          </button>

          <input
            type='number'
            id='Quantity'
            value='1'
            onChange={() => { }}
            className='h-10 w-16 rounded border-secondary/50 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none'
          />

          <button type='button' className='size-10 leading-10 text-secondary transition hover:opacity-75 text-3xl'>
            +
          </button>
        </div>
      </div>
      <button
        className='w-fit flex items-center justify-center px-4 py-2 bg-gray-950 text-white hover:bg-gray-700 transition-colors duration-200'>
        Add to Cart
      </button>
    </div>
  )
}

export default Quantity
