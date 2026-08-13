import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CtaBand } from "@/components/CtaBand";
import { Testimonials } from "@/components/Testimonials";
import { Impact } from "@/components/Impact";
import { QuoteSection } from "@/components/QuoteSection";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";
import { services, site } from "@/content/site";

const title = "Landscapers Perth | Dawson Landscaping & Maintenance";
const description =
  "Perth landscaping and garden maintenance. Dawson Landscaping designs, builds and maintains beautiful outdoor spaces across Perth, WA. Free quotes.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LandscapingBusiness",
    name: site.name,
    description,
    telephone: site.phone,
    email: site.email,
    areaServed: { "@type": "City", name: "Perth", addressRegion: "WA", addressCountry: "AU" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Perth",
      addressRegion: "WA",
      addressCountry: "AU",
    },
    openingHours: "Mo-Fr 07:00-17:00",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Landscaping & garden maintenance services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.description },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="pb-20 sm:pb-0">
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Work />
        <BeforeAfter />
        <CtaBand />
        <Testimonials />
        <Impact />
        <QuoteSection />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
