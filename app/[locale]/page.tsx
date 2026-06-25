import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/hero";
import { TryPlayground } from "@/components/sections/try-playground";
import { CollectionHome } from "@/components/sections/collection-home";
import { Spotlight } from "@/components/sections/spotlight";
import { Manifesto } from "@/components/sections/manifesto";
import { WorkMarquee } from "@/components/sections/work-marquee";
import { ContactCta } from "@/components/sections/contact-cta";

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
      <TryPlayground />
      <CollectionHome />
      <Spotlight />
      <Manifesto />
      <WorkMarquee />
      <ContactCta />
    </main>
  );
}
