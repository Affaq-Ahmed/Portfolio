import Intro from '@/components/landing/intro';
import RecentPosts from '@/components/posts/recent-posts';
import RecentProjects from '@/components/projects/recent-projects';
import { Metadata } from 'next';
import React from 'react';
import { personSchema } from '@/lib/seo';

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </section>
  );
}
