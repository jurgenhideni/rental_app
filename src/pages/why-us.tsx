import Layout from '@/components/Layout'
import Img from '@/components/Img'
import WhyUsDescription from '@/components/WhyUsDescription'
import Link from 'next/link'
import { HiArrowLeft } from 'react-icons/hi'
import Reviews from '@/components/Reviews'

const WhyUs = () => {
  return (
    <Layout title='Why Choose Us' description=''>
      <Link href='/'>
        <HiArrowLeft className='font-bold text-[2rem] hover:text-blue-400 lg:relative top-20 ml-5' />
      </Link>

      <div className='flex flex-col items-center m-5 '>
        <h1 className='text-center  font-bold text-[3.5rem]'>
          WHY <span className='text-blue-400'>CHOOSE US</span>
        </h1>
        <p className='max-w-[1000px] text-center text-lg'>
          At our car rental company, we prioritize customer satisfaction,
          providing a seamless and convenient experience from start to finish.
          With our extensive fleet of well-maintained vehicles, competitive
          prices, and exceptional service, we ensure that every customers needs
          are met and exceeded.
        </p>
      </div>
      <div className='flex mx-10 py-20 mb-[100px]'>
        <Img
          src='/assets/amggt.png'
          alt='image'
          width={700}
          height={200}
          className='scale-x-[-1]'
        />
        <WhyUsDescription />
      </div>
      <Reviews />
    </Layout>
  )
}

export default WhyUs
