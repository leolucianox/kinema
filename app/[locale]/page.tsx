import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/hero";
import { Manifesto } from "@/components/sections/manifesto";
import { CollectionHome } from "@/components/sections/collection-home";
import { Spotlight } from "@/components/sections/spotlight";
import { TryTester } from "@/components/sections/try-tester";
import { InUseMarquee } from "@/components/sections/in-use-marquee";
import { LicenseCta } from "@/components/sections/license-cta";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="w-full">
      <Hero />
      <Manifesto />
      <CollectionHome />
      <Spotlight />
      <TryTester />
      <InUseMarquee />
      <LicenseCta />
    </main>
  );
}
