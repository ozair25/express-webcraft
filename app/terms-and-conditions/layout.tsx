import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Express Webcraft',
  description: 'Terms of engagement, design blueprint timelines, revision entitlements, and digital ownership transfer guidelines.',
  alternates: {
    canonical: '/terms-and-conditions',
  },
  openGraph: {
    title: 'Terms of Service — Express Webcraft',
    description: 'Terms of engagement, design blueprint timelines, revision entitlements, and digital ownership transfer guidelines.',
    url: 'https://www.expresswebcraft.com/terms-and-conditions',
    type: 'website',
    siteName: 'Express Webcraft',
    locale: 'en_US',
    images: [
      {
        url: 'https://res.cloudinary.com/dtrvyelcg/image/upload/v1784138035/ChatGPT_Image_Jul_15_2026_11_13_18_PM_kajaoz.jpg',
        width: 1200,
        height: 630,
        alt: 'Terms of Engagement — Express Webcraft',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service — Express Webcraft',
    description: 'Terms of engagement, design blueprint timelines, revision entitlements, and digital ownership transfer guidelines.',
    images: ['https://res.cloudinary.com/dtrvyelcg/image/upload/v1784138035/ChatGPT_Image_Jul_15_2026_11_13_18_PM_kajaoz.jpg'],
  },
};

export default function TermsAndConditionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
