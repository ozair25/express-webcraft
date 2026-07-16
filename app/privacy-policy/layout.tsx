import { createMetadata, DEFAULT_IMAGE_PATH } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Privacy Policy — Express Webcraft",
  description: "Read the Express Webcraft privacy policy covering customer data handling, site usage, and inquiry information practices.",
  path: "/privacy-policy",
  image: DEFAULT_IMAGE_PATH,
  imageAlt: "Express Webcraft Privacy Policy",
  keywords: [
    "privacy policy",
    "website data handling",
    "express webcraft privacy",
    "inquiry data protection",
  ],
});

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
