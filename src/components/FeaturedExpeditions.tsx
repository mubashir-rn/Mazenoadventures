import ExpeditionCard from "./ExpeditionCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import k2Image from "@/assets/k2-expedition.jpg";
import broadPeakImage from "@/assets/broad-peak.jpg";
import nangaParbatImage from "@/assets/nanga-parbat.jpg";
import gasherbrumImage from "@/assets/gasherbrum.jpg";

const FeaturedExpeditions = () => {
  const expeditions = [
    {
      id: "k2-expedition",
      title: "K2 PEAK (8611M) EXPEDITION",
      peak: "K2",
      elevation: "8611M",
      duration: "47 Days",
      groupSize: "8-15",
      difficulty: 5,
      minAge: "18+",
      pickupLocation: "Islamabad Airport",
      tourType: "Guided Expedition",
      description: "K2, at 8,611 metres above sea level, is the second highest mountain in the world, after Mount Everest at 8,848 metres. It is located on the China–Pakistan border between Baltistan in the Baltoro Glacier Karakoram Mountain range Pakistan.",
      image: k2Image,
      rating: 4.9,
      reviews: 86
    },
    {
      id: "broad-peak-expedition",
      title: "BROAD PEAK (8047M) EXPEDITION",
      peak: "Broad Peak",
      elevation: "8047M",
      duration: "45 Days",
      groupSize: "8-15",
      difficulty: 4,
      minAge: "18+",
      pickupLocation: "Islamabad Airport",
      tourType: "Guided Expedition",
      description: "Broad Peak is a Karakoram mountain on the border of Pakistan and China, the 12th highest mountain in the world at 8,047 metres above sea level. It was first ascended in June 1957 by an Austrian expedition.",
      image: broadPeakImage,
      rating: 4.8,
      reviews: 62
    },
    {
      id: "nanga-parbat-expedition",
      title: "NANGA PARBAT (8126M) EXPEDITION",
      peak: "Nanga Parbat",
      elevation: "8126M",
      duration: "40 Days",
      groupSize: "8-15",
      difficulty: 5,
      minAge: "18+",
      pickupLocation: "Islamabad Airport",
      tourType: "Extreme Expedition",
      description: "Nanga Parbat means 'Naked Mountain' in Sanskrit and is called the 'Killer Mountain'. It is the ninth highest mountain in the world and the second highest in Pakistan after K2.",
      image: nangaParbatImage,
      rating: 4.7,
      reviews: 41
    },
    {
      id: "gasherbrum-expedition",
      title: "GASHERBRUM I & II EXPEDITION",
      peak: "Gasherbrum",
      elevation: "8080M",
      duration: "45 Days",
      groupSize: "8-15",
      difficulty: 4,
      minAge: "18+",
      pickupLocation: "Islamabad Airport",
      tourType: "Technical Expedition",
      description: "The Gasherbrum massif is located in the remote Karakoram mountain range and includes some of the world's highest peaks. An incredible mountaineering challenge with stunning views.",
      image: gasherbrumImage,
      rating: 4.8,
      reviews: 73
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            8000+ METER PEAKS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Challenge yourself with the world's highest peaks. Our expert-guided expeditions to 8000+ meter summits offer the ultimate mountaineering adventure.
          </p>
        </div>

        {/* Expeditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {expeditions.map((expedition) => (
            <ExpeditionCard key={expedition.id} {...expedition} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button variant="mountain" size="lg">
            View All Expeditions
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedExpeditions;