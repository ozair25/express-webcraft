import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Express Webcraft',
  description: 'Terms of engagement, design blueprint timelines, revision entitlements, and digital ownership transfer guidelines.',
  alternates: {
    canonical: 'https://www.expresswebcraft.com/terms-and-conditions',
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
        url: 'https://www.expresswebcraft.com/og-image.png',
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
    images: ['https://www.expresswebcraft.com/og-image.png'],
  },
};

export default function TermsAndConditionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
