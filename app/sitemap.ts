import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.expresswebcraft.com";
  
  const staticPages = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/why-us",
    "/process",
    "/pricing",
    "/faq",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

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

  const staticUrls = staticPages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page === "" ? 1.0 : 0.9,
  }));

  const serviceUrls = services.map(slug => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    ...staticUrls,
    ...serviceUrls
  ];
}

