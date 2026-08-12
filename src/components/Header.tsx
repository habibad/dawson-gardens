import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoDark from "@/assets/dawson-logo-dark.png";
import logoLight from "@/assets/dawson-logo-light.png";
import { nav, site } from "@/content/site";
import { track } from "@/lib/analytics";

export function Header() {
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/90 shadow-[0_1px_0_0_var(--border)] backdrop-blur-md"
        : "bg-transparent"
        }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center gap-4 px-5 transition-all duration-300 sm:px-8 ${scrolled ? "h-16" : "h-20 md:h-24"
          }`}
      >
        <a
          href="#top"
          className="flex min-w-0 shrink-0 items-center"
          aria-label={`${site.name} — home`}
        >
          <img
            src={logoDark}
            alt={`${site.name} logo`}
            className={`w-auto transition-all duration-300 ${scrolled ? "h-12" : "h-16 md:h-20"}`}
            style={{ objectFit: "contain" }}
            width={160}
            height={160}
          />
          <span className="sr-only">{site.name}</span>
        </a>

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => track("nav_click", { label: item.label })}
              className="text-sm font-semibold text-foreground/75 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-6 lg:gap-4">
          <a
            href={site.phoneHref}
            onClick={() => track("phone_click", { location: "header" })}
            className="hidden items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary md:flex"
          >
            <Phone className="size-4 text-olive" aria-hidden />
            {site.phone}
          </a>
          <a
            href={site.phoneHref}
            onClick={() => track("phone_click", { location: "header_mobile" })}
            aria-label={`Call ${site.shortName}`}
            className="grid size-11 place-items-center rounded-full border border-border bg-card text-foreground md:hidden"
          >
            <Phone className="size-4" aria-hidden />
          </a>
          <a
            href="#quote"
            onClick={() => track("quote_cta_click", { location: "header" })}
            className="hidden rounded-full bg-forest px-5 py-3 text-xs font-bold tracking-[0.14em] text-forest-foreground uppercase transition-transform hover:-translate-y-0.5 hover:bg-olive sm:inline-flex"
          >
            Get a Free Quote
          </a>
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
            <img src={logoLight} alt="" className="h-12 w-auto object-contain" aria-hidden />
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
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  setOpen(false);
                  track("nav_click", { label: item.label, location: "mobile" });
                }}
                className="border-b border-white/10 py-4 font-display text-3xl tracking-tight"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#quote"
              onClick={() => {
                setOpen(false);
                track("quote_cta_click", { location: "mobile_menu" });
              }}
              className="mt-8 rounded-full bg-gold px-6 py-4 text-center text-xs font-bold tracking-[0.16em] text-forest uppercase"
            >
              Get a Free Quote
            </a>
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
