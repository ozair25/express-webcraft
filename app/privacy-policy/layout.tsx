import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Express Webcraft',
  description: 'Our standard privacy protocols, discrete data protection measures, and complete client confidentiality policies.',
  alternates: {
    canonical: 'https://www.expresswebcraft.com/privacy-policy',
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
        url: 'https://www.expresswebcraft.com/og-image.png',
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
    images: ['https://www.expresswebcraft.com/og-image.png'],
  },
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
