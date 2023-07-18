import Link from 'next/link'

import Sushi from './svg/sushi'

const Navbar = () => (
  <nav className='container mx-auto flex h-14 flex-wrap items-center justify-center bg-transparent px-6'>
    <Link href='/'>
      <Sushi className='h-10 w-10'/>
    </Link>
  </nav>
)

export { Navbar }
