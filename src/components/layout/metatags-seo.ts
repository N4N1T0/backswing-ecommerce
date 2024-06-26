// Next.js Imports
import type { Metadata } from 'next'

export const BackswingMetatags: Metadata = {
	title: {
		template: '%s  |  Backswing - Camisetas de Padel',
		default: 'Backswing - Camisetas de Padel',
	},
	description: 'Diseños exclusivos de camisetas para los amantes del Padel',
	authors: [
		{ name: 'Adrian Alvarez', url: 'https://www.adrian-alvarez.dev/es/' },
	],
	generator: 'Next.js',
	applicationName: 'Next.js',
	referrer: 'origin-when-cross-origin',
	keywords: [
		'camisetas Marbella',
		'diseños de camisetas',
		'tienda online',
		'ropa Marbella',
		'moda española',
		'estampados exclusivos',
		'diseños únicos',
		'camisetas personalizadas',
		'estilo marbellí',
		'tendencias de moda',
		'comprar camisetas',
		'ropa de calidad',
		'diseñadores locales',
		'arte en camisetas',
		'estampados originales',
		'moda urbana',
		'camisetas con estilo',
		'ropa de playa',
		'tendencias de diseño',
		'ropa de marca en Marbella',
	],
	creator: 'Adrian Alvarez',
	publisher: 'Doctec World',
	category: 'Ecommerce - Diseños de camisetas para Padel',
	formatDetection: {
		email: true,
		address: true,
		telephone: true,
		date: true,
		url: true,
	},
	openGraph: {
		title: 'Backswing - Camisetas de Padel',
		description: 'Diseños exclusivos de camisetas para los amantes del Padel',
		url: process.env.SITE_URL,
		siteName: 'Doctec World',
		locale: 'es_ES',
		type: 'website',
		countryName: 'España',
		// emails: 'info@doctortecnologico.com',
		// phoneNumbers: '34634113014',
		// images: ['https://opengraph.b-cdn.net/production/documents/2d5cf489-15fa-4149-afd0-bbd4f40f6fa6.jpg?token=kk6G_2Ww0GHyibsYWNm4VCBfz7JGFTKiepyDQ88g5dM&height=631&width=1200&expires=33243731096']
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Backswing - Camisetas de Padel',
		description: 'Diseños exclusivos de camisetas para los amantes del Padel',
		creator: 'Adrian Alvarez',
		site: process.env.SITE_URL,
		// images: ['https://opengraph.b-cdn.net/production/documents/2d5cf489-15fa-4149-afd0-bbd4f40f6fa6.jpg?token=kk6G_2Ww0GHyibsYWNm4VCBfz7JGFTKiepyDQ88g5dM&height=631&width=1200&expires=33243731096']
	},
}
