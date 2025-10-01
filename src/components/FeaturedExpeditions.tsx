import ExpeditionCard from "./ExpeditionCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { expeditions } from "@/lib/expeditions";
import { useNavigate } from "react-router-dom";

const FeaturedExpeditions = () => {
  const navigate = useNavigate();
  // Use shared dataset to keep reviews/images/descriptions in sync
  const featured = expeditions.slice(0, 4);

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
          {featured.map((expedition) => (
            <ExpeditionCard key={expedition.id} {...expedition} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button variant="mountain" size="lg" onClick={() => navigate("/expeditions")}>
            View All Expeditions
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedExpeditions;