import ContactForm from '@/components/contact/contact-form';
import { Metadata } from 'next';
import React from 'react';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Contact',
    description:
      'Get in touch with Affaq Ahmed, Senior Software Engineer (full-stack & AI). Available for projects, collaborations, and opportunities — send a message directly.',
    alternates: { canonical: 'https://affaqahmed.com/contact' },
    openGraph: {
      title: 'Contact | Affaq Ahmed',
      description:
        'Get in touch with Affaq Ahmed — Senior Software Engineer (full-stack & AI).',
      url: 'https://affaqahmed.com/contact',
      type: 'website',
      images: ['/og-image.png'],
    },
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
