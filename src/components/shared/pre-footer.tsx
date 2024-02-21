import React from 'react'

const PreFooter = () => {
  return (
    <section>
      <div className='mx-auto max-w-screen-3xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          <div className='bg-gray-950 p-8 md:p-12 lg:px-16 lg:py-24'>
            <div className='mx-auto max-w-xl text-center'>
              <h2 className='text-xl font-bold text-white md:text-3xl'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
              </h2>

              <p className='hidden text-white/90 sm:mt-4 sm:block'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
                sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet
                volutpat quisque ut interdum tincidunt duis.
              </p>

              <div className='mt-4 md:mt-8'>
                <a
                  href='#'
                  className='mt-8 inline-block bg-gray-200 px-12 py-3 text-sm font-medium text-gray-950 transition-colors duration-200 hover:bg-gray-400'
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
          <img
            alt=''
            src='https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80'
            className='h-40 w-full object-cover sm:h-56 md:h-full'
          />

          <img
            alt=''
            src='https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
            className='h-40 w-full object-cover sm:h-56 md:h-full'
          />
          <img
            alt=''
            src='https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80'
            className='h-40 w-full object-cover sm:h-56 md:h-full'
          />
        </div>
      </div>
    </section>
  )
}

export default PreFooter
