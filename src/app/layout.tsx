import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8F8FA' },
    { media: '(prefers-color-scheme: dark)', color: '#121214' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://devvx.in'),
  title: {
    default: 'Sagar Pratap Singh (Devvx) — Advanced AI & Backend Engineer',
    template: '%s | Sagar Pratap Singh (Devvx)',
  },
  description:
    'Official portfolio of Sagar Pratap Singh (Devvx) — Advanced AI & Backend Engineer. Building production AI intelligence pipelines, high-performance FastAPI backends, PostgreSQL schemas, and cloud architectures.',
  keywords: [
    'Sagar Pratap Singh',
    'Sagar Pratap Singh devvx',
    'Sagar Pratap Singh AI',
    'Sagar Pratap Singh backend engineer',
    'Sagar Singh',
    'Devvx',
    'devvx.in',
    'DevvSagar',
    'Advanced AI Backend Engineer',
    'AI Backend Engineer',
    'Backend Engineer',
    'Python Developer',
    'FastAPI Engineer',
    'AssemblyAI Integration',
    'PostgreSQL & SQLAlchemy',
    'Docker & Nginx',
    'AWS S3 & Boto3',
    'JWT Authentication',
    'Data Structures & Algorithms',
    'Full Stack AI Developer',
    'DevLog',
    'Scribo',
  ],
  authors: [{ name: 'Sagar Pratap Singh (Devvx)', url: 'https://devvx.in' }],
  creator: 'Sagar Pratap Singh (Devvx)',
  publisher: 'Sagar Pratap Singh (Devvx)',
  category: 'technology',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'profile',
    firstName: 'Sagar Pratap',
    lastName: 'Singh',
    username: 'devvx',
    gender: 'male',
    locale: 'en_US',
    url: 'https://devvx.in',
    siteName: 'Sagar Pratap Singh (Devvx) Portfolio',
    title: 'Sagar Pratap Singh (Devvx) — Advanced AI & Backend Engineer',
    description:
      'Official portfolio of Sagar Pratap Singh (Devvx) — Advanced AI & Backend Engineer. Building production AI intelligence pipelines, high-performance FastAPI backends, PostgreSQL schemas, and cloud architectures.',
    images: [
      {
        url: 'https://devvx.in/images/devvx-photo.png',
        width: 682,
        height: 1024,
        alt: 'Sagar Pratap Singh (Devvx) — Advanced AI & Backend Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sagar Pratap Singh (Devvx) — Advanced AI & Backend Engineer',
    description:
      'Official portfolio of Sagar Pratap Singh (Devvx) — Advanced AI & Backend Engineer. Building production AI intelligence pipelines, high-performance FastAPI backends, PostgreSQL schemas, and cloud architectures.',
    creator: '@devvxsagar',
    images: ['https://devvx.in/images/devvx-photo.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.png', sizes: '96x96', type: 'image/png' },
      { url: '/images/devvx-headshot.png', sizes: '300x300', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://devvx.in',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://devvx.in/#person',
      name: 'Sagar Pratap Singh',
      givenName: 'Sagar',
      additionalName: 'Pratap',
      familyName: 'Singh',
      alternateName: ['Devvx', 'Sagar Singh', 'DevvSagar', 'devvx.in'],
      jobTitle: 'Advanced AI & Backend Engineer',
      gender: 'https://schema.org/Male',
      url: 'https://devvx.in',
      image: 'https://devvx.in/images/devvx-photo.png',
      sameAs: [
        'https://github.com/DevvSagar',
        'https://www.linkedin.com/in/devvsag',
        'https://x.com/devvxsagar',
        'https://discord.com/users/devvx.',
        'https://www.instagram.com/sagarssinghh',
      ],
      hasOccupation: {
        '@type': 'Occupation',
        name: 'Advanced AI & Backend Engineer',
        skills: 'Python, FastAPI, AssemblyAI, PostgreSQL, Docker, AWS S3, System Design, REST APIs',
        occupationLocation: {
          '@type': 'Country',
          name: 'India',
        },
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kota',
        addressRegion: 'Rajasthan',
        addressCountry: 'India',
      },
      worksFor: {
        '@type': 'Organization',
        name: 'Independent Engineering',
        url: 'https://devvx.in',
      },
      knowsAbout: [
        'Advanced AI & Backend Engineering',
        'Python Backend Development',
        'FastAPI & Asynchronous REST APIs',
        'Speech-to-Text & AI Summarization (AssemblyAI)',
        'PostgreSQL & SQLAlchemy ORM',
        'JWT Authentication & RBAC Security',
        'AWS S3 & Boto3 Cloud Storage',
        'Docker & Nginx Deployment',
        'Data Structures & Algorithms in Python',
        'Full-Stack Web Development',
      ],
      description:
        'Sagar Pratap Singh (known as Devvx) is an Advanced AI & Backend Engineer specializing in building production-grade AI intelligence pipelines, high-performance FastAPI backends, PostgreSQL schemas, and scalable cloud architectures.',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://devvx.in/#website',
      url: 'https://devvx.in',
      name: 'Sagar Pratap Singh (Devvx) — Portfolio',
      alternateName: ['Devvx Portfolio', 'devvx.in', 'Sagar Pratap Singh Official'],
      description:
        'Official website and engineering portfolio of Sagar Pratap Singh (Devvx) — Advanced AI & Backend Engineer.',
      publisher: {
        '@id': 'https://devvx.in/#person',
      },
    },
    {
      '@type': 'ProfilePage',
      '@id': 'https://devvx.in/#profilepage',
      url: 'https://devvx.in',
      name: 'Sagar Pratap Singh (Devvx) — Advanced AI & Backend Engineer',
      mainEntity: {
        '@id': 'https://devvx.in/#person',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="font-sans bg-[#F8F8FA] text-zinc-900 antialiased selection:bg-black selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
