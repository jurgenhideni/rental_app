import { GiRoad } from 'react-icons/gi'
import { BsFillCalendar2DateFill } from 'react-icons/bs'
import { TbGauge } from 'react-icons/tb'
import { GiGearStickPattern } from 'react-icons/gi'
import { BsFuelPumpFill } from 'react-icons/bs'
import { GiCarSeat } from 'react-icons/gi'

interface CarInfoProps {
  year: number
  mileage: number
  hp: number
  gearbox: string
  fuel: string
  seats: number
}

const CarInfo = (props: CarInfoProps) => {
  return (
    <div className='grid grid-cols-3 gap-10 py-5'>
      <div className='flex items-center py-5 gap-3'>
        <GiRoad className='text-[2.2rem] text-blue-500' />
        <div>
          <h4 className='font-light'>mileage</h4>
          <p className='font-bold text-[1.4rem] text-blue-500'>
            {props.mileage} km
          </p>
        </div>
      </div>
      <div className='flex items-center py-5 gap-3'>
        <BsFillCalendar2DateFill className='text-[2.2rem] text-blue-500' />
        <div>
          <h4 className='font-light'>first registration</h4>
          <p className='font-bold text-[1.4rem] text-blue-500'>{props.year}</p>
        </div>
      </div>
      <div className='flex items-center py-5 gap-3'>
        <TbGauge className='text-[2.5rem] text-blue-500' />
        <div>
          <h4 className='font-light'>performance</h4>
          <p className='font-bold text-[1.4rem] text-blue-500'>{props.hp} hp</p>
        </div>
      </div>
      <div className='flex items-center py-5 gap-3'>
        <GiGearStickPattern className='text-[2.5rem] text-blue-500' />
        <div>
          <h4 className='font-light'>transmission</h4>
          <p className='font-bold text-[1.4rem] text-blue-500'>
            {props.gearbox}
          </p>
        </div>
      </div>
      <div className='flex items-center py-5 gap-3'>
        <BsFuelPumpFill className='text-[2.5rem] text-blue-500' />
        <div>
          <h4 className='font-light'>fuel type</h4>
          <p className='font-bold text-[1.4rem] text-blue-500'>{props.fuel}</p>
        </div>
      </div>
      <div className='flex items-center py-5 gap-3'>
        <GiCarSeat className='text-[2.2rem] text-blue-500' />
        <div>
          <h4 className='font-light'>seats</h4>
          <p className='font-bold text-[1.4rem] text-blue-500'>{props.seats}</p>
        </div>
      </div>
    </div>
  )
}

export default CarInfo
