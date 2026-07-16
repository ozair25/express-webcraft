import { createMetadata, DEFAULT_IMAGE_PATH } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Portfolio — Express Webcraft Luxury Web Design Case Studies",
  description: "See premium digital case studies from Express Webcraft, including custom website redesigns, high-conversion pages, and luxury brand experiences.",
  path: "/portfolio",
  image: DEFAULT_IMAGE_PATH,
  imageAlt: "Express Webcraft Portfolio — Premium web design case studies",
  keywords: [
    "express webcraft portfolio",
    "luxury web design case studies",
    "premium website examples",
    "high-conversion landing pages",
  ],
});

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
