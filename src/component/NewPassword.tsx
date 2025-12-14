'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'

import { cn } from '@/lib/utils'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Eye, EyeOff } from 'lucide-react'

export function NewPassword({
  className,
  ...props
}: React.ComponentProps<'form'>) {
  const [showPassword, setShowPassword] = React.useState(false)
  const [error, setError] = React.useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirm-password') as string

    if (password !== confirmPassword) {
      setError('Passwords do not match. Please check your password.')
      return
    }

    setError('')
    router.push('/verify-account')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('flex flex-col gap-6', className)}
      {...props}
    >
      <FieldGroup>
        <div className='flex flex-col items-center gap-2 text-center'>
          <h1 className='text-3xl md:text-5xl font-bold'>
            Create New Password
          </h1>

          <p className='text-sm text-[#475569] font-normal max-w-md'>
            Please enter and confirm your new password. You will need to login
            after you reset.
          </p>
        </div>

        <Field>
          <FieldLabel htmlFor='password'>Password</FieldLabel>
          <div className='relative'>
            <Input
              id='password'
              name='password'
              type={showPassword ? 'text' : 'password'}
              placeholder='*********'
              required
              className='pr-10 focus:ring-0 focus:outline-none'
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
        </Field>

        <Field>
          <FieldLabel htmlFor='confirm-password'>Confirm Password</FieldLabel>
          <div className='relative'>
            <Input
              id='confirm-password'
              name='confirm-password'
              type={showPassword ? 'text' : 'password'}
              placeholder='*********'
              required
              className='pr-10 focus:ring-0 focus:outline-none'
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
        </Field>

        {error && (
          <div className='text-red-500 text-sm mt-1 text-start font-medium'>
            {error}
          </div>
        )}

        <div className='flex flex-col items-center justify-end md:justify-center min-h-[58vh] md:min-h-0 w-full'>
          <Button
            type='submit'
            className='bg-[#2B8761] rounded-full w-full md:w-auto px-8'
          >
            Reset Password
          </Button>
        </div>
      </FieldGroup>
    </form>
  )
}