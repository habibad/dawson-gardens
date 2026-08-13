import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { SubpageHero } from "@/components/SubpageHero";
import { About } from "@/components/About";
import { Impact } from "@/components/Impact";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";

const title = "About Us | Dawson Landscaping & Maintenance";
const description =
  "Learn about Dawson Landscaping. We design, build and care for outdoor spaces across Perth and surrounding WA suburbs with considered, local service.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pb-20 sm:pb-0">
        <SubpageHero
          title="About Dawson"
          description="Earthy landscaping and garden care built for Perth conditions. Same reliable team, start to finish."
          eyebrow="About"
        />
        <About />
        <Impact />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
