export default function Loading() {
	return (
		<div className='h-screen w-full flex flex-col md:flex-row flex-wrap gap-6'>
			{Array(2)
				.fill(0)
				.map((_, index) => {
					return (
						<div
							key={`hombre product card ${index + 1}`}
							className='flex-1 animate-pulse bg-neutral-200 h-full rounded-lg'
						/>
					)
				})}
		</div>
	)
}
