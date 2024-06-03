import Link from 'next/link'
import { useCapitalize, parseStaticProductContent } from '@/lib/utils'
import Image from 'next/image'
import {
	collectionMenStaticProducts,
	collectionWomenStaticProducts,
} from '@/contants/static-products'

const Collection = ({
	direction,
	collection,
}: {
	direction: 'right' | 'left'
	collection: 'hombre' | 'mujer' | 'niño'
}) => {
	const products =
		collection === 'hombre'
			? collectionMenStaticProducts
			: collectionWomenStaticProducts

	return (
		<section>
			<div className='mx-auto max-w-screen-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
				<header
					className={`w-full flex flex-col ${
						direction === 'right' ? 'items-end' : 'items-start'
					}`}
				>
					<h2 className='text-xl font-bold text-gray-900 sm:text-3xl'>
						{useCapitalize(collection)}
					</h2>

					{collection === 'hombre' ? (
						<p
							className={`${
								direction === 'right' ? 'text-right' : 'text-left'
							} mt-4 max-w-md text-gray-500`}
						>
							Descubre nuestra nueva coleccion de camisetas para Hombres
						</p>
					) : (
						<p
							className={`${
								direction === 'right' ? 'text-right' : 'text-left'
							} mt-4 max-w-md text-gray-500`}
						>
							Descubre nuestra nueva coleccion de camisetas para Mujeres
						</p>
					)}
				</header>

				<ul className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
					{products.map((product) => {
						const { category, gender, id, image, parsedName, parsedPrice } =
							parseStaticProductContent(product)

						return (
							<li key={product.id} className='relative'>
								<Link
									href={`/${gender?.toLocaleLowerCase()}/${category?.toLocaleLowerCase()}/${id}`}
									className='group block overflow-hidden'
								>
									<Image
										src={image.sourceUrl}
										alt={parsedName}
										title={parsedName}
										width={350}
										height={450}
										className='w-full h-auto object-center transition-transform ease-out duration-300 group-hover:scale-105 aspect-square'
									/>

									<div className='relative bg-white pt-3'>
										<h3 className='text-gray-700 group-hover:underline group-hover:underline-offset-4 uppercase font-medium'>
											{parsedName}
										</h3>

										<p className='mt-2'>
											<span className='sr-only'>Regular Price</span>

											<span className='tracking-wider text-gray-900'>
												{parsedPrice}
											</span>
										</p>
									</div>
								</Link>
							</li>
						)
					})}
				</ul>
			</div>
		</section>
	)
}

export default Collection
