import Link from 'next/link'

export default function Header() {
  return (
    <header className='flex justify-between items-center py-8'>
      <Link href='/' className='font-black text-3xl uppercase'>
        <h1>Rent a Car</h1>
      </Link>
      <nav className='flex gap-6'>
        <Link href='/' className='hover:text-blue-500 '>
          Home
        </Link>
        <Link href='/about' className='hover:text-blue-500'>
          About Us
        </Link>
        <Link href='/why-us' className='hover:text-blue-500'>
          Why Chouse Us
        </Link>
        <Link href='/contact' className='hover:text-blue-500'>
          Contact
        </Link>
      </nav>
    </header>
  )
}
