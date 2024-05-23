import type { StaticImageData } from 'next/image'

export interface WPPost {
	title: string
	content: string
	excerpt: string
	id: string
	date: string
	slug: string
	featuredImage: {
		node: {
			mediaItemUrl: string
			altText: string
		}
	}
}

export interface WPProduct {
	id: string
	image: {
		sourceUrl: string
	}
	name: string
	price: string
	date: string
	onSale: boolean
	content: string
	variations: Variations
	productCategories: Categories
	attributes: Attributes
	upsell: Related
}

export interface StaticWPProducts
	extends Omit<WPProduct, 'upsell' | 'content' | 'variations' | 'attributes'> {}

export interface CartItem {
	id: string
	talla: string
	model: Variations['nodes'][0]
	parsedPrice: string
	parsedName: string
	quantity: number
	description: string
}

export interface Variations {
	nodes: Array<{
		image: {
			sourceUrl: string
		}
		name: string
	}>
}

export interface Categories {
	nodes: Array<{
		name: string
	}>
}

export interface Attributes {
	nodes: Array<{
		options: string[]
	}>
}

export interface Related {
	nodes: Array<{
		name: string
		id: string
		variations: Variations
	}>
}

export interface User {
	nodes: Costumer[]
}

export interface Costumer {
	email: string
	id: string
	username: string
}

export interface ParsedConstent {
	description: string
	material: string
	parsedName: string
	variations: Variations
	isNew: boolean
	parsedPrice: string
	category: string | undefined
	gender: string | undefined
	colors: string[]
	image: {
		sourceUrl: string
	}
	id: string
	onSale: boolean
	related: Related | null
}

export interface ParsedStaticProduct
	extends Omit<
		ParsedConstent,
		'description' | 'material' | 'variations' | 'colors' | 'related'
	> {}

export interface PersonalizationProducts {
	value: string
	image: StaticImageData
	colors: string[] | null
}

export interface OramaHit {
	id: string
	score: number
	document: WPProduct
}
