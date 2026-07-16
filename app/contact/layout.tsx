import { createMetadata, DEFAULT_IMAGE_PATH } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact Express Webcraft — Premium Website Inquiry & Custom Quote",
  description: "Reach out to Express Webcraft to discuss your premium website project, custom quote, and bespoke design requirements.",
  path: "/contact",
  image: DEFAULT_IMAGE_PATH,
  imageAlt: "Contact Express Webcraft — Premium website inquiry",
  keywords: [
    "contact express webcraft",
    "premium website inquiry",
    "custom quote request",
    "bespoke web development consultation",
  ],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
