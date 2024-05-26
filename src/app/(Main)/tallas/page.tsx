import type { Metadata } from 'next'

export const dynamic = 'force-static'
export const metadata: Metadata = {
	title: 'Tabla de Tallas',
}

const TallasPage = () => {
	return (
		<main className='max-w-screen-3xl mx-auto p-10 space-y-5'>
			<h1 className='text-3xl text-center uppercase'>Tabla de Tallas</h1>

			<div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
				{/* Hombre */}
				<table className='text-center [&>caption]:my-5'>
					<caption className='font-medium text-xl'>
						HOMBRE - 10 TALLAS DISPONIBLES
					</caption>
					<tr className='bg-gray-950 text-white [&>th]:p-4 divide-x-2'>
						<th>TALLAS</th>
						<th>XXS*</th>
						<th>XS</th>
						<th>S</th>
						<th>M</th>
						<th>L</th>
						<th>XL</th>
						<th>XXL</th>
						<th>3XL*</th>
						<th>4XL*</th>
						<th>5XL*</th>
					</tr>
					<tr className='bg-gray-200 text-gray-900 [&>td]:p-4 divide-x divide-black'>
						<td className='font-bold'>A/B</td>
						<td>60/46</td>
						<td>64/48</td>
						<td>70/50</td>
						<td>72/53</td>
						<td>74/56</td>
						<td>76/59</td>
						<td>78/62</td>
						<td>80/65</td>
						<td>82/68</td>
						<td>84/71</td>
					</tr>
				</table>

				{/* Mujer */}
				<table className='text-center [&>caption]:my-5'>
					<caption className='font-medium text-xl'>
						MUJER - 6 TALLAS DISPONIBLES
					</caption>
					<tr className='bg-gray-950 text-white [&>th]:p-4 divide-x-2'>
						<th>TALLAS</th>
						<th>S</th>
						<th>M</th>
						<th>L</th>
						<th>XL</th>
						<th>XXL</th>
						<th>3XL*</th>
					</tr>
					<tr className='bg-gray-200 text-gray-900 [&>td]:p-4 divide-x divide-black'>
						<td className='font-bold'>A/B</td>
						<td>61/41</td>
						<td>63/44</td>
						<td>65/47</td>
						<td>67/50</td>
						<td>69/53</td>
						<td>71/56</td>
					</tr>
				</table>

				{/* Niños */}
				<table className='text-center [&>caption]:my-5'>
					<caption className='font-medium text-xl'>
						NIÑOS - 6 TALLAS DISPONIBLES
					</caption>
					<tr className='bg-gray-950 text-white [&>th]:p-4 divide-x-2'>
						<th>TALLAS</th>
						<th>4 años</th>
						<th>6 años</th>
						<th>8 años</th>
						<th>10 años</th>
						<th>12 años</th>
						<th>14 años</th>
					</tr>
					<tr className='bg-gray-200 text-gray-900 [&>td]:p-4 divide-x divide-black'>
						<td className='font-bold'>CM</td>
						<td>96/104 cm</td>
						<td>106/116 cm</td>
						<td>118/128 cm</td>
						<td>130/140 cm</td>
						<td>142/152 cm</td>
						<td>154/164 cm</td>
					</tr>
					<tr className='bg-gray-200 text-gray-900 [&>td]:p-4 divide-x divide-black'>
						<td className='font-bold'>A/B</td>
						<td>44/36</td>
						<td>49/38</td>
						<td>54/41</td>
						<td>58/44</td>
						<td>62/47</td>
						<td>65/50</td>
					</tr>
				</table>
			</div>
		</main>
	)
}

export default TallasPage
