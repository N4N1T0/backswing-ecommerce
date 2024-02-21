import React from 'react'

const Timeline = () => {
  return (
    <section className='py-10 bg-gray-100 lg:py-20' id='timeline'>
      <div className='max-w-xl mx-auto'>
        <div className='text-center '>
          <div className='flex flex-col items-center '>
            <h1 className='text-5xl font-bold leading-tight'> Company <span className='text-gray-600'>
              Timeline
            </span> </h1>
            <div className='flex w-24 mt-1 mb-6 overflow-hidden rounded'>
              <div className='flex-1 h-2 bg-gray-300'>
              </div>
              <div className='flex-1 h-2 bg-gray-500'>
              </div>
              <div className='flex-1 h-2 bg-gray-700'>
              </div>
            </div>
          </div>
          <p className='mb-16 text-base text-center text-gray-500'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus magni eius eaque?
            Pariatur
            numquam, odio quod nobis ipsum ex cupiditate?
          </p>
        </div>
      </div>
      <div className='flex flex-col justify-center '>
        <div className='w-full px-4 mx-auto lg:max-w-5xl '>
          <div className='relative'>
            <div
              className='absolute hidden w-1 h-full transform -translate-x-1/2 bg-gray-400 lg:block left-1/2'>
            </div>
            <div className='space-y-2 lg:space-y-4'>
              <div>
                <div className='flex flex-col items-center'>
                  <div className='flex items-center justify-start w-full mx-auto'>
                    <div className='w-full lg:w-1/2 lg:pr-8'>
                      <div
                        className='relative flex-1 mb-10 bg-white rounded shadow lg:mb-8'>
                        <div
                          className='absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-3 -right-4'>
                          <div
                            className='hidden h-10 origin-bottom-left transform -rotate-45 bg-white shadow lg:block'>
                          </div>
                        </div>
                        <div className='relative z-20 '>
                          <div className='flex flex-wrap items-center'>
                            <div className='p-4 md:w-1/4 '>
                              <span
                                className='text-lg text-gray-700'>January</span>
                              <p
                                className='text-2xl font-bold text-gray-700 text-bold'>
                                01</p>
                              <span
                                className='text-lg text-gray-700'>2015</span>
                            </div>
                            <div
                              className='flex-1 p-4 pr-4 border-l border-gray-300'>
                              <p
                                className='mb-2 text-xl font-bold text-gray-600'>
                                Company Started</p>
                              <p className='text-gray-700'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                veniam libero facilis minus reprehenderit.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-gray-900 rounded-full left-1/2 lg:translate-y-[4px]'>
                    <span className='text-gray-100'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'
                        fill='currentColor' className='w-3 h-3 bi bi-building' viewBox='0 0 16 16'>
                        <path fillRule='evenodd'
                          d='M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z'>
                        </path>
                        <path
                          d='M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z'>
                        </path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              {/* <!-- Right section --> */}
              <div>
                <div className='flex flex-col items-center'>
                  <div className='flex items-center justify-end w-full mx-auto'>
                    <div className='w-full lg:w-1/2 lg:pl-8'>
                      <div
                        className='relative flex-1 mb-10 bg-white rounded shadow lg:mb-8'>
                        <div
                          className='absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4'>
                          <div
                            className='hidden h-10 origin-top-right transform -rotate-45 bg-white lg:block drop-shadow-lg'>
                          </div>
                        </div>
                        <div className='relative z-20 '>
                          <div className='flex flex-wrap items-center'>
                            <div className='p-4 md:w-1/4 '>
                              <span
                                className='text-lg text-gray-700'>February</span>
                              <p
                                className='text-2xl font-bold text-gray-700 text-bold'>
                                02</p>
                              <span
                                className='text-lg text-gray-700'>2020</span>
                            </div>
                            <div
                              className='flex-1 p-4 pr-4 border-l border-gray-300'>
                              <p
                                className='mb-2 text-xl font-bold text-gray-600'>
                                Website Launched</p>
                              <p className='text-gray-700'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                veniam libero facilis minus reprehenderit.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-gray-900 rounded-full left-1/2 lg:translate-y-[3px]'>
                    <span className='text-gray-100'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'
                        fill='currentColor' className='w-4 h-4 bi bi-globe' viewBox='0 0 16 16'>
                        <path
                          d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z'>
                        </path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              {/* <!-- Left section --> */}
              <div>
                <div className='flex flex-col items-center'>
                  <div className='flex items-center justify-start w-full mx-auto'>
                    <div className='w-full lg:w-1/2 lg:pr-8'>
                      <div
                        className='relative flex-1 mb-10 bg-white rounded shadow lg:mb-8'>
                        <div
                          className='absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-3 -right-4'>
                          <div
                            className='hidden h-10 origin-bottom-left transform -rotate-45 bg-white shadow lg:block'>
                          </div>
                        </div>
                        <div className='relative z-20 '>
                          <div className='flex flex-wrap items-center'>
                            <div className='p-4 md:w-1/4 '>
                              <span
                                className='text-lg text-gray-700'>March</span>
                              <p
                                className='text-2xl font-bold text-gray-700 text-bold'>
                                11</p>
                              <span
                                className='text-lg text-gray-700'>2021</span>
                            </div>
                            <div
                              className='flex-1 p-4 pr-4 border-l border-gray-300'>
                              <p
                                className='mb-2 text-xl font-bold text-gray-600'>
                                Made 100+ Themes</p>
                              <p className='text-gray-700'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                veniam libero facilis minus reprehenderit.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-gray-900 rounded-full left-1/2 lg:translate-y-[2px]'>
                    <span className='text-gray-100'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'
                        fill='currentColor' className='w-4 h-4 bi bi-code-slash' viewBox='0 0 16 16'>
                        <path
                          d='M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z'>
                        </path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              {/* <!-- Right section --> */}
              <div>
                <div className='flex flex-col items-center'>
                  <div className='flex items-center justify-end w-full mx-auto'>
                    <div className='w-full lg:w-1/2 lg:pl-8'>
                      <div
                        className='relative flex-1 mb-10 bg-white rounded shadow lg:mb-8'>
                        <div
                          className='absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4'>
                          <div
                            className='hidden h-10 origin-top-right transform -rotate-45 bg-white lg:block drop-shadow-lg'>
                          </div>
                        </div>
                        <div className='relative z-20 '>
                          <div className='flex flex-wrap items-center'>
                            <div className='p-4 md:w-1/4 '>
                              <span
                                className='text-lg text-gray-700'>April</span>
                              <p
                                className='text-2xl font-bold text-gray-700 text-bold'>
                                21</p>
                              <span
                                className='text-lg text-gray-700'>2022</span>
                            </div>
                            <div
                              className='flex-1 p-4 pr-4 border-l border-gray-300'>
                              <p
                                className='mb-2 text-xl font-bold text-gray-600'>
                                Launch Project</p>
                              <p className='text-gray-700'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                veniam libero facilis minus reprehenderit.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-gray-900 rounded-full left-1/2 lg:translate-y-[1px]'>
                    <span className='text-gray-100'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'
                        fill='currentColor' className='w-4 h-4 bi bi-clock' viewBox='0 0 16 16'>
                        <path
                          d='M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z'>
                        </path>
                        <path
                          d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z'>
                        </path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
