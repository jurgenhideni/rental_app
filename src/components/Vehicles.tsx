import useCars from '@/hooks/useCars'

import Card from './Card'
import CardSkelton from './CardSkelton'

export default function Vehicles() {
  const { data, isLoading } = useCars()

  return (
    <div className='grid grid-cols-4 gap-8'>
      {isLoading ? (
        <>
          <CardSkelton />
          <CardSkelton />
          <CardSkelton />
          <CardSkelton />
        </>
      ) : (
        data?.map((car: Car) => <Card {...car} />)
      )}
    </div>
  )
}
