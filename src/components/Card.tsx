import { getCarUrl } from '@/utils/getCarUrl'

import { TbGauge, TbManualGearbox, TbUsers } from 'react-icons/tb'
import { BsFuelPump } from 'react-icons/bs'

import Img from './Img'
import Link from 'next/link'

export default function Card(props: Car) {
  return (
    <div className='border border-gray-200 rounded p-4'>
      <div className='relative h-60 flex justify-center bg-slate-200 rounded overflow-hidden mb-4'>
        <Img fill src={props.images[0]} alt='car' className='object-cover' />
      </div>
      <h3 className='text-xl font-medium text-gray-900'>
        {props.make} {props.model}
      </h3>
      <h2 className='text-2xl font-bold text-gray-800'>{props.price}€/day</h2>
      <div className='bg-slate-200 flex justify-around rounded-xl py-2 my-4'>
        <div className='flex flex-col items-center'>
          <TbGauge />
          {props.mileage}
        </div>
        <div className='flex flex-col items-center'>
          <TbManualGearbox />
          {props.gearbox}
        </div>
        <div className='flex flex-col items-center'>
          <TbUsers />
          {props.seats}
        </div>
        <div className='flex flex-col items-center'>
          <BsFuelPump />
          {props.Fuel}
        </div>
      </div>
      <Link
        href={getCarUrl(props)}
        className='block border border-blue-400 text-blue-500 w-full text-center py-2 rounded-full hover:bg-blue-400 hover:text-white'
      >
        Rent
      </Link>
    </div>
  )
}
