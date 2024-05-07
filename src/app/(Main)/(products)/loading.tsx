export default function Loading () {
  return (
    <article className='col-span-5 md:col-span-4 space-y-5 h-full'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 md:gap-y-10 h-full'>
        {Array(12)
          .fill(0)
          .map((_, index) => {
            return (
              <div key={index} className='animate-pulse bg-neutral-200 h-full w-auto rounded-lg aspect-square' />
            )
          })}
      </div>
    </article>
  )
}
