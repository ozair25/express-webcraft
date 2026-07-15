import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.expresswebcraft.com";
  
  const services = [
    "custom-website-design",
    "web-development",
    "landing-pages",
    "e-commerce-solutions",
    "seo-performance",
    "ui-ux-design",
    "website-maintenance-support",
    "analytics-growth"
  ];

  const serviceUrls = services.map(slug => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    ...serviceUrls
  ];
}

