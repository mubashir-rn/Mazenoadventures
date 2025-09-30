import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import heroMountain from "@/assets/hero-mountain.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HeroSection = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");
  const [people, setPeople] = useState("");

  const onViewAllTours = () => {
    navigate("/holiday-tours");
  };

  const onSearchTours = () => {
    const params = new URLSearchParams();
    if (destination) params.set("destination", destination);
    if (date) params.set("date", date);
    if (duration) params.set("duration", duration);
    if (people) params.set("people", people);
    const qs = params.toString();
    navigate(`/holiday-tours${qs ? `?${qs}` : ""}`);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroMountain})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight">
            <span className="text-secondary drop-shadow-lg">MAZANO</span>
            <br />
            <span className="text-primary drop-shadow-lg">ADVENTURES</span>
          </h1>
          <p className="text-xl md:text-2xl mt-6 text-white/90 font-medium">
            Adventure awaits, let's find it together
          </p>
        </div>

        {/* CTA Button */}
        <div className="mb-12">
          <Button 
            variant="hero" 
            size="hero"
            className="mb-4"
            onClick={onViewAllTours}
          >
            VIEW ALL TOURS
          </Button>
        </div>

        {/* Search Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
          <h2 className="text-2xl font-bold mb-6 text-white">SEARCH FOR TOUR</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-white/90">Destination</label>
              <Input 
                placeholder="Where to?" 
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-white/90">Date</label>
              <Input 
                type="date" 
                className="bg-white/20 border-white/30 text-white"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-white/90">Duration</label>
              <Input 
                placeholder="Days" 
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-white/90">People</label>
              <Input 
                placeholder="Guests" 
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
              />
            </div>
          </div>
          
          <Button variant="adventure" size="lg" className="w-full md:w-auto" onClick={onSearchTours}>
            <Search className="h-5 w-5 mr-2" />
            SEARCH TOURS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;