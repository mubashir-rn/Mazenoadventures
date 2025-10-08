import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mountain, Users, Award, Heart, Leaf, Headphones, Target, Shield, Globe, CheckCircle, Star, Calendar, MapPin, Phone } from "lucide-react";
import coverImage from "@/assets/mazenoadventures poster.jpeg";

const AboutUs = () => {
  const stats = [
    { label: "SAFETY RECORD", value: 100, icon: Shield, color: "text-green-600" },
    { label: "EXPERTISE", value: 98, icon: Mountain, color: "text-blue-600" },
    { label: "CLIENT SATISFACTION", value: 96, icon: Heart, color: "text-red-500" },
    { label: "LOCAL KNOWLEDGE", value: 100, icon: Globe, color: "text-purple-600" },
    { label: "ENVIRONMENTAL CARE", value: 94, icon: Leaf, color: "text-green-500" },
    { label: "24/7 SUPPORT", value: 100, icon: Headphones, color: "text-orange-600" }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Government Licensed",
      description: "Officially licensed trekking and mountaineering company in Pakistan"
    },
    {
      icon: Target,
      title: "Top-Listed Agency",
      description: "Featured in Pakistan Travel Guide as a premier adventure operator"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced guides and support staff with decades of mountain expertise"
    },
    {
      icon: Mountain,
      title: "8000m+ Specialists",
      description: "Specializing in high-altitude expeditions and technical mountaineering"
    }
  ];

  const services = [
    "Trekking & Mountain Expeditions",
    "Climbing & Technical Mountaineering", 
    "Hiking & Nature Walks",
    "High Altitude Expeditions (8000m+)",
    "Skiing & Winter Sports",
    "Culture & Heritage Trips",
    "Cities Tours & Urban Exploration",
    "Jeep Safari Adventures",
    "Hunting Expeditions",
    "Special Trout Fishing",
    "Vehicle Rentals & Transportation",
    "Flight Bookings & Travel Coordination",
    "Visa Counseling & Documentation",
    "Hotel Booking & Accommodation",
    "Equipment Rental & Logistics",
    "Emergency Support & Rescue Coordination"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Cover Section */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <img 
          src={coverImage} 
          alt="Mazano Adventures Cover"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80">
          <div className="container mx-auto px-4 max-w-7xl h-full flex items-center">
            <div className="text-white max-w-4xl">
              <Badge variant="secondary" className="mb-6 bg-primary/20 text-white border-primary/30 backdrop-blur-sm">
                Government Licensed (License: 017)
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                About <span className="text-primary">Mazano Adventures</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-4 text-white/90 leading-relaxed">
                Pakistan's Premier Adventure Specialists
              </p>
              <p className="text-sm md:text-base lg:text-lg max-w-2xl text-white/80 leading-relaxed">
                Discover the world's most spectacular mountains with expert guides and unmatched local knowledge
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 text-white/90">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Gilgit-Baltistan, Pakistan</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">24/7 Expert Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Adventure Beyond Limits
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Government-licensed specialists delivering safe, unforgettable mountain experiences 
              across Pakistan's legendary peaks and landscapes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-white/95 dark:bg-card rounded-2xl p-6 shadow-[0_10px_35px_rgb(0,0,0,0.15)] hover:shadow-[0_15px_45px_rgb(0,0,0,0.22)] transition-all duration-300 border-0 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-foreground mb-4">Our Promise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Expert guidance, world-class safety standards, and authentic local experiences 
                  that create memories of a lifetime.
                </p>
              </div>
              <div className="bg-white/95 dark:bg-card rounded-2xl p-6 shadow-[0_10px_35px_rgb(0,0,0,0.15)] hover:shadow-[0_15px_45px_rgb(0,0,0,0.22)] transition-all duration-300 border-0 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-foreground mb-4">Why Choose Us</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Licensed professionals, 24/7 support, and unmatched knowledge of Pakistan's 
                  most spectacular mountain regions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional excellence backed by official credentials and local expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center shadow-[0_10px_35px_rgb(0,0,0,0.15)] hover:shadow-[0_15px_45px_rgb(0,0,0,0.22)] transition-all duration-300 transform hover:-translate-y-2 bg-white/95 dark:bg-card backdrop-blur-sm border-0">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_4px_12px_rgb(0,0,0,0.1)]">
                    <achievement.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{achievement.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Excellence in Every Detail
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality across all aspects of your adventure experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center shadow-[0_10px_35px_rgb(0,0,0,0.15)] hover:shadow-[0_15px_45px_rgb(0,0,0,0.22)] transition-all duration-300 bg-white/95 dark:bg-card backdrop-blur-sm border-0">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_4px_12px_rgb(0,0,0,0.1)]">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">{stat.label}</h3>
                  <div className="mb-4">
                    <Progress value={stat.value} className="mb-2 h-3" />
                    <span className="text-3xl font-bold text-primary">{stat.value}%</span>
                  </div>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < 5 ? 'text-secondary fill-secondary' : 'text-gray-300'}`} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Adventure Awaits
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From extreme peaks to cultural journeys - your perfect Pakistan adventure starts here
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-white/95 dark:bg-card rounded-lg shadow-[0_6px_20px_rgb(0,0,0,0.12)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.18)] hover:bg-primary/5 dark:hover:bg-primary/5 transition-all duration-300 border-0 backdrop-blur-sm">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_2px_8px_rgb(0,0,0,0.1)]">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to explore Pakistan's legendary mountains? Our expert team is here to make 
            your adventure dreams a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4" asChild>
              <a href="/contact-us">Get In Touch</a>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4" asChild>
              <a href="/expeditions">View Expeditions</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;