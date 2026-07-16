import { createMetadata, DEFAULT_IMAGE_PATH } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "FAQ — Express Webcraft Frequently Asked Questions",
  description: "Find answers about custom website pricing, delivery timelines, SEO strategy, design process, and premium web development support.",
  path: "/faq",
  image: DEFAULT_IMAGE_PATH,
  imageAlt: "Express Webcraft FAQ",
  keywords: [
    "express webcraft faq",
    "website design questions",
    "custom website pricing questions",
    "premium web development faq",
  ],
});

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
