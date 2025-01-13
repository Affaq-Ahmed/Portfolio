'use client';

import { ThemeProvider, useTheme } from 'next-themes';
import React from 'react';
import { Toaster } from './ui/sonner';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      enableSystem
      attribute='class'
      defaultTheme='system'
      disableTransitionOnChange
    >
      {children}
      <ToastProvider />
    </ThemeProvider>
  );
}

function ToastProvider() {
  const { resolvedTheme } = useTheme();

  return (
    <Toaster theme={resolvedTheme === 'dark' ? 'dark' : 'light'} />
  );
}
