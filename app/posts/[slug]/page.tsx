import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ArrowLeftIcon } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/posts';
import { formatDate } from '@/lib/utils';
// import { MDXRemote } from 'next-mdx-remote/rsc';
import MDXContent from '@/components/mdx-content';

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { metadata, content } = post;
  const { title, image, author, publishedAt } = metadata;

  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <Link
          href='/posts'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='size-5' />
          <span>Back to posts</span>
        </Link>

        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              className='object-cover'
              src={image}
              alt={title ?? ''}
              fill
            />
          </div>
        )}

        <header>
          <h1 className='title'>{title}</h1>
          <p className='mt-3 text-xs text-muted-foreground'>
            {author} / {formatDate(publishedAt ?? '')}
          </p>
        </header>

        <main className='prose mt-16 dark:prose-invert'>
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  );
}