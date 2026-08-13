"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import logoLight from "@/assets/dawson-logo-light.png";
import { nav, site } from "@/content/site";
import { track } from "@/lib/analytics";

export function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const homeTarget = isHome ? "#top" : "/";

  return (
    <footer className="bg-forest text-forest-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1.4fr)]">
        <div>
          <Image
            src={logoLight}
            alt={`${site.name} logo`}
            className="h-32 w-auto object-contain object-left"
          />
          <p className="mt-6 max-w-sm text-sm leading-relaxed opacity-75">
            Perth-based landscaping and garden maintenance. We design, build and care for outdoor
            spaces across Perth and surrounding suburbs.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href={homeTarget} aria-label="Facebook" className="grid size-10 place-items-center rounded-full border border-white/20 transition-colors hover:bg-white/10">
              <Facebook className="size-4" aria-hidden />
            </Link>
            <Link href={homeTarget} aria-label="Instagram" className="grid size-10 place-items-center rounded-full border border-white/20 transition-colors hover:bg-white/10">
              <Instagram className="size-4" aria-hidden />
            </Link>
          </div>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-xs font-bold tracking-[0.18em] text-gold uppercase">Navigation</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => {
              const href = isHome ? item.href : (item.href.startsWith("#") ? (item.href === "#top" ? "/" : (item.href === "#quote" ? "/contact" : `/${item.href.slice(1)}`)) : item.href);
              return (
                <li key={item.label}>
                  <Link href={href} className="opacity-80 transition-opacity hover:opacity-100">
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-bold tracking-[0.18em] text-gold uppercase">Contact</h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
              <a href={site.phoneHref} onClick={() => track("phone_click", { location: "footer" })} className="hover:underline">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
              <a href={`mailto:${site.email}`} onClick={() => track("email_click")} className="break-all hover:underline">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
              <span className="opacity-80">Perth, Western Australia</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs opacity-70 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Dawson Landscaping &amp; Maintenance</p>
          <div className="flex gap-6">
            <Link href={homeTarget} className="hover:underline">Privacy Policy</Link>
            <Link href={homeTarget} className="hover:underline">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
