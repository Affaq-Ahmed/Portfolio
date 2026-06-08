import Projects from '@/components/projects/projects';
import { getProjects } from '@/lib/projects';
import { Metadata } from 'next';
import React from 'react';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Projects',
    description:
      'Explore projects by Affaq Ahmed, Senior Software Engineer — full-stack and AI builds across Node.js, Next.js, React, React Native, real-time systems, payments, and LLM/RAG integrations, with tech stacks, roles, and live demos.',
    alternates: { canonical: 'https://affaqahmed.com/projects' },
    openGraph: {
      title: 'Projects | Affaq Ahmed',
      description:
        'Full-stack and AI projects by Affaq Ahmed — tech stacks, roles, and live demos.',
      url: 'https://affaqahmed.com/projects',
      type: 'website',
      images: ['/og-image.png'],
    },
  };
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Projects</h1>

        <Projects projects={projects} />
      </div>
    </section>
  );
}
