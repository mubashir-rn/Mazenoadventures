import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Award, Users, Mountain, Heart } from "lucide-react";

const WhyBookWithUs = () => {
  const features = [
    {
      icon: Shield,
      title: "No-hassle best price guarantee",
      description: "We guarantee the best prices for all our expeditions with transparent pricing and no hidden costs."
    },
    {
      icon: Clock,
      title: "Customer care available 24/7",
      description: "Our dedicated support team is available round the clock to assist you before, during, and after your expedition."
    },
    {
      icon: Award,
      title: "Hand-picked Tours & Activities",
      description: "Every expedition is carefully selected and planned by our experienced mountaineering experts."
    },
    {
      icon: Heart,
      title: "Free Travel Insurance",
      description: "Comprehensive travel and adventure insurance included with every booking for your peace of mind."
    },
    {
      icon: Users,
      title: "Expert Local Guides",
      description: "1:1 guide to client ratio with experienced Sherpas and local mountaineering professionals."
    },
    {
      icon: Mountain,
      title: "Safety First Approach",
      description: "Highest safety standards with modern equipment, satellite communication, and emergency protocols."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Book With Us?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With decades of experience in high-altitude expeditions, we're your trusted partner for the adventure of a lifetime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBookWithUs;