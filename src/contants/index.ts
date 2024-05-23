import Peta from '@/assets/camilo-fierro-z7rcwqCi77s-unsplash.webp'
import OrganicBlend from '@/assets/trisha-downing-pyud8ZaVq4I-unsplash.webp'
import Oeko from '@/assets/eye-for-ebony-OWi1sIWiCAI-unsplash.webp'

export const navItems = [
	{
		label: 'Hombre',
		route: '/hombre/camisetas',
		commingSoon: false,
	},
	{
		label: 'Mujer',
		route: '/mujer/camisetas',
		commingSoon: false,
	},
	{
		label: 'Niños',
		route: '/ninos/camisetas',
		commingSoon: false,
	},
	{
		label: 'Nuevo',
		route: '/nuevo/camisetas',
		commingSoon: false,
	},
	{
		label: 'Ofertas',
		route: '/ofertas/camisetas',
		commingSoon: true,
	},
	{
		label: 'Nosotros',
		route: '/nosotros',
		commingSoon: false,
	},
	{
		label: 'Blog',
		route: '/blog',
		commingSoon: false,
	},
]

export const footerItems = [
	{
		label: 'Termino & Condiciones',
		route: '/terminos-condiciones',
	},
	{
		label: 'Politica de privacidad',
		route: '/politica-privacidad',
	},
	{
		label: 'Tabla de Tallas',
		route: '/tallas',
	},
]

export const tallas = ['xxs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl']

export const medioAmbiente = [
	{
		label: 'OEKO-TEX 5',
		description:
			'STANDARD 100 by OEKO-TEX® garantiza al consumidor productos seguros. La etiqueta STANDARD 100 en un artículo textil significa que puede estar seguro de sustancias nocivas.',
		image: Oeko,
	},
	{
		label: 'Organic Blended',
		description:
			'La Norma de Contenido Orgánico (OCS) es una etiqueta internacional y voluntaria que garantiza la identidad del contenido desde la granja hasta el producto terminado.',
		image: OrganicBlend,
	},
	{
		label: 'PETA Aproved',
		description:
			'El logotipo de PETA-Approved Vegan destaca la ropa, los accesorios, ect, fabricados con alternativas veganas, que no contienen materiales de origen animal.',
		image: Peta,
	},
]

export const sidebarAccordion = [
	{
		label: 'Hombre',
		commingSoon: false,
		products: [
			{
				label: 'Camisetas',
				route: '/hombre/camisetas',
			},
			{
				label: 'Sudaderas',
				route: '/hombre/sudaderas',
			},
		],
	},
	{
		label: 'Mujer',
		commingSoon: false,
		products: [
			{
				label: 'Camisetas',
				route: '/mujer/camisetas',
			},
			{
				label: 'Sudaderas',
				route: '/mujer/sudaderas',
			},
		],
	},
	{
		label: 'Ninos',
		commingSoon: false,
		products: [
			{
				label: 'Camisetas',
				route: '/ninos/camisetas',
			},
			{
				label: 'Sudaderas',
				route: '/ninos/sudaderas',
			},
		],
	},
	{
		label: 'Nuevo',
		commingSoon: false,
		products: [
			{
				label: 'Camisetas',
				route: '/nuevo/camisetas',
			},
			{
				label: 'Sudaderas',
				route: '/nuevo/sudaderas',
			},
		],
	},
	{
		label: 'Ofertas',
		commingSoon: true,
		products: [
			{
				label: 'Camisetas',
				route: '/ofertas/camisetas',
			},
			{
				label: 'Sudaderas',
				route: '/ofertas/sudaderas',
			},
		],
	},
]
