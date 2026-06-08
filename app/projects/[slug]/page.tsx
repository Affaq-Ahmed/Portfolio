import Link from 'next/link';
import Image from 'next/image';

import { formatDate } from '@/lib/utils';
import MDXContent from '@/components/mdx-content';
import { ArrowLeftIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { getProjectBySlug, getProjects } from '@/lib/projects';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const projects = await getProjects();
  const slugs = projects.map((project) => ({ slug: project.slug }));

  return slugs;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const { title, summary, image, publishedAt, stack, author } =
    project.metadata;
  const url = `https://affaqahmed.com/projects/${slug}`;

  return {
    title,
    description: summary,
    keywords: stack,
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

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { metadata, content } = project;
  const {
    title,
    summary,
    image,
    author,
    publishedAt,
    role,
    category,
    type,
    company,
    stack,
    liveUrl,
    githubUrl,
  } = metadata;

  const url = `https://affaqahmed.com/projects/${slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: title,
    description: summary,
    url,
    image: image ? `https://affaqahmed.com${image}` : undefined,
    datePublished: publishedAt,
    author: author ? { '@type': 'Person', name: author } : undefined,
    keywords: stack?.join(', '),
    ...(company && {
      sourceOrganization: { '@type': 'Organization', name: company },
    }),
    ...(liveUrl && { sameAs: liveUrl }),
    ...(githubUrl && { codeRepository: githubUrl }),
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://affaqahmed.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Projects',
        item: 'https://affaqahmed.com/projects',
      },
      { '@type': 'ListItem', position: 3, name: title, item: url },
    ],
  };

  return (
    <section className='pb-24 pt-32'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <div className='container max-w-3xl'>
        <Link
          href='/projects'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to projects</span>
        </Link>

        {image && (
          <div className='relative mb-6 aspect-1200/630 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
            />
          </div>
        )}

        <header>
          {type && (
            <span className='mb-3 inline-block rounded-full bg-muted px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground'>
              {type}
            </span>
          )}
          <h1 className='title'>{title}</h1>
          <p className='mt-3 text-xs text-muted-foreground'>
            {[author, role, company, category].filter(Boolean).join(' · ')}
            {publishedAt && ` / ${formatDate(publishedAt)}`}
          </p>

          {stack && stack.length > 0 && (
            <ul className='mt-4 flex flex-wrap gap-2'>
              {stack.map((tech) => (
                <li
                  key={tech}
                  className='rounded-full border border-border px-3 py-1 text-xs text-muted-foreground'
                >
                  {tech}
                </li>
              ))}
            </ul>
          )}

          {(liveUrl || githubUrl) && (
            <div className='mt-6 flex flex-wrap gap-3'>
              {liveUrl && (
                <a
                  href={liveUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90'
                >
                  Live Demo
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted'
                >
                  <GitHubLogoIcon className='h-4 w-4' />
                  Source Code
                </a>
              )}
            </div>
          )}
        </header>

        <main className='prose mt-16 dark:prose-invert'>
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  );
}
