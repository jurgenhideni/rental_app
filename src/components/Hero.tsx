import Img from '@/components/Img'

export default function Hero() {
  return (
    <section className='flex items-center '>
      <div className='mr-auto'>
        <h1 className='text-6xl mb-8 font-semibold font-rajdhani'>
          Fast and easy way to rent a car.
        </h1>
        <p className='mb-8'>
          Drive performance and your cross function collaboration with
          easy-to-use dashboards, data visualisations, and automated insights in
          one click.
        </p>
        <a
          href='#book'
          className='bg-blue-400 text-white px-8 py-4 text-xl font-bold rounded'
        >
          BOOK A CAR
        </a>
      </div>
      <Img
        height={800}
        width={1200}
        src='/assets/Lambo.png'
        alt='hero img'
        className='-mr-56 transform scale-x-[-1]'
      />
    </section>
  )
}
