import React from 'react';
import {
  FaAws,
  FaFire,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa6';
import { SiMongodb, SiNestjs } from 'react-icons/si';
import { RiNextjsFill } from 'react-icons/ri';
import { BiLogoTypescript } from 'react-icons/bi';

export default function TechStacks() {
  return (
    <section className='w-full'>
      <div className='flex w-full flex-wrap items-center justify-center gap-4 px-4 sm:gap-6 sm:px-5 md:px-6 xl:px-8'>
        <div className='flex flex-col items-center gap-4 text-center text-muted-foreground hover:text-foreground'>
          <FaJs className='text-3xl sm:text-6xl lg:text-7xl' />
          <p className='text-[10px] sm:text-xs'>JavaScript</p>
        </div>
        <div className='flex flex-col items-center gap-4 text-center text-muted-foreground hover:text-foreground'>
          <BiLogoTypescript className='text-3xl sm:text-6xl lg:text-7xl' />
          <p className='text-[10px] sm:text-xs'>TypeScript</p>
        </div>
        <div className='flex flex-col items-center gap-4 text-center text-muted-foreground hover:text-foreground'>
          <FaNodeJs className='text-3xl sm:text-6xl lg:text-7xl' />
          <p className='text-[10px] sm:text-xs'>NodeJS</p>
        </div>
        <div className='flex flex-col items-center gap-4 text-center text-muted-foreground hover:text-foreground'>
          <FaReact className='text-3xl sm:text-6xl lg:text-7xl' />
          <p className='text-[10px] sm:text-xs'>ReactJS</p>
        </div>
        <div className='flex flex-col items-center gap-4 text-center text-muted-foreground hover:text-foreground'>
          <RiNextjsFill className='text-3xl sm:text-6xl lg:text-7xl' />
          <p className='text-[10px] sm:text-xs'>NextJS</p>
        </div>
        <div className='flex flex-col items-center gap-4 text-center text-muted-foreground hover:text-foreground'>
          <SiNestjs className='text-3xl sm:text-6xl lg:text-7xl' />
          <p className='text-[10px] sm:text-xs'>NestJS</p>
        </div>
        <div className='flex flex-col items-center gap-4 text-center text-muted-foreground hover:text-foreground'>
          <SiMongodb className='text-3xl sm:text-6xl lg:text-7xl' />
          <p className='text-[10px] sm:text-xs'>MongoDB</p>
        </div>
        <div className='flex flex-col items-center gap-4 text-center text-muted-foreground hover:text-foreground'>
          <FaFire className='text-3xl sm:text-6xl lg:text-7xl' />
          <p className='text-[10px] sm:text-xs'>Firebase</p>
        </div>
        <div className='flex flex-col items-center gap-4 text-center text-muted-foreground hover:text-foreground'>
          <FaAws className='text-3xl sm:text-6xl lg:text-7xl' />
          <p className='text-[10px] sm:text-xs'>AWS</p>
        </div>
        <div className='flex flex-col items-center gap-4 text-center text-muted-foreground hover:text-foreground'>
          <FaPython className='text-3xl sm:text-6xl lg:text-7xl' />
          <p className='text-[10px] sm:text-xs'>Python</p>
        </div>
      </div>
    </section>
  );
}
