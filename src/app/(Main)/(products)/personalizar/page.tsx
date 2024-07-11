// Components Imports
import PersonalizationCard from '@/components/personalization/personalization-card'
import SubmitButton from '@/components/personalization/submit-button'

// Types Imports
import type { Metadata } from 'next'

// Data Imports
import { personalizationProducts } from '@/contants/static-products'

// Server Actions Imports
import { getPersonalizationProduct } from '@/actions/fecth'

/**
 * Asynchronously generates metadata for the page.
 *
 * @return {Promise<Metadata>} The metadata object with title and description.
 */
export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Personalizar',
		description: 'Diseños para los amantes del Padel',
	}
}

/**
 * Renders the personalization page, which allows users to choose a product type and design.
 *
 * @return {JSX.Element} The personalization page with product types and designs to choose from.
 */
const PersonalizationPage = (): JSX.Element => {
	return (
		<section id='personalizar'>
			{/* Page Title */}
			<h1 className='text-4xl font-bold my-3'>Personaliza tu Producto</h1>
			{/* Personalization Form */}
			<form
				action={getPersonalizationProduct}
				className='w-full h-full space-y-10'
			>
				{/* Product Types */}
				<fieldset className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 md:gap-y-10'>
					<legend className='mb-3 text-2xl border-b border-gray-400'>
						Escoge un Modelo
					</legend>
					{personalizationProducts.categories.map((product) => (
						<PersonalizationCard key={product.value} product={product} />
					))}
				</fieldset>
				<hr />
				{/* Designs */}
				<fieldset className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 md:gap-y-10'>
					<legend className='mb-3 text-2xl border-b border-gray-400'>
						Escoge un Diseño
					</legend>
					{personalizationProducts.diseños.map((product) => (
						<PersonalizationCard
							key={product.value}
							product={product}
							isDesign
						/>
					))}
				</fieldset>
				<hr />
				<div className='flex justify-between items-center flex-col md:flex-row text-center gap-y-5'>
					{/* Explanation */}
					<p>
						Once you've chosen the <span className='font-bold'>type</span> and
						the <span className='font-bold'>design</span>, you will be
						redirected to the product page.
					</p>
					{/* Submit Button */}
					<SubmitButton />
				</div>
			</form>
		</section>
	)
}

export default PersonalizationPage
