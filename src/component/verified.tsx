'use client'
import { cn } from '@/lib/utils'

import { Field, FieldDescription, FieldGroup } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export function VerifyAccount({
  className,
  ...props
}: React.ComponentProps<'form'>) {
  const usereEmail = 'johndoe@gmail.com'
  const [timeLeft, setTimeLeft] = useState(59)
  useEffect(() => {
    if (timeLeft === 0) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  return (
    <form className={cn('flex flex-col gap-6', className)} {...props}>
      <FieldGroup>
        <div className='flex flex-col items-center gap-1 text-center'>
          {' '}
          <h1 className='text-3xl md:text-5xl text-center font-bold mb-3'>
            Verify Account
          </h1>
          <p className='text-muted-foreground text-sm text-balance '>
            Code has been send to{' '}
            <span className='font-bold text-[#1E293B]'>{usereEmail}</span>
          </p>
          <p className='text-muted-foreground text-sm text-balance '>
            Enter the code to verify your account.
          </p>
        </div>
        <div className='grid w-full max-w-sm items-center gap-3'>
          <Label htmlFor='email'>Enter Code</Label>
          <Input type='code' id='code' placeholder='4 Digit Code' />
        </div>

        <Field className='flex flex-col items-center justify-end md:justify-center min-h-[55vh] md:min-h-0 w-full'>
          <FieldDescription className='text-[#475569] text-sm text-center min-h-[30vh] md:min-h-0'>
            Didn&apos;t receive the code?{' '}
            <a href='#' className='text-[#94A3B8] underline'>
              Resend Code
            </a>
            <span className='block mt-2 text-sm text-muted-foreground'>
              Resend code in 00:{timeLeft.toString().padStart(2, '0')}
            </span>
          </FieldDescription>

          <Button
            type='submit'
            className='bg-[#2B8761] rounded-full w-full md:w-auto'
          >
            Verify
          </Button>
        </Field>
      </FieldGroup>
    </form>
  )
}