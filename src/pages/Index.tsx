import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedExpeditions from "@/components/FeaturedExpeditions";
import WhyBookWithUs from "@/components/WhyBookWithUs";
import EnquiryForm from "@/components/EnquiryForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/use-seo";

const Index = () => {
  useSEO({
    title: "Adventure in Pakistan | Top Rated Tours & Expeditions | Online Appointments",
    description:
      "Top rated adventure tours in Pakistan. Online appointments available. Explore best adventure places in Pakistan including Fairy Meadows, Skardu, Deosai, K2 Base Camp, and more.",
    keywords: [
      // Main keywords
      "online appointments adventure in pakistan",
      "adventure in pakistan open now",
      "top rated adventure in pakistan",
      "adventure places in pakistan open now",
      "top rated adventure places in pakistan",
      // Related keywords
      "adventure in pakistan",
      "adventure in pakistan packages",
      "best adventure in pakistan",
      "adventure tours pakistan",
      "adventure places in pakistan",
      "pakistan tours",
      "best adventure places in pakistan",
      "outdoor adventure places in pakistan",
      "adventure places in pakistan for adults",
      "adventure places in pakistan karachi",
      "fairy meadows",
      "things to see in skardu",
      "skardu deosai",
      "adventures islamabad",
      "pakistan tour packages",
      "mountain adventure pakistan",
      // Other keywords
      "adventure bike price in pakistan",
      "adventure activities in pakistan",
      "adventure parks in lahore",
      "adventurous things to do in lahore",
      "adventure place in karachi",
      "adventure places in islamabad",
      "adventure activities in karachi",
      "adventures places in pakistan",
      "adventure parks in islamabad",
      "bmw 1250 gs adventure price in pakistan",
      "davidoff adventure price in pakistan",
      "adventure bikes in pakistan",
      "adventure perfume bonanza price in pakistan",
      "adventure bikes for sale in pakistan",
      "bmw adventure bike price in pakistan",
      "adventure tourism in pakistan",
      "adventure park in pakistan",
      "adventure white perfume price in pakistan",
    ],
    canonical: typeof window !== "undefined" ? window.location.origin + "/" : undefined,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      name: "Mazano Adventures",
      url: typeof window !== "undefined" ? window.location.origin : "",
      email: "akhtarnagabarbat@gmail.com",
      telephone: "+92 345 9160113",
      areaServed: "Pakistan",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Post Office Tarnishing",
        addressLocality: "Tehsil Shouter",
        addressRegion: "Gilgit-Baltistan",
        addressCountry: "PK",
      },
    },
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturedExpeditions />
      <WhyBookWithUs />
      <EnquiryForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
