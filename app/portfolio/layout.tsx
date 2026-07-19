import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Elite Digital Portfolio — Express Webcraft',
  description: 'View our handpicked showcase of high-performance custom websites and bespoke digital designs built by Express Webcraft. Quality and speed guaranteed.',
  alternates: {
    canonical: '/portfolio',
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
        url: 'https://res.cloudinary.com/dtrvyelcg/image/upload/v1784138035/ChatGPT_Image_Jul_15_2026_11_13_18_PM_kajaoz.jpg',
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
    images: ['https://res.cloudinary.com/dtrvyelcg/image/upload/v1784138035/ChatGPT_Image_Jul_15_2026_11_13_18_PM_kajaoz.jpg'],
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
