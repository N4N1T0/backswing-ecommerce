import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { SearchIcon } from 'lucide-react'
import Search from './search'

const MobileSearch = () => {
  return (
    <Popover>
      <PopoverTrigger className='p-2 hover:bg-gray-300 rounded-lg transition-colors ease-out duration-300'>
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
