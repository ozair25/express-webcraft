import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.expresswebcraft.com";
  
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/ozairadmin", "/ozairadmin/", "/api/", "/_next/", "/static/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
