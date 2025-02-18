import Projects from '@/components/projects/projects';
import { getProjects } from '@/lib/projects';
import { Metadata } from 'next';
import React from 'react';

export const generateMetadata = (): Metadata => {
  return {
    title: `Projects`,
    description:
      'This is the projects page of Affaq Ahmed for this portfolio website',
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
