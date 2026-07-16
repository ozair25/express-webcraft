import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Inter, Alex_Brush } from 'next/font/google';
import './globals.css'; // Global styles
import StructuredData from '@/components/StructuredData';
import { createMetadata, DEFAULT_DESCRIPTION, DEFAULT_IMAGE_PATH } from '@/lib/metadata';

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
  ...createMetadata({
    title: 'Express Webcraft — Bespoke Web Design & High-Performance Engineering Studio',
    description: DEFAULT_DESCRIPTION,
    path: '/',
    image: DEFAULT_IMAGE_PATH,
    imageAlt: 'Express Webcraft — Premium website design, development, and growth services',
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
      'luxury creative agency',
    ],
  }),
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

