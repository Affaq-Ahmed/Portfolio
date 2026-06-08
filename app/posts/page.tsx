import PostsWithSearch from '@/components/posts/posts-with-search';
import { getPosts } from '@/lib/posts';
import { Metadata } from 'next';
import React from 'react';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Posts',
    description:
      'Writing by Affaq Ahmed, Senior Software Engineer — essays and reflections on the path into software engineering, from sports and college to building full-stack and AI products.',
    alternates: { canonical: 'https://affaqahmed.com/posts' },
    openGraph: {
      title: 'Posts | Affaq Ahmed',
      description:
        'Essays and reflections by Affaq Ahmed on the journey into software engineering.',
      url: 'https://affaqahmed.com/posts',
      type: 'website',
      images: ['/og-image.png'],
    },
  };
};

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Posts</h1>

        <PostsWithSearch posts={posts} />
      </div>
    </section>
  );
}
