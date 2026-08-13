"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import { Reveal } from "./Reveal";

export function About() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <section id="about" className="bg-background py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -left-[10%] bottom-[10%] -z-10 size-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(141,163,124,0.06),transparent_60%)] blur-3xl select-none" />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal className="relative group pt-4">
          {/* Outlined Frame */}
          <div className="absolute -inset-3 rounded-[2.2rem] rounded-bl-[6.2rem] border border-gold/15 -z-10 transition-all duration-500 group-hover:border-gold/25" />

          <div className="overflow-hidden rounded-[2rem] rounded-bl-[6rem] shadow-lift transition-all duration-500 group-hover:shadow-2xl">
            <Image
              src={about1}
              alt="Dawson landscaper pruning a native shrub in a sunlit Perth garden"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-104 sm:h-[560px]"
            />
          </div>
          <div className="absolute -right-2 -bottom-8 w-40 overflow-hidden rounded-2xl border-4 border-background shadow-soft transition-all duration-500 group-hover:shadow-xl sm:right-6 sm:w-56">
            <Image
              src={about2}
              alt="Neatly clipped hedges and mulched garden bed at a Perth home"
              sizes="(min-width: 640px) 14rem, 10rem"
              className="h-36 w-full object-cover transition-transform duration-750 group-hover:scale-103 sm:h-48"
            />
          </div>
        </Reveal>

        <Reveal delay={100} className="pt-10 lg:pt-0">
          {/* Premium Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-olive/25 bg-olive/5 px-4 py-1.5 text-[0.68rem] font-bold tracking-[0.16em] text-olive uppercase">
            Why Dawson
          </span>

          <h2 className="mt-6 font-display text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.02] font-extrabold text-forest">
            Your Outdoor Space Deserves More Than Just Maintenance.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Dawson Landscaping is a Perth-based landscaping and garden maintenance team. We plan
            every job around the property in front of us — its soil, its light, how the family
            actually uses the space — rather than applying the same template to every yard.
          </p>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            That means considered landscape design and installation, and ongoing care that keeps
            the result looking the way it did on day one. Same team, start to finish.
          </p>

          {/* Premium border stats counters */}
          <dl className="mt-9 grid grid-cols-1 gap-6 border-t border-border/60 pt-8 sm:grid-cols-2">
            <div className="border-l-2 border-gold pl-4 transition-premium hover:border-forest">
              <dt className="text-xs font-bold tracking-wider text-olive uppercase">Design &amp; build</dt>
              <dd className="mt-1.5 font-display text-base font-bold leading-snug text-forest">
                Landscapes made for Perth conditions
              </dd>
            </div>
            <div className="border-l-2 border-gold pl-4 transition-premium hover:border-forest">
              <dt className="text-xs font-bold tracking-wider text-olive uppercase">Ongoing care</dt>
              <dd className="mt-1.5 font-display text-base font-bold leading-snug text-forest">
                Maintenance plans that suit your garden
              </dd>
            </div>
          </dl>

          <Link
            href={isHome ? "#services" : "/services"}
            className="group mt-10 inline-flex items-center gap-2 rounded-full border border-forest/25 px-6 py-3.5 text-xs font-bold tracking-[0.16em] text-forest uppercase transition-all duration-300 hover:bg-forest hover:text-white hover:-translate-y-0.5 hover:shadow-md"
          >
            About Dawson
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
