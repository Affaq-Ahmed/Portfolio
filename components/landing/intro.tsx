import Image from 'next/image';
import React from 'react';
import authorImage from '@/public/images/authors/Affaq.jpeg';

const Intro = () => {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Affaq.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a Senior Software Engineer based in Lahore, Pakistan, with a
          strong background across frontend, backend, AI integration, and
          scaling web applications.
        </p>
        <p className='mt-3 font-light text-muted-foreground'>
          I currently lead a team of engineers at DevCache, owning architecture
          and delivery across multiple client products. Before that I worked at
          ZySoftec and Tintash. I have around four years of professional
          experience plus freelance work.
        </p>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m passionate about building products and bringing AI into them.
          I love working with Node.js, TypeScript, Next.js, and LLM/RAG systems.
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
