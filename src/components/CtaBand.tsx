"use client";

import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import treeMark from "@/assets/dawson-tree.png";
import { site } from "@/content/site";
import { track } from "@/lib/analytics";
import { Reveal } from "./Reveal";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-forest py-20 text-forest-foreground lg:py-24">
      <Image
        src={treeMark}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-16 -bottom-24 w-[420px] opacity-[0.07]"
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.02] font-extrabold">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base opacity-80">
            Tell us what you&apos;re looking to achieve and we&apos;ll help you plan the next step.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#quote"
              onClick={() => track("quote_cta_click", { location: "cta_band" })}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-xs font-bold tracking-[0.16em] text-forest uppercase transition-transform hover:-translate-y-0.5"
            >
              Request a Free Quote
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </a>
            <a
              href={site.phoneHref}
              onClick={() => track("phone_click", { location: "cta_band" })}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-xs font-bold tracking-[0.16em] uppercase transition-colors hover:bg-white/10"
            >
              <Phone className="size-4" aria-hidden />
              Call Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
