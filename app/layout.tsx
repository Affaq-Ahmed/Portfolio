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
    default: 'Affaq Ahmed — Full Stack Developer',
    template: '%s | Affaq Ahmed',
  },
  description:
    'Affaq Ahmed — Full Stack Developer specializing in modern web applications, AI integration, and scalable backend systems. Explore portfolio, skills, and resume.',
  keywords: [
    'Affaq Ahmed',
    'Full Stack Developer',
    'MERN Stack',
    'AI Engineer',
    'Software Engineer',
    'Portfolio',
  ],
  authors: [{ name: 'Affaq Ahmed', url: 'https://affaqahmed.com' }],
  creator: 'Affaq Ahmed',
  publisher: 'Affaq Ahmed',
  alternates: {
    canonical: 'https://affaqahmed.com',
  },
  openGraph: {
    title: 'Affaq Ahmed — Full Stack Developer',
    description:
      'Building performant web applications with modern technologies. Explore projects, experience, and resume.',
    url: 'https://affaqahmed.com',
    siteName: 'Affaq Ahmed',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Affaq Ahmed — Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affaq Ahmed — Full Stack Developer',
    description:
      'Explore portfolio and resume of Affaq Ahmed, Full Stack Developer and AI Engineer.',
    creator: '@affaqahmed',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  manifest: '/manifest.json',
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        {/* Identity / rel="me" links for profile verification */}
        <link rel='me' href='https://github.com/Affaq-Ahmed' />
        <link rel='me' href='https://linkedin.com/in/affaq-ahmed' />
        <link rel='me' href='https://instagram.com/affaqahmedawann' />
        <link rel='me' href='https://facebook.com/affaqahmedawann' />
        <link rel='me' href='mailto:affaqahmed165@gmail.com' />
      </head>
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
