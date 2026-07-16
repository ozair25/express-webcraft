import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commission an Project — Express Webcraft',
  description: 'Submit an inquiry or schedule a project brief with our digital engineering studio. Let’s build your elite, high-performance web flagship.',
  alternates: {
    canonical: 'https://www.expresswebcraft.com/contact',
  },
  openGraph: {
    title: 'Commission an Project — Express Webcraft',
    description: 'Submit an inquiry or schedule a project brief with our digital engineering studio. Let’s build your elite, high-performance web flagship.',
    url: 'https://www.expresswebcraft.com/contact',
    type: 'website',
    siteName: 'Express Webcraft',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.expresswebcraft.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Commission an Project — Express Webcraft Contact Portal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commission an Project — Express Webcraft',
    description: 'Submit an inquiry or schedule a project brief with our digital engineering studio. Let’s build your elite, high-performance web flagship.',
    images: ['https://www.expresswebcraft.com/og-image.png'],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
