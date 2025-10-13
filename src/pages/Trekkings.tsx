import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TrekkingCard from "@/components/TrekkingCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Mountain } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import k2BaseCampImage from "@/assets/k2-basecamp-trek.jpg";
import gondogoroImage from "@/assets/gondogoro-trek.jpg";
import fairyMeadowsImage from "@/assets/fairy-meadows.jpg";
import snowLakeImage from "@/assets/snow-lake-trek.jpg";
import biafoImg1 from "@/assets/BIAFO GLACIER TREK img1.jpg";
import rdbImg1 from "@/assets/Rakaposhi & Diran Base Camp/Altit-Garden Rakaposhi Diran Base Camp .jpg";
import rdbImg2 from "@/assets/Rakaposhi & Diran Base Camp/Altit-old-village-2 Rakaposhi & Diran Base Camp.jpg";
import rdbImg3 from "@/assets/Rakaposhi & Diran Base Camp/Rakaposhi-Wall-1 Rakaposhi & Diran Base Camp.jpg";
import rdbImg4 from "@/assets/Rakaposhi & Diran Base Camp/Rakaposhi1 Rakaposhi & Diran Base Camp.jpg";
import rdbImg5 from "@/assets/Rakaposhi & Diran Base Camp/Rakaposhi_KKH1 Rakaposhi & Diran Base Camp.jpg";
import rdbImg6 from "@/assets/Rakaposhi & Diran Base Camp/Rakaposhi_Peak2-1 Rakaposhi & Diran Base Camp.jpg";
import rdbImg7 from "@/assets/Rakaposhi & Diran Base Camp/rakaposhi-1 Rakaposhi & Diran Base Camp.jpg";
import nangaParbatExpedition1 from "@/assets/NANGA PARBAT  EXPEDITION 1.jpg";
import nangaParbatExpedition2 from "@/assets/NANGA PARBAT  EXPEDITION 2.jpg";
import k2Expedition1 from "@/assets/k2 expedition 1.jpg";
import k2Expedition2 from "@/assets/k2 expedition 2.jpg";
import mountainImage from "@/assets/mountain.jpeg";
import fmImg1 from "@/assets/Fairy Meadows Trek/1647270477-fairy_meadows_and_the_view_of_nanga_parbat.webp";
import fmImg2 from "@/assets/Fairy Meadows Trek/Nanga-Parbat-base-camp-trek-in-Pakistan-scaled.jpg";
import fmImg3 from "@/assets/Fairy Meadows Trek/fairy-meadows-tour-package-3.jpg";
import fmImg4 from "@/assets/Fairy Meadows Trek/fairy-meadows-tour-prices-2.jpg";
import fmImg5 from "@/assets/Fairy Meadows Trek/fairy-meadows-trek-3.jpg";
import fmImg6 from "@/assets/Fairy Meadows Trek/fairy-meadows-trek-6.jpg";
import wakhan1 from "@/assets/WAKHAN CORRIDOR AND CHILINJI PASS TREK/WAKHAN CORRIDOR AND CHILINJI PASS TREK 1.jpg";
import wakhan2 from "@/assets/WAKHAN CORRIDOR AND CHILINJI PASS TREK/WAKHAN CORRIDOR AND CHILINJI PASS TREK 2.jpg";
import wakhan3 from "@/assets/WAKHAN CORRIDOR AND CHILINJI PASS TREK/WAKHAN CORRIDOR AND CHILINJI PASS TREK 3.jpg";
import wakhan4 from "@/assets/WAKHAN CORRIDOR AND CHILINJI PASS TREK/WAKHAN CORRIDOR AND CHILINJI PASS TREK 4.jpg";
import mazenoLatabo from "@/assets/NANGA PARBAT & MAZENO PASS TREK/latabo-meadows.jpeg";
import mazenoBazin1 from "@/assets/NANGA PARBAT & MAZENO PASS TREK/bazin-glacier-1.jpeg";
import bazinGlacierImage from "@/assets/arround nangaparbat/bazin-glacier-2 nangaparbat.jpeg";
import enrouteMazenImage from "@/assets/arround nangaparbat/enroute-mazen-high-camp nangaparbat.jpeg";
import heliCofferBcImage from "@/assets/arround nangaparbat/heli-coffer-bc nangaparbat.jpeg";
import lataboMeadowsImage from "@/assets/arround nangaparbat/latabo-meadows nangaparbat.jpeg";
import localHousesRupalImage from "@/assets/arround nangaparbat/local-houses-rupal-valley nangaparbat.jpeg";
import mazenoGlacierImage from "@/assets/arround nangaparbat/mazeno-glacier nangaparbat.jpeg";
import npFromLatoboImage from "@/assets/arround nangaparbat/np-from-latobo  nangaparbat.jpeg";
import npFromMazaenoPassImage from "@/assets/arround nangaparbat/np-from-mazaeno-pass nangaparbat.jpeg";
import aroundNangaParbatMainImage from "@/assets/arround nangaparbat/np-from-latobo  nangaparbat.jpeg";

const Trekkings = () => {
  const { theme } = useTheme();

  const popularTreks = [
    {
      id: "around-nanga-parbat-trek",
      title: "AROUND NANGA PARBAT TREK",
      duration: "21 Days / 20 Nights",
      groupSize: "6-12",
      difficulty: 5,
      minAge: "18+",
      pickupLocation: "Islamabad Airport",
      tourType: "Technical Trek",
      description: "A challenging but rewarding adventure that takes you on a circular route around the majestic Nanga Parbat, the ninth-highest mountain in the world. This trek offers stunning views of the mountain's various faces, including the iconic Rupal Face.",
      image: aroundNangaParbatMainImage,
      rating: 4.9,
      reviews: 27,
      elevation: "5400m",
      category: "Popular Trek"
    },
    {
      id: "k2-base-camp-trek",
      title: "K2 BASE CAMP TREK",
      duration: "22 DAYS / 21 NIGHTS",
      groupSize: "6-12",
      difficulty: 4,
      minAge: "16+",
      pickupLocation: "Islamabad Airport",
      tourType: "Classic Trek",
      description: "The ultimate trekking adventure to the base of the world's second highest mountain. Experience the magnificent Baltoro Glacier and Concordia.",
      image: k2Expedition1,
      rating: 4.9,
      reviews: 156,
      elevation: "5150m",
      category: "Trekking"
    },
    {
      id: "gondogoro-la-trek",
      title: "K2 Gondogoro La Trek",
      duration: "22 DAYS / 21 NIGHTS",
      groupSize: "6-10",
      difficulty: 5,
      minAge: "18+",
      pickupLocation: "Islamabad Airport",
      tourType: "Technical Trek",
      description: "A challenging high-altitude traverse via Gondogoro La with breathtaking views of K2, Broad Peak, and the Gasherbrums.",
      image: gondogoroImage,
      rating: 4.8,
      reviews: 98,
      elevation: "5585m",
      category: "Trekking"
    },
    {
      id: "nanga-parbat-rupal-face-trek",
      title: "Nanga parbat Rupal Face Trek",
      duration: "10 DAYS / 09 NIGHTS",
      groupSize: "4-15",
      difficulty: 3,
      minAge: "14+",
      pickupLocation: "Islamabad Airport",
      tourType: "Scenic Trek",
      description: "A rewarding trek to the south side of Nanga Parbat through lush Rupal Valley to Herrligkoffer Base Camp with imposing views of the 5000m Rupal Face.",
      image: nangaParbatExpedition1,
      rating: 4.7,
      reviews: 203,
      elevation: "4600m",
      category: "Trekking"
    },
    {
      id: "snow-lake-bifo-hispar-trek",
      title: "Biafo Hispar Snow Lake",
      duration: "23 DAYS / 22 NIGHTS",
      groupSize: "6-10",
      difficulty: 5,
      minAge: "18+",
      pickupLocation: "Islamabad Airport",
      tourType: "Wilderness Trek",
      description: "One of the world's most remote and challenging treks through pristine glacial valleys and the famous Snow Lake plateau.",
      image: biafoImg1,
      rating: 4.9,
      reviews: 67,
      elevation: "5100m",
      category: "Trekking"
    }
  ];

  const challengingTreks = [
    {
      id: "wakhan-corridor-trek",
      title: "WAKHAN CORRIDOR AND CHILINJI PASS TREK",
      duration: "22 Days",
      groupSize: "6-8",
      difficulty: 3,
      minAge: "18+",
      pickupLocation: "Islamabad Airport",
      tourType: "Trekking",
      description: "Ancient Wakhan Corridor trek through Hindukush and Hindu Raj, high pastures, serene lakes, and Chilinji Pass (5290m) into Upper Hunza.",
      image: wakhan1,
      rating: 4.6,
      reviews: 34,
      price: "$2300",
      elevation: "5290m",
      category: "Cultural Trek"
    },
    {
      id: "biafo-glacier-trek",
      title: "Rakaposhi & Diran Base Camp",
      duration: "11 DAYS / 10 NIGHTS",
      groupSize: "3-8",
      difficulty: 5,
      minAge: "18+",
      pickupLocation: "Islamabad Airport",
      tourType: "Trekking",
      description: "Rakaposhi peak 7788 meters high above sea level located in the Karakoram range, is one of the most beautiful and easy accessible to any other mountain peaks in Karakoram this beautiful peak can be seen from all directions and surrounding valleys. Diran peak 7200 meters above sea level in the same Rakaposhi massive and junction of two glaciers from Rakaposhi and Diran peaks provides a magnificent view of both peaks and glaciers. The lush and green meadows and ablation valleys around this mountain range offers a thrilling adventure for the nature lovers.",
      image: rdbImg3,
      rating: 4.8,
      reviews: 0,
      category: "Challenging Trek"
    },
    {
      id: "mazeno-pass-trek",
      title: "Around Nanga Parbat Trek",
      duration: "21 DAYS / 20 NIGHTS",
      groupSize: "6-10",
      difficulty: 5,
      minAge: "18+",
      pickupLocation: "Islamabad Airport",
      tourType: "Trekking",
      description: "Challenging circuit of Nanga Parbat via Mazeno La (5400m), Kado Sagar (4900m), and Khustu Pass (4840m), with panoramic glacier and peak views and rich local culture.",
      image: mazenoLatabo,
      rating: 4.5,
      reviews: 42,
      elevation: "5400m",
      category: "Challenging Trek"
    }
  ];

  const scenicTreks = [
    {
      id: "rakaposhi-base-camp-trek",
      title: "Fairy Meadows Nanga Parbat base camp Trek",
      duration: "10 Days",
      groupSize: "4-12",
      difficulty: 2,
      minAge: "12+",
      pickupLocation: "Islamabad Airport",
      tourType: "Trekking",
      description: "Fairy Meadows Trek offers an adventure of a lifetime with jeep ride to Tatu, a short hike to meadows, and stunning views of Nanga Parbat with starry skies and alpine meadows.",
      image: fmImg5,
      rating: 4.6,
      reviews: 10,
      price: "$3000",
      elevation: "3300m",
      category: "Scenic Trek"
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
      image: mountainImage,
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
            <h2 className={`text-2xl font-bold mb-6 text-center transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-900' : 'text-foreground'
            }`}>
              Find Your Perfect Trek
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div>
                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-900' : 'text-foreground'
                }`}>Trek Type</label>
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
                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-900' : 'text-foreground'
                }`}>Difficulty</label>
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
                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-900' : 'text-foreground'
                }`}>Duration</label>
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
                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-900' : 'text-foreground'
                }`}>Search</label>
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