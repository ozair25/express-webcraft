import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Premium Services — Express Webcraft',
  description: 'Explore our bespoke digital services: custom website design, scalable full-stack development, landing pages, e-commerce, technical SEO, UI/UX design, website maintenance, and analytics.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Our Premium Services — Express Webcraft',
    description: 'Explore our bespoke digital services: custom website design, scalable full-stack development, landing pages, e-commerce, technical SEO, UI/UX design, website maintenance, and analytics.',
    url: 'https://www.expresswebcraft.com/services',
    type: 'website',
    siteName: 'Express Webcraft',
    locale: 'en_US',
    images: [
      {
        url: 'https://res.cloudinary.com/dtrvyelcg/image/upload/v1784138035/ChatGPT_Image_Jul_15_2026_11_13_18_PM_kajaoz.jpg',
        width: 1200,
        height: 630,
        alt: 'Express Webcraft Premium Web Services Overview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Premium Services — Express Webcraft',
    description: 'Explore our bespoke digital services: custom website design, scalable full-stack development, landing pages, e-commerce, technical SEO, UI/UX design, website maintenance, and analytics.',
    images: ['https://res.cloudinary.com/dtrvyelcg/image/upload/v1784138035/ChatGPT_Image_Jul_15_2026_11_13_18_PM_kajaoz.jpg'],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
