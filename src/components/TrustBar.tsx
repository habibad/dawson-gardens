import { MapPin, ShieldCheck, Hammer, CalendarCheck, FileText } from "lucide-react";
import { trustPoints } from "@/content/site";
import { Reveal } from "./Reveal";

const icons = [MapPin, ShieldCheck, Hammer, CalendarCheck, FileText];

export function TrustBar() {
  return (
    <section aria-labelledby="trust-heading" className=" z-10 relative ">
      <div className="mx-auto max-w-7xl p-5 py-8 bg-forest border border-olive/60 rounded-sm -mt-10 ">
        {/* <Reveal>
          <h2
            id="trust-heading"
            className="text-center text-xs font-bold tracking-[0.2em] text-gold uppercase mb-12"
          >
            Trusted by Perth Homeowners
          </h2>
        </Reveal> */}

        <ul className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {trustPoints.map((point, i) => {
            const Icon = icons[i % icons.length] ?? MapPin;
            return (
              <Reveal as="li" key={point.title} delay={i * 70} className="flex min-w-0 items-start gap-4 group">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-gold/20 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-forest group-hover:scale-110">
                  <Icon className="size-5 transition-colors duration-300" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-sm font-bold text-white transition-colors duration-300 group-hover:text-gold">
                    {point.title}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-gray-200/90">
                    {point.detail}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
