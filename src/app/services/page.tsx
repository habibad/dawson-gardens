import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { SubpageHero } from "@/components/SubpageHero";
import { Services } from "@/components/Services";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";

const title = "Our Services | Dawson Landscaping & Maintenance";
const description =
  "Complete landscaping and garden care solutions across Perth. From landscape design and installation to lawn care, hedge clipping, and garden tidy-ups.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pb-20 sm:pb-0">
        <SubpageHero
          title="Our Services"
          description="Considered garden care and creative landscape transformations built around your property's soil, light, and layout."
          eyebrow="Services"
        />
        <Services />
        <CtaBand />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
