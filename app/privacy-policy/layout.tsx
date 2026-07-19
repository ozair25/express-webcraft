import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Express Webcraft',
  description: 'Our standard privacy protocols, discrete data protection measures, and complete client confidentiality policies.',
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy — Express Webcraft',
    description: 'Our standard privacy protocols, discrete data protection measures, and complete client confidentiality policies.',
    url: 'https://www.expresswebcraft.com/privacy-policy',
    type: 'website',
    siteName: 'Express Webcraft',
    locale: 'en_US',
    images: [
      {
        url: 'https://res.cloudinary.com/dtrvyelcg/image/upload/v1784138035/ChatGPT_Image_Jul_15_2026_11_13_18_PM_kajaoz.jpg',
        width: 1200,
        height: 630,
        alt: 'Privacy Policy Legal Codex — Express Webcraft',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy — Express Webcraft',
    description: 'Our standard privacy protocols, discrete data protection measures, and complete client confidentiality policies.',
    images: ['https://res.cloudinary.com/dtrvyelcg/image/upload/v1784138035/ChatGPT_Image_Jul_15_2026_11_13_18_PM_kajaoz.jpg'],
  },
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
