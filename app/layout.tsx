import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Inter, Alex_Brush } from 'next/font/google';
import './globals.css'; // Global styles
import StructuredData from '@/components/StructuredData';

export const viewport: Viewport = {
  themeColor: '#0B1B3A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

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
  metadataBase: new URL('https://www.expresswebcraft.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Express Webcraft — Bespoke Web Design & High-Performance Engineering Studio',
    description: 'Explore our elite digital services: bespoke Website Design, scalable Web Development, conversion-optimized Landing Pages, E-commerce, Technical SEO, UI/UX design, Maintenance, and Analytics.',
    url: 'https://www.expresswebcraft.com',
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
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Express Webcraft',
  },
  applicationName: 'Express Webcraft',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${alex.variable}`}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LVNGNGWWY0" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LVNGNGWWY0');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "xna4kj796k");
            `,
          }}
        />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://picsum.photos" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="EWC" />
        <link rel="manifest" href="/site.webmanifest" />
        <StructuredData />
      </head>
      <body suppressHydrationWarning className="antialiased font-sans bg-brand-cream text-brand-charcoal grainy-bg">
        {children}
      </body>
    </html>
  );
}

