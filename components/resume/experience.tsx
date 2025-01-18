import React from 'react';
import { FaBriefcase } from 'react-icons/fa6';

export default function Experience() {
  return (
    <section id='-experience' className='flex w-full flex-col'>
      <div className='relative w-full'>
        <FaBriefcase
          aria-hidden='true'
          size={100}
          className='absolute -top-4 right-0 z-10 text-muted-foreground dark:text-muted'
        />
        <h2 className='heading group flex gap-2 uppercase'>
          Experience
          <a
            href='#-experience'
            aria-label='Permalink for this section'
            className='text-transparent opacity-0 transition-opacity duration-200 group-hover:text-muted-foreground group-hover:opacity-100 dark:group-hover:text-muted'
          >
            #
          </a>
        </h2>
      </div>
    </section>
  );
}
