import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Providers from '@/components/providers';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playFair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://affaqahmed.com'),
  title: {
    default: `Affaq Ahmed's Resumé`,
    template: `%s - Affaq Ahmed's Resumé`,
  },
  description:
    'Portfolio and résumé website of Affaq Ahmed — showcasing skills, projects, and experience in modern web and AI engineering.',
  keywords: [
    'Affaq Ahmed',
    'Affaq Ahmed portfolio',
    'Affaq Ahmed resume',
    'AI Engineer',
    'MERN Stack Developer',
    'Next.js Developer',
  ],
  openGraph: {
    type: 'website',
    url: 'https://affaqahmed.com',
    title: "Affaq Ahmed's Résumé",
    description:
      'Portfolio and résumé website of Affaq Ahmed — showcasing skills, projects, and experience in modern web and AI engineering.',
    siteName: 'Affaq Ahmed',
    images: [
      {
        url: '/og-image.png', // Add a preview image for social sharing
        width: 1200,
        height: 630,
        alt: "Affaq Ahmed's Portfolio",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Affaq Ahmed's Résumé",
    description:
      'Portfolio and résumé website of Affaq Ahmed — showcasing skills, projects, and experience in modern web and AI engineering.',
    images: ['/og-image.png'],
    creator: '@affaqahmed', // optional
  },
  alternates: {
    canonical: 'https://affaqahmed.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          `flex min-h-screen flex-col font-sans antialiased`,
          inter.variable,
          playFair.variable,
        )}
      >
        <Providers>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
