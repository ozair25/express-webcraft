import type { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers();
  const host = headersList.get("host") || "";
  
  const isProduction = host === "www.expresswebcraft.com" || host === "expresswebcraft.com";

  if (!isProduction && !host.includes("localhost") && !host.includes("127.0.0.1")) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  const baseUrl = "https://www.expresswebcraft.com";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/admin/", "/api/", "/_next/", "/static/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
