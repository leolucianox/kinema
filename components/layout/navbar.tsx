"use client";

import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LogoMark } from "@/components/ui/logo-mark";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LocaleSwitch } from "@/components/ui/locale-switch";
import { useMenu } from "./menu-context";

export function Navbar() {
  const { open, toggle } = useMenu();
  const t = useTranslations("nav");

  return (
    <>
      <div className="fixed left-global top-global z-[60] flex items-center gap-4 rounded-full border border-edge bg-surface/90 px-5 py-3 backdrop-blur-md">
        <Link href="/" aria-label="Kinema — home" className="flex items-center">
          <LogoMark />
        </Link>
        <button
          type="button"
          onClick={toggle}
          aria-label={open ? t("closeMenu") : t("openMenu")}
          aria-expanded={open}
          className="text-light transition-opacity hover:opacity-60"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className="fixed right-global top-global z-[60] hidden items-center gap-2 md:flex">
        <div className="flex items-center gap-2 rounded-full border border-edge bg-surface/90 px-3 py-2 backdrop-blur-md">
          <LocaleSwitch />
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}
