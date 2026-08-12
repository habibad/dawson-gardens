import { useRef, useState } from "react";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { services, site } from "@/content/site";
import { track } from "@/lib/analytics";
import { Reveal } from "./Reveal";

const fieldClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-olive";
const labelClass = "block text-xs font-semibold tracking-[0.1em] text-forest uppercase";

export function QuoteSection() {
  const [submitted, setSubmitted] = useState(false);
  const started = useRef(false);

  const onStart = () => {
    if (started.current) return;
    started.current = true;
    track("quote_form_start");
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    track("quote_form_submit", { service: String(data.get("service") ?? "") });
    setSubmitted(true);
  };

  return (
    <section id="quote" className="bg-sand py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <Reveal>
          <p className="eyebrow">Get in Touch</p>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.02] font-extrabold text-forest">
            Let's Talk About Your Outdoor Space.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            Tell us a little about your project and we'll get back to you to discuss your
            landscaping or maintenance needs.
          </p>

          <ul className="mt-10 space-y-6">
            <li className="flex gap-4">
              <Phone className="mt-1 size-5 shrink-0 text-olive" aria-hidden />
              <div className="min-w-0">
                <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  Phone
                </p>
                <a
                  href={site.phoneHref}
                  onClick={() => track("phone_click", { location: "quote_section" })}
                  className="font-display text-lg font-bold text-forest hover:text-olive"
                >
                  {site.phone}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Mail className="mt-1 size-5 shrink-0 text-olive" aria-hidden />
              <div className="min-w-0">
                <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  onClick={() => track("email_click")}
                  className="font-display text-lg font-bold break-all text-forest hover:text-olive"
                >
                  {site.email}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <MapPin className="mt-1 size-5 shrink-0 text-olive" aria-hidden />
              <div className="min-w-0">
                <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  Service Area
                </p>
                <p className="font-display text-lg font-bold text-forest">{site.area}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Clock className="mt-1 size-5 shrink-0 text-olive" aria-hidden />
              <div className="min-w-0">
                <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  Hours
                </p>
                <p className="font-display text-lg font-bold text-forest">{site.hours}</p>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-[2rem] bg-card p-6 shadow-soft sm:p-9">
            {submitted ? (
              <div className="py-12 text-center">
                <h3 className="font-display text-2xl font-bold text-forest">Thanks — request received.</h3>
                <p className="mx-auto mt-3 max-w-sm text-sm text-muted-foreground">
                  This demo form isn't connected to a mailbox yet. Connect it to your preferred
                  form handler or CRM to start receiving quote requests.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} onFocus={onStart} noValidate={false}>
                <h3 className="font-display text-xl font-bold text-forest">Book a free quote</h3>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="name">Name</label>
                    <input id="name" name="name" required maxLength={100} autoComplete="name" className={`mt-2 ${fieldClass}`} placeholder="Your name" />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" required maxLength={30} autoComplete="tel" className={`mt-2 ${fieldClass}`} placeholder="04__ ___ ___" />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required maxLength={255} autoComplete="email" className={`mt-2 ${fieldClass}`} placeholder="you@email.com" />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="suburb">Suburb</label>
                    <input id="suburb" name="suburb" maxLength={80} className={`mt-2 ${fieldClass}`} placeholder="e.g. Subiaco" />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="service">Service required</label>
                    <select id="service" name="service" className={`mt-2 ${fieldClass}`} defaultValue="">
                      <option value="" disabled>Select a service</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.slug}>{s.title}</option>
                      ))}
                      <option value="other">Something else</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="contact-method">Preferred contact</label>
                    <select id="contact-method" name="contactMethod" className={`mt-2 ${fieldClass}`} defaultValue="phone">
                      <option value="phone">Phone call</option>
                      <option value="sms">Text message</option>
                      <option value="email">Email</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelClass} htmlFor="details">Project details</label>
                    <textarea id="details" name="details" rows={4} maxLength={1000} className={`mt-2 ${fieldClass} resize-y`} placeholder="Tell us about your garden or project" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-7 py-4 text-xs font-bold tracking-[0.16em] text-forest-foreground uppercase transition-all hover:-translate-y-0.5 hover:bg-olive"
                >
                  Request My Free Quote
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </button>
                <p className="mt-4 text-center text-xs text-muted-foreground">
                  No obligation. We'll only use your details to respond to this enquiry.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
