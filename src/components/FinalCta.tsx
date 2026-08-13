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
      {/* Decorative watermark tree */}
      <Image
        src={treeMark}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -top-6 left-0 w-48 opacity-[0.05] lg:w-64"
      />

      {/* ── Two-column row ─────────────────────────────────────────────── */}
      <div className="relative lg:flex lg:items-stretch">

        {/* ── LEFT COLUMN — content ──────────────────────────────────── */}
        <Reveal className="relative z-10 flex flex-col justify-center px-5 pt-16 pb-10 sm:px-10 sm:pt-20 sm:pb-14 lg:w-[44%] lg:shrink-0 lg:pl-10 lg:pr-10 lg:pt-24 lg:pb-20 xl:pl-16 xl:pr-12 2xl:pl-24">
          <p className="eyebrow">Designed. Built. Maintained.</p>

          <h2 className="mt-4 font-display text-[clamp(2.5rem,4.8vw,3.8rem)] leading-[1.02] font-extrabold tracking-tight text-forest">
            Let&apos;s Make Your Outdoor Space{" "}
            <span className="block text-gold">Better.</span>
          </h2>

          <p className="mt-5 max-w-[26rem] text-[0.95rem] leading-relaxed text-muted-foreground">
            From concept to completion, we create and maintain outdoor spaces that look
            beautiful, function perfectly, and add lasting value to your home.
          </p>

          {/* Highlight badges */}
          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-3.5">
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-olive/10 text-olive ring-1 ring-olive/15">
                  <Icon className="size-4" aria-hidden />
                </span>
                <span className="max-w-[7rem] text-sm font-semibold leading-tight text-forest">
                  {label}
                </span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="mt-8 border-t border-border/60 pt-7">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={quoteHref}
                onClick={() => track("quote_cta_click", { location: "final_cta" })}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-[0.95rem] text-xs font-bold tracking-[0.16em] text-forest-foreground uppercase transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <FileText className="size-4" aria-hidden />
                Get a Free Quote
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
              <a
                href={site.phoneHref}
                onClick={() => track("phone_click", { location: "final_cta" })}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-forest/30 px-6 py-[0.95rem] text-xs font-bold tracking-[0.16em] text-forest uppercase transition-colors hover:bg-background active:scale-[0.98]"
              >
                <Phone className="size-4" aria-hidden />
                Call Dawson
              </a>
            </div>

            <a
              href={site.phoneHref}
              onClick={() => track("phone_click", { location: "final_cta_inline" })}
              className="mt-5 flex w-fit items-center gap-3 group"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-olive/10 text-olive ring-1 ring-olive/15 transition-colors group-hover:bg-olive/15">
                <Phone className="size-4" aria-hidden />
              </span>
              <span>
                <span className="block text-sm font-bold text-forest">{site.phone}</span>
                <span className="block text-xs text-muted-foreground">Local Perth Team</span>
              </span>
            </a>
          </div>
        </Reveal>

        {/* ── MOBILE IMAGE (< lg) ───────────────────────────────────── */}
        <div className="px-5 pb-10 sm:px-8 sm:pb-12 lg:hidden">
          <div className="relative h-[340px] w-full overflow-hidden rounded-3xl sm:h-[420px]">
            <Image
              src={heroImg}
              alt="Modern Perth backyard landscaped with paving, lawn strips and native planting"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute bottom-5 right-5 max-w-[10.5rem] rounded-2xl bg-forest/95 p-4 text-forest-foreground shadow-lift backdrop-blur-sm sm:bottom-7 sm:right-7 sm:max-w-[13rem] sm:p-5">
              <span className="grid size-8 place-items-center rounded-full ring-1 ring-gold/50 sm:size-9">
                <Image src={treeMark} alt="" aria-hidden className="w-4 opacity-90" />
              </span>
              <p className="mt-2.5 font-display text-sm font-bold leading-snug sm:mt-3">
                Transforming Outdoors Across Perth
              </p>
              <p className="mt-1.5 text-[0.55rem] font-bold uppercase tracking-[0.14em] text-gold sm:mt-2 sm:text-[0.6rem]">
                Design &bull; Construct &bull; Maintain
              </p>
            </div>
          </div>
        </div>

        {/* ── DESKTOP IMAGE (lg+) ───────────────────────────────────────
            Absolute: top-0 right-0 bottom-0 → flush to right & fills full
            section height.  NO clip-path — just a clean rectangular image
            with a rounded top-left + bottom-left corner only (right side flush).
        ─────────────────────────────────────────────────────────────── */}
        <Reveal
          delay={120}
          className="hidden lg:block absolute top-0 right-0 bottom-0 w-[58%] overflow-hidden rounded-tl-[2.5rem] rounded-bl-[2.5rem]"
        >
          <Image
            src={heroImg}
            alt="Modern Perth backyard landscaped with paving, lawn strips and native planting"
            fill
            priority
            sizes="58vw"
            className="object-cover object-center"
          />

          {/* Floating "Transforming Outdoors" card — bottom-right */}
          <div className="absolute bottom-8 right-7 z-10 max-w-[14rem] rounded-2xl bg-forest/95 p-5 text-forest-foreground shadow-lift backdrop-blur-sm xl:bottom-10 xl:right-9 xl:max-w-[16rem]">
            <span className="grid size-10 place-items-center rounded-full ring-1 ring-gold/50">
              <Image src={treeMark} alt="" aria-hidden className="w-5 opacity-90" />
            </span>
            <p className="mt-3 font-display text-[1.1rem] font-bold leading-snug xl:text-[1.2rem]">
              Transforming Outdoors Across Perth
            </p>
            <p className="mt-2 text-[0.6rem] font-bold uppercase tracking-[0.15em] text-gold">
              Design &bull; Construct &bull; Maintain
            </p>
          </div>
        </Reveal>
      </div>

      {/* ── Bottom feature-card strip ──────────────────────────────────── */}
      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-8 lg:pb-24">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {featureCards.map((card, i) => (
            <Reveal key={card.label} delay={i * 80}>
              <Link
                href={quoteHref}
                onClick={() =>
                  track("quote_cta_click", { location: "final_cta_card", card: card.label })
                }
                className="group relative block h-40 overflow-hidden rounded-2xl sm:h-52"
              >
                <Image
                  src={card.src}
                  alt={card.label}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
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