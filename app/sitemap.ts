import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { typefaces } from "@/lib/typefaces";
import { getAllPosts } from "@/lib/journal";

// Replace with the production origin once deployed.
const BASE = "https://grafema.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/typefaces",
    "/foundry",
    "/journal",
    "/in-use",
    ...typefaces.map((t) => `/typefaces/${t.slug}`),
    ...getAllPosts().map((p) => `/journal/${p.slug}`),
  ];

  return routing.locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${BASE}/${locale}${path}`,
      lastModified: new Date(),
    })),
  );
}
