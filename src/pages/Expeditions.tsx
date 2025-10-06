import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ExpeditionCard from "@/components/ExpeditionCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import k2Expedition1 from "@/assets/k2 expedition 1.jpg";
import k2Expedition2 from "@/assets/k2 expedition 2.jpg";
import k2Expedition3 from "@/assets/k2 expedition 3.jpg";
import k2Expedition4 from "@/assets/k2 expedition 4.jpg";
import k2Expedition5 from "@/assets/k2 expedition 5.jpg";
import k2Expedition6 from "@/assets/k2 expedition 6.jpg";
import broadPeakExpedition1 from "@/assets/BROAD PEAK expedition 1.jpg";
import broadPeakExpedition2 from "@/assets/BROAD PEAK expedition 2.jpg";
import broadPeakExpedition3 from "@/assets/BROAD PEAK expedition 3.jpg";
import broadPeakExpedition4 from "@/assets/BROAD PEAK expedition 4.jpg";
import broadPeakExpedition5 from "@/assets/BROAD PEAK expedition 5.jpg";
import broadPeakExpedition6 from "@/assets/BROAD PEAK expedition 6.jpg";
import nangaParbatExpedition1 from "@/assets/NANGA PARBAT  EXPEDITION 1.jpg";
import nangaParbatExpedition2 from "@/assets/NANGA PARBAT  EXPEDITION 2.jpg";
import nangaParbatExpedition3 from "@/assets/NANGA PARBAT  EXPEDITION 3.jpg";
import nangaParbatExpedition4 from "@/assets/NANGA PARBAT  EXPEDITION 4.jpg";
import nangaParbatExpedition5 from "@/assets/NANGA PARBAT  EXPEDITION 5.jpg";
import nangaParbatExpedition6 from "@/assets/NANGA PARBAT  EXPEDITION 6.jpg";
import gasherbrumIExpedition1 from "@/assets/GASHERBRUM I EXPEDITION 1.jpg";
import gasherbrumIExpedition2 from "@/assets/GASHERBRUM I EXPEDITION 2.jpg";
import gasherbrumIExpedition3 from "@/assets/GASHERBRUM I EXPEDITION 3.jpg";
import gasherbrumIExpedition4 from "@/assets/GASHERBRUM I EXPEDITION 4.jpg";
import gasherbrumIExpedition5 from "@/assets/GASHERBRUM I EXPEDITION 5.jpg";
import gasherbrumIExpedition6 from "@/assets/GASHERBRUM I EXPEDITION 6.jpg";

const Expeditions = () => {
  const { theme } = useTheme();

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
      description: "K2, at 8,611 metres above sea level, is the second highest mountain in the world, after Mount Everest. The ultimate mountaineering challenge in the Karakoram range of Pakistan.",
      image: k2Expedition1,
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
      description: "Broad Peak is the 12th highest mountain in the world at 8,047 metres. First ascended in 1957, it offers a challenging yet achievable 8000m summit experience.",
      image: broadPeakExpedition1,
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
      description: "Known as the 'Killer Mountain', Nanga Parbat is the ninth highest mountain in the world. A formidable challenge requiring extensive mountaineering experience.",
      image: nangaParbatExpedition1,
      rating: 4.7,
      reviews: 41
    },
    {
      id: "gasherbrum-i-expedition",
      title: "GASHERBRUM I (8080M) EXPEDITION",
      peak: "Gasherbrum I",
      elevation: "8080M",
      duration: "45 Days",
      groupSize: "8-15",
      difficulty: 4,
      minAge: "18+",
      pickupLocation: "Islamabad Airport",
      tourType: "Technical Expedition",
      description: "Hidden Peak, as it's also known, offers technical climbing through the beautiful Baltoro Glacier region with stunning views of the Karakoram giants.",
      image: gasherbrumIExpedition1,
      rating: 4.8,
      reviews: 73
    },
    {
      id: "gasherbrum-ii-expedition",
      title: "GASHERBRUM II (8035M) EXPEDITION",
      peak: "Gasherbrum II",
      elevation: "8035M",
      duration: "42 Days",
      groupSize: "8-15",
      difficulty: 4,
      minAge: "18+",
      pickupLocation: "Islamabad Airport",
      tourType: "Guided Expedition",
      description: "Often considered the most accessible of the 8000m peaks, Gasherbrum II provides excellent training for aspiring high-altitude mountaineers.",
      image: gasherbrumIExpedition2,
      rating: 4.6,
      reviews: 91
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-sky py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Mountain Expeditions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Challenge yourself with professionally guided expeditions to the world's highest peaks
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-2xl p-8 shadow-card max-w-4xl mx-auto">
            <h2 className={`text-2xl font-bold mb-6 text-center transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-900' : 'text-foreground'
            }`}>
              Find Your Perfect Expedition
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div>
                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-900' : 'text-foreground'
                }`}>Peak Height</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select height" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="8000+">8000+ Meters</SelectItem>
                    <SelectItem value="7000+">7000+ Meters</SelectItem>
                    <SelectItem value="6000+">6000+ Meters</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-900' : 'text-foreground'
                }`}>Difficulty</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3">Moderate (3/5)</SelectItem>
                    <SelectItem value="4">Challenging (4/5)</SelectItem>
                    <SelectItem value="5">Extreme (5/5)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-900' : 'text-foreground'
                }`}>Duration</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30-40">30-40 Days</SelectItem>
                    <SelectItem value="40-50">40-50 Days</SelectItem>
                    <SelectItem value="50+">50+ Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-900' : 'text-foreground'
                }`}>Search</label>
                <Input placeholder="Search expeditions..." />
              </div>
            </div>
            
            <Button variant="mountain" size="lg" className="w-full">
              <Filter className="h-5 w-5 mr-2" />
              Apply Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Expeditions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {expeditions.map((expedition) => (
              <ExpeditionCard key={expedition.id} {...expedition} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Expeditions;