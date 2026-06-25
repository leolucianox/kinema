import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/providers/theme-provider";
import { MenuProvider } from "@/components/layout/menu-context";
import { Navbar } from "@/components/layout/navbar";
import { MenuOverlay } from "@/components/layout/menu-overlay";
import { SiteFooter } from "@/components/layout/site-footer";
import { brand } from "@/lib/brand";
import "../globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kinema.studio"),
  title: {
    default: `${brand.name} — Motion Design Studio`,
    template: `%s — ${brand.name}`,
  },
  description:
    "Kinema is an independent motion design studio. Animation systems for brands, products and digital experiences.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${syne.variable} ${dmSans.variable} ${mono.variable}`}
    >
      <body className="bg-void font-sans text-light antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <MenuProvider>
              <Navbar />
              {children}
              <SiteFooter />
              <MenuOverlay />
            </MenuProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
