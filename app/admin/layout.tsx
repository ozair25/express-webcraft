import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Console — Express Webcraft",
  description: "Secure administrative portal for commission inquiries.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
