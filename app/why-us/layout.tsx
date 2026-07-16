import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Choose Express Webcraft — Uncompromising Digital Quality',
  description: 'Discover what makes Express Webcraft Indore’s elite digital engineering studio. Our design philosophy, speed benchmarks, security focus, and custom client processes.',
  alternates: {
    canonical: 'https://www.expresswebcraft.com/why-us',
  },
  openGraph: {
    title: 'Why Choose Express Webcraft — Uncompromising Digital Quality',
    description: 'Discover what makes Express Webcraft Indore’s elite digital engineering studio. Our design philosophy, speed benchmarks, security focus, and custom client processes.',
    url: 'https://www.expresswebcraft.com/why-us',
    type: 'website',
    siteName: 'Express Webcraft',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.expresswebcraft.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Why Choose Express Webcraft — Elite Standards',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Choose Express Webcraft — Uncompromising Digital Quality',
    description: 'Discover what makes Express Webcraft Indore’s elite digital engineering studio. Our design philosophy, speed benchmarks, security focus, and custom client processes.',
    images: ['https://www.expresswebcraft.com/og-image.png'],
  },
};

export default function WhyUsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
