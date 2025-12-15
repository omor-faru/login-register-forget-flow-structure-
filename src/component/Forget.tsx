'use client'
import * as React from 'react'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function ForgotPassword({
  className,
  ...props
}: React.ComponentProps<'form'>) {
  const router = useRouter()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    router.push('/password-verify')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('flex flex-col gap-6', className)}
      {...props}
    >
      <FieldGroup>
        <div className='flex flex-col items-center gap-2 text-center'>
          <h1 className='text-3xl md:text-5xl font-bold'>Forgot Password</h1>

          <p className='text-sm text-[#475569] font-normal max-w-md'>
            No worries! Enter your email address below and we will send you a
            code to reset your password.
          </p>
        </div>

        <Field>
          <FieldLabel htmlFor='email'>E-mail</FieldLabel>
          <Input
            id='email'
            type='email'
            placeholder='Enter your email'
            required
            className='py-5'
          />
        </Field>

        <div className='flex flex-col items-center justify-end md:justify-center min-h-[58vh] md:min-h-0 w-full'>
          <Button
            type='submit'
            className='bg-[#2B8761] rounded-full w-full px-8'
          >
            Send Reset Instruction
          </Button>
        </div>
      </FieldGroup>
    </form>
  )
}