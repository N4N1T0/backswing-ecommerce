import ContactForm from '@/components/nosotros/contact-form'
import { contactsAssets } from '@/contants/assets-const'
import { Contact2, Home, Mail, Phone } from 'lucide-react'

const Contacto = () => {
  return (
    <section className='flex items-center' id='contact'>
      <div className='justify-center flex-1 max-w-8xl px-4 py-4 mx-auto lg:py-11 md:px-6'>
        <div className='mb-10 text-left'>
          <h2 className='pb-1 mb-1 text-xl font-bold text-gray-800 md:text-3xl'>
            Contáctenos
          </h2>
          <p className='text-sm'>
            ¿Quieres colaborar con nosotros o necesitas ayuda con tu compra?
          </p>
        </div>
        <div className='flex flex-wrap '>
          <div className='w-full px-4 lg:w-1/2 mb-11 lg:mb-0 flex flex-wrap'>
            {contactsAssets.map((item) => {
              const findIcon = (iconName: string) => {
                switch (iconName) {
                  case 'Email':
                    return <Mail color='#FFFFFF' />
                  case 'Teléfono':
                    return <Phone color='#FFFFFF' />
                  case 'Ubicación':
                    return <Home color='#FFFFFF' />
                  case 'Social':
                    return <Contact2 color='#FFFFFF' />
                }
              }

              if (item.href)
                return (
                  <div className='w-full px-4 mb-10 sm:w-1/2' key={item.label}>
                    <div className='max-w-xs mx-auto'>
                      <div className='inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-gray-900 rounded-full'>
                        {findIcon(item.label)}
                      </div>
                      <h2 className='mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl'>
                        {item.label}
                      </h2>
                      <a
                        href={item.href}
                        className='text-base font-medium text-gray-500 md:text-lg'
                      >
                        <span className='sr-only'>{item.label}</span>
                        {item.content}
                      </a>
                    </div>
                  </div>
                )
              return (
                <div className='w-full px-4 sm:w-1/2' key={item.label}>
                  <div className='max-w-xs mx-auto'>
                    <div className='inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-gray-900 rounded-full'>
                      <Contact2 color='#FFFFFF' />
                    </div>
                    <h2 className='mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl'>
                      Social
                    </h2>
                    {typeof item.content !== 'string'
                      ? item.content.map((socialItem) => (
                          <a
                            key={socialItem.label}
                            href={socialItem.href}
                            className='inline-block mr-8 text-blue-600 hover:text-blue-700'
                          >
                            <span className='sr-only'>{socialItem.label}</span>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: socialItem.svg
                              }}
                            />
                          </a>
                        ))
                      : null}
                  </div>
                </div>
              )
            })}
          </div>

          <div className='w-full lg:w-1/2'>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto
