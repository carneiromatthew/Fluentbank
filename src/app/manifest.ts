import type { MetadataRoute } from "next";

/**
 * Web app manifest — makes FluentBank installable to the phone home screen and
 * launchable standalone (no browser chrome). Served at /manifest.webmanifest.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FluentBank — Build your vocabulary portfolio",
    short_name: "FluentBank",
    description:
      "Bank the vocabulary you need to reach B1, B2, C1 and C2 fluency. Every word you master is a deposit into your FluentBank.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#052e22",
    theme_color: "#0c8f63",
    categories: ["education"],
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
