import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sagar Pratap Singh (Devvx) — Advanced AI & Backend Engineer',
    short_name: 'Sagar Pratap Singh · Devvx',
    description: 'Official portfolio of Sagar Pratap Singh (Devvx) — Advanced AI & Backend Engineer.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8F8FA',
    theme_color: '#121214',
    icons: [
      {
        src: '/images/devvx-headshot.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/devvx-headshot.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
