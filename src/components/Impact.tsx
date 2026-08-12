import impactImg from "@/assets/impact.jpg";
import { impactPoints } from "@/content/site";
import { Reveal } from "./Reveal";

export function Impact() {
  return (
    <section aria-labelledby="impact-heading" className="relative isolate overflow-hidden">
      <img
        src={impactImg}
        alt="Landscaped Perth garden at golden hour"
        loading="lazy"
        width={1800}
        height={1000}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest/95 via-forest/80 to-forest/55" />

      <div className="mx-auto max-w-7xl px-5 py-20 text-forest-foreground sm:px-8 lg:py-28">
        <Reveal className="max-w-xl">
          <p className="text-[0.72rem] font-bold tracking-[0.22em] text-gold uppercase">
            Our Approach
          </p>
          <h2
            id="impact-heading"
            className="mt-5 font-display text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.02] font-extrabold"
          >
            Built Properly. Maintained Properly.
          </h2>
        </Reveal>

        <dl className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {impactPoints.map((point, i) => (
            <Reveal key={point.value} delay={i * 80} className="border-t border-white/20 pt-5">
              <dt className="font-display text-2xl font-extrabold lg:text-3xl">{point.value}</dt>
              <dd className="mt-2 text-sm leading-relaxed opacity-80">{point.label}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
