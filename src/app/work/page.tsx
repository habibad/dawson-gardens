import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { SubpageHero } from "@/components/SubpageHero";
import { Work } from "@/components/Work";
import { BeforeAfter } from "@/components/BeforeAfter";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";

const title = "Our Work | Dawson Landscaping & Maintenance";
const description =
  "Browse our portfolio of completed projects across Perth. Explore backyard terraced rebuilds, native gardens, courtyard refreshes, and before-and-after landscaping changes.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/work",
  },
};

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className="pb-20 sm:pb-0">
        <SubpageHero
          title="Our Work"
          description="Explore our recent landscaping projects, native garden designs, and garden renovations across Perth."
          eyebrow="Our Work"
        />
        <Work />
        <BeforeAfter />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
