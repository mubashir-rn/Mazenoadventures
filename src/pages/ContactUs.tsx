import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactUs = () => {
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
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">
                  <a href="mailto:akhtarnagabarbat@gmail.com" className="underline underline-offset-4">
                    akhtarnagabarbat@gmail.com
                  </a>
                </p>
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