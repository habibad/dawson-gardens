/**
 * All page content lives here so it can later be sourced from a CMS
 * (WordPress, Sanity, etc.) without changing any component.
 */

import svcDesign from "@/assets/svc-design.jpg";
import svcMaintenance from "@/assets/svc-maintenance.jpg";
import svcLawn from "@/assets/svc-lawn.jpg";
import svcHedge from "@/assets/svc-hedge.jpg";
import svcPaving from "@/assets/svc-paving.jpg";
import svcCleanup from "@/assets/svc-cleanup.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

export const site = {
  name: "Dawson Landscaping & Maintenance",
  shortName: "Dawson",
  phone: "(08) 6000 0000",
  phoneHref: "tel:+61860000000",
  email: "hello@dawsonlandscaping.com.au",
  area: "Perth & surrounding suburbs, WA",
  hours: "Mon – Fri, 7am – 5pm · Sat by appointment",
};

export const nav = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#quote" },
];

export const trustPoints = [
  { title: "Local Perth Team", detail: "Based here, working here" },
  { title: "Fully Insured", detail: "Cover on every job" },
  { title: "Quality Workmanship", detail: "Finished properly, first time" },
  { title: "Reliable Service", detail: "We turn up when we say" },
  { title: "Free Quotes", detail: "No obligation, no pressure" },
];

export type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export const services: Service[] = [
  {
    slug: "landscape-design",
    title: "Landscape Design & Installation",
    description: "Transform outdoor areas into functional, beautiful spaces built for Perth conditions.",
    image: svcDesign,
  },
  {
    slug: "garden-maintenance",
    title: "Garden Maintenance",
    description: "Consistent professional care that keeps gardens healthy, tidy and presentable year round.",
    image: svcMaintenance,
  },
  {
    slug: "lawn-care",
    title: "Lawn Care",
    description: "Mowing, edging, treatment and ongoing care for a lawn that holds its colour and shape.",
    image: svcLawn,
  },
  {
    slug: "hedging",
    title: "Garden & Hedge Maintenance",
    description: "Hedges, plants and garden beds kept clean, shaped and healthy through every season.",
    image: svcHedge,
  },
  {
    slug: "outdoor-improvements",
    title: "Landscaping & Outdoor Improvements",
    description: "Planting, garden beds, paving, edging and the details that lift a whole property.",
    image: svcPaving,
  },
  {
    slug: "seasonal-clean-ups",
    title: "Seasonal Clean-Ups",
    description: "Detailed clean-up and reset so your garden is ready for the season ahead.",
    image: svcCleanup,
  },
];

export type Project = {
  slug: string;
  category: string;
  title: string;
  location: string;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "backyard-rebuild",
    category: "Garden Transformation",
    title: "Terraced Backyard Rebuild",
    location: "Perth, WA",
    image: work1,
  },
  {
    slug: "native-frontage",
    category: "Residential Landscaping",
    title: "Native Frontage & Feature Tree",
    location: "Perth, WA",
    image: work2,
  },
  {
    slug: "courtyard-refresh",
    category: "Garden Maintenance",
    title: "Courtyard Refresh & Planting",
    location: "Perth, WA",
    image: work3,
  },
];

/**
 * Placeholder testimonials — sample copy only, not real client reviews.
 * Replace with verified reviews before launch.
 */
export const testimonials = [
  {
    quote:
      "Sample testimonial copy. Replace with a real client review once collected — the layout supports 2–4 short sentences.",
    name: "Client Name",
    service: "Garden Transformation",
  },
  {
    quote:
      "Sample testimonial copy. This card is a placeholder showing how a maintenance client review will appear on the page.",
    name: "Client Name",
    service: "Ongoing Maintenance",
  },
  {
    quote:
      "Sample testimonial copy. Placeholder text for a lawn care review, kept short so the section stays clean and readable.",
    name: "Client Name",
    service: "Lawn Care",
  },
];

export const impactPoints = [
  { value: "Perth", label: "& surrounding suburbs served" },
  { value: "Design + Care", label: "Build it, then keep it looking right" },
  { value: "Fully Insured", label: "Cover on every property we work on" },
  { value: "Free Quotes", label: "Honest advice before you commit" },
];
