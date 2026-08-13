"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import logoDark from "@/assets/dawson-logo-dark.png";
import logoLight from "@/assets/dawson-logo-light.png";
import { nav, site } from "@/content/site";
import { track } from "@/lib/analytics";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const displayScrolled = !isHome || scrolled;

  return (
    <header
      className={` z-50 transition-all duration-500 ${displayScrolled
        ? "bg-background/85 border-b border-border/40 shadow-soft backdrop-blur-lg"
        : "bg-transparent"
        }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center gap-4 px-5 transition-all duration-300 sm:px-8 ${displayScrolled ? "h-20" : "h-24 md:h-28"
          }`}
      >
        <Link
          href={isHome ? "#top" : "/"}
          className="flex min-w-0 shrink-0 items-center"
          aria-label={`${site.name} — home`}
        >
          <Image
            src={logoDark}
            alt={`${site.name} logo`}
            priority
            className={`w-auto transition-all duration-300 ${displayScrolled ? "h-16" : "h-24 md:h-28"}`}
            style={{ objectFit: "contain" }}
          />
          <span className="sr-only">{site.name}</span>
        </Link>

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const href = isHome ? item.href : (item.href.startsWith("#") ? (item.href === "#top" ? "/" : (item.href === "#quote" ? "/contact" : `/${item.href.slice(1)}`)) : item.href);
            return (
              <Link
                key={item.label}
                href={href}
                onClick={() => track("nav_click", { label: item.label })}
                className={`relative text-sm font-semibold transition-colors py-2 group ${
                  displayScrolled ? "text-foreground/80 hover:text-primary" : "text-green-950 hover:text-gold"
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full ${
                  displayScrolled ? "bg-gold" : "bg-gold"
                }`} />
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-6 lg:gap-4">
          <a
            href={site.phoneHref}
            onClick={() => track("phone_click", { location: "header" })}
            className={`hidden items-center gap-2 text-sm font-semibold transition-colors md:flex ${
              displayScrolled ? "text-foreground hover:text-primary" : "text-green-950 hover:text-gold"
            }`}
          >
            <Phone className={`size-4 ${
              displayScrolled ? "text-olive" : "text-gold"
            }`} aria-hidden />
            {site.phone}
          </a>
          <a
            href={site.phoneHref}
            onClick={() => track("phone_click", { location: "header_mobile" })}
            aria-label={`Call ${site.shortName}`}
            className={`grid size-11 place-items-center rounded-full border transition-all md:hidden ${
              displayScrolled ? "border-border bg-card text-foreground" : "border-white/30 bg-white/10 text-white hover:bg-gold/20"
            }`}
          >
            <Phone className="size-4" aria-hidden />
          </a>
          <Link
            href={isHome ? "#quote" : "/contact"}
            onClick={() => track("quote_cta_click", { location: "header" })}
            className="hidden rounded-full bg-forest px-5 py-3 text-xs font-bold tracking-[0.14em] text-forest-foreground uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-olive hover:shadow-lg sm:inline-flex"
          >
            Get a Free Quote
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid size-11 place-items-center rounded-full border border-border bg-card lg:hidden"
          >
            <Menu className="size-5" aria-hidden />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-forest text-forest-foreground lg:hidden">
          <div className="flex h-20 items-center justify-between px-5">
            <Image
              src={logoLight}
              alt=""
              className="h-34 w-auto object-contain"
              aria-hidden
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid size-11 place-items-center rounded-full border border-white/20"
            >
              <X className="size-5" aria-hidden />
            </button>
          </div>
          <nav aria-label="Mobile" className="flex flex-col gap-1 px-5 pt-6">
            {nav.map((item) => {
              const href = isHome ? item.href : (item.href.startsWith("#") ? (item.href === "#top" ? "/" : (item.href === "#quote" ? "/contact" : `/${item.href.slice(1)}`)) : item.href);
              return (
                <Link
                  key={item.label}
                  href={href}
                  onClick={() => {
                    setOpen(false);
                    track("nav_click", { label: item.label, location: "mobile" });
                  }}
                  className="border-b border-white/10 py-4 font-display text-3xl tracking-tight"
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href={isHome ? "#quote" : "/contact"}
              onClick={() => {
                setOpen(false);
                track("quote_cta_click", { location: "mobile_menu" });
              }}
              className="mt-8 rounded-full bg-gold px-6 py-4 text-center text-xs font-bold tracking-[0.16em] text-forest uppercase"
            >
              Get a Free Quote
            </Link>
            <a
              href={site.phoneHref}
              onClick={() => track("phone_click", { location: "mobile_menu" })}
              className="mt-3 rounded-full border border-white/25 px-6 py-4 text-center text-xs font-bold tracking-[0.16em] uppercase"
            >
              Call {site.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
