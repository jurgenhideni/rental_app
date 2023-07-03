import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CardSkelton = () => {
  return (
    <div className='border border-gray-200 rounded p-4'>
      <div className='mb-4'>
        <Skeleton className='h-60 ' />
      </div>
      <Skeleton className='py-3 mb-2' width={170} />
      <Skeleton className='py-4' width={200} />
      <Skeleton className='py-6 my-4' />
      <Skeleton className='py-2' />
    </div>
  )
}

export default CardSkelton
