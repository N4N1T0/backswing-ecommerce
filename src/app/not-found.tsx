import React from 'react'

const NotFound = () => {
  return (
    <div className='flex h-screen flex-col bg-white'>
      <img
        src='https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80'
        alt=''
        className='h-[50%] w-full object-cover'
      />

      <div className='flex flex-1 items-center justify-center'>
        <div className='mx-auto max-w-xl px-4 py-8 text-center'>
          <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Lo Sentimos! No pudimos encontrar la página que buscas!
          </h1>

          <p className='mt-4 text-gray-500'>
            Puedes Intentar mas tarde o empezar desde la pagina pricipal
          </p>

          <a
            href='#'
            className='mt-6 inline-block rounded bg-primary px-5 py-3 text-sm font-medium text-white hover:bg-secondary transition-colors duration-200 focus:outline-none focus:ring'
          >
            Pagina Principal
          </a>
        </div>
      </div>
    </div>
  )
}

export default NotFound
