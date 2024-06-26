'use client'

// Next.js Imports
import Link from 'next/link'
import { useRouter } from 'next/navigation'

// React Imports
import { useState } from 'react'

// Assets Imports
import { SearchIcon } from 'lucide-react'

/**
 * Renders a search component with an input field and a search button.
 *
 * @return {JSX.Element} The search component.
 */
const Search = (): JSX.Element => {
	// State for the search input
	const [search, setSearch] = useState('')
	// Router for navigation
	const router = useRouter()

	return (
		<div className='relative w-[170px] md:w-[250px]'>
			{/* Label for accessibility */}
			<label htmlFor='Search' className='sr-only'>
				{' '}
				Search{' '}
			</label>

			{/* Search input */}
			<input
				type='text'
				id='Search'
				placeholder='Que Buscas...'
				onChange={(e) => {
					setSearch(e.target.value)
				}}
				// Navigate to search page on Enter key press
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						router.push(`/search/?q=${encodeURIComponent(search)}`)
					}
				}}
				className='w-full rounded-md border-gray-400 py-2.5 shadow-sm sm:text-sm bg-neutral-100 p-10'
			/>

			{/* Search button */}
			<Link
				href={`/search/?q=${search}`}
				className='text-gray-900 hover:bg-gray-300 rounded-lg transition-colors ease-out duration-300 absolute inset-y-0 end-0 grid w-9 place-content-center m-1'
			>
				{/* Label for accessibility */}
				<span className='sr-only'>Search</span>
				{/* Search icon */}
				<SearchIcon size={20} />
			</Link>
		</div>
	)
}

export default Search
