import type { Metadata } from "next";

export const SITE_URL = "https://www.expresswebcraft.com";
export const SITE_NAME = "Express Webcraft";
export const DEFAULT_DESCRIPTION =
  "Express Webcraft is a premium web design and development studio creating bespoke, high-converting websites for businesses that want luxury-grade digital experiences.";
export const DEFAULT_IMAGE_PATH = "/og-express-webcraft.jpg";
export const DEFAULT_IMAGE_ALT = "Express Webcraft — Premium website design, development, and growth services";

export const DEFAULT_KEYWORDS = [
  "express webcraft",
  "premium website design",
  "custom web development",
  "landing page design",
  "ecommerce solutions",
  "technical seo",
  "ui ux design",
  "website maintenance",
  "analytics and growth",
  "luxury web agency",
];

const toAbsoluteUrl = (path: string) => new URL(path, SITE_URL).toString();

export function createMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  keywords = DEFAULT_KEYWORDS,
  image = DEFAULT_IMAGE_PATH,
  imageAlt = DEFAULT_IMAGE_ALT,
}: {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
}): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const url = toAbsoluteUrl(canonicalPath);
  const imageUrl = toAbsoluteUrl(image);

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
