'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/components/theme-toggle';

const Header = () => {
  const pathname = usePathname();

  // Function to check if the link is active
  const isActive = (path: string) => pathname === path;

  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
      <nav className='container flex max-w-3xl items-center justify-between'>
        <div>
          <Link href='/' className='font-serif text-2xl font-bold'>
            AA
          </Link>
        </div>

        <ul className='flex items-center gap-2 text-sm font-light text-muted-foreground sm:gap-6'>
          <li
            className={`underline underline-offset-2 transition-colors hover:text-foreground ${
              isActive('/resume')
                ? 'font-medium text-foreground no-underline'
                : ''
            }`}
          >
            <Link href='/resume'>Resume</Link>
          </li>
          <li
            className={`underline underline-offset-2 transition-colors hover:text-foreground ${
              isActive('/posts')
                ? 'font-medium text-foreground no-underline'
                : ''
            }`}
          >
            <Link href='/posts'>Posts</Link>
          </li>
          <li
            className={`underline underline-offset-2 transition-colors hover:text-foreground ${
              isActive('/projects')
                ? 'font-medium text-foreground no-underline'
                : ''
            }`}
          >
            <Link href='/projects'>Projects</Link>
          </li>
          <li
            className={`underline underline-offset-2 transition-colors hover:text-foreground ${
              isActive('/contact')
                ? 'font-medium text-foreground no-underline'
                : ''
            }`}
          >
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
