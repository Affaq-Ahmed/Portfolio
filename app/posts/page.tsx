import PostsWithSearch from '@/components/posts/posts-with-search';
import { getPosts } from '@/lib/posts';
import { Metadata } from 'next';
import React from 'react';

export const generateMetadata = (): Metadata => {
  return {
    title: `Posts`,
    description:
      'This is the posts page of Affaq Ahmed for this portfolio website',
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
