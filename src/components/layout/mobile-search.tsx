// UI Imports
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'

// Assets Imports
import { SearchIcon } from 'lucide-react'

// Component Imports
import Search from '@/components/layout/search'

/**
 * Renders a mobile search component.
 *
 * @return {JSX.Element} The mobile search component.
 */
const MobileSearch = (): JSX.Element => {
	return (
		<Popover>
			<PopoverTrigger className='p-2 hover:bg-gray-300 rounded-lg transition-colors ease-out duration-300 block md:hidden'>
				<span className='sr-only'>Search Popup</span>
				<SearchIcon size={20} />
			</PopoverTrigger>
			<PopoverContent className='bg-white p-5 w-fit'>
				<Search />
			</PopoverContent>
		</Popover>
	)
}

export default MobileSearch
