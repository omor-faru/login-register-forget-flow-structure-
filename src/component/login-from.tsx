'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { FcGoogle } from 'react-icons/fc'
import { Eye, EyeOff } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { MdErrorOutline } from 'react-icons/md'
import Link from 'next/link'

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'form'>) {
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const correctPassword = '123456'
    const formData = new FormData(e.currentTarget)
    const password = formData.get('password') as string

    if (password !== correctPassword) {
      setError('Incorrect password. Please check your password.')
      return
    }

    setError('')
    router.push('/')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('flex flex-col gap-6', className)}
      {...props}
    >
      <FieldGroup>
        <div className='text-center'>
          <h1 className='text-3xl md:text-5xl font-bold mb-3'>Login</h1>
        </div>

        <Field>
          <FieldLabel htmlFor='email'>E-mail</FieldLabel>
          <Input
            id='email'
            type='email'
            placeholder='Enter your email'
            required
            className='border border-gray-300 focus:border-blue-100 focus:ring-0 focus:outline-none'
          />
        </Field>

        <Field>
          <FieldLabel htmlFor='password'>Password</FieldLabel>
          <div className='relative'>
            <Input
              id='password'
              name='password'
              type={showPassword ? 'text' : 'password'}
              placeholder='Enter your password'
              required
              className={cn(
                'pr-10 focus:ring-0 focus:outline-none',
                error
                  ? 'border border-red-500 focus:border-red-500'
                  : 'border border-gray-300 focus:border-blue-100'
              )}
            />
            <button
              type='button'
              onClick={() => setShowPassword(!showPassword)}
              className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700'
            >
              {showPassword ? (
                <EyeOff className='w-5 h-5' />
              ) : (
                <Eye className='w-5 h-5' />
              )}
            </button>
          </div>
          {error && (
            <div className='flex items-center text-sm text-[#D12E34] mt-1 font-normal gap-1'>
              <MdErrorOutline className='w-5 h-5' />
              <p>{error}</p>
            </div>
          )}
        </Field>

        <div>
          <Link href='/forget' className='text-[#3C9AFB] font-medium text-sm md:text-base underline cursor-pointer hover:text-[#7794F6] pl-4 flex justify-end'>
            Forget password?
          </Link>
        </div>

        <Button type='submit' className='bg-[#2B8761] rounded-full'>
          Login
        </Button>

        <div className='fixed bottom-4 left-0 w-full px-4 md:static flex flex-col items-center justify-end md:justify-center gap-4 mt-35'>
          <FieldSeparator className='text-[#D1D1D1] text-sm md:text-base font-normal'>
            or login with
          </FieldSeparator>

          <Button
            variant='outline'
            className='w-full text-[14px] md:text-base font-medium mt-4 rounded-full flex items-center gap-2 py-6'
          >
            <FcGoogle className='w-8 h-8 md:w-12 md:h-12' />
            <p>Login with Google</p>
          </Button>
        </div>
      </FieldGroup>
    </form>
  )
}