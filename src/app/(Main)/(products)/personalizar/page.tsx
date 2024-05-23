import PersonalizationCard from '@/components/personalization/personalization-card'
import SubmitButton from '@/components/personalization/submit-button'
import { personalizationProducts } from '@/contants/static-products'
import { getPersonalizationProduct } from '@/actions/fecth'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Personalizar',
		description: 'Diseños para los amantes del Padel',
	}
}

const PersonalizationPage = () => {
	return (
		<section id='personalizar'>
			<h1 className='text-3xl font-bold my-3'>Personaliza tu Producto</h1>
			<form
				action={getPersonalizationProduct}
				className='w-full h-full space-y-10'
			>
				{/* Products Types */}
				<fieldset className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 md:gap-y-10'>
					<legend className='mb-3 text-lg'>Escoje uno de nuestros tipos</legend>
					{personalizationProducts.categories.map((product) => (
						<PersonalizationCard key={product.value} product={product} />
					))}
				</fieldset>
				<hr />
				{/* Designs */}
				<fieldset className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 md:gap-y-10'>
					<legend className='mb-3 text-lg'>
						Escoje uno de nuestros dieños
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
				<div className='flex justify-between items-center'>
					<p>
						una vez que hayas escogido el{' '}
						<span className='font-bold'>tipo</span> y el{' '}
						<span className='font-bold'>diseño</span> se te autoredirecionara a
						la pagina de <span className='font-bold'>producto</span>
					</p>
					<SubmitButton />
				</div>
			</form>
		</section>
	)
}

export default PersonalizationPage
