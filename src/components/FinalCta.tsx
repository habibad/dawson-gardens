"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, FileText, Leaf, MessageCircle, Phone, ShieldCheck, Star } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import treeMark from "@/assets/dawson-tree.png";
import cardBeautiful from "@/assets/svc-design.jpg";
import cardExpert from "@/assets/about-1.jpg";
import cardMaintenance from "@/assets/svc-lawn.jpg";
import cardOutdoor from "@/assets/svc-hedge.jpg";
import { site } from "@/content/site";
import { track } from "@/lib/analytics";
import { Reveal } from "./Reveal";

const highlights = [
  { icon: Leaf, label: "Local Perth Experts" },
  { icon: ShieldCheck, label: "Reliable & Fully Insured" },
  { icon: Star, label: "Quality Workmanship" },
  { icon: MessageCircle, label: "Free Quotes & Honest Advice" },
];

const featureCards = [
  { src: cardBeautiful, label: "Beautiful Landscapes" },
  { src: cardExpert, label: "Expert Care" },
  { src: cardMaintenance, label: "Regular Maintenance" },
  { src: cardOutdoor, label: "Outdoor Living Spaces" },
];

export function FinalCta() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const quoteHref = isHome ? "#quote" : "/contact";

  return (
    <section className="relative overflow-hidden bg-cream">
      {/* Decorative watermark tree, matches the mark used across the site */}
      <Image
        src={treeMark}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -top-6 left-0 w-48 opacity-[0.05] lg:w-64"
      />

      <div className="relative flex flex-col gap-10 pt-16 lg:flex-row lg:items-center lg:gap-8 lg:pt-20 xl:gap-12">
        {/* Left column — copy, highlights, CTAs */}
        <Reveal className="px-5 sm:px-8 lg:w-[44%] lg:shrink-0 lg:pl-10 xl:pl-16 2xl:pl-24">
          <p className="eyebrow">Designed. Built. Maintained.</p>

          <h2 className="mt-5 max-w-lg font-display text-[clamp(2.3rem,4.6vw,3.6rem)] leading-[1.03] font-extrabold text-forest">
            Let&apos;s Make Your Outdoor Space{" "}
            <span className="block text-gold">Better.</span>
          </h2>

          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            From concept to completion, we create and maintain outdoor spaces that look
            beautiful, function perfectly, and add lasting value to your home.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-olive/10 text-olive ring-1 ring-olive/15">
                  <Icon className="size-4" aria-hidden />
                </span>
                <span className="max-w-[6.5rem] text-sm font-semibold leading-tight text-forest">
                  {label}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-7 border-t border-border pt-7">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={quoteHref}
                onClick={() => track("quote_cta_click", { location: "final_cta" })}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-4 text-xs font-bold tracking-[0.16em] text-forest-foreground uppercase transition-transform hover:-translate-y-0.5"
              >
                <FileText className="size-4" aria-hidden />
                Get a Free Quote
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
              <a
                href={site.phoneHref}
                onClick={() => track("phone_click", { location: "final_cta" })}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-forest/25 px-6 py-4 text-xs font-bold tracking-[0.16em] text-forest uppercase transition-colors hover:bg-background"
              >
                <Phone className="size-4" aria-hidden />
                Call Dawson
              </a>
            </div>

            <a
              href={site.phoneHref}
              onClick={() => track("phone_click", { location: "final_cta_inline" })}
              className="mt-5 flex items-center gap-3"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-olive/10 text-olive ring-1 ring-olive/15">
                <Phone className="size-4" aria-hidden />
              </span>
              <span>
                <span className="block text-sm font-bold text-forest">{site.phone}</span>
                <span className="block text-xs text-muted-foreground">Local Perth Team</span>
              </span>
            </a>
          </div>
        </Reveal>

        {/* Right column — full-bleed image in an organic "blob" crop */}
        <Reveal delay={120} className="relative px-5 sm:px-8 lg:w-[56%] lg:px-0">
          <div className="relative">
            <div className="final-cta-blob relative h-[360px] w-full overflow-hidden sm:h-[440px] lg:h-[620px] xl:h-[680px]">
              <Image
                src={heroImg}
                alt="Modern Perth backyard landscaped with paving, lawn strips and native planting"
                fill
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="absolute right-3 bottom-4 max-w-[10.5rem] rounded-2xl bg-forest/95 p-4 text-forest-foreground shadow-lift backdrop-blur-sm sm:right-8 sm:bottom-6 sm:max-w-[15rem] sm:p-5 lg:max-w-[17rem]">
              <span className="grid size-8 place-items-center rounded-full ring-1 ring-gold/50 sm:size-10">
                <Image src={treeMark} alt="" aria-hidden className="w-4 opacity-90 sm:w-5" />
              </span>
              <p className="mt-2.5 font-display text-sm leading-snug font-bold sm:mt-3 sm:text-xl">
                Transforming Outdoors Across Perth
              </p>
              <p className="mt-1.5 text-[0.55rem] font-bold tracking-[0.14em] text-gold uppercase sm:mt-2 sm:text-[0.65rem] sm:tracking-[0.16em]">
                Design &bull; Construct &bull; Maintain
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* SVG clip-path definition for the blob crop above (see .final-cta-blob in globals.css) */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <clipPath id="final-cta-blob-path" clipPathUnits="objectBoundingBox">
            <path d="M0,0.18 C0,0.08 0.06,0 0.14,0 L0.9,0 C0.96,0 1,0.04 1,0.09 L1,0.88 C1,0.95 0.96,1 0.9,1 L0.48,1 C0.22,1 0.14,0.86 0,0.66 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Bottom feature strip */}
      <div className="relative mx-auto mt-10 max-w-7xl px-5 pb-16 sm:px-8 lg:mt-14 lg:pb-24">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {featureCards.map((card, i) => (
            <Reveal key={card.label} delay={i * 80}>
              <Link
                href={quoteHref}
                onClick={() => track("quote_cta_click", { location: "final_cta_card", card: card.label })}
                className="group relative block h-40 overflow-hidden rounded-2xl sm:h-52"
              >
                <Image
                  src={card.src}
                  alt={card.label}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4">
                  <span className="text-sm font-bold text-white sm:text-base">{card.label}</span>
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white text-forest transition-transform duration-300 group-hover:-translate-y-1 sm:size-9">
                    <ArrowRight className="size-4" aria-hidden />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
