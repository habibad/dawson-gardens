"use client";

import Image from "next/image";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-bg.png";
import { site } from "@/content/site";
import { track } from "@/lib/analytics";

export function Hero() {
  return (
    <section id="top" className="banner bg-cover relative h-[80vh] w-full ">
      {/* Background Image with Dark Overlay */}
      {/* <div className="absolute inset-0 -z-10">
        <Image
          src={heroImg}
          alt="Professionally landscaped Perth backyard with limestone paving, lawn and native garden beds at golden hour"
          priority
          fill
          className="object-cover"
          sizes="100vw"
          quality={100}
        />
        
        <div className="absolute inset-0 bg-black/50" />
      </div> */}

      {/* Content Container */}
      <div className=" mx-auto max-w-7xl h-full flex items-center px-5 sm:px-8 py-20">
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Label */}
            <span className="inline-block text-[0.65rem] font-bold tracking-[0.2em] text-white uppercase mb-6 pb-2 border-b border-gold/50">
              Perth Landscaping Experts
            </span>

            {/* Heading */}
            <h1 className="font-display text-[clamp(2.2rem,6vw,4rem)] leading-[1.1] font-extrabold text-white mb-6">
              Beautiful Outdoor Spaces, <span className="text-gold">Built to Last.</span>
            </h1>

            {/* Description */}
            <p className="text-base leading-relaxed text-gray-100 mb-10 max-w-lg">
              Professional landscaping and garden maintenance in Perth. Designed, built and maintained with care, all year round.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#quote"
                onClick={() => track("quote_cta_click", { location: "hero" })}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-olive px-8 py-4 text-xs font-bold tracking-[0.16em] text-white uppercase transition-all duration-300 hover:-translate-y-1 hover:bg-olive/90 hover:shadow-lg"
              >
                <span>Get a Free Quote</span>
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-4 text-xs font-bold tracking-[0.16em] text-white uppercase transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg"
              >
                View Our Work
                <ArrowRight className="size-4" aria-hidden />
              </a>
            </div>

            {/* Phone Call */}
            <a
              href={site.phoneHref}
              onClick={() => track("phone_click", { location: "hero" })}
              className="inline-flex items-center gap-3 text-sm font-semibold text-white group/phone"
            >
              <span className="grid size-12 place-items-center rounded-full bg-white/20 border border-white/30 transition-all duration-300 group-hover/phone:bg-olive">
                <Phone className="size-5" aria-hidden />
              </span>
              <div>
                <div className="text-xs text-gray-100">Call Us</div>
                <div className="font-semibold">{site.phone}</div>
              </div>
            </a>
          </div>

          {/* Right Side - Local Perth Team Box */}
          <div className="h-full hidden lg:flex justify-end items-end">
            <div className="max-w-[14rem] w-full rounded-2xl bg-forest backdrop-blur-sm border border-olive/50 px-5 py-6 shadow-xl">
              <div className="flex flex-col items-center justify-center gap-3 mb-3">
                <ShieldCheck className="size-5 text-gold shrink-0" aria-hidden />
                <p className="text-[0.75rem] font-bold tracking-[0.15em] text-gold uppercase">
                  Local Perth Team
                </p>
              </div>
              <p className="text-sm text-white font-semibold leading-relaxed text-center">
                Reliable • Professional • Fully Insured
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
