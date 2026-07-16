import { createMetadata, DEFAULT_IMAGE_PATH } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Terms of Service — Express Webcraft",
  description: "Read the Express Webcraft Terms of Service and Engagement Protocol detailing custom website development agreement and guidelines.",
  path: "/terms-and-conditions",
  image: DEFAULT_IMAGE_PATH,
  imageAlt: "Express Webcraft Terms of Service",
  keywords: [
    "terms of service",
    "engagement protocol",
    "express webcraft agreement",
    "development terms",
  ],
});

export default function TermsAndConditionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
