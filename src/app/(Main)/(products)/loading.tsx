export default function Loading() {
  return (
    <div className='h-screen max-w-screen-3xl mx-auto p-3 md:p-10 grid grid-cols-5 gap-4'>
      <aside className='col-span-1 space-y-10 hidden md:block top-4 h-full'>
        <div className='animate-pulse bg-neutral-200 rounded-lg h-full' />
      </aside>
      <article className='col-span-5 md:col-span-4 space-y-5 h-full'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 md:gap-y-10 h-full'>
          {Array(12)
            .fill(0)
            .map((_, index) => {
              return (
                <div key={index} className='animate-pulse bg-neutral-200 h-full w-auto rounded-lg' />
              )
            })}
        </div>
      </article>
    </div>
  )
}
