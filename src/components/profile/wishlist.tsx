'use client'

// Next.js Imports
import Image from 'next/image'

// UI Imports
import {
	AccordionContent,
	Accordion,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

// Components Imports
import WishlistHeart from '@/components/products/wishlist-heart'

// Stores Imports
import useWishlist from '@/stores/wishlist-store'

/**
 * Renders the Wishlist section with a list of desired products.
 *
 * @return {JSX.Element} The rendered Wishlist section
 */
const Wishlist = (): JSX.Element => {
	// Get the count of products in the wishlist
	const [count] = useWishlist()

	return (
		<section id='wishlist' className='space-y-5 md:space-y-10'>
			<h2 className='text-4xl font-semibold leading-9 text-gray-800 my-5 md:text-left text-center'>
				Lista de Deseos
			</h2>
			{/* Render the list of products in the wishlist */}
			<ul className='flex flex-col md:flex-row justify-start items-center gap-5 flex-wrap'>
				{
					// If there are no products in the wishlist, show a message
					count.length === 0 ? (
						<div className='space-y-3'>
							<p className='text-center uppercase'>
								No hay productos en tu lista de deseos
							</p>
						</div>
					) : (
						// If there are products in the wishlist, render them
						count.map((item) => (
							<li key={item.id}>
								{/* Render a product in the wishlist */}
								<div className='w-52'>
									<div className='relative w-full h-52'>
										{/* Render the product image */}
										<Image
											src={item.image.sourceUrl}
											alt={item.name}
											title={item.name}
											fill
											className='z-0 w-auto h-auto object-cover aspect-square'
										/>
										{/* Render the wishlist heart */}
										<WishlistHeart product={item} />
									</div>
									{/* Render the details accordion */}
									<Accordion
										type='single'
										collapsible
										className='w-full space-y-3'
									>
										<AccordionItem value='item-1'>
											<AccordionTrigger>Detalles</AccordionTrigger>
											<AccordionContent className='w-full'>
												<ul className='w-full space-y-2 text-left'>
													<li>{item.name}</li>
												</ul>
											</AccordionContent>
										</AccordionItem>
									</Accordion>
								</div>
							</li>
						))
					)
				}
			</ul>
		</section>
	)
}

export default Wishlist
