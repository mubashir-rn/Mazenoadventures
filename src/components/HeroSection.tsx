import { Button } from "@/components/ui/button";
import heroMountain from "@/assets/hero-mountain.jpg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const onViewAllTours = () => {
    navigate("/holiday-tours");
  };

  return (
    <section className="relative h-screen flex items-start justify-center overflow-hidden pt-[10vh]">
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
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black tracking-tight leading-tight">
            <span className="text-secondary drop-shadow-lg block">MAZANO</span>
            <span className="text-primary drop-shadow-lg block">ADVENTURES</span>
          </h1>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mt-4 sm:mt-6 text-white/90 font-medium px-2">
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
      </div>
    </section>
  );
};

export default HeroSection;