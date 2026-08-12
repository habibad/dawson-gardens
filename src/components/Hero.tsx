import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import treeMark from "@/assets/dawson-tree.png";
import { site } from "@/content/site";
import { track } from "@/lib/analytics";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background pt-28 md:pt-32">
      <img
        src={treeMark}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -top-16 -left-24 hidden w-[420px] opacity-[0.05] md:block"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 sm:px-8 lg:grid-cols-[minmax(0,42fr)_minmax(0,58fr)] lg:gap-14 lg:pb-24">
        <div className="max-w-xl">
          <p className="eyebrow">Perth Landscaping &amp; Maintenance</p>
          <h1 className="mt-5 font-display text-[clamp(2.6rem,7vw,4.6rem)] leading-[0.95] font-extrabold text-forest">
            Beautiful Outdoor Spaces, Built to Last.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            From complete landscape transformations to ongoing garden maintenance, Dawson
            Landscaping creates outdoor spaces that look exceptional and stay that way.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#quote"
              onClick={() => track("quote_cta_click", { location: "hero" })}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-forest px-7 py-4 text-xs font-bold tracking-[0.16em] text-forest-foreground uppercase shadow-soft transition-all hover:-translate-y-0.5 hover:bg-olive"
            >
              Get a Free Quote
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-forest/25 px-7 py-4 text-xs font-bold tracking-[0.16em] text-forest uppercase transition-colors hover:bg-cream"
            >
              View Our Work
            </a>
          </div>

          <a
            href={site.phoneHref}
            onClick={() => track("phone_click", { location: "hero" })}
            className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-forest"
          >
            <span className="grid size-10 place-items-center rounded-full bg-cream">
              <Phone className="size-4 text-olive" aria-hidden />
            </span>
            <span>
              Call Us
              <span className="ml-2 font-normal text-muted-foreground">{site.phone}</span>
            </span>
          </a>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] rounded-tr-[7rem] shadow-lift">
            <img
              src={heroImg}
              alt="Professionally landscaped Perth backyard with limestone paving, lawn and native garden beds at golden hour"
              width={1600}
              height={1408}
              fetchPriority="high"
              className="h-[380px] w-full object-cover sm:h-[520px] lg:h-[640px]"
            />
          </div>

          <div className="absolute bottom-4 left-4 max-w-[16rem] rounded-2xl bg-background/92 p-4 shadow-soft backdrop-blur-sm sm:bottom-8 sm:left-8 sm:p-5">
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-olive" aria-hidden />
              <p className="text-[0.7rem] font-bold tracking-[0.16em] text-forest uppercase">
                Local Perth Team
              </p>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Reliable • Professional • Fully Insured
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
