import { createMetadata, DEFAULT_IMAGE_PATH } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Premium Web Services — Express Webcraft Digital Solutions",
  description: "Explore expressive, high-performance web design, development, landing pages, e-commerce, SEO, UI/UX, maintenance, and analytics services.",
  path: "/services",
  image: DEFAULT_IMAGE_PATH,
  imageAlt: "Express Webcraft Premium Web Services",
  keywords: [
    "premium web services",
    "custom website design services",
    "web development services",
    "landing page agency",
    "seo performance services",
  ],
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
