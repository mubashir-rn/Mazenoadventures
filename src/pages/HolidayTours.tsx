import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ExpeditionCard from "@/components/ExpeditionCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, Plane, Car, Camera, Heart, Users, Calendar } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import fairyMeadowsImage from "@/assets/fairy-meadows.jpg";
import gondogoroImage from "@/assets/gondogoro-trek.jpg";

const HolidayTours = () => {
  const { theme } = useTheme();

  const tourCategories = [
    {
      title: "Air Travel",
      icon: Plane,
      description: "Comfortable flight-based tours to major destinations",
      tours: 25,
      image: fairyMeadowsImage
    },
    {
      title: "Road Trips",
      icon: Car,
      description: "Scenic overland journeys through northern Pakistan",
      tours: 18,
      image: gondogoroImage
    },
    {
      title: "Cultural Tours",
      icon: Camera,
      description: "Explore Pakistan's rich heritage and local traditions",
      tours: 32,
      image: fairyMeadowsImage
    },
    {
      title: "Family Holidays",
      icon: Users,
      description: "Perfect family-friendly adventures and experiences",
      tours: 22,
      image: gondogoroImage
    },
    {
      title: "Honeymoon",
      icon: Heart,
      description: "Romantic getaways in stunning mountain settings",
      tours: 15,
      image: fairyMeadowsImage
    },
    {
      title: "Weekend Retreats",
      icon: Calendar,
      description: "Short 2-3 day escapes from city life",  
      tours: 28,
      image: gondogoroImage
    }
  ];

  const featuredTours = [
    {
      id: "hunza-valley-tour",
      title: "HUNZA VALLEY CULTURAL TOUR",
      peak: "Hunza Valley",
      elevation: "2400M",
      duration: "7 Days",
      groupSize: "6-15",
      difficulty: 2,
      minAge: "All Ages",
      pickupLocation: "Gilgit Airport",
      tourType: "Cultural Tour",
      description: "Discover the enchanting Hunza Valley with its ancient forts, apricot orchards, and warm hospitality. Perfect for families and cultural enthusiasts.",
      image: fairyMeadowsImage,
      rating: 4.8,
      reviews: 234
    },
    {
      id: "skardu-deosai-tour",
      title: "SKARDU & DEOSAI PLAINS TOUR",
      peak: "Deosai Plains",
      elevation: "4100M",
      duration: "6 Days",
      groupSize: "4-12",
      difficulty: 2,
      minAge: "12+",
      pickupLocation: "Skardu Airport",
      tourType: "Nature Tour",
      description: "Experience the Land of Giants - Deosai Plains, with its wildflower meadows and wildlife including the Himalayan brown bear.",
      image: gondogoroImage,
      rating: 4.7,
      reviews: 156
    },
    {
      id: "lahore-cultural-tour",
      title: "LAHORE HISTORICAL & CULTURAL TOUR",
      peak: "Lahore City",
      elevation: "217M",
      duration: "4 Days",
      groupSize: "8-20",
      difficulty: 1,
      minAge: "All Ages",
      pickupLocation: "Lahore Airport",
      tourType: "Heritage Tour",
      description: "Explore the cultural heart of Pakistan with visits to Badshahi Mosque, Lahore Fort, and the vibrant streets of the Walled City.",
      image: fairyMeadowsImage,
      rating: 4.6,
      reviews: 298
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
              Holiday Tours
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover Pakistan's beauty through carefully crafted holiday experiences for every traveler
            </p>
          </div>

          {/* Search Filters */}
          <div className="bg-white rounded-2xl p-8 shadow-card max-w-4xl mx-auto">
            <h2 className={`text-2xl font-bold mb-6 text-center transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-900' : 'text-foreground'
            }`}>
              Find Your Perfect Holiday
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div>
                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-900' : 'text-foreground'
                }`}>Tour Type</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cultural">Cultural Tours</SelectItem>
                    <SelectItem value="family">Family Holidays</SelectItem>
                    <SelectItem value="luxury">Luxury Tours</SelectItem>
                    <SelectItem value="adventure">Adventure Tours</SelectItem>
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
                    <SelectItem value="2-4">2-4 Days</SelectItem>
                    <SelectItem value="5-7">5-7 Days</SelectItem>
                    <SelectItem value="8-10">8-10 Days</SelectItem>
                    <SelectItem value="10+">10+ Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-900' : 'text-foreground'
                }`}>Budget</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="budget">Budget Friendly</SelectItem>
                    <SelectItem value="mid">Mid Range</SelectItem>
                    <SelectItem value="luxury">Luxury</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-900' : 'text-foreground'
                }`}>Search</label>
                <Input placeholder="Search tours..." />
              </div>
            </div>
            
            <Button variant="mountain" size="lg" className="w-full">
              <Filter className="h-5 w-5 mr-2" />
              Find Tours
            </Button>
          </div>
        </div>
      </section>

      {/* Tour Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Tour Categories</h2>
            <p className="text-muted-foreground">Choose from our diverse range of holiday experiences</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-mountain transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-hero flex items-center justify-center">
                    <category.icon className="h-16 w-16 text-white" />
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">{category.title}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <div className="text-primary font-semibold">{category.tours} Tours Available</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Holiday Tours</h2>
            <p className="text-muted-foreground">Hand-picked tours for unforgettable experiences</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <ExpeditionCard key={tour.id} {...tour} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="mountain" size="lg">
              View All Holiday Tours
            </Button>
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Plane className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Air Travel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Comfortable flights to all major destinations with full support</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Camera className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Cultural Immersion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Deep dive into local cultures with authentic experiences</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Family Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Special programs designed for families with children</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Luxury Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Premium accommodations and personalized service</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HolidayTours;