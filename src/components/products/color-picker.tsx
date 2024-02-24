import React from 'react'

const ColorPicker = () => {
  return (
    <div className='mt-1.5 flex gap-1'>
      <form>
        <fieldset>
          <legend className='sr-only'>Color</legend>
        </fieldset>

        <div className='flex flex-wrap justify-center gap-5'>
          <div>
            <input type='checkbox' id='ColorSg' className='sr-only' />

            <label
              htmlFor='ColorSg'
              className='block h-7 w-7 cursor-pointer rounded-full bg-[#595759] hover:border-[1px] hover:border-gray-700 '
            >
              <span className='sr-only'> Space Gray </span>
            </label>
          </div>

          <div>
            <input type='checkbox' id='ColorS' className='sr-only' />

            <label
              htmlFor='ColorS'
              className='block h-7 w-7 cursor-pointer rounded-full bg-[#d2d3d4] hover:border-[1px] hover:border-gray-700 '
            >
              <span className='sr-only'> Silver </span>
            </label>
          </div>

          <div>
            <input type='checkbox' id='ColorP' className='sr-only' />

            <label
              htmlFor='ColorP'
              className='block h-7 w-7 cursor-pointer rounded-full bg-[#d89f97] hover:border-[1px] hover:border-gray-700 '
            >
              <span className='sr-only'> Pink </span>
            </label>
          </div>

          <div>
            <input type='checkbox' id='ColorG' className='sr-only' />

            <label
              htmlFor='ColorG'
              className='block h-7 w-7 cursor-pointer rounded-full bg-[#afbfab] hover:border-[1px] hover:border-gray-700 '
            >
              <span className='sr-only'> Pink </span>
            </label>
          </div>

          <div>
            <input type='checkbox' id='ColorSb' className='sr-only' />

            <label
              htmlFor='ColorSb'
              className='block h-7 w-7 cursor-pointer rounded-full bg-[#91a5bb] hover:border-[1px] hover:border-gray-700 '
            >
              <span className='sr-only'> Pink </span>
            </label>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ColorPicker
