import Img from './Img'

import bmw from '../../public/bmw_PNG99531.png'
import lamborghini from '../../public/Lamborghini_Logo.svg.png'
import benz from '../../public/Symbol-Mercedes-Benz.png'
import audi from '../../public/Rings_bl-RGB.png'
import ferrari from '../../public/scuderia-ferrari-logo-800x1050-1.png'
import volkswagen from '../../public/volkswagen-logo.png'
import porsche from '../../public/porsche.png'
import nissan from '../../public/Nissan_logo.png'

const Brands = () => {
  return (
    <div className='flex opacity-30 gap-[100px] justify-center my-[50px] max-md:grid max-md:grid-cols-4 max-sm:gap-3'>
      <Img alt='brand' src={bmw} className='max-h-[50px] w-auto' />
      <Img alt='brand' src={lamborghini} className='max-h-[50px] w-auto' />
      <Img alt='brand' src={porsche} className='max-h-[50px] w-auto' />
      <Img alt='brand' src={benz} className='max-h-[50px] w-auto' />
      <Img alt='brand' src={nissan} className='max-h-[50px] w-auto' />
      <Img alt='brand' src={ferrari} className='max-h-[50px] w-auto' />
      <Img alt='brand' src={volkswagen} className='max-h-[50px] w-auto' />
      <Img alt='brand' src={audi} className='max-h-[50px] w-auto' />
    </div>
  )
}

export default Brands
