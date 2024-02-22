import {
  Sheet,
  SheetContent,
  SheetTrigger
} from '@/components/ui/sheet'
import SideNavbarProfile from './side-navbar-profile'

const NavbarProfileSheet = () => {
  return (
    <Sheet>
      <SheetTrigger className='w-full backdrop:text-center border-[1px] border-secondary text-secondary bg-white hover:bg-secondary hover:text-white transition-colors duration-200 py-3'>Navegacion</SheetTrigger>
      <SheetContent side='left'>
        <SideNavbarProfile />
      </SheetContent>
    </Sheet>
  )
}

export default NavbarProfileSheet
