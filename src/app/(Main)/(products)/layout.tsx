import Breadcrumbs from '@/components/shared/breadcrumbs'
import NavbarFilterSheet from '@/components/shared/navbar-filter-sheet'
import SideNavbarFilter from '@/components/shared/side-navbar-filter'

export default function ProductsLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className='max-w-screen-2xl mx-auto p-3 md:px-10 grid grid-cols-5 gap-4 relative md:pt-20 pt-10 mt-20'>
      <aside className='col-span-1 space-y-10 hidden md:block top-4 h-fit md:sticky'>
        <Breadcrumbs />
        <SideNavbarFilter />
      </aside>
      <article className='col-span-5 md:col-span-4 space-y-5'>
        <div className='block w-full md:hidden space-y-4'>
          <Breadcrumbs />
          <NavbarFilterSheet />
        </div>
        {children}
      </article>
    </main>
  )
}
