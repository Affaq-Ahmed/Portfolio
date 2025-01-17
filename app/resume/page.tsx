import ResumeIntro from '@/components/resume/intro';
import Separator from '@/components/separator';
import { Metadata } from 'next';
import React from 'react';

export const generateMetadata = (): Metadata => {
  return {
    title: `Resume - Affaq Ahmed's Resumé`,
    description:
      'This is the resume page of Affaq Ahmed for this portfolio website',
  };
};

export default function ResumePage() {
  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Resume</h1>

        <ResumeIntro />
        <Separator />
      </div>
    </section>
  );
}
