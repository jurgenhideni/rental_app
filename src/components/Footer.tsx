import Link from 'next/link'
import Socials from './Socials'
import { BsFillPhoneFill } from 'react-icons/bs'

export default function Footer() {
  return (
    <div className='flex bg-blue-400 mt-10 justify-around py-10 text-white'>
      <h1 className='font-bold text-[2rem] ml-5'>LOGO</h1>
      <div className='flex flex-col gap-5'>
        <h2 className='text-[1.8rem] font-semibold'>Our Services</h2>
        <Link href='/'>Home</Link>
        <Link href='/about'>About Us</Link>
        <Link href='/why-us'>Why Choose Us</Link>
      </div>
      <div className='flex flex-col gap-5 '>
        <h2 className='text-[1.8rem] font-semibold'>Location</h2>
        <p>Tirane</p>
        <p>Durres</p>
        <p>Elbasan</p>
      </div>
      <div className='flex flex-col gap-5 mr-5'>
        <h2 className='text-[1.8rem] font-semibold'>Contact Us</h2>
        <p className='flex items-center'>
          <BsFillPhoneFill className='mx-2' /> +355662000007
        </p>
        <p>jurgenhideni@gmail.com</p>
        <Socials />
      </div>
    </div>
  )
}
