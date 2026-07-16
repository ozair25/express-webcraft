import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Elite Digital Portfolio — Express Webcraft',
  description: 'View our handpicked showcase of high-performance custom websites and bespoke digital designs built by Express Webcraft. Quality and speed guaranteed.',
  alternates: {
    canonical: 'https://www.expresswebcraft.com/portfolio',
  },
  openGraph: {
    title: 'Elite Digital Portfolio — Express Webcraft',
    description: 'View our handpicked showcase of high-performance custom websites and bespoke digital designs built by Express Webcraft. Quality and speed guaranteed.',
    url: 'https://www.expresswebcraft.com/portfolio',
    type: 'website',
    siteName: 'Express Webcraft',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.expresswebcraft.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Express Webcraft Elite Digital Portfolio Showcase',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elite Digital Portfolio — Express Webcraft',
    description: 'View our handpicked showcase of high-performance custom websites and bespoke digital designs built by Express Webcraft. Quality and speed guaranteed.',
    images: ['https://www.expresswebcraft.com/og-image.png'],
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
