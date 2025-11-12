import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Logo from "@/assets/MazenoadventureLogo.png";

const Footer = () => {

  const expeditionLinks = [
    { label: "K2 PEAK (8611M) EXPEDITION", id: "k2-expedition" },
    { label: "BROAD PEAK (8047M) EXPEDITION", id: "broad-peak-expedition" },
    { label: "NANGA PARBAT (8126M) EXPEDITION", id: "nanga-parbat-expedition" },
    { label: "GASHERBRUM I (8080M) EXPEDITION", id: "gasherbrum-i-expedition" },
    { label: "GASHERBRUM II (8035M) EXPEDITION", id: "gasherbrum-ii-expedition" },
  ];

  const trekkingLinks = [
    { label: "AROUND NANGA PARBAT TREK", id: "around-nanga-parbat-trek" },
    { label: "K2 BASE CAMP TREK", id: "k2-base-camp-trek" },
    { label: "K2 Gondogoro La Trek", id: "gondogoro-la-trek" },
    { label: "Biafo Hispar Snow Lake", id: "snow-lake-bifo-hispar-trek" },
    { label: "WAKHAN CORRIDOR AND CHILINJI PASS TREK", id: "wakhan-corridor-trek" },
    { label: "Rakaposhi & Diran Base Camp", id: "biafo-glacier-trek" },
    { label: "Fairy Meadows Nanga Parbat base camp Trek", id: "rakaposhi-base-camp-trek" },
    { label: "Rush Phari Lake Trek", id: "rush-lake-trek" },
  ];

  const destinationLinks = [
    { label: "SKARDU" },
    { label: "HUNZA VALLEY" },
    { label: "FAIRY MEADOWS" },
    { label: "DEOSAI NATIONAL PARK" },
    { label: "K2 (8611M) – SECOND HIGHEST PEAK IN THE WORLD" },
    { label: "NANGA PARBAT (8126M) – KILLER MOUNTAIN" },
  ];

  return (
    <footer className="bg-mountain-rock text-white">
      <div className="container mx-auto px-4 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <img
                src={Logo}
                alt="Mazano Adventures"
                data-no-preview="true"
                draggable={false}
                className="h-28 w-auto transition-all duration-300 invert brightness-0"
              />
            </Link>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              We are a government licensed Trekking, Mountaineering and Expeditions company in Pakistan, dedicated to providing the best quality, value and service for all your adventure needs.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-sm">
                  <a href="https://wa.link/d4d1pg" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                    +92 345 9160113
                  </a>
                </span>
              </div>
              <div className="flex items-start">
                <div className="text-sm space-y-1">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-secondary" />
                    <a href="mailto:akhtar_nangaparbat@yahoo.com" className="underline underline-offset-4">
                      akhtar_nangaparbat@yahoo.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-secondary" />
                    <a href="mailto:akhtarnagabarbat@gmail.com" className="underline underline-offset-4">
                      akhtarnagabarbat@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-sm">Post Office Tarnishing, District Astore, Tehsil Shouter, Gilgit-Baltistan</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <Button variant="ghost" size="icon" className="text-white hover:text-secondary hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-white hover:text-secondary hover:bg-white/10">
                <a href="https://www.instagram.com/mazeno_adventures/" target="_blank" rel="noopener noreferrer" aria-label="Mazano Adventures on Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-secondary hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-secondary hover:bg-white/10">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Expeditions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              <Link to="/expeditions" className="text-secondary hover:text-secondary/80 transition-colors">Expeditions</Link>
            </h3>
            <ul className="space-y-2">
              {expeditionLinks.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={`/expedition/${item.id}`}
                    className="text-white/70 hover:text-secondary transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trekkings */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              <Link to="/trekkings" className="text-secondary hover:text-secondary/80 transition-colors">Trekkings</Link>
            </h3>
            <ul className="space-y-2">
              {trekkingLinks.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={`/trek/${item.id}`}
                    className="text-white/70 hover:text-secondary transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              <Link to="/destinations" className="text-secondary hover:text-secondary/80 transition-colors">Destinations</Link>
            </h3>
            <ul className="space-y-2">
              {destinationLinks.map((item, index) => (
                <li key={index}>
                  <Link 
                    to="/destinations"
                    className="text-white/70 hover:text-secondary transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-white/70 text-sm">Subscribe to our newsletter for expedition updates and special offers.</p>
            </div>
            <div className="flex space-x-2 w-full md:w-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 Mazano Adventures. All rights reserved. | 
            <Link to="/privacy" className="hover:text-secondary ml-1">Privacy Policy</Link> | 
            <Link to="/terms" className="hover:text-secondary ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;