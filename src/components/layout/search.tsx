'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const Search = () => {
  const [search, setSearch] = useState('')
  const router = useRouter()

  return (
    <div className='relative w-[170px] md:w-[220px]'>
      <label htmlFor='Search' className='sr-only'> Search </label>

      <input
        type='text'
        id='Search'
        placeholder='Que Buscas...'
        onChange={(e) => { setSearch(e.target.value) }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            router.push(`/search/?q=${encodeURIComponent(search)}`)
          }
        }}
        className='w-full rounded-md border-gray-400 py-2.5 shadow-sm sm:text-sm'
      />

      <Link href={`/search/?q=${search}`} className='text-gray-900 hover:bg-gray-300 rounded-lg transition-colors ease-out duration-300 absolute inset-y-0 end-0 grid w-9 place-content-center m-1'>
        <span className='sr-only'>Search</span>

        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='h-4 w-4'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
          />
        </svg>
      </Link>
    </div>
  )
}

export default Search
