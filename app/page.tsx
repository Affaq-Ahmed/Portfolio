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
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Affaq Ahmed',
      url: 'https://affaqahmed.com',
      jobTitle: 'Full Stack Developer',
      sameAs: [
        'https://github.com/affaqahmedawan01',
        'https://linkedin.com/in/affaqahmedawan01',
      ],
      description:
        'Affaq Ahmed is a Full Stack Developer skilled in MERN Stack, Next.js, Node.js, and AI-based solutions.',
    }),
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
