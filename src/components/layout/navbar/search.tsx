'use client'

import { SearchIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Search = () => {
  const [search, setSearch] = useState('')
  const router = useRouter()

  return (
    <div className='relative w-[170px] md:w-[250px]'>
      <label htmlFor='Search' className='sr-only'>
        Search
      </label>

      <input
        type='text'
        id='Search'
        placeholder='Que Buscas...'
        onChange={(e) => {
          setSearch(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            router.push(`/search/?q=${encodeURIComponent(search)}`)
          }
        }}
        className='w-full rounded-md border-gray-400 py-2.5 shadow-xs sm:text-sm bg-neutral-100 p-10'
      />

      <Link
        href={`/search/?q=${search}`}
        className='text-gray-900 hover:bg-gray-300 rounded-lg transition-colors ease-out duration-300 absolute inset-y-0 end-0 grid w-9 place-content-center m-1'
      >
        <span className='sr-only'>Search</span>
        <SearchIcon size={20} />
      </Link>
    </div>
  )
}

export default Search
