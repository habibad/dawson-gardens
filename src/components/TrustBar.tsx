import { MapPin, ShieldCheck, Hammer, CalendarCheck, FileText } from "lucide-react";
import { trustPoints } from "@/content/site";
import { Reveal } from "./Reveal";

const icons = [MapPin, ShieldCheck, Hammer, CalendarCheck, FileText];

export function TrustBar() {
  return (
    <section aria-labelledby="trust-heading" className="border-y border-border bg-sand">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-14">
        <Reveal>
          <h2
            id="trust-heading"
            className="text-center text-sm font-bold tracking-[0.2em] text-muted-foreground uppercase"
          >
            Trusted by Perth Homeowners
          </h2>
        </Reveal>
        <ul className="mt-9 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {trustPoints.map((point, i) => {
            const Icon = icons[i % icons.length] ?? MapPin;
            return (
              <Reveal as="li" key={point.title} delay={i * 70} className="flex min-w-0 items-start gap-3">
                <Icon className="mt-0.5 size-5 shrink-0 text-olive" aria-hidden />
                <div className="min-w-0">
                  <p className="font-display text-base font-bold text-forest">{point.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{point.detail}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
