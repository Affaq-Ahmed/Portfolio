import Intro from '@/components/landing/intro';
import RecentPosts from '@/components/posts/recent-posts';
import RecentProjects from '@/components/projects/recent-projects';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Explore the portfolio of Affaq Ahmed, a Full Stack Developer skilled in React, Node.js, AI integrations, and scalable software systems.',
  alternates: {
    canonical: 'https://affaqahmed.com',
  },
  openGraph: {
    title: 'Affaq Ahmed — Portfolio | Full Stack Developer',
    description:
      'Discover Affaq Ahmed’s web projects, development expertise, and technical portfolio.',
    url: 'https://affaqahmed.com',
    type: 'profile',
    firstName: 'Affaq',
    lastName: 'Ahmed',
    username: 'affaqahmed',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Affaq Ahmed — Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affaq Ahmed — Portfolio',
    description:
      'Explore Affaq Ahmed’s portfolio showcasing full stack web development and AI integration projects.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Affaq Ahmed',
    url: 'https://affaqahmed.com',
    image: 'https://affaqahmed.com/og-image.png',
    jobTitle: 'Senior Software Engineer',
    description:
      'Affaq Ahmed is a Senior Software Engineer specializing in full-stack development (Node.js, TypeScript, Next.js, React) and AI integration (RAG pipelines and multi-provider LLM integrations).',
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
        <Intro />

        <RecentPosts />
        <RecentProjects />
      </div>

      {/* Schema for Google Rich Results */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}
