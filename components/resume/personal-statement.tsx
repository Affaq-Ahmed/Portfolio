import React from 'react';
import { FaQuoteRight } from 'react-icons/fa6';

export default function PersonalStatement() {
  return (
    <section
      id='-personal-statement'
      className='flex w-full flex-col font-sans'
    >
      <div className='relative w-full'>
        <FaQuoteRight
          aria-hidden='true'
          size={100}
          className='absolute -top-4 right-0 -z-10 text-muted-foreground dark:text-muted'
        />
        <h2 className='heading group flex gap-2 uppercase'>
          Personal Statement
          <a
            href='#-personal-statement'
            aria-label='Permalink for this section'
            className='text-transparent opacity-0 transition-opacity duration-200 group-hover:text-muted-foreground group-hover:opacity-100 dark:group-hover:text-muted'
          >
            #
          </a>
        </h2>
      </div>

      <div className=''>
        <h3 className='text-base font-semibold uppercase text-ring'>
          Background
        </h3>
        <p className='py-5 text-sm leading-5 text-ring'>
          I began developing web applications in 2018 when I started my
          education in Computer Science. As I progressed, I ventured into
          freelance work and received positive feedback from clients. My journey
          began with Node.js and JavaScript, eventually expanding to include
          TypeScript. Over time, I have gained experience in React.js and
          Next.js as well. I find working with startups particularly exciting,
          as they provide a dynamic environment to create meaningful impact.
          Recently, I&#39;ve been focused on leveraging my expertise in edtech
          platforms to drive growth and innovation.
        </p>
      </div>

      <div className=''>
        <h3 className='text-base font-semibold uppercase text-ring'>
          Objective
        </h3>
        <p className='pt-5 text-sm text-ring'>
          {
            '"I have a deep passion for both the design and technical aspects of software development. I find great fulfillment in tackling complex challenges and crafting innovative solutions. My long-term goal is to grow into the role of a Software Architect, where I can contribute strategically to designing robust, scalable systems while driving technical excellence."'
          }
        </p>
      </div>
    </section>
  );
}
