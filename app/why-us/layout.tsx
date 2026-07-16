import { createMetadata, DEFAULT_IMAGE_PATH } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Why Choose Express Webcraft — The Difference is Everything",
  description: "Discover why Express Webcraft is the premier choice for custom website design and high-performance development. We combine luxury aesthetics with elite engineering.",
  path: "/why-us",
  image: DEFAULT_IMAGE_PATH,
  imageAlt: "Why Choose Express Webcraft — Premium Web Solutions",
  keywords: [
    "why choose express webcraft",
    "express webcraft advantage",
    "premium web development benefits",
    "luxury web design studio difference",
  ],
});

export default function WhyUsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
