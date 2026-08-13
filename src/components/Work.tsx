"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/site";
import { track } from "@/lib/analytics";
import { Reveal } from "./Reveal";

export function Work() {
  const [feature, ...rest] = projects;

  return (
    <section id="work" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Our Work</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.02] font-extrabold text-forest">
              Landscapes That Speak for Themselves.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            A selection of recent Perth projects — from full transformations to gardens we keep
            looking their best all year.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {feature && <ProjectCard project={feature} tall />}
          <div className="grid gap-6">
            {rest.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  tall = false,
}: {
  project: (typeof projects)[number];
  tall?: boolean;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <Reveal>
      <Link
        href={isHome ? "#quote" : "/contact"}
        onClick={() => track("portfolio_project_click", { project: project.slug })}
        className="group relative block overflow-hidden rounded-[2rem]"
      >
        <Image
          src={project.image}
          alt={`${project.title} — ${project.category} in ${project.location}`}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${
            tall ? "h-[420px] lg:h-[720px]" : "h-[300px] lg:h-[348px]"
          }`}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-forest-foreground sm:p-8">
          <div className="min-w-0">
            <p className="text-[0.7rem] font-bold tracking-[0.18em] text-gold uppercase">
              {project.category}
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">{project.title}</h3>
            <p className="mt-1 text-sm opacity-80">{project.location}</p>
          </div>
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-cream text-forest transition-transform duration-300 group-hover:-translate-y-1">
            <ArrowUpRight className="size-5" aria-hidden />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
