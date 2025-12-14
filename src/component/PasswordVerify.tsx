'use client'

import * as React from 'react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { cn } from '@/lib/utils'
import { Field, FieldDescription, FieldGroup } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

export function PasswordVerify({
  className,
  ...props
}: React.ComponentProps<'form'>) {
  const router = useRouter()

  const userEmail = 'johndoe@gmail.com'
  const [timeLeft, setTimeLeft] = useState(59)
  const [code, setCode] = useState('')

  useEffect(() => {
    if (timeLeft === 0) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    router.push('/new-password')
  }

  function handleResendCode() {
    setTimeLeft(59)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('flex flex-col gap-6', className)}
      {...props}
    >
      <FieldGroup>
        <div className='flex flex-col items-center gap-2 text-center'>
          <h1 className='text-3xl md:text-5xl font-bold'>Verify Account</h1>

          <p className='text-muted-foreground text-sm'>
            Code has been sent to{' '}
            <span className='font-bold text-[#1E293B]'>{userEmail}</span>
          </p>

          <p className='text-muted-foreground text-sm'>
            Enter the code to verify your account.
          </p>
        </div>

        <div className='grid w-full max-w-sm gap-3 mx-auto'>
          <Label htmlFor='code'>Enter Code</Label>
          <Input
            id='code'
            type='text'
            inputMode='numeric'
            maxLength={4}
            placeholder='4 Digit Code'
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </div>

        <Field className='flex flex-col items-center justify-end md:justify-center min-h-[55vh] md:min-h-0 w-full'>
          <FieldDescription className='text-[#475569] text-sm text-center min-h-[30vh] md:min-h-0'>
            Didn&apos;t receive the code?{' '}
            <button
              type='button'
              onClick={handleResendCode}
              disabled={timeLeft !== 0}
              className='text-[#94A3B8] underline disabled:opacity-50'
            >
              Resend Code
            </button>
            <span className='block mt-2 text-sm text-muted-foreground'>
              Resend code in 00:{timeLeft.toString().padStart(2, '0')}
            </span>
          </FieldDescription>

          <Button
            type='submit'
            className='bg-[#2B8761] rounded-full w-full md:w-auto px-10'
            disabled={code.length !== 4}
          >
            Verify
          </Button>
        </Field>
      </FieldGroup>
    </form>
  )
}