import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";
import { track } from "@/lib/analytics";
import { Reveal } from "./Reveal";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const tracked = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
    if (!tracked.current) {
      tracked.current = true;
      track("before_after_interact");
    }
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    (e.target as Element).setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (e.buttons !== 1) return;
    setFromClientX(e.clientX);
  };

  return (
    <section aria-labelledby="before-after-heading" className="bg-sand py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Before &amp; After</p>
          <h2
            id="before-after-heading"
            className="mt-5 font-display text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.02] font-extrabold text-forest"
          >
            See the Difference.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            From overgrown to beautifully maintained. Drag the handle to compare.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div
            ref={wrapRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            className="relative mt-10 touch-pan-y overflow-hidden rounded-[2rem] shadow-lift select-none"
          >
            <img
              src={afterImg}
              alt="Perth backyard after landscaping: new lawn, mulched garden beds and clean paving"
              loading="lazy"
              width={1400}
              height={900}
              className="block h-[300px] w-full object-cover sm:h-[460px] lg:h-[560px]"
            />
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
              aria-hidden
            >
              <img
                src={beforeImg}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            <span className="absolute top-4 left-4 rounded-full bg-forest/80 px-3 py-1.5 text-[0.65rem] font-bold tracking-[0.18em] text-forest-foreground uppercase">
              Before
            </span>
            <span className="absolute top-4 right-4 rounded-full bg-gold px-3 py-1.5 text-[0.65rem] font-bold tracking-[0.18em] text-forest uppercase">
              After
            </span>

            <div
              className="pointer-events-none absolute inset-y-0 w-0.5 bg-cream"
              style={{ left: `${pos}%` }}
            >
              <span className="absolute top-1/2 left-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-cream text-forest shadow-soft">
                <MoveHorizontal className="size-5" aria-hidden />
              </span>
            </div>

            <label className="sr-only" htmlFor="ba-range">
              Reveal before or after image
            </label>
            <input
              id="ba-range"
              type="range"
              min={0}
              max={100}
              value={pos}
              onChange={(e) => {
                setPos(Number(e.target.value));
                if (!tracked.current) {
                  tracked.current = true;
                  track("before_after_interact");
                }
              }}
              className="absolute inset-x-0 bottom-0 h-12 w-full cursor-ew-resize opacity-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
