import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.expresswebcraft.com";

  const corePages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "services", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "portfolio", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "why-us", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "inquiry-guide", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "atelier-inquiry-guide", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "terms-and-conditions", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const coreUrls = corePages.map(page => ({
    url: page.path ? `${baseUrl}/${page.path}` : baseUrl,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
  return [
    ...coreUrls
  ];
}