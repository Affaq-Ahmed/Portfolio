import Intro from '@/components/landing/intro';
import RecentPosts from '@/components/posts/recent-posts';
import RecentProjects from '@/components/projects/recent-projects';
import React from 'react';

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <Intro />

        <RecentPosts />
        <RecentProjects />
      </div>
    </section>
  );
}
