import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedExpeditions from "@/components/FeaturedExpeditions";
import WhyBookWithUs from "@/components/WhyBookWithUs";
import EnquiryForm from "@/components/EnquiryForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/use-seo";
import { Link } from "react-router-dom";
import shimshalCover from "@/assets/shimshal/Shimshal-Autumn-Forest-CMP.jpg";
import hunzaCover1 from "@/assets/hunza peaks/hunza pik.jpeg";
import hunzaCover2 from "@/assets/hunza peaks/hunza rockrin.jpeg";
import hunzaCover3 from "@/assets/hunza peaks/puso hunza.jpeg";
import latobahCover from "@/assets/latbo/latbo 1.jpeg";

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
      email: ["akhtar_nangaparbat@yahoo.com", "akhtarnagabarbat@gmail.com"],
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

      {/* Featured Post: Shimshal + Hunza (combined) */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Post</h2>
            <p className="text-muted-foreground">From our popular places and guides</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
            {/* Card 1: Shimshal */}
            <article className="grid grid-rows-[auto,1fr] gap-4">
              <div className="relative h-56 md:h-64 rounded-xl overflow-hidden shadow-sm">
                <img
                  src={shimshalCover}
                  alt="Shimshal The Lost Valley of Hunza"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="uppercase tracking-wide text-sm text-secondary font-semibold mb-2">Popular Place</div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Shimshal The Lost Valley of Hunza</h3>
                <p className="text-muted-foreground mb-6">
                  Hidden deep in the Karakoram, Shimshal is remote, rugged, and profoundly beautiful. Venture far off the
                  beaten path—jagged peaks, vast landscapes, and one of Pakistan’s most dramatic valley roads.
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="inline-flex items-center text-xs px-3 py-1 rounded-full bg-muted text-foreground">Best: May–Oct</span>
                  <span className="inline-flex items-center text-xs px-3 py-1 rounded-full bg-muted text-foreground">Region: Hunza, GB</span>
                </div>
                <div className="flex items-center gap-3">
                  <Link to="/destination/shimshal" className="inline-flex items-center justify-center px-5 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition">
                    Read Guide
                  </Link>
                  <Link to="/contact-us" className="inline-flex items-center justify-center px-5 py-2 rounded-md border border-input hover:bg-muted/50 transition">
                    Book with Mazano
                  </Link>
                </div>
              </div>
            </article>

            {/* Card 2: Hunza Valley Tour */}
            <article className="grid grid-rows-[auto,1fr] gap-4">
              <div className="relative h-56 md:h-64 rounded-xl overflow-hidden shadow-sm">
                <img
                  src={hunzaCover1}
                  alt="Hunza Valley Tour"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="uppercase tracking-wide text-sm text-secondary font-semibold mb-2">Popular Place</div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Hunza Valley Tour</h3>
                <p className="text-muted-foreground mb-6">
                  Acclaimed as the Land of Legends—culture, landscapes, and hospitality surrounded by Rakaposhi, Diran,
                  Spantik, Shishper, Ultar and more. Lakes, glaciers, unique architecture, and vibrant community life.
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="inline-flex items-center text-xs px-3 py-1 rounded-full bg-muted text-foreground">Best: Mar–Nov</span>
                  <span className="inline-flex items-center text-xs px-3 py-1 rounded-full bg-muted text-foreground">Region: Hunza, GB</span>
                </div>
                <div className="flex items-center gap-3">
                  <Link to="/destination/hunza-valley" className="inline-flex items-center justify-center px-5 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition">
                    Read Guide
                  </Link>
                  <Link to="/contact-us" className="inline-flex items-center justify-center px-5 py-2 rounded-md border border-input hover:bg-muted/50 transition">
                    Book with Mazano
                  </Link>
                </div>
              </div>
            </article>

            {/* Card 3: Latobah (Rupal Valley, Nanga Parbat) */}
            <article className="grid grid-rows-[auto,1fr] gap-4">
              <div className="relative h-56 md:h-64 rounded-xl overflow-hidden shadow-sm">
                <img
                  src={latobahCover}
                  alt="Latobah (Rupal Valley, Nanga Parbat)"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="uppercase tracking-wide text-sm text-secondary font-semibold mb-2">Popular Place</div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Latobah (Rupal Valley, Nanga Parbat)</h3>
                <p className="text-muted-foreground mb-6">
                  A high alpine meadow above the Bazhin Glacier, facing the legendary Rupal Face of Nanga Parbat. Wide
                  pastures, glacier-fed streams, and panoramic views—ideal for trekkers seeking raw, crowd-free scenery.
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="inline-flex items-center text-xs px-3 py-1 rounded-full bg-muted text-foreground">Best: mid-Jun–Sep</span>
                  <span className="inline-flex items-center text-xs px-3 py-1 rounded-full bg-muted text-foreground">Region: Rupal Valley, Astore</span>
                </div>
                <div className="flex items-center gap-3">
                  <Link to="/destination/latobah" className="inline-flex items-center justify-center px-5 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition">
                    Read Guide
                  </Link>
                  <Link to="/contact-us" className="inline-flex items-center justify-center px-5 py-2 rounded-md border border-input hover:bg-muted/50 transition">
                    Book with Mazano
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <WhyBookWithUs />
      <EnquiryForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
