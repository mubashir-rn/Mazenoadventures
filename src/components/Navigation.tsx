import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react";
import Logo from "@/assets/MazenoadventureLogo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-muted py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-xs sm:text-sm text-muted-foreground max-w-7xl">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="https://wa.link/d4d1pg" target="_blank" rel="noopener noreferrer" className="hover:underline">
                +92 345 9160113 (WhatsApp)
              </a>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                <a href="mailto:akhtar_nangaparbat@yahoo.com" className="hover:underline break-all">akhtar_nangaparbat@yahoo.com</a>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                <a href="mailto:akhtarnagabarbat@gmail.com" className="hover:underline break-all">akhtarnagabarbat@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="flex self-start sm:self-auto">
            <Button variant="secondary" size="sm" asChild className="py-1 px-2">
              <a href="https://wa.link/d4d1pg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                <MessageCircle className="h-4 w-4 mr-1.5" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center h-20 md:h-28">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={Logo} alt="Mazano Adventures" className="h-16 md:h-28 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) 
                    ? "text-primary border-b-2 border-primary pb-1" 
                    : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.path) ? "text-primary" : "text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;