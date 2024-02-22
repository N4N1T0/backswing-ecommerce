const SideNavbarProfile = () => {
  return (
    <div>
      <ul className='flex flex-col space-y-2'>
        <strong className='block text-xs font-medium uppercase text-gray-500'> Perfil de Usuario </strong>
        <ul className='mt-2 space-y-1'>
          <li>
            <a
              href='#'
              className='block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700'
            >
              Principal
            </a>
          </li>

          <li>
            <a
              href='#'
              className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
            >
              Ordenes
            </a>
          </li>

          <li>
            <a
              href='#'
              className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
            >
              Lista de Deseos
            </a>
          </li>
        </ul>
      </ul>
    </div>
  )
}

export default SideNavbarProfile
