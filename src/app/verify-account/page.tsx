import Image from 'next/image'
import loginImage from '../../../public/SSO Icon.png'
import { VerifyAccount } from '@/component/verified'


export default function VerifyAccountPage() {
  return (
    <div className='grid min-h-svh lg:grid-cols-2'>
      <div className='bg-muted relative hidden lg:block'>
        <Image
          src={loginImage}
          alt='Image'
          className='absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
        />
      </div>
      <div className='flex flex-col gap-4 p-6 md:p-10'>
        <div className='flex flex-1 items-center justify-center'>
          <div className='w-full max-w-lg'>
            <VerifyAccount />
          </div>
        </div>
      </div>
    </div>
  )
}