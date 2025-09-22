import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Camera, Mountain, Snowflake, Star, Users } from "lucide-react";
import fairyMeadowsImage from "@/assets/fairy-meadows.jpg";
import gondogoroImage from "@/assets/gondogoro-trek.jpg";
import k2Image from "@/assets/k2-expedition.jpg";
import snowLakeImage from "@/assets/snow-lake-trek.jpg";

const Destinations = () => {
  const mountainDestinations = [
    {
      id: "k2-peak",
      name: "K2 (8611M) – SECOND HIGHEST PEAK IN THE WORLD",
      location: "Karakoram Range",
      elevation: "8611m",
      description: "The savage mountain, offering the ultimate mountaineering challenge",
      image: k2Image,
      category: "8000m Peak",
      rating: 4.9,
      expeditions: 5
    },
    {
      id: "broad-peak",
      name: "BROAD PEAK (8047M)",
      location: "Karakoram Range",
      elevation: "8047m",
      description: "The 12th highest mountain in the world with stunning pyramid shape",
      image: gondogoroImage,
      category: "8000m Peak",
      rating: 4.8,
      expeditions: 3
    },
    {
      id: "nanga-parbat",
      name: "NANGA PARBAT (8126M) – KILLER MOUNTAIN",
      location: "Western Himalayas",
      elevation: "8126m",
      description: "The ninth highest mountain known for its dramatic relief and challenging routes",
      image: fairyMeadowsImage,
      category: "8000m Peak",
      rating: 4.7,
      expeditions: 4
    },
    {
      id: "rakaposhi",
      name: "RAKAPOSHI (7788M)",
      location: "Karakoram Range",
      elevation: "7788m",
      description: "Mother of Mist - a spectacular pyramid-shaped peak visible from Hunza",
      image: snowLakeImage,
      category: "7000m Peak",
      rating: 4.6,
      expeditions: 6
    }
  ];

  const northernDestinations = [
    {
      id: "skardu",
      name: "SKARDU",
      region: "Gilgit-Baltistan",
      description: "Gateway to the world's highest peaks and basecamp for major expeditions",
      image: gondogoroImage,
      attractions: ["Shangrila Resort", "Skardu Fort", "Satpara Lake", "Cold Desert"],
      bestTime: "Apr-Oct"
    },
    {
      id: "hunza-valley",
      name: "HUNZA VALLEY",
      region: "Gilgit-Baltistan",
      description: "Land of longevity with ancient culture and stunning mountain views",
      image: fairyMeadowsImage,
      attractions: ["Baltit Fort", "Altit Fort", "Rakaposhi View", "Apricot Orchards"],
      bestTime: "Mar-Nov"
    },
    {
      id: "fairy-meadows",
      name: "FAIRY MEADOWS",
      region: "Diamer District",
      description: "A piece of heaven on earth with unobstructed views of Nanga Parbat",
      image: fairyMeadowsImage,
      attractions: ["Nanga Parbat Views", "Alpine Meadows", "Base Camp Trek", "Sunset Point"],
      bestTime: "May-Sep"
    },
    {
      id: "deosai-plains",
      name: "DEOSAI NATIONAL PARK",
      region: "Skardu-Astore",
      description: "Land of Giants - world's second highest plateau with unique wildlife",
      image: snowLakeImage,
      attractions: ["Brown Bears", "Wildflowers", "Sheosar Lake", "Rolling Plains"],
      bestTime: "Jun-Sep"
    }
  ];

  const culturalDestinations = [
    {
      id: "lahore",
      name: "LAHORE",
      heritage: "Badshahi Mosque, Lahore Fort, Walled City",
      description: "Cultural capital of Pakistan with Mughal architecture and vibrant traditions",
      image: gondogoroImage,
      sites: ["Badshahi Mosque", "Lahore Fort", "Shalimar Gardens", "Walled City"]
    },
    {
      id: "islamabad",
      name: "ISLAMABAD",
      heritage: "Faisal Mosque, Daman-e-Koh, Margalla Hills",
      description: "Modern capital city nestled against the scenic Margalla Hills",
      image: fairyMeadowsImage,
      sites: ["Faisal Mosque", "Pakistan Monument", "Daman-e-Koh", "Margalla Hills"]
    },
    {
      id: "taxila",
      name: "TAXILA – UNESCO HERITAGE SITE",
      heritage: "Ancient Gandhara Civilization",
      description: "Archaeological ruins showcasing Buddhist and Hindu heritage",
      image: snowLakeImage,
      sites: ["Taxila Museum", "Dharmarajika Stupa", "Sirkap", "Jaulian Monastery"]
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
              Destinations
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore Pakistan's most spectacular destinations from towering peaks to ancient heritage sites
            </p>
          </div>
        </div>
      </section>

      {/* Mountain Peaks */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">Mountain Peaks</h2>
              <p className="text-muted-foreground">World's highest and most challenging summits</p>
            </div>
            <Mountain className="h-12 w-12 text-primary" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mountainDestinations.map((destination) => (
              <Card key={destination.id} className="overflow-hidden hover:shadow-mountain transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-secondary/90">
                      {destination.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white/90 text-foreground border-white">
                      {destination.elevation}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-foreground">{destination.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-secondary fill-secondary" />
                      <span className="text-sm text-muted-foreground">{destination.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{destination.location}</span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4">{destination.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {destination.expeditions} Expeditions Available
                    </span>
                    <Button variant="mountain" size="sm">
                      Explore
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Northern Pakistan */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Northern Pakistan</h2>
            <p className="text-muted-foreground">Breathtaking valleys and pristine wilderness</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {northernDestinations.map((destination) => (
              <Card key={destination.id} className="overflow-hidden hover:shadow-card transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-48">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-hero flex items-end p-4">
                    <div className="text-white">
                      <h3 className="font-bold text-lg mb-1">{destination.name}</h3>
                      <p className="text-sm text-white/80">{destination.region}</p>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <p className="text-muted-foreground text-sm mb-3">{destination.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="text-xs text-muted-foreground">Top Attractions:</div>
                    {destination.attractions.slice(0, 2).map((attraction, index) => (
                      <Badge key={index} variant="outline" className="text-xs mr-1">
                        {attraction}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Best: {destination.bestTime}</span>
                    <Button variant="outline" size="sm">
                      Visit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural & Historical */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Cultural & Historical Destinations</h2>
            <p className="text-muted-foreground">Ancient heritage and rich cultural traditions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {culturalDestinations.map((destination) => (
              <Card key={destination.id} className="overflow-hidden hover:shadow-card transition-all duration-300">
                <div className="relative h-56">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-hero flex items-center justify-center">
                    <Camera className="h-12 w-12 text-white" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{destination.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{destination.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="text-sm font-medium text-foreground">Heritage Sites:</div>
                    {destination.sites.slice(0, 3).map((site, index) => (
                      <div key={index} className="text-xs text-muted-foreground">• {site}</div>
                    ))}
                  </div>
                  
                  <Button variant="mountain" size="sm" className="w-full">
                    Explore Heritage
                  </Button>
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

export default Destinations;