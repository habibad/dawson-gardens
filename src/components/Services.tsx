"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/site";
import { track } from "@/lib/analytics";
import { Reveal } from "./Reveal";

const CATEGORY_MAP: Record<string, string> = {
  "landscape-design": "Design & Installation",
  "garden-maintenance": "Garden Care",
  "lawn-care": "Lawn Care",
  hedging: "Hedges & Pruning",
  "outdoor-improvements": "Outdoor Improvements",
  "seasonal-clean-ups": "Seasonal Cleanup",
};

export function Services() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <section id="services" className="bg-sand/30 py-24 lg:py-32 relative overflow-hidden">
      {/* Background radial glows */}
      <div className="pointer-events-none absolute right-0 top-0 -z-10 size-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04),transparent_60%)] blur-3xl select-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          {/* Eyebrow badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-olive/25 bg-olive/5 px-4 py-1.5 text-[0.68rem] font-bold tracking-[0.16em] text-olive uppercase">
            Our Services
          </span>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.02] font-extrabold text-forest">
            Complete Landscaping &amp; Garden Solutions
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const category = CATEGORY_MAP[service.slug] || "Landscaping";
            return (
              <Reveal as="li" key={service.slug} delay={(i % 3) * 90}>
                <Link
                  href={isHome ? "#quote" : "/contact"}
                  onClick={() => track("service_click", { service: service.slug })}
                  className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-border/50 bg-gradient-to-br from-card to-cream/10 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-gold/30 hover:shadow-lift"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} — Dawson Landscaping Perth`}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Category overlay tag */}
                    <span className="absolute top-4 left-4 rounded-full bg-forest/90 backdrop-blur-sm px-3.5 py-1 text-[0.62rem] font-bold tracking-[0.16em] text-white uppercase">
                      {category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-7 md:p-8">
                    <span className="block h-[3px] w-8 bg-gold rounded-full transition-all duration-300 group-hover:w-16 group-hover:bg-olive" />

                    <h3 className="mt-5 font-display text-xl leading-snug font-bold text-forest transition-colors duration-300 group-hover:text-olive">
                      {service.title}
                    </h3>

                    <p className="mt-3.5 text-sm leading-relaxed text-muted-foreground flex-1">
                      {service.description}
                    </p>

                    <span className="mt-7 inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-olive uppercase group-hover:text-primary transition-colors duration-300">
                      Request Quote
                      <ArrowUpRight
                        className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
