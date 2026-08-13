"use client";

import Image from "next/image";
import Link from "next/link";
import treeMark from "@/assets/dawson-tree.png";
import { Reveal } from "./Reveal";

interface SubpageHeroProps {
  title: string;
  description?: string;
  eyebrow?: string;
}

export function SubpageHero({ title, description, eyebrow }: SubpageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-forest pt-36 pb-20 text-forest-foreground md:pt-40 md:pb-24">
      {/* Watermark logo */}
      <Image
        src={treeMark}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-20 -bottom-24 w-[380px] opacity-[0.06] select-none"
      />
      
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal>
            {/* Breadcrumb / Eyebrow */}
            <div className="flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-gold uppercase">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span className="opacity-40">/</span>
              <span>{eyebrow || title}</span>
            </div>
            
            <h1 className="mt-5 font-display text-[clamp(2.4rem,6vw,4rem)] leading-[1.02] font-extrabold text-white">
              {title}
            </h1>
            
            {description && (
              <p className="mt-5 max-w-2xl text-base leading-relaxed opacity-85 sm:text-lg">
                {description}
              </p>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
