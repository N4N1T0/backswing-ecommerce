import NavbarProfileSheet from '@/components/profile/navbar-profile-sheet'
import SideNavbarProfile from '@/components/profile/side-navbar-profile'
import Breadcrumbs from '@/components/shared/breadcrumbs'
import React from 'react'

const ProfileLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <main className='max-w-screen-3xl mx-auto p-3 md:p-10 grid grid-cols-5 gap-4 relative'>
      <aside className='col-span-1 space-y-10 hidden md:block top-4 h-full md:sticky'>
        <Breadcrumbs />
        <SideNavbarProfile />
      </aside>
      <article className='col-span-5 md:col-span-4 space-y-5'>
        <div className='block w-full md:hidden space-y-4'>
          <Breadcrumbs />
          <NavbarProfileSheet />
        </div>
        {children}
      </article>
    </main>
  )
}

export default ProfileLayout
