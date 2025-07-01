import {
  BriefcaseBusiness,
  Clock,
  Target,
  Telescope,
  Trophy,
  Users
} from 'lucide-react'

export default function MissionAndVision() {
  return (
    <div className='flex flex-col gap-12 py-8'>
      {/* Mission and Vision Section */}
      <section className='grid md:grid-cols-2 gap-8'>
        <article className='p-6 shadow-sm border border-gray-100'>
          <div className='flex gap-3 items-center mb-4'>
            <div className='p-2 bg-gray-100 rounded-full'>
              <BriefcaseBusiness className='text-gray-700' />
            </div>
            <h2 className='text-2xl font-bold'>Misión</h2>
          </div>
          <p className='text-gray-600 leading-relaxed'>
            Ser la marca que represente el estilo de vida padelero dentro y
            fuera de la pista.
          </p>
        </article>

        <article className='p-6 shadow-sm border border-gray-100'>
          <div className='flex gap-3 items-center mb-4'>
            <div className='p-2 bg-gray-100 rounded-full'>
              <Telescope className='text-gray-700' />
            </div>
            <h2 className='text-2xl font-bold'>Visión</h2>
          </div>
          <p className='text-gray-600 leading-relaxed'>
            Crear prendas cómodas, urbanas y con identidad padelera, para
            quienes viven el padel como un forma de ser, no solo de jugar
          </p>
        </article>
      </section>

      {/* Impact and Experience Cards */}
      <section className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <article className='bg-gray-100 p-5 shadow-sm'>
          <div className='p-2 bg-white rounded-full w-fit mb-4'>
            <Target className='text-gray-700' />
          </div>
          <h3 className='font-semibold text-lg mb-2'>Proyectos y Diseños</h3>
          <p className='text-gray-600 text-sm'>+2000 productos desarrollados</p>
        </article>

        <article className='bg-gray-100 p-5 shadow-sm'>
          <div className='p-2 bg-white rounded-full w-fit mb-4'>
            <Users className='text-gray-700' />
          </div>
          <h3 className='font-semibold text-lg mb-2'>Clientes satisfechos</h3>
          <p className='text-gray-600 text-sm'>
            Más de 3500 deportistas y clubes confían en nosotros
          </p>
        </article>

        <article className='bg-gray-100 p-5 shadow-sm'>
          <div className='p-2 bg-white rounded-full w-fit mb-4'>
            <Trophy className='text-gray-700' />
          </div>
          <h3 className='font-semibold text-lg mb-2'>
            Colaboradores y Voluntarios
          </h3>
          <p className='text-gray-600 text-sm'>70+</p>
        </article>

        <article className='bg-gray-100 p-5 shadow-sm'>
          <div className='p-2 bg-white rounded-full w-fit mb-4'>
            <Clock className='text-gray-700' />
          </div>
          <h3 className='font-semibold text-lg mb-2'>
            Tiempos de entrega eficientes
          </h3>
          <p className='text-gray-600 text-sm'>100% cumplidos</p>
        </article>
      </section>
    </div>
  )
}
