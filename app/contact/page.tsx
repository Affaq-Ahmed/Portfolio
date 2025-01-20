import ContactForm from '@/components/contact/contact-form';
import { Metadata } from 'next';
import React from 'react';

export const generateMetadata = (): Metadata => {
  return {
    title: `Contact`,
    description:
      'This is the contact page of Affaq Ahmed for this portfolio website',
    
  };
};

const Contact = () => {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h2 className='title'>Let&#39;s talk about your project</h2>

        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
