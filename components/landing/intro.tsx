import Image from 'next/image';
import React from 'react';
import authorImage from '@/public/images/authors/Affaq.jpeg';

const Intro = () => {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Affaq.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m an experienced Software Engineer based in Sargodha, Pakistan.
          I&#39;ve strong background in frontend, backend, devops and scaling of
          multiple web applications.
        </p>
        <p className='mt-3 font-light text-muted-foreground'>
          I currently work remotely as a Software Engineer at ZySoftec. My
          previous experience is at Tintash. I&#39;ve three years of
          professional experience and around one year of freelance work.
        </p>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m passionate about learning new technologies and building cool
          stuff. I love working on NodeJs, NextJs and TypeScript.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Affaq Ahmed'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  );
};

export default Intro;
