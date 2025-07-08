// Assets Imports
import Peta from '@/assets/camilo-fierro-z7rcwqCi77s-unsplash.webp'
import Oeko from '@/assets/eye-for-ebony-OWi1sIWiCAI-unsplash.webp'
import OrganicBlend from '@/assets/trisha-downing-pyud8ZaVq4I-unsplash.webp'

// Items for the Navbar
export const navItems = [
  {
    label: 'Hombre',
    route: '/hombre/camisetas',
    commingSoon: false
  },
  {
    label: 'Mujer',
    route: '/mujer/camisetas',
    commingSoon: false
  },
  {
    label: 'Niños',
    route: '/ninos/camisetas',
    commingSoon: false
  },
  {
    label: 'Nuevo',
    route: '/nuevo/camisetas',
    commingSoon: false
  },
  {
    label: 'Ofertas',
    route: '/ofertas/camisetas',
    commingSoon: true
  },
  {
    label: 'Nosotros',
    route: '/nosotros',
    commingSoon: false
  },
  {
    label: 'Blog',
    route: '/blog',
    commingSoon: false
  }
]

// Items for the Footer
export const footerItems = [
  {
    label: 'Política de Privacidad',
    route: '/politica-de-privacidad'
  },
  {
    label: 'Devoluciones y Cambios',
    route: '/devoluciones-y-cambios'
  },
  {
    label: 'Envío y Entrega',
    route: '/envio-y-entrega'
  },
  {
    label: 'Términos y Condiciones',
    route: '/terminos-y-condiciones'
  }
]

// Tallas for the Product Page
export const tallasCamisetas = ['xs', 's', 'm', 'l', 'xl', '2xl']
export const tallasSudaderas = ['5-6', '7-8', '9-11', '12-14']
export const tallasSudaderasNiños = ['6', '8', '10', '12']

// Items for the PreFooter
export const medioAmbiente = [
  {
    label: 'OEKO-TEX 5',
    description:
      'STANDARD 100 by OEKO-TEX® garantiza al consumidor productos seguros. La etiqueta STANDARD 100 en un artículo textil significa que puede estar seguro de sustancias nocivas.',
    image: Oeko
  },
  {
    label: 'Organic Blended',
    description:
      'La Norma de Contenido Orgánico (OCS) es una etiqueta internacional y voluntaria que garantiza la identidad del contenido desde la granja hasta el producto terminado.',
    image: OrganicBlend
  },
  {
    label: 'PETA Aproved',
    description:
      'El logotipo de PETA-Approved Vegan destaca la ropa, los accesorios, ect, fabricados con alternativas veganas, que no contienen materiales de origen animal.',
    image: Peta
  }
]

// Items for the Sidebar in the Products Layout
export const sidebarAccordion = [
  {
    label: 'Hombre',
    commingSoon: false,
    products: [
      {
        label: 'Camisetas',
        route: '/hombre/camisetas'
      },
      {
        label: 'Sudaderas',
        route: '/hombre/sudaderas'
      }
    ]
  },
  {
    label: 'Mujer',
    commingSoon: false,
    products: [
      {
        label: 'Camisetas',
        route: '/mujer/camisetas'
      },
      {
        label: 'Sudaderas',
        route: '/mujer/sudaderas'
      }
    ]
  },
  {
    label: 'Ninos',
    commingSoon: false,
    products: [
      {
        label: 'Camisetas',
        route: '/ninos/camisetas'
      },
      {
        label: 'Sudaderas',
        route: '/ninos/sudaderas'
      }
    ]
  },
  {
    label: 'Nuevo',
    commingSoon: false,
    products: [
      {
        label: 'Camisetas',
        route: '/nuevo/camisetas'
      },
      {
        label: 'Sudaderas',
        route: '/nuevo/sudaderas'
      }
    ]
  },
  {
    label: 'Ofertas',
    commingSoon: true,
    products: [
      {
        label: 'Camisetas',
        route: '/ofertas/camisetas'
      },
      {
        label: 'Sudaderas',
        route: '/ofertas/sudaderas'
      }
    ]
  }
]

// colors
export const colorList = {
  'blanco': 'white',
  'negro': 'black',
  'gris': 'gray'
}
