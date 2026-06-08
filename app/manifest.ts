import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Affaq Ahmed — Senior Software Engineer',
    short_name: 'Affaq Ahmed',
    description:
      'Portfolio of Affaq Ahmed — Senior Software Engineer specializing in full-stack development and AI integration.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0b',
    theme_color: '#0a0a0b',
    icons: [{ src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
  };
}
