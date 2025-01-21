import { FaEnvelope, FaLocationPin } from 'react-icons/fa6';
import React from 'react';

export default function ResumeIntro() {
  return (
    <section className='flex w-full flex-col items-start gap-y-6 sm:gap-y-10'>
      <h1 className='title-name no-underline'>Affaq Ahmed</h1>

      <div className='flex w-full flex-col gap-y-4'>
        <h5 className='text-sm font-semibold sm:text-base'>
          Full Stack Web Developer & Designer
        </h5>

        <div className='flex w-full justify-between'>
          <div className='flex flex-col gap-1'>
            <p className='flex items-center gap-2 text-xs sm:gap-4 sm:text-sm'>
              <FaLocationPin size={16} className='' /> From Sargodha, Pakistan
            </p>
            <p className='flex items-center gap-2 text-sm sm:gap-4'>
              <FaEnvelope size={16} />{' '}
              <a
                href='mailto:affaqahmed165@gmail.com'
                className='text-xs font-medium underline hover:text-muted-foreground sm:text-sm'
              >
                affaqahmed165@gmail.com
              </a>
            </p>
          </div>

          <div
            className={`-mt-20 h-[100px] w-[100px] bg-[url('/images/resume/Affaq_Ahmed_DP_1w.png')] bg-cover bg-no-repeat transition duration-1000 ease-in-out hover:bg-[url('/images/resume/Affaq_Ahmed_DP_2w.png')] dark:bg-[url('/images/resume/Affaq_Ahmed_DP_1b.png')] dark:hover:bg-[url('/images/resume/Affaq_Ahmed_DP_2b.png')] sm:-mt-2.5 sm:h-[150px] sm:w-[150px]`}
          ></div>
        </div>
      </div>
    </section>
  );
}
