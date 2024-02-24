import {
  Sheet,
  SheetContent,
  SheetTrigger
} from '@/components/ui/sheet'
import SideNavbarFilter from './side-navbar-filter'

const NavbarFilterSheet = () => {
  return (
    <Sheet>
      <SheetTrigger className='w-full backdrop:text-center border-[1px] border-secondary text-secondary bg-white hover:bg-secondary hover:text-white transition-colors duration-200 py-3'>Filtros</SheetTrigger>
      <SheetContent side='left' className='bg-white'>
        <SideNavbarFilter />
      </SheetContent>
    </Sheet>

  )
}

export default NavbarFilterSheet
