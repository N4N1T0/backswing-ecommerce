import CountDown from '@/components/checkout/countdown'
import { getProductsByFeatured } from '@/lib/queries'
import { parseProductContent } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const LastChance = async () => {
	const products = await getProductsByFeatured()

	return (
		<div className='p-6 border bg-red-50 border-gray-300 md:p-8'>
			<div className='flex items-center justify-between mb-4 '>
				<h2 className='text-3xl font-bold text-gray-700'>Ultimas unidades</h2>
				<CountDown />
			</div>
			<div className='grid grid-cols-2 gap-3'>
				{products?.slice(0, 4).map((product) => {
					const { id, parsedName, parsedPrice, image, category, gender } =
						parseProductContent(product)

					return (
						<div key={id} className='col-span-1 flex gap-3'>
							<Image
								src={image.sourceUrl} // Make sure this is a URL string
								alt={parsedName}
								width={100}
								height={100}
								className='aspect-square'
							/>
							<div className='flex flex-col justify-between items-start'>
								<p className='text-gray-700'>{parsedName}</p>
								<p className='text-lg font-bold text-gray-950 mr-2'>
									{parsedPrice}
								</p>
								<Link
									href={`/${gender?.toLowerCase()}/${category?.toLowerCase()}/${id}`}
									target='_blank' // Remove this if you don't want to open in a new tab
									className='w-fit flex items-center justify-center px-4 py-2 bg-gray-950 text-white hover:bg-gray-700 transition-colors duration-200'
								>
									Agregar
								</Link>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default LastChance
