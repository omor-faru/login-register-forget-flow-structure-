'use client'
import { LoginForm } from '@/component/login-from'
import loginImage from '../../../public/WhatsApp Image 2025-12-13 at 4.25.32 PM.jpeg'
import Image from 'next/image'

export default function LoginPage() {
  return (
    <div className='grid min-h-svh lg:grid-cols-2'>
      <div className='bg-muted relative hidden lg:block'>
        <Image
          src={loginImage}
          alt='Image'
          className='absolute inset-0 h-full w-full object-cover'
        />
      </div>
      <div className='flex flex-col gap-4 p-6 md:p-10'>
        <div className='flex flex-1 items-center justify-center'>
          <div className='w-full max-w-md'>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}