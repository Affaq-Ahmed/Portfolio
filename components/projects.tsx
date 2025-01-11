import React from 'react';
import Link from 'next/link';

import { formatDate } from '@/lib/utils';
import { ProjectMetadata } from '@/lib/projects';

export default function Projects({
  projects,
}: {
  projects: ProjectMetadata[];
}) {
  return (
    <ul className='flex flex-col gap-8'>
      {projects.map((project) => (
        <li key={project.slug}>
          <Link
            href={`projects/${project.slug}`}
            className='flex flex-col justify-between gap-x-4 gap-y-1 sm:flex-row'
          >
            <div className='max-w-lg'>
              <p className='text-lg font-semibold'>{project.title}</p>
              <p className='mt-1 line-clamp-2 text-sm font-light text-muted-foreground'>
                {project.summary}
              </p>
            </div>

            {project.publishedAt && (
              <p className='mt-1 text-sm font-light'>
                {formatDate(project.publishedAt)}
              </p>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
