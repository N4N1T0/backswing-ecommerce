import { MailCheck, PackageCheck, ShieldCheck, Shirt } from 'lucide-react'
import React from 'react'

const Timeline = () => {
  return (
    <section className='py-10 bg-gray-100 lg:py-20' id='timeline'>
      <div className='max-w-xl mx-auto'>
        <div className='text-center '>
          <div className='flex flex-col items-center '>
            <h1 className='text-5xl font-bold leading-tight'> Nuestro <span className='text-gray-600'>
              Proceso
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
            En nuestras tiendas, nos enorgullece ofrecerte camisetas de alta calidad con los mejores diseños. Nuestro proceso comienza contigo, inspirando cada creación.
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
                            <div className='p-4 md:w-1/4 flex flex-col justify-center items-center text-center gap-3'>
                              <span
                                className='text-sm text-gray-700'>Duración del Proceso</span>
                              <p
                                className='text-4xl font-bold text-gray-700 text-bold'>
                                1 Dia</p>
                            </div>
                            <div
                              className='flex-1 p-4 pr-4 border-l border-gray-300'>
                              <p
                                className='mb-2 text-xl font-bold text-gray-600'>
                                Confirmación del Pedido</p>
                              <p className='text-gray-700'>
                                Una vez que recibimos su pedido de camiseta de pádel con el diseño seleccionado, enviamos una confirmación por correo electrónico con todos los detalles necesarios.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='absolute flex items-center justify-center w-10 h-10 p-2 transform -translate-x-1/2 -translate-y-4 bg-gray-900 rounded-full left-1/2 lg:translate-y-[4px]'>
                    <MailCheck color='#FFFFFF' />
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
                            <div className='p-4 md:w-1/4 flex flex-col justify-center items-center text-center gap-3'>
                              <span
                                className='text-sm text-gray-700'>Duración del Proceso</span>
                              <p
                                className='text-4xl font-bold text-gray-700 text-bold'>
                                3 Dias</p>
                            </div>
                            <div
                              className='flex-1 p-4 pr-4 border-l border-gray-300'>
                              <p
                                className='mb-2 text-xl font-bold text-gray-600'>
                                Producción y Personalización</p>
                              <p className='text-gray-700'>
                                Nuestro equipo comienza a trabajar en su pedido, imprimiendo y personalizando la camiseta según sus especificaciones.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='absolute flex items-center justify-center w-10 h-10 p-2 transform -translate-x-1/2 -translate-y-4 bg-gray-900 rounded-full left-1/2 lg:translate-y-[4px]'>
                    <Shirt color='#FFFFFF' />
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
                            <div className='p-4 md:w-1/4 flex flex-col justify-center items-center text-center gap-3'>
                              <span
                                className='text-sm text-gray-700'>Duración del Proceso</span>
                              <p
                                className='text-4xl font-bold text-gray-700 text-bold'>
                                3 Dias</p>
                            </div>
                            <div
                              className='flex-1 p-4 pr-4 border-l border-gray-300'>
                              <p
                                className='mb-2 text-xl font-bold text-gray-600'>
                                Control de Calidad</p>
                              <p className='text-gray-700'>
                                Cada camiseta pasa por rigurosos controles de calidad para garantizar que cumpla con nuestros estándares antes de ser enviada.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='absolute flex items-center justify-center w-10 h-10 p-2 transform -translate-x-1/2 -translate-y-4 bg-gray-900 rounded-full left-1/2 lg:translate-y-[4px]'>
                    <ShieldCheck color='#FFFFFF' />
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
                            <div className='p-4 md:w-1/4 flex flex-col justify-center items-center text-center gap-3'>
                              <span
                                className='text-sm text-gray-700'>Duración del Proceso</span>
                              <p
                                className='text-4xl font-bold text-gray-700 text-bold'>
                                5 Dias</p>
                            </div>
                            <div
                              className='flex-1 p-4 pr-4 border-l border-gray-300'>
                              <p
                                className='mb-2 text-xl font-bold text-gray-600'>
                                Empaque y Envío</p>
                              <p className='text-gray-700'>
                                Una vez aprobada, empacamos cuidadosamente su camiseta en un paquete seguro y coordinamos su envío con una empresa de confianza.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='absolute flex items-center justify-center w-10 h-10 p-2 transform -translate-x-1/2 -translate-y-4 bg-gray-900 rounded-full left-1/2 lg:translate-y-[4px]'>
                    <PackageCheck color='#FFFFFF' />
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
