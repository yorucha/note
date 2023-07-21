import Link from 'next/link'

import Logo from '~/components/svg/logo'

const Navbar = () => (
  <nav className='container mx-auto flex h-14 flex-wrap items-center justify-center bg-transparent px-6'>
    <Link href='/'>
      <div className='flex items-center'>
        <Logo className='h-9 fill-current text-red-400'/>
      </div>
    </Link>
  </nav>
)

export { Navbar }
