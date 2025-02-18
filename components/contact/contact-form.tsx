'use client';

import React from 'react';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Input } from '../ui/input';
import { toast } from 'sonner';

import { ContactFormSchema } from '@/lib/schemas';
import Link from 'next/link';
import { sendEmail } from '@/lib/actions';

type Inputs = z.infer<typeof ContactFormSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const processForm: SubmitHandler<Inputs> = async (data) => {
    const result = await sendEmail(data);

    if (result?.error) {
      toast.error('An error occurred. Please try again later.');
      return;
    }

    toast.success('Message sent successfully');
    reset();
  };
  return (
    <section className='relative isolate'>
      {/* Background pattern */}
      <svg
        className='absolute inset-0 -z-10 h-full w-full stroke-zinc-200 opacity-75 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:stroke-zinc-700'
        aria-hidden='true'
      >
        <defs>
          <pattern
            id='83fd4e5a-9d52-42fc-97b6-718e5d7ee527'
            width={200}
            height={200}
            x='50%'
            y={-64}
            patternUnits='userSpaceOnUse'
          >
            <path d='M100 200V.5M.5 .5H200' fill='none' />
          </pattern>
        </defs>
        <svg
          x='50%'
          y={-64}
          className='overflow-visible fill-zinc-50 dark:fill-zinc-900/75'
        >
          <path
            d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z'
            strokeWidth={0}
          />
        </svg>
        <rect
          width='100%'
          height='100%'
          strokeWidth={0}
          fill='url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)'
        />
      </svg>

      <div className='relative'>
        <form
          onSubmit={handleSubmit(processForm)}
          noValidate
          className='mt-16 lg:flex-auto'
        >
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
            {/* Name */}
            <div>
              <Input
                id='name'
                type='text'
                placeholder='Name'
                autoComplete='given-name'
                {...register('name')}
              />
              {errors.name?.message && (
                <span className='ml-1 mt-2 text-sm text-rose-400'>
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Email */}
            <div>
              <Input
                id='email'
                type='email'
                placeholder='Email'
                {...register('email')}
              />
              {errors.email?.message && (
                <span className='ml-1 mt-2 text-sm text-rose-400'>
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Message */}
            <div className='sm:col-span-2'>
              <Textarea
                rows={4}
                placeholder='Message'
                {...register('message')}
              />

              {errors.message?.message && (
                <span className='ml-1 mt-2 text-sm text-rose-400'>
                  {errors.message.message}
                </span>
              )}
            </div>
          </div>

          <div className='mt-6'>
            <Button
              type='submit'
              disabled={isSubmitting}
              className='w-full disabled:opacity-50'
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </Button>
          </div>
          <p className='mt-4 text-xs text-muted-foreground'>
            By submitting this form, I agree to the&nbsp;
            <Link href='/privacy' className='font-bold underline'>
              privacy&nbsp;policy
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
