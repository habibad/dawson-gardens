import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/site";
import { track } from "@/lib/analytics";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="bg-sand py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Our Services</p>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.02] font-extrabold text-forest">
            Complete Landscaping &amp; Garden Solutions
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal as="li" key={service.slug} delay={(i % 3) * 90}>
              <a
                href="#quote"
                onClick={() => track("service_click", { service: service.slug })}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-[0_1px_0_0_var(--border)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
              >
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} — Dawson Landscaping Perth`}
                    loading="lazy"
                    width={1000}
                    height={800}
                    className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="block h-0.5 w-8 bg-gold transition-all duration-300 group-hover:w-16" />
                  <h3 className="mt-4 font-display text-xl leading-snug font-bold text-forest">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-olive uppercase">
                    Learn more
                    <ArrowUpRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      aria-hidden
                    />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
