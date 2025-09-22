import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Mountain, Users, Award, Heart, Leaf, Headphones } from "lucide-react";

const AboutUs = () => {
  const stats = [
    { label: "BRANDING", value: 90, icon: Award },
    { label: "EXPERTISE", value: 100, icon: Mountain },
    { label: "PERSONALIZED SERVICE", value: 85, icon: Users },
    { label: "SAFETY", value: 100, icon: Heart },
    { label: "LOCAL KNOWLEDGE", value: 90, icon: Headphones },
    { label: "ENVIRONMENTAL RESPONSIBILITY", value: 85, icon: Leaf }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="bg-gradient-sky py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">About Us</h1>
            <p className="text-xl text-muted-foreground">Welcome to Mazano Adventures</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We would like to introduce you that we are a Trekking, Mountaineering and Expeditions Govt License based Company in Pakistan. 
              We are also top-listed Trekking, Mountaineering and Expeditions agency in Pakistan by Travel Guide book Pakistan providing and 
              taking care of all trekking, mountaineering and expeditions requirements. We are honored & dedicated to providing the best quality, 
              value and service to meet our customer's expectation and available 24*7 for our esteem customers for any inquiries on Tour Packages, 
              Cultural Sightseeing & Indus Civilization Tours, Trekking and mountain climbing packages, Vehicle Rentals, Flight Bookings, 
              Visa Counseling, Hotel Booking, and other Tourism Related Services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-4">{stat.label}</h3>
                  <Progress value={stat.value} className="mb-2" />
                  <span className="text-2xl font-bold text-primary">{stat.value}%</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;