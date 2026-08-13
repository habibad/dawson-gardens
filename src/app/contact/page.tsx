import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { SubpageHero } from "@/components/SubpageHero";
import { QuoteSection } from "@/components/QuoteSection";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";

const title = "Contact Us | Dawson Landscaping & Maintenance";
const description =
  "Get in touch with Dawson Landscaping & Maintenance. Request a free quote for your lawn care, garden maintenance, or landscape transformation project in Perth, WA.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pb-20 sm:pb-0">
        <SubpageHero
          title="Contact Us"
          description="Request a free, no-obligation quote for your property, or reach out to discuss your garden maintenance needs."
          eyebrow="Contact"
        />
        <QuoteSection />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
