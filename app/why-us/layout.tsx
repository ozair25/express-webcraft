import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Choose Express Webcraft — Uncompromising Digital Quality',
  description: 'Discover what makes Express Webcraft Indore’s elite digital engineering studio. Our design philosophy, speed benchmarks, security focus, and custom client processes.',
  alternates: {
    canonical: '/why-us',
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
        url: 'https://res.cloudinary.com/dtrvyelcg/image/upload/v1784138035/ChatGPT_Image_Jul_15_2026_11_13_18_PM_kajaoz.jpg',
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
    images: ['https://res.cloudinary.com/dtrvyelcg/image/upload/v1784138035/ChatGPT_Image_Jul_15_2026_11_13_18_PM_kajaoz.jpg'],
  },
};

export default function WhyUsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
