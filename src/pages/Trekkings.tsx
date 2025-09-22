import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TrekkingCard from "@/components/TrekkingCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Mountain } from "lucide-react";
import k2BaseCampImage from "@/assets/k2-basecamp-trek.jpg";
import gondogoroImage from "@/assets/gondogoro-trek.jpg";
import fairyMeadowsImage from "@/assets/fairy-meadows.jpg";
import snowLakeImage from "@/assets/snow-lake-trek.jpg";

const Trekkings = () => {
  const popularTreks = [
    {
      id: "k2-base-camp-trek",
      title: "K2 BASE CAMP TREK",
      duration: "19 Days",
      groupSize: "6-12",
      difficulty: 4,
      minAge: "16+",
      pickupLocation: "Islamabad Airport",
      tourType: "Classic Trek",
      description: "The ultimate trekking adventure to the base of the world's second highest mountain. Experience the magnificent Baltoro Glacier and Concordia.",
      image: k2BaseCampImage,
      rating: 4.9,
      reviews: 156,
      elevation: "5150m",
      category: "Popular Trek"
    },
    {
      id: "gondogoro-la-trek",
      title: "GONDOGORO LA TREK",
      duration: "21 Days",
      groupSize: "6-10",
      difficulty: 5,
      minAge: "18+",
      pickupLocation: "Islamabad Airport",
      tourType: "Technical Trek",
      description: "A challenging high-altitude pass crossing connecting the Baltoro and Hushe valleys with spectacular mountain views.",
      image: gondogoroImage,
      rating: 4.8,
      reviews: 98,
      elevation: "5585m",
      category: "Challenging Trek"
    },
    {
      id: "fairy-meadows-trek",
      title: "FAIRY MEADOWS & NANGA PARBAT BASE CAMP TREK",
      duration: "12 Days",
      groupSize: "4-15",
      difficulty: 3,
      minAge: "14+",
      pickupLocation: "Islamabad Airport",
      tourType: "Scenic Trek",
      description: "Discover the breathtaking beauty of Fairy Meadows with stunning views of Nanga Parbat, the 'Killer Mountain'.",
      image: fairyMeadowsImage,
      rating: 4.7,
      reviews: 203,
      elevation: "4200m",
      category: "Scenic Trek"
    },
    {
      id: "snow-lake-bifo-hispar-trek",
      title: "BIAFO, HISPAR & SNOW LAKE TREK",
      duration: "25 Days",
      groupSize: "6-10",
      difficulty: 5,
      minAge: "18+",
      pickupLocation: "Islamabad Airport",
      tourType: "Wilderness Trek",
      description: "One of the world's most remote and challenging treks through pristine glacial valleys and the famous Snow Lake plateau.",
      image: snowLakeImage,
      rating: 4.9,
      reviews: 67,
      elevation: "5100m",
      category: "Remote Trek"
    }
  ];

  const challengingTreks = [
    {
      id: "wakhan-corridor-trek",
      title: "WAKHAN CORRIDOR AND CHILINJI PASS TREK",
      duration: "18 Days",
      groupSize: "6-8",
      difficulty: 4,
      minAge: "18+",
      pickupLocation: "Islamabad Airport",
      tourType: "Cultural Trek",
      description: "Explore the remote Wakhan Corridor with its unique culture and stunning high-altitude landscapes.",
      image: snowLakeImage,
      rating: 4.6,
      reviews: 34,
      elevation: "4800m",
      category: "Cultural Trek"
    },
    {
      id: "mazeno-pass-trek",
      title: "NANGA PARBAT & MAZENO PASS TREK",
      duration: "16 Days",
      groupSize: "6-10",
      difficulty: 5,
      minAge: "18+",
      pickupLocation: "Islamabad Airport",
      tourType: "Technical Trek",
      description: "A demanding trek around Nanga Parbat with technical sections and breathtaking mountain scenery.",
      image: fairyMeadowsImage,
      rating: 4.5,
      reviews: 42,
      elevation: "5377m",
      category: "Technical Trek"
    }
  ];

  const scenicTreks = [
    {
      id: "rakaposhi-base-camp-trek",
      title: "RAKAPOSHI BASE CAMP TREK",
      duration: "8 Days",
      groupSize: "4-12",
      difficulty: 2,
      minAge: "12+",
      pickupLocation: "Gilgit Airport",
      tourType: "Family Trek",
      description: "A moderate trek suitable for families with spectacular views of Rakaposhi peak and surrounding glaciers.",
      image: gondogoroImage,
      rating: 4.4,
      reviews: 187,
      elevation: "4100m",
      category: "Family Trek"
    },
    {
      id: "rush-lake-trek",
      title: "RUSH LAKE TREK",
      duration: "10 Days",
      groupSize: "6-12",
      difficulty: 3,
      minAge: "14+",
      pickupLocation: "Gilgit Airport",
      tourType: "Alpine Trek",
      description: "Trek to one of the highest alpine lakes in the world with stunning reflections of surrounding peaks.",
      image: snowLakeImage,
      rating: 4.6,
      reviews: 132,
      elevation: "4694m",
      category: "Alpine Trek"
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
              Trekking Adventures
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover Pakistan's most spectacular trekking routes through the Karakoram, Himalayas, and Hindu Kush mountain ranges
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-2xl p-8 shadow-card max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Find Your Perfect Trek</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Trek Type</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Popular Treks</SelectItem>
                    <SelectItem value="challenging">Challenging Treks</SelectItem>
                    <SelectItem value="scenic">Scenic & Remote</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Difficulty</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2">Easy (2/5)</SelectItem>
                    <SelectItem value="3">Moderate (3/5)</SelectItem>
                    <SelectItem value="4">Challenging (4/5)</SelectItem>
                    <SelectItem value="5">Extreme (5/5)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Duration</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5-10">5-10 Days</SelectItem>
                    <SelectItem value="10-15">10-15 Days</SelectItem>
                    <SelectItem value="15-20">15-20 Days</SelectItem>
                    <SelectItem value="20+">20+ Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Search</label>
                <Input placeholder="Search treks..." />
              </div>
            </div>
            
            <Button variant="mountain" size="lg" className="w-full">
              <Filter className="h-5 w-5 mr-2" />
              Apply Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Treks */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">Popular Treks</h2>
              <p className="text-muted-foreground">Most sought-after trekking adventures in Pakistan</p>
            </div>
            <Mountain className="h-12 w-12 text-primary" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-8">
            {popularTreks.map((trek) => (
              <TrekkingCard key={trek.id} {...trek} />
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" size="lg">
              View All Popular Treks
            </Button>
          </div>
        </div>
      </section>

      {/* Challenging Treks */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Challenging Treks</h2>
            <p className="text-muted-foreground">For experienced trekkers seeking the ultimate adventure</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {challengingTreks.map((trek) => (
              <TrekkingCard key={trek.id} {...trek} />
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" size="lg">
              View All Challenging Treks
            </Button>
          </div>
        </div>
      </section>

      {/* Scenic & Remote Treks */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Scenic & Remote Treks</h2>
            <p className="text-muted-foreground">Discover hidden gems and pristine wilderness</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {scenicTreks.map((trek) => (
              <TrekkingCard key={trek.id} {...trek} />
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" size="lg">
              View All Scenic Treks
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Trekkings;