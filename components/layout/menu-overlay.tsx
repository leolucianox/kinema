"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { PillButton } from "@/components/ui/pill-button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LocaleSwitch } from "@/components/ui/locale-switch";
import { EASE_EXPO } from "@/lib/motion";
import { useMenu } from "./menu-context";

const links = [
  { href: "/", key: "home" },
  { href: "/typefaces", key: "typefaces" },
  { href: "/foundry", key: "foundry" },
  { href: "/journal", key: "journal" },
  { href: "/in-use", key: "inUse" },
] as const;

// Global navigation overlay: blurred backdrop + focused left panel with large
// editorial links. The floating brand card (z-60) stays above it as the header.
export function MenuOverlay() {
  const { open, setOpen } = useMenu();
  const t = useTranslations("nav");
  const tHome = useTranslations("home");
  const pathname = usePathname();

  // Close whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname, setOpen]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50"
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.button
            aria-label={t("closeMenu")}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-paper/40 backdrop-blur-md"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ duration: 0.4 }}
          />

          <motion.nav
            className="absolute left-0 top-0 flex h-full w-full max-w-[460px] flex-col justify-between border-r border-grid bg-paper pt-[104px]"
            variants={{ hidden: { x: "-100%" }, visible: { x: 0 } }}
            transition={{ duration: 0.7, ease: EASE_EXPO }}
          >
            <ul className="border-t border-grid">
              {links.map((link) => (
                <li key={link.href} className="border-b border-grid">
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between px-global py-6 font-display text-3xl tracking-tightest text-ink transition-colors hover:text-vermilion"
                  >
                    {t(link.key)}
                    <ArrowUpRight className="h-6 w-6 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="border-t border-grid px-global py-8">
              <div className="mb-6 flex items-center gap-2 md:hidden">
                <LocaleSwitch />
                <ThemeToggle />
              </div>
              <p className="mb-4 max-w-xs text-sm tracking-body text-muted">
                {tHome("ctaBody")}
              </p>
              <PillButton variant="accent" className="w-full">
                {tHome("ctaButton")}
              </PillButton>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
