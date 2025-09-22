import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Shield, Plane, AlertTriangle, Phone, MapPin, Clock, CheckCircle } from "lucide-react";

const Resources = () => {
  const visaSteps = [
    {
      step: 1,
      title: "Preliminary Assessment",
      description: "Begin by identifying the appropriate visa category that matches your travel purpose. Carefully review the official eligibility requirements and gather a checklist of all required documents, including passport validity, invitation letters, and travel plans. Ensuring eligibility from the start will save time later in the process."
    },
    {
      step: 2,
      title: "Preparation",
      description: "Before filling out your application, make sure you've gathered all necessary materials. This includes a passport-size photo (max 350KB), a valid passport, an invitation letter (Mazano Adventures can assist), and a debit or credit card for fee payment. If you're unsure about any document, feel free to contact us through our Contact Page."
    },
    {
      step: 3,
      title: "Online Application",
      description: "When ready, visit the Pakistan Online Visa Portal. Click 'Apply Now' to create a new account, log in, and complete your application form. After uploading documents and submitting payment, finalize your application. You'll receive updates via email. For visual help, refer to NADRA's step-by-step user guide available on their site."
    }
  ];

  const insuranceFeatures = [
    {
      title: "Expertise on the Ground",
      description: "Mazano Adventures works with a trusted local partner in Pakistan, ensuring fast and reliable emergency support during your trip.",
      icon: MapPin
    },
    {
      title: "Emergency Coverage",
      description: "From accidents to unrest, you're covered with medical and security support wherever your journey takes you.",
      icon: Shield
    },
    {
      title: "High-Altitude Ready",
      description: "Planning to explore remote treks like Concordia or Fairy Meadows? Global Rescue is built for such adventures.",
      icon: AlertTriangle
    },
    {
      title: "24/7 Assistance",
      description: "Expert help is always just a call away—anytime, anywhere in the world.",
      icon: Phone
    }
  ];

  const highAltitudeChallenges = [
    "Altitude-related health risks such as Acute Mountain Sickness (AMS)",
    "Unpredictable weather conditions in mountain regions",
    "Limited access to immediate medical facilities",
    "Flight delays due to weather conditions",
    "Logistical constraints in remote mountainous areas",
    "Physical demands of high-altitude trekking and climbing"
  ];

  const insuranceCoverage = [
    "Comprehensive trekking and climbing coverage",
    "Emergency evacuation services",
    "Medical support for altitude sickness or injury",
    "Trip cancellation and delay protection",
    "Remote medical access in Karakoram/Himalayas",
    "24/7 emergency help and support services"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-sky py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Resources
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Essential information and services to help you plan your perfect adventure in Pakistan
            </p>
          </div>
        </div>
      </section>

      {/* Visa Assistance */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">Visa Assistance</h2>
              <p className="text-muted-foreground">Pakistan Tourist Visa Guide by Mazano Adventures</p>
            </div>
            <FileText className="h-12 w-12 text-primary" />
          </div>
          
          <div className="mb-8">
            <p className="text-muted-foreground leading-relaxed">
              Our mountain tours take you to the highest peaks, where you can witness stunning vistas and enjoy the crisp mountain air. 
              Our beach tours, on the other hand, offer a chance to relax and unwind on the sandy shores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visaSteps.map((step) => (
              <Card key={step.step} className="hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="mountain" size="lg">
              <Plane className="h-5 w-5 mr-2" />
              Start Visa Application
            </Button>
          </div>
        </div>
      </section>

      {/* Travel Insurance */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Travel Insurance</h2>
            <p className="text-xl text-muted-foreground">Best Travel Insurance for Pakistan</p>
            <div className="mt-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">Travel Confidently with Mazano Adventures</Badge>
            </div>
          </div>

          <div className="mb-12">
            <Card>
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed">
                  Planning your journey to Pakistan? Before you pack your bags, don't forget one of the most important items on your checklist—Travel Insurance. 
                  Whether you're trekking to the majestic base camps of K2, exploring the timeless culture of Lahore, or adventuring through the scenic Hunza Valley, 
                  Pakistan offers experiences like no other. That's why Mazano Adventures strongly recommends securing reliable travel insurance.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {insuranceFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-destructive">
                  <AlertTriangle className="h-5 w-5" />
                  <span>Challenges of High-Altitude Treks</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Trekking in remote mountainous regions comes with a unique set of challenges:
                </p>
                <ul className="space-y-2">
                  {highAltitudeChallenges.map((challenge, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <AlertTriangle className="h-4 w-4 text-destructive mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-green-600">
                  <Shield className="h-5 w-5" />
                  <span>Insurance Coverage & Emergency Support</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  To ensure a safe and worry-free adventure, all participants are advised to have:
                </p>
                <ul className="space-y-2">
                  {insuranceCoverage.map((coverage, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{coverage}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="mountain" size="lg">
              <Shield className="h-5 w-5 mr-2" />
              Get Travel Insurance
            </Button>
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Travel Tips</h2>
            <p className="text-muted-foreground">Essential advice for traveling in Pakistan</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Best Time to Visit</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Spring (Mar-May):</strong> Ideal for lower altitude treks</li>
                  <li>• <strong>Summer (Jun-Aug):</strong> Best for high-altitude expeditions</li>
                  <li>• <strong>Autumn (Sep-Nov):</strong> Perfect for cultural tours</li>
                  <li>• <strong>Winter (Dec-Feb):</strong> Limited mountain access</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>What to Pack</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• High-quality mountaineering gear</li>
                  <li>• Layered clothing system</li>
                  <li>• UV protection sunglasses</li>
                  <li>• High SPF sunscreen</li>
                  <li>• Personal first aid kit</li>
                  <li>• Water purification tablets</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>Emergency Contacts</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    • <strong>Mazano Adventures:</strong> 
                    <a href="https://wa.link/d4d1pg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 ml-1">
                      +92 345 9160113 (WhatsApp)
                    </a>
                  </li>
                  <li>• <strong>Tourist Police:</strong> 1422</li>
                  <li>• <strong>Emergency Services:</strong> 15</li>
                  <li>• <strong>Embassy/Consulate:</strong> Contact details</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;