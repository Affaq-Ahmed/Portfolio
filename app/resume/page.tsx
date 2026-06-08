import Education from '@/components/resume/education';
import Experience from '@/components/resume/experience';
import ResumeIntro from '@/components/resume/intro';
import PersonalStatement from '@/components/resume/personal-statement';
import Projects from '@/components/resume/projects';
import TechStacks from '@/components/resume/tech-stack';
import Separator from '@/components/separator';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Resume',
  description:
    'Resume of Affaq Ahmed — Senior Software Engineer leading a team of engineers and building full-stack and AI-powered systems with Node.js, TypeScript, Next.js, React, and RAG/LLM integrations.',
  alternates: {
    canonical: 'https://affaqahmed.com/resume',
  },
  openGraph: {
    title: 'Affaq Ahmed — Resume | Senior Software Engineer',
    description:
      'Experience, skills, and education of Affaq Ahmed — Senior Software Engineer specializing in full-stack development and AI integration.',
    url: 'https://affaqahmed.com/resume',
    type: 'profile',
    firstName: 'Affaq',
    lastName: 'Ahmed',
    username: 'affaqahmed',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Affaq Ahmed — Senior Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affaq Ahmed — Resume | Senior Software Engineer',
    description:
      'Experience, skills, and education of Affaq Ahmed — Senior Software Engineer (full-stack & AI).',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ResumePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Affaq Ahmed',
    url: 'https://affaqahmed.com',
    jobTitle: 'Senior Software Engineer',
    description:
      'Affaq Ahmed is a Senior Software Engineer specializing in full-stack development (Node.js, TypeScript, Next.js, React) and AI integration (RAG pipelines and multi-provider LLM integrations).',
    email: 'mailto:affaqahmed165@gmail.com',
    knowsAbout: [
      'Full-Stack Development',
      'Node.js',
      'TypeScript',
      'Next.js',
      'React',
      'React Native',
      'NestJS',
      'MongoDB',
      'PostgreSQL',
      'AWS',
      'RAG Pipelines',
      'LLM Integration',
      'Socket.IO',
      'Stripe',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Senior Software Engineer',
      occupationalCategory: '15-1252 Software Developers',
    },
    worksFor: { '@type': 'Organization', name: 'DevCache' },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'National University of Computer and Emerging Sciences (FAST-NUCES)',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lahore',
      addressCountry: 'PK',
    },
    sameAs: [
      'https://github.com/Affaq-Ahmed',
      'https://linkedin.com/in/affaq-ahmed',
    ],
  };

  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Resume</h1>

        <ResumeIntro />
        <Separator />

        <PersonalStatement />
        <Separator />

        <Education />
        <Separator />

        <Experience />
        <Separator />

        <Projects />
        <Separator />

        <TechStacks />
        <Separator />
      </div>

      {/* Schema for Google Rich Results */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}
