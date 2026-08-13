import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { SubpageHero } from "@/components/SubpageHero";
import { Testimonials } from "@/components/Testimonials";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";

const title = "Reviews | Dawson Landscaping & Maintenance";
const description =
  "Read reviews and feedback from Perth residential and commercial property owners who trust Dawson Landscaping to design, install and maintain their gardens.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/reviews",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/reviews",
  },
};

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <main className="pb-20 sm:pb-0">
        <SubpageHero
          title="Reviews"
          description="Read stories and feedback from Perth homeowners who trust us to care for their outdoor spaces."
          eyebrow="Reviews"
        />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
