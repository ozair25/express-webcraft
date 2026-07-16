import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Express Webcraft — Premium Digital Artistry & Web Development",
    short_name: "Express Webcraft",
    description: "Crafting fast, modern, and conversion-focused websites that help businesses stand out and grow online.",
    start_url: "/",
    display: "standalone",
    background_color: "#E8EAED",
    theme_color: "#0B1B3A",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
