import { useState } from 'react'
import clsx from 'clsx'
import Select from './Select'

export default function Filters() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div id='book' className='text-sm border border-gray-200 rounded mb-4'>
      <div className='flex justify-between p-4 gap-4'>
        <Select
          placeholder='Pick up location'
          options={pickUpLocation}
          className='flex-grow'
        />
        <input
          type='date'
          name=''
          id=''
          className='flex-grow border border-gray-200 px-4'
        />
        <Select
          placeholder='Drop off location'
          options={pickUpLocation}
          className='flex-grow'
        />
        <input
          type='date'
          name=''
          id=''
          className='flex-grow border border-gray-200 px-4'
        />
        <button className='bg-blue-400 px-16 text-white rounded-full font-bold tracking-widest'>
          FIND
        </button>
        <button
          className='border border-blue-400 px-8 text-blue-400 rounded-full'
          onClick={() => setIsOpen(prev => !prev)}
        >
          More filters
        </button>
      </div>

      <div
        className={clsx(
          'overflow-hidden h-0 transition-all flex items-center justify-between px-4 gap-4',
          isOpen && 'h-16 overflow-visible'
        )}
      >
        <input type='range' name='' id='' />
        <Select placeholder='Brand' options={brands} className='flex-grow' />
        <Select placeholder='Model' options={brands} className='flex-grow' />
        <Select placeholder='Type' options={type} className='flex-grow' />
        <Select placeholder='Fuel' options={fuel} className='flex-grow' />
        <Select placeholder='Seats' options={seats} className='flex-grow' />
      </div>
    </div>
  )
}

const pickUpLocation = [
  {
    value: 'ali demi',
    label: 'Ali Demi, Tirane',
  },
  {
    value: 'myslym shyri',
    label: 'Myslym Shyri, Tirane',
  },
  {
    value: 'dritan hoxha',
    label: 'Blv Gjergj Fishta, Tirane',
  },
]
const type = [
  {
    value: 'sedan',
    label: 'Sedan',
  },
  {
    value: 'suv',
    label: 'SUV',
  },
  {
    value: 'coupe',
    label: 'Coupe',
  },
]

const fuel = [
  {
    value: 'diesel',
    label: 'Diesel',
  },
  {
    value: 'Gasoline',
    label: 'Gasoline',
  },
  {
    value: 'electric',
    label: 'Electric',
  },
  {
    value: 'hybrid',
    label: 'Hybrid',
  },
]
const seats = [
  {
    value: 1,
    label: 1,
  },
  {
    value: 2,
    label: 2,
  },
  {
    value: 4,
    label: 4,
  },
  {
    value: 5,
    label: 5,
  },
  {
    value: 7,
    label: 7,
  },
]

const brands = [
  {
    value: 'bmw',
    label: 'BMW',
  },
  {
    value: 'mercedes benz',
    label: 'Mercedes Benz',
  },
  {
    value: 'ferrari',
    label: 'Ferrari',
  },
  {
    value: 'koenigsegg',
    label: 'Koenigsegg',
  },
  {
    value: 'lamborghini',
    label: 'Lamborghini',
  },
  {
    value: 'porsche',
    label: 'Porsche',
  },
]
