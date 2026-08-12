import { Star } from "lucide-react";
import { testimonials } from "@/content/site";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section id="reviews" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Client Stories</p>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.02] font-extrabold text-forest">
            Trusted by Perth Property Owners
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Sample placeholder content shown below — real client reviews will replace these cards.
          </p>
        </Reveal>

        <ul className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {testimonials.map((t, i) => (
            <Reveal
              as="li"
              key={i}
              delay={i * 90}
              className="w-[86vw] shrink-0 snap-start sm:w-[70vw] md:w-auto"
            >
              <figure className="flex h-full flex-col rounded-3xl bg-cream p-7 transition-transform duration-300 hover:-translate-y-1.5">
                <div className="flex gap-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-gold text-gold" aria-hidden />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-forest">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-forest/10 pt-5">
                  <p className="font-display text-base font-bold text-forest">{t.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{t.service}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
