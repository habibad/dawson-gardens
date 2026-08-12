import { ArrowUpRight } from "lucide-react";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-[2rem] rounded-bl-[6rem]">
            <img
              src={about1}
              alt="Dawson landscaper pruning a native shrub in a sunlit Perth garden"
              loading="lazy"
              width={1200}
              height={1500}
              className="h-[420px] w-full object-cover sm:h-[560px]"
            />
          </div>
          <div className="absolute -right-2 -bottom-8 w-40 overflow-hidden rounded-2xl border-4 border-background shadow-soft sm:right-6 sm:w-56">
            <img
              src={about2}
              alt="Neatly clipped hedges and mulched garden bed at a Perth home"
              loading="lazy"
              width={1000}
              height={1000}
              className="h-36 w-full object-cover sm:h-48"
            />
          </div>
        </Reveal>

        <Reveal delay={100} className="pt-10 lg:pt-0">
          <p className="eyebrow">Why Dawson</p>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.02] font-extrabold text-forest">
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

          <dl className="mt-9 grid grid-cols-2 gap-6 border-t border-border pt-8">
            <div>
              <dt className="text-sm text-muted-foreground">Design &amp; build</dt>
              <dd className="mt-1 font-display text-lg font-bold text-forest">
                Landscapes made for Perth conditions
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">Ongoing care</dt>
              <dd className="mt-1 font-display text-lg font-bold text-forest">
                Maintenance plans that suit your garden
              </dd>
            </div>
          </dl>

          <a
            href="#services"
            className="group mt-9 inline-flex items-center gap-2 rounded-full border border-forest/25 px-6 py-3.5 text-xs font-bold tracking-[0.16em] text-forest uppercase transition-colors hover:bg-cream"
          >
            About Dawson
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
