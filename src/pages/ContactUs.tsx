import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useSEO } from "@/hooks/use-seo";

const ContactUs = () => {
  useSEO({
    title: "Contact Mazano Adventures | Adventure in Pakistan | Online Appointments",
    description:
      "Contact Mazano Adventures for top-rated adventure tours in Pakistan. Online appointments available. Reach us via WhatsApp or email for Fairy Meadows, Skardu, Deosai and more.",
    keywords: [
      "adventure in pakistan",
      "online appointments adventure in pakistan",
      "top rated adventure in pakistan",
      "adventure tours pakistan",
      "adventure places in pakistan",
      "best adventure places in pakistan",
      "adventures islamabad",
      "pakistan tour packages",
      "mountain adventure pakistan",
      "fairy meadows",
      "things to see in skardu",
      "skardu deosai",
      "contact adventure pakistan",
    ],
    canonical: typeof window !== "undefined" ? window.location.origin + "/contact-us" : undefined,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      name: "Mazano Adventures",
      url: typeof window !== "undefined" ? window.location.origin + "/contact-us" : "",
      email: ["akhtar_nangaparbat@yahoo.com", "akhtarnagabarbat@gmail.com"],
      telephone: "+92 345 9160113",
      sameAs: ["https://wa.link/d4d1pg"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Post Office Tarnishing",
        addressLocality: "Tehsil Shouter",
        addressRegion: "Gilgit-Baltistan",
        addressCountry: "PK",
      },
      openingHoursSpecification: [{
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens: "00:00",
        closes: "23:59",
      }],
    },
  });
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="bg-gradient-sky py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground">Get in touch with our expedition experts</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="p-6">
                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-muted-foreground">
                  <a href="https://wa.link/d4d1pg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    +92 345 9160113
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Email</h3>
                <div className="text-muted-foreground space-y-1">
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <a href="mailto:akhtar_nangaparbat@yahoo.com" className="underline underline-offset-4">akhtar_nangaparbat@yahoo.com</a>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <a href="mailto:akhtarnagabarbat@gmail.com" className="underline underline-offset-4">akhtarnagabarbat@gmail.com</a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-muted-foreground">Post Office Tarnishing, District Astore, Tehsil Shouter, Gilgit-Baltistan</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Hours</h3>
                <p className="text-muted-foreground">24/7 Support</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <EnquiryForm />
      <Footer />
    </div>
  );
};

export default ContactUs;