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
      {/* Top contact bar */}
      <div className="bg-gradient-to-r from-emerald-50 via-blue-50 to-purple-50 dark:from-gray-900/50 dark:via-gray-800/50 dark:to-gray-900/50 py-2 sm:py-3 px-3 sm:px-4 border-b border-border/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-2 sm:gap-3">
            {/* Contact Information */}
            <div className="flex flex-row items-center gap-2 sm:gap-4 text-xs sm:text-sm">
              {/* Phone/WhatsApp - Mobile First Design */}
              <div className="flex items-center gap-2 sm:gap-3 p-1 sm:p-0">
                <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-sm">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                </div>
                <a 
                  href="https://wa.link/d4d1pg" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-semibold text-foreground hover:text-green-600 transition-all duration-300 hover:scale-105 min-h-[44px] sm:min-h-0 flex items-center"
                >
                  +92 345 9160113
                </a>
              </div>
              
              {/* Combined Email Option - Single Icon */}
              <div className="flex items-center gap-2 sm:gap-3 p-1 sm:p-0">
                <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-sm">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                </div>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=akhtar_nangaparbat@yahoo.com&cc=akhtarnagabarbat@gmail.com&su=Inquiry%20about%20Mazano%20Adventures"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground hover:text-blue-600 transition-all duration-300 hover:scale-105 text-xs sm:text-sm min-h-[44px] sm:min-h-0 flex items-center"
                  title="Send email to both addresses via Gmail"
                >
                  Email Us
                </a>
              </div>
            </div>
            
            {/* WhatsApp CTA Button - Mobile Optimized */}
            <div className="flex justify-center xl:justify-end mt-2 xl:mt-0">
              <Button 
                variant="default" 
                size="default" 
                asChild 
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg hover:shadow-xl transition-all duration-300 px-4 sm:px-6 py-3 sm:py-2 rounded-full font-semibold text-sm sm:text-base min-h-[48px] sm:min-h-0 transform hover:scale-105 active:scale-95"
              >
                <a 
                  href="https://wa.link/d4d1pg" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 w-full"
                >
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="font-bold tracking-wide">Chat on WhatsApp</span>
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

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden min-h-[44px] min-w-[44px] rounded-full hover:bg-primary/10 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 
              <X className="h-5 w-5 transition-transform duration-300 rotate-90" /> : 
              <Menu className="h-5 w-5 transition-transform duration-300" />
            }
          </Button>
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
              <div className="pt-4 mt-4 border-t border-border/50">
                <div className="flex justify-center p-2">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;