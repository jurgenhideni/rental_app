import Img from '@/components/Img'
import { GrNext } from 'react-icons/gr'
import { GrPrevious } from 'react-icons/gr'
import React, { useState } from 'react'

const Reviews = () => {
  const [currentImage, setCurrentImage] = useState(0)

  const clients = [
    {
      image: '/assets/client1.png',
      name: 'John Doe',
      text: '"I had a fantastic experience renting a car from this company. The staff was friendly and helpful, and the car was in excellent condition. The process was smooth and hassle-free, and the prices were reasonable. I highly recommend this car rental company."',
    },
    {
      image: '/assets/client2.png',
      name: 'Ethan Larson',
      text: '"I have rented cars from various companies before, but this one stands out. The customer service was exceptional, and the staff went above and beyond to ensure I had a great experience. The car was clean, comfortable, and reliable. I will definitely be renting from them again in the future." ',
    },
    {
      image: '/assets/client3.png',
      name: 'Emma Smith',
      text: '"I cannot say enough good things about this car rental company. From the moment I made the reservation until the return of the car, everything was seamless. The staff was professional, the car selection was impressive, and the prices were competitive. I felt valued as a customer, and I will be recommending them to all my friends and family."',
    },
    {
      image: '/assets/boy.png',
      name: 'Oliver Anderson',
      text: ' " I had a last-minute car rental need, and this company came through for me. They were able to accommodate my request, and the process was quick and efficient. The car I rented was clean and well-maintained, and the overall experience was hassle-free. I would definitely rent from them again." ',
    },
  ]

  return (
    <div className='flex justify-around bg-gradient-to-b from-slate-50 py-10'>
      <div>
        <Img
          src={clients[currentImage].image}
          alt='image'
          width={500}
          height={600}
          className='rounded-2xl'
        />
        <div className='max-w-[500px]  lg:relative bottom-10 flex justify-center'>
          <p className='max-w-[480px] text-lg leading-8 text-slate-700 font-semibold bg-slate-200 rounded-lg p-5 shadow-xl'>
            {clients[currentImage].text}
            <br />
            <span className='text-blue-400'>{clients[currentImage].name}</span>
          </p>
        </div>
      </div>
      <div className='text-[2.5rem] text-center'>
        <div className='flex justify-between items-center mb-10'>
          <h1 className='text-blue-400'>Clients Reviews</h1>
          <div className='flex gap-10'>
            <button
              disabled={currentImage === 0}
              onClick={() => setCurrentImage(prevIndex => prevIndex - 1)}
            >
              <GrPrevious className='bg-blue-300 p-2 text-[3rem] rounded-full hover:bg-slate-300' />
            </button>
            <button
              onClick={() => setCurrentImage(prevIndex => prevIndex + 1)}
              disabled={currentImage === clients.length - 1}
            >
              <GrNext className='bg-blue-300 p-2 text-[3rem] rounded-full hover:bg-slate-300 ' />
            </button>
          </div>
        </div>
        <h2 className='text-blue-900 mb-5'>What our Clients Say About Us ?</h2>
        <p className='text-2xl max-w-[570px] text-left leading-10 text-slate-400'>
          Our clients experience is at the forefront of everything we do. We
          prioritize their needs and strive to exceed their expectations with
          our exceptional service and attention to detail.Our commitment to
          customer satisfaction extends beyond the rental period. We are always
          available to address any questions or concerns, and our dedicated team
          is ready to assist our clients throughout their entire journey with
          us.
        </p>
      </div>
    </div>
  )
}

export default Reviews
