"use client";

import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LogoMark } from "@/components/ui/logo-mark";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LocaleSwitch } from "@/components/ui/locale-switch";
import { useMenu } from "./menu-context";

// Floating brand card (top-left, doubles as menu trigger) + floating theme and
// language controls (top-right). Nothing sits in a full-width bar.
export function Navbar() {
  const { open, toggle } = useMenu();
  const t = useTranslations("nav");

  return (
    <>
      <div className="fixed left-global top-global z-[60] flex items-center gap-5 border border-grid bg-paper px-5 py-3">
        <Link href="/" aria-label="Grafema — home" className="flex items-center">
          <LogoMark />
        </Link>
        <button
          type="button"
          onClick={toggle}
          aria-label={open ? t("closeMenu") : t("openMenu")}
          aria-expanded={open}
          className="text-ink transition-opacity hover:opacity-60"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className="fixed right-global top-global z-[60] hidden items-center gap-2 md:flex">
        <LocaleSwitch />
        <ThemeToggle />
      </div>
    </>
  );
}
