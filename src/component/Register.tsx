'use client'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<'form'>) {
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
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
      className={cn('flex flex-col gap-6', className)}
      {...props}
      onSubmit={handleSubmit}
    >
      <FieldGroup>
        <h1 className='text-3xl md:text-5xl text-center font-bold mb-3'>
          Register
        </h1>

        <Field className='flex flex-row md:flex-col gap-4'>
          <div className='flex-1'>
            <FieldLabel htmlFor='first-name' className='mb-2'>
              First Name
            </FieldLabel>
            <Input
              id='first-name'
              name='first-name'
              type='text'
              placeholder='John'
              required
            />
          </div>
          <div className='flex-1'>
            <FieldLabel htmlFor='last-name' className='mb-2'>
              Last Name
            </FieldLabel>
            <Input
              id='last-name'
              name='last-name'
              type='text'
              placeholder='Doe'
              required
            />
          </div>
        </Field>

        <Field>
          <FieldLabel htmlFor='email'>E-mail</FieldLabel>
          <Input
            id='email'
            name='email'
            type='email'
            placeholder='Enter your email'
            required
          />
        </Field>

        <Field>
          <FieldLabel htmlFor='password'>Password</FieldLabel>
          <div className='relative'>
            <Input
              id='password'
              name='password'
              type={showPassword ? 'text' : 'password'}
              placeholder='********'
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
              placeholder='********'
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

        <Field className='mt-28'>
          <Button type='submit' className='bg-[#2B8761] rounded-full'>
            Create Account
          </Button>
        </Field>

        <FieldDescription className='text-[#475569] text-sm font-medium leading-snug text-center md:text-left'>
          By continuing, you agree to our{' '}
          <span className='text-[#3C9AFB] underline cursor-pointer'>
            Terms of Service
          </span>{' '}
          and{' '}
          <span className='text-[#3C9AFB] underline cursor-pointer'>
            Privacy Policy
          </span>
          .
        </FieldDescription>
      </FieldGroup>
    </form>
  )
}