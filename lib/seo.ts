export const SITE_URL = 'https://affaqahmed.com';

/**
 * Canonical Person/entity schema for Affaq Ahmed.
 * Single source of truth — rendered as JSON-LD on the home and resume pages
 * and consumed by search engines and AI/answer engines (GEO).
 */
export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Affaq Ahmed',
  url: SITE_URL,
  image: `${SITE_URL}/og-image.png`,
  jobTitle: 'Senior Software Engineer',
  email: 'mailto:affaqahmed165@gmail.com',
  description:
    'Affaq Ahmed is a Senior Software Engineer specializing in full-stack development (Node.js, TypeScript, Next.js, React) and AI integration (RAG pipelines and multi-provider LLM integrations).',
  knowsAbout: [
    'Full-Stack Development',
    'Node.js',
    'TypeScript',
    'Next.js',
    'React',
    'React Native',
    'NestJS',
    'MongoDB',
    'PostgreSQL',
    'AWS',
    'RAG Pipelines',
    'LLM Integration',
    'Socket.IO',
    'Stripe',
  ],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Senior Software Engineer',
    occupationalCategory: '15-1252 Software Developers',
  },
  worksFor: { '@type': 'Organization', name: 'DevCache' },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'National University of Computer and Emerging Sciences (FAST-NUCES)',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lahore',
    addressCountry: 'PK',
  },
  sameAs: [
    'https://github.com/Affaq-Ahmed',
    'https://linkedin.com/in/affaq-ahmed',
  ],
};
