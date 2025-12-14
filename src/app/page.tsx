import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'

export default function App() {
  return (
    <div className='flex flex-col md:justify-center bg-gray-900 items-center justify-end min-h-screen px-4 pb-6 gap-4'>
      <div className='flex gap-3 '>
        <Link href='/register'>
          <Button
            variant='outline'
            className=' text-[14px] md:text-base font-medium rounded-full py-4 '
          >
            Register
          </Button>
        </Link>
        <Link href='/login' className=''>
          <Button className=' rounded-full bg-[#2B8761] text-white py-4 cursor-pointer  items-center justify-center mx-auto'>
            Login
          </Button>
        </Link>
      </div>

      <Button
        variant='outline'
        className='w-full md:w-auto text-[14px] md:text-base font-medium rounded-full flex items-center justify-center gap-2 py-4'
      >
        <FcGoogle className='w-6 h-6 md:w-7 md:h-7' />
        <span>Login with Google</span>
      </Button>
    </div>
  )
}