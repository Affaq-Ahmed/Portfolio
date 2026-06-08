import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://affaqahmed.com/sitemap.xml',
    host: 'https://affaqahmed.com',
  };
}
