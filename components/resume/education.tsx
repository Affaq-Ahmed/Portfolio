import React from 'react';
import { FaGraduationCap } from 'react-icons/fa6';

export default function Education() {
  return (
    <section id='-education' className='flex w-full flex-col'>
      <div className='relative w-full'>
        <FaGraduationCap
          aria-hidden='true'
          size={100}
          className='absolute -top-4 right-0 -z-10 text-muted-foreground dark:text-muted'
        />
        <h2 className='heading group flex gap-2 uppercase'>
          Education
          <a
            href='#-education'
            aria-label='Permalink for this section'
            className='text-transparent opacity-0 transition-opacity duration-200 group-hover:text-muted-foreground group-hover:opacity-100 dark:group-hover:text-muted'
          >
            #
          </a>
        </h2>
      </div>

      <div className='flex flex-col space-y-4 sm:space-y-6'>
        <p>
          <strong>Bachelor of Science (Computer Science)</strong>
          <br />
          National University of Computer and Emerging Sciences (FAST-NUCES)
          <br />
          <small>August 2018 - July 2022</small>
          &nbsp; | &nbsp;
          <small>
            CGPA: <strong>3.0/4.0</strong>
          </small>
          &nbsp; | &nbsp;
          <small>Lahore, Pakistan</small>
        </p>
        <p>
          <strong>Intermediate in Pre-Engineering</strong>
          <br />
          Fauji Foundation Inter College
          <br />
          <small>2016 - 2018</small>
          &nbsp; | &nbsp;
          <small>
            Marks: <strong>919/1100</strong>
          </small>
          &nbsp; | &nbsp;
          <small>Khushab, Pakistan</small>
        </p>
        <p>
          <strong>Matriculation</strong>
          <br />
          Fauji Foundation School
          <br />
          <small>2014 - 2016</small>
          &nbsp; | &nbsp;
          <small>
            Marks: <strong>972/1100</strong>
          </small>
          &nbsp; | &nbsp;
          <small>Khushab, Pakistan</small>
        </p>
      </div>
    </section>
  );
}
