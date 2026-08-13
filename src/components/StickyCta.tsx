"use client";

import { Phone } from "lucide-react";
import { site } from "@/content/site";
import { track } from "@/lib/analytics";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-md sm:hidden">
      <div className="grid grid-cols-2 gap-2 p-3">
        <a
          href={site.phoneHref}
          onClick={() => track("phone_click", { location: "sticky_mobile" })}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-forest/25 py-3.5 text-xs font-bold tracking-[0.14em] text-forest uppercase"
        >
          <Phone className="size-4" aria-hidden />
          Call
        </a>
        <a
          href="#quote"
          onClick={() => track("quote_cta_click", { location: "sticky_mobile" })}
          className="inline-flex items-center justify-center rounded-full bg-forest py-3.5 text-xs font-bold tracking-[0.14em] text-forest-foreground uppercase"
        >
          Free Quote
        </a>
      </div>
    </div>
  );
}
