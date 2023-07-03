import { BsFillTelephoneFill } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'
import { ImPriceTag } from 'react-icons/im'
import { GiCancel } from 'react-icons/gi'
import { MdVerifiedUser } from 'react-icons/md'

const WhyUsDescription = () => {
  return (
    <>
      <div className='grid grid-cols-2 px-17 gap-3'>
        <div className='flex'>
          <BsFillTelephoneFill className='mx-4 mt-3 text-blue-400 text-[1.2rem]' />
          <div className='max-w-[400px]'>
            <h3 className='font-bold text-lg my-2'>Customer Support</h3>

            <p>
              We pride ourselves on delivering prompt and personalized support
              from the moment you book until you return the vehicle.
            </p>
          </div>
        </div>
        <div className='flex'>
          <ImLocation className='mx-4 mt-3 text-blue-400 text-[1.2rem] ' />
          <div className='max-w-[400px]'>
            <h3 className='font-bold text-lg my-2'>Location</h3>

            <p>
              With conveniently located branches in major cities and popular
              tourist destinations, our car rental services are easily
              accessible.
            </p>
          </div>
        </div>
        <div className='flex'>
          <ImPriceTag className='mx-4 mt-3 text-blue-400 text-[1.2rem]' />
          <div className='max-w-[400px]'>
            <h3 className='font-bold text-lg my-2'>Best Price</h3>

            <p>
              We strive to offer the most competitive prices in the market,
              ensuring excellent value for your money.
            </p>
          </div>
        </div>
        <div className='flex'>
          <MdVerifiedUser className='mx-4 mt-3 text-blue-400 text-[1.2rem]' />
          <div className='max-w-[400px]'>
            <h3 className='font-bold text-lg my-2'>Verified Car Brands</h3>

            <p>
              We exclusively partner with renowned car brands, offering a wide
              range of reliable and well-maintained vehicles.
            </p>
          </div>
        </div>
        <div className='flex'>
          <GiCancel className='mx-4 mt-3 text-blue-400 text-[1.2rem]' />
          <div className='max-w-[400px]'>
            <h3 className='font-bold text-lg my-2'>Free Cancellation</h3>

            <p>
              We understand that plans can change unexpectedly. That's why we
              offer free cancellation on your reservation up to a certain period
              before your scheduled pick-up time
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyUsDescription
