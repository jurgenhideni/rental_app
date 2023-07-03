import { createClient } from '@supabase/supabase-js'
import { ImLocation } from 'react-icons/im'
import { BiPhoneCall } from 'react-icons/bi'
import { RiMailAddFill } from 'react-icons/ri'
import { getCarUrl } from '@/utils/getCarUrl'
import Layout from '@/components/Layout'
import Carousel from '@/components/Carousel'
import CarInfo from '@/components/CarInfo'

import Link from 'next/link'

const Car = ({ car }: { car: Car }) => {
  const phoneNumber = '00355695486984'
  const phonelink = `tel:${phoneNumber}`

  return (
    <Layout
      title={`${car.make} ${car.model}`}
      description=''
      url={`/${getCarUrl(car)}`}
    >
      <div className='flex justify-between'>
        <div>
          <Carousel images={car.images} />
        </div>
        <div className='   flex flex-col gap-5 '>
          <h1 className='font-semibold text-[2.5rem] uppercase py-5 '>
            {car.year} {car.make} {car.model}
          </h1>
          <Link
            href='https://www.google.com/maps/place/Rruga+Mine+Peza,+Tiran%C3%AB,+Albania/@41.3320411,19.8082919,17z/data=!3m1!4b1!4m6!3m5!1s0x13503109047dc01d:0xd82d373dfe843c8e!8m2!3d41.3320411!4d19.8108722!16s%2Fg%2F1tf04ys7'
            className='flex items-center text-[1.1rem] font-light hover:underline border-b border-blue-200 pb-7 text-blue-500'
          >
            <ImLocation /> Rruga Mine Peza - Tirane - Tr, AL
          </Link>

          <h2 className='text-start font-bold text-[2rem]'>
            € {car.price} /day
          </h2>
          <div className='flex gap-5 mt-5 border-b border-blue-200 pb-8 pt-3 '>
            <Link
              href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMVJXkKZqrgWsDqHsKTRHZdTgcrdxJdkjhndDlQjDmNcljwRjHgBWKzkztFrxTRfksfHtdH'
              className='bg-blue-400 text-white px-10 py-2 font-semibold text-[1.1rem] rounded-md 
              active:text-blue-500 active:bg-white flex items-center gap-2'
            >
              <RiMailAddFill /> Send Email
            </Link>
            <Link
              href={phonelink}
              className='bg-blue-400 text-white px-10 py-2 font-semibold text-[1.1rem] rounded-md 
              active:text-blue-500 active:bg-white flex items-center gap-2'
            >
              <BiPhoneCall className='text-[1.5rem]' /> 00355695486984
            </Link>
          </div>
          <CarInfo
            year={car.year}
            mileage={car.mileage}
            hp={car.hp}
            gearbox={car.gearbox}
            fuel={car.Fuel}
            seats={car.seats}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Car

export async function getServerSideProps({ params }: { params: any }) {
  const supabaseKeyServer = process.env.SUPABASE_KEY
  const supabaseUrl = 'https://lkzjjudbdgwftggyfvuo.supabase.co'
  const supabaseServer = createClient(supabaseUrl, supabaseKeyServer)

  const id = params.car.split('-').at(-1)
  const { data } = await supabaseServer.from('cars').select('*').eq('id', id)

  if (!data?.length) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      car: data[0],
    },
  }
}
