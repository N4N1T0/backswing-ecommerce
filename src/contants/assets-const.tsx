// Next.js Imports
import Image from 'next/image'

// Social Media for the Footer
export const socialMedia = [
  {
    label: 'Facebook',
    href: '#/',
    svg: `
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='w-6 h-6 bi bi-facebook'
          viewBox='0 0 16 16'
        >
          <title>Facebook</title>
          <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z'/>
        </svg>
      `
  },
  {
    label: 'Twitter',
    href: '#/',
    svg: `
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='w-6 h-6 bi bi-twitter'
          viewBox='0 0 16 16'
        >
          <title>Twitter</title>
          <path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z'/>
        </svg>
      `
  },
  {
    label: 'LinkedIn',
    href: '#/',
    svg: `
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='w-6 h-6 bi bi-linkedin'
          viewBox='0 0 16 16'
        >
          <title>LinkedIn</title>
          <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z'/>
        </svg>
      `
  }
]

// Contacts for the Nosotros Page
export const contactsAssets = [
  {
    label: 'Email',
    href: 'mailto:info@backswingpadel.com',
    content: 'info@backswingpadel.com'
  },
  {
    label: 'Teléfono',
    href: 'tel:+34632949476',
    content: '+34632949476'
  },
  {
    label: 'Ubicación',
    href: '#',
    content: 'Marbella - España.'
  },
  {
    label: 'Redes Sociales',
    content: socialMedia
  }
]

// Accordion for the Product Page
export const accordionProductsItems = [
  {
    id: 'descripcion',
    title: 'descripcion',
    content:
      'a 1a camiseta del mercado 100% pretratada para facilitar la impresión digital Algodón semipeinado para una excelente relación calidad/precio Ningún residuo de pretratamiento visible'
  },
  {
    id: 'composition',
    title: 'Composicion',
    content:
      '100% algodón (85% algodón - 15% algodón biológico) - Enteramente pretratada para una impresión digital completa'
  },
  {
    id: 'estilo',
    title: 'Estilo',
    content: (
      <ul className='list-none'>
        <li>Tubular</li>
        <li>Cuello redondo acanalado con tapacosturas en el interior</li>
        <li>Corte moderno</li>
      </ul>
    )
  },
  {
    id: 'cuidado',
    title: 'Cuidado',
    content: (
      <ul className='flex items-center gap-5'>
        <li>
          <Image
            src='https://s7g3.scene7.com/is/image/soloinvest/WASH_AT_40?fmt=png-alpha&amp;hei=44'
            alt='Agua caliente 40º'
            title='Agua caliente 40º'
            width={50}
            height={50}
          />
        </li>
        <li>
          <Image
            src='https://s7g3.scene7.com/is/image/soloinvest/DO_NOT_BLEACH?fmt=png-alpha&amp;hei=44'
            alt='No usar lejia'
            title='No usar lejia'
            width={50}
            height={50}
          />
        </li>
        <li>
          <Image
            src='https://s7g3.scene7.com/is/image/soloinvest/DO_NOT_TUMBLE_DRY?fmt=png-alpha&amp;hei=44'
            alt='No volcar'
            title='No volcar'
            width={50}
            height={50}
          />
        </li>
        <li>
          <Image
            src='https://s7g3.scene7.com/is/image/soloinvest/IRON_LOW?fmt=png-alpha&amp;hei=44'
            alt='No usar plancha baja'
            title='No usar plancha baja'
            width={50}
            height={50}
          />
        </li>
        <li>
          <Image
            src='https://s7g3.scene7.com/is/image/soloinvest/DO_NOT_DRYCLEAN?fmt=png-alpha&amp;hei=44'
            alt='No lavar en seco'
            title='No usar en seco'
            width={50}
            height={50}
          />
        </li>
      </ul>
    )
  }
]

// Timeline for the Nosotros Page
export const timeline = [
  {
    title: 'Recibimos tu Pedido',
    time: '1 dia',
    description:
      'Tu orden se confirma automáticamente y pasa directamente a nuestro sistema',
    image:
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-check"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="m16 19 2 2 4-4"/></svg>'
  },
  {
    title: 'Diseñamos tu Producto',
    time: '2 días',
    description:
      'Nuestro equipo de diseño digital crea el boceto personalizado con base en tus preferencias',
    image:
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shirt"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>'
  },
  {
    title: 'Producimos y Empaquetamos',
    time: '1 dia',
    description:
      'Fabricamos tu producto con materiales de alta gama y lo preparamos para el envío',
    image:
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package-check"><path d="m16 16 2 2 4-4"/><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"/><path d="m7.5 4.27 9 5.15"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" x2="12" y1="22" y2="12"/></svg>'
  },
  {
    title: 'Enviamos con Seguridad',
    time: '1-2 días',
    description:
      'Trabajamos con empresas logísticas líderes que aseguran entregas rápidas y confiables',
    image:
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>'
  }
]

// About Stats for the Nosotros Page
export const aboutStats = [
  {
    title: '2097',
    subTitle: 'Projects and Plans',
    svg: `<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' className='w-10 h-10' fill='currentColor' viewBox='0 0 16 16'>
            <title>Projects and Plans</title>
            <path d='M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z' />
            <path d='M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z' />
          </svg>`
  },
  {
    title: '3,590',
    subTitle: 'Helped people',
    svg: `<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' className='w-10 h-10' fill='currentColor' viewBox='0 0 16 16'>
            <title>Helped people</title>
            <path d='M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
            <path fillRule='evenodd' d='M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z' />
            <path d='M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z' />
          </svg>`
  },
  {
    title: '74',
    subTitle: 'Volunteer',
    svg: `<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' className='w-10 h-10' fill='currentColor' viewBox='0 0 16 16'>
            <title>Volunteer</title>
            <path d='M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
          </svg>`
  },
  {
    title: '100',
    subTitle: 'Timing',
    svg: `<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' className='w-10 h-10' fill='currentColor' viewBox='0 0 16 16'>
            <title>Timing</title>
            <path d='M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z' />
          </svg>`
  }
]
