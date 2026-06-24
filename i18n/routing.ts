import { defineRouting } from "next-intl/routing";

// PT is the default; EN is the secondary locale.
export const routing = defineRouting({
  locales: ["pt", "en"],
  defaultLocale: "pt",
});

export type Locale = (typeof routing.locales)[number];
