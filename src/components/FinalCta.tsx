import { ArrowRight, Phone } from "lucide-react";
import treeMark from "@/assets/dawson-tree.png";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import svcHedge from "@/assets/svc-hedge.jpg";
import svcLawn from "@/assets/svc-lawn.jpg";
import { site } from "@/content/site";
import { track } from "@/lib/analytics";
import { Reveal } from "./Reveal";

const decor = [
  { src: work2, alt: "Native front garden in Perth", className: "left-6 top-6 w-32 lg:w-44 rotate-[-4deg]" },
  { src: svcLawn, alt: "Freshly mowed lawn", className: "left-10 bottom-4 w-28 lg:w-40 rotate-[5deg]" },
  { src: work3, alt: "Courtyard garden planting", className: "right-6 top-10 w-32 lg:w-44 rotate-[4deg]" },
  { src: svcHedge, alt: "Trimmed hedge along a garden path", className: "right-12 bottom-2 w-28 lg:w-40 rotate-[-5deg]" },
];

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 lg:py-28">
      {decor.map((d) => (
        <img
          key={d.alt}
          src={d.src}
          alt={d.alt}
          loading="lazy"
          className={`absolute hidden rounded-2xl object-cover shadow-soft lg:block ${d.className}`}
          style={{ aspectRatio: "4 / 3" }}
        />
      ))}

      <div className="relative mx-auto max-w-2xl px-5 text-center sm:px-8">
        <Reveal>
          <img src={treeMark} alt="" aria-hidden className="mx-auto w-20 opacity-90" />
          <h2 className="mt-7 font-display text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.02] font-extrabold text-forest">
            Let's Make Your Outdoor Space Better.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base text-muted-foreground">
            Professional landscaping and maintenance for Perth homes and properties.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#quote"
              onClick={() => track("quote_cta_click", { location: "final_cta" })}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-forest px-7 py-4 text-xs font-bold tracking-[0.16em] text-forest-foreground uppercase transition-transform hover:-translate-y-0.5"
            >
              Get a Free Quote
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </a>
            <a
              href={site.phoneHref}
              onClick={() => track("phone_click", { location: "final_cta" })}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-forest/25 px-7 py-4 text-xs font-bold tracking-[0.16em] text-forest uppercase transition-colors hover:bg-background"
            >
              <Phone className="size-4" aria-hidden />
              Call Dawson
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
