'use client';

import React from 'react';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
// import { toast } from 'sonner';

import { ContactFormSchema } from '@/lib/schemas';
import Link from 'next/link';

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
    console.log(data);
    reset();
  };
  return (
    <section className='relative isolate'>
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
