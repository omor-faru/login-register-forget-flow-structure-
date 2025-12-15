import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'

export default function HomePage() {
  return (
    <div className='flex flex-col items-center justify-end md:justify-center min-h-screen px-4 pb-6 gap-4 bg-[#171d32]'>
      <div className='flex w-full gap-3 justify-center md:w-auto'>
        <Button
          asChild
          variant='outline'
          className='flex-1 md:flex-none text-[14px] md:text-base font-medium rounded-full py-4'
        >
          <Link href='/register'>Register</Link>
        </Button>

        <Button
          asChild
          className='flex-1 md:flex-none rounded-full bg-[#2B8761] text-white py-4'
        >
          <Link href='/login'>Login</Link>
        </Button>
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