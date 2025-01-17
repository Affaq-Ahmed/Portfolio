import ResumeIntro from '@/components/resume/intro';
import Separator from '@/components/resume/separator';
import React from 'react';

export default function ResumePage() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Resume</h1>

        <ResumeIntro />
        <Separator />
      </div>
    </section>
  );
}
