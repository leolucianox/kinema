import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { kits } from "@/lib/kits";
import { getAllPosts } from "@/lib/journal";

const BASE = "https://kinema.studio";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/kits",
    "/studio",
    "/journal",
    "/work",
    ...kits.map((k) => `/kits/${k.slug}`),
    ...getAllPosts().map((p) => `/journal/${p.slug}`),
  ];

  return routing.locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${BASE}/${locale}${path}`,
      lastModified: new Date(),
    })),
  );
}
