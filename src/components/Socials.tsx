import { ImFacebook2 } from 'react-icons/im'
import { ImLinkedin } from 'react-icons/im'
import { ImInstagram } from 'react-icons/im'
import Link from 'next/link'

const Socials = () => {
  return (
    <div className='flex text-[2rem] justify-around'>
      <Link href='https://www.facebook.com/'>
        <ImFacebook2 />
      </Link>
      <Link href='https://www.linkedin.com/'>
        <ImLinkedin />
      </Link>
      <Link href='https://www.instagram.com/'>
        <ImInstagram />
      </Link>
    </div>
  )
}

export default Socials
