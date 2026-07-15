import type {Metadata} from 'next';
import { Playfair_Display, Inter, Alex_Brush } from 'next/font/google';
import './globals.css'; // Global styles
import StructuredData from '@/components/StructuredData';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const alex = Alex_Brush({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-alex',
});

export const metadata: Metadata = {
  title: 'Express Webcraft — Bespoke Web Design & High-Performance Engineering Studio',
  description: 'Express Webcraft is a premium web agency providing bespoke Custom Website Design, Web Development, High-Converting Landing Pages, E-commerce Solutions, SEO & Performance, UI/UX Design, Website Maintenance, and Analytics & Growth.',
  keywords: [
    'custom website design',
    'premium web development',
    'landing page design',
    'e-commerce solutions',
    'technical seo',
    'core web vitals optimization',
    'ui ux design',
    'website maintenance',
    'analytics and growth',
    'express webcraft services',
    'luxury creative agency'
  ],
  metadataBase: new URL('https://expresswebcraft.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Express Webcraft — Bespoke Web Design & High-Performance Engineering Studio',
    description: 'Explore our elite digital services: bespoke Website Design, scalable Web Development, conversion-optimized Landing Pages, E-commerce, Technical SEO, UI/UX design, Maintenance, and Analytics.',
    url: 'https://expresswebcraft.com',
    siteName: 'Express Webcraft',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/dtrvyelcg/image/upload/v1783525342/ChatGPT_Image_Jul_8_2026_03_24_57_AM_pvot5h.png',
        width: 1200,
        height: 630,
        alt: 'Express Webcraft — What We Provide - Services Overview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Express Webcraft — Bespoke Web Design & High-Performance Engineering Studio',
    description: 'Explore our elite digital services: bespoke Website Design, scalable Web Development, conversion-optimized Landing Pages, E-commerce, Technical SEO, UI/UX design, Maintenance, and Analytics.',
    images: ['https://res.cloudinary.com/dtrvyelcg/image/upload/v1783525342/ChatGPT_Image_Jul_8_2026_03_24_57_AM_pvot5h.png'],
  },
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
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${alex.variable}`}>
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://picsum.photos" />
        <StructuredData />
      </head>
      <body suppressHydrationWarning className="antialiased font-sans bg-brand-cream text-brand-charcoal grainy-bg">
        {children}
      </body>
    </html>
  );
}

