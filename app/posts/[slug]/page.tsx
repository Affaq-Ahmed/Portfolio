import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ArrowLeftIcon } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getPostBySlug, getPosts } from '@/lib/posts';
import { formatDate } from '@/lib/utils';
import MDXContent from '@/components/mdx-content';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const posts = await getPosts();
  const slugs = posts.map((post) => ({ slug: post.slug }));

  return slugs;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const { title, summary, image, publishedAt, author } = post.metadata;
  const url = `https://affaqahmed.com/posts/${slug}`;

  return {
    title,
    description: summary,
    authors: author ? [{ name: author }] : undefined,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: summary,
      type: 'article',
      url,
      publishedTime: publishedAt,
      authors: author ? [author] : undefined,
      images: image ? [{ url: image, alt: title }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: summary,
      images: image ? [image] : undefined,
    },
  };
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { metadata, content } = post;
  const { title, summary, image, author, publishedAt } = metadata;

  const url = `https://affaqahmed.com/posts/${slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: summary,
    image: image ? `https://affaqahmed.com${image}` : undefined,
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: {
      '@type': 'Person',
      name: author || 'Affaq Ahmed',
      url: 'https://affaqahmed.com',
    },
    publisher: {
      '@type': 'Person',
      name: 'Affaq Ahmed',
      url: 'https://affaqahmed.com',
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
  };

  return (
    <section className='pb-24 pt-32'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
