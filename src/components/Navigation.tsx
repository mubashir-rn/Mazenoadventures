import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTheme } from "@/hooks/use-theme";
import Logo from "@/assets/MazenoadventureLogo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    { name: "HOME", path: "/" },
    { name: "EXPEDITIONS", path: "/expeditions" },
    { name: "TREKKINGS", path: "/trekkings" },
    { name: "HOLIDAY TOURS", path: "/holiday-tours" },
    { name: "DESTINATIONS", path: "/destinations" },
    { name: "RESOURCES", path: "/resources" },
    { name: "ABOUT US", path: "/about-us" },
    { name: "CONTACT US", path: "/contact-us" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border/50 z-50 shadow-sm">
      {/* Top contact bar - Modern & Attractive */}
      <div className="bg-gradient-to-r from-emerald-50/90 via-blue-50/90 to-purple-50/90 dark:from-gray-900/80 dark:via-gray-800/80 dark:to-gray-900/80 py-2.5 sm:py-3 px-3 sm:px-4 border-b border-border/30 backdrop-blur-md">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-row items-center justify-between gap-3 sm:gap-4">
            {/* Contact Information - Modern Card Style */}
            <div className="flex flex-row items-center gap-2 sm:gap-4 md:gap-5 text-xs sm:text-sm flex-1">
              {/* Phone/WhatsApp - Enhanced Modern Design */}
              <div className="flex items-center gap-1.5 sm:gap-2.5 group">
                {/* Mobile: Animated icon button */}
                <a
                  href="tel:+923459160113"
                  className="sm:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-green-400 via-green-500 to-green-600 shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95 transition-all duration-300 flex-shrink-0 relative overflow-hidden"
                  aria-label="Call +92 345 9160113"
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  <Phone className="h-4 w-4 text-white relative z-10 animate-[wiggle_1s_ease-in-out_infinite]" />
                </a>
                {/* Desktop: Static icon with pulse effect */}
                <div className="hidden sm:flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-green-400 via-green-500 to-green-600 shadow-lg group-hover:shadow-xl transition-all duration-300 flex-shrink-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-300"></div>
                  <Phone className="h-5 w-5 md:h-5.5 md:w-5.5 text-white relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                {/* Desktop: Text link with modern styling */}
                <a 
                  href="https://wa.link/d4d1pg" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hidden sm:flex font-bold text-foreground hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 hover:scale-105 min-h-[44px] items-center text-sm md:text-base relative group"
                  title="Call or WhatsApp +92 345 9160113"
                >
                  <span className="relative">
                    +92 345 9160113
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </a>
              </div>
              
              {/* Email - Enhanced Modern Design */}
              <div className="flex items-center gap-1.5 sm:gap-2.5 group">
                {/* Mobile: Animated icon button */}
                <a
                  href="mailto:akhtar_nangaparbat@yahoo.com,akhtarnagabarbat@gmail.com"
                  className="sm:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95 transition-all duration-300 flex-shrink-0 relative overflow-hidden"
                  aria-label="Email Mazano Adventures"
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  <Mail className="h-4 w-4 text-white relative z-10 animate-[wiggle_1s_ease-in-out_infinite]" />
                </a>
                {/* Desktop: Static icon with pulse effect */}
                <div className="hidden sm:flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 shadow-lg group-hover:shadow-xl transition-all duration-300 flex-shrink-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-300"></div>
                  <Mail className="h-5 w-5 md:h-5.5 md:w-5.5 text-white relative z-10 group-hover:-rotate-12 transition-transform duration-300" />
                </div>
                {/* Desktop: Text link with modern styling */}
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=akhtar_nangaparbat@yahoo.com&cc=akhtarnagabarbat@gmail.com&su=Inquiry%20about%20Mazano%20Adventures"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex font-bold text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 min-h-[44px] items-center text-sm md:text-base relative group"
                  title="Send email to both addresses via Gmail"
                >
                  <span className="relative">
                    Email Us
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </a>
              </div>
            </div>
            
            {/* WhatsApp CTA Button - Enhanced Modern Design */}
            <div className="hidden sm:flex items-center justify-end flex-shrink-0">
              <Button 
                variant="default" 
                size="sm" 
                asChild 
                className="bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-3 sm:px-4 md:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm md:text-base min-h-[40px] sm:min-h-0 transform hover:scale-110 active:scale-95 relative overflow-hidden group"
              >
                <a 
                  href="https://wa.link/d4d1pg" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5 relative z-10"
                  aria-label="Chat on WhatsApp"
                >
                  <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-300"></div>
                  <MessageCircle className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5 flex-shrink-0 animate-[bounce_2s_ease-in-out_infinite]" />
                  <span className="font-bold tracking-wide hidden sm:inline">Chat on WhatsApp</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-3 sm:px-4 max-w-7xl">
        <div className="flex justify-between items-center h-16 sm:h-20 md:h-24 lg:h-28">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group transition-transform duration-300 hover:scale-105"
          >
            <img
              src={Logo}
              alt="Mazano Adventures"
              data-no-preview="true"
              draggable={false}
              className={`h-12 sm:h-16 md:h-20 lg:h-28 w-auto transition-all duration-300 ${
                theme === 'dark' ? 'invert brightness-0' : ''
              } group-hover:drop-shadow-lg`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex xl:space-x-8 lg:space-x-6 items-center">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-xs xl:text-sm font-semibold transition-all duration-300 hover:text-primary relative group ${
                  isActive(item.path) 
                    ? "text-primary" 
                    : "text-foreground hover:scale-105"
                }`}
              >
                {item.name}
                <span 
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300 ${
                    isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile: Theme Toggle + Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              className="min-h-[44px] min-w-[44px] rounded-full hover:bg-primary/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? 
                <X className="h-5 w-5 transition-transform duration-300 rotate-90" /> : 
                <Menu className="h-5 w-5 transition-transform duration-300" />
              }
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-border/50 backdrop-blur-sm">
            <div className="flex flex-col space-y-1">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-semibold transition-all duration-300 p-3 rounded-lg min-h-[48px] flex items-center ${
                    isActive(item.path) 
                      ? "text-primary bg-primary/10 border-l-4 border-primary" 
                      : "text-foreground hover:text-primary hover:bg-primary/5 hover:translate-x-2"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isMenuOpen ? 'slideInFromLeft 0.3s ease-out forwards' : 'none'
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;