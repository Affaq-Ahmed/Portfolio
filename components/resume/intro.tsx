import { FaEnvelope, FaLocationPin } from 'react-icons/fa6';
import React from 'react';
import Image from 'next/image';

export default function ResumeIntro() {
  return (
    <section className='flex w-full flex-col items-start gap-y-8 sm:gap-y-10'>
      <h1 className='title-name no-underline'>Affaq Ahmed</h1>

      <div className='flex w-full flex-col gap-y-4'>
        <h5 className='text-base font-semibold'>
          Full Stack Web Developer & Designer
        </h5>

        <div className='flex w-full justify-between'>
          <div className='flex flex-col gap-1'>
            <p className='flex items-center gap-4 text-sm'>
              <FaLocationPin size={16} /> From Sargodha, Pakistan
            </p>
            <p className='flex items-center gap-4 text-sm'>
              <FaEnvelope size={16} />{' '}
              <a
                href='mailto:affaqahmed165@gmail.com'
                className='text-base font-medium underline hover:text-muted-foreground'
              >
                affaqahmed165@gmail.com
              </a>
            </p>
          </div>

          <Image
            src='/images/authors/Affaq.jpeg'
            alt={`Affaq Ahmed's profile picture`}
            width={100}
            height={100}
            className='-mt-4 h-24 w-24 rounded-full border-4 sm:border-8 border-white grayscale hover:border-green-400 sm:-mt-20 sm:h-36 sm:w-36'
            priority
          />
        </div>
      </div>
    </section>
  );
}
