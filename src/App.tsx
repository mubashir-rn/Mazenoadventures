import { ThemeProvider } from "@/hooks/use-theme";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Expeditions from "./pages/Expeditions";
import ExpeditionDetail from "./pages/ExpeditionDetail";
import Trekkings from "./pages/Trekkings";
import TrekDetail from "./pages/TrekDetail";
import HolidayTours from "./pages/HolidayTours";
import Destinations from "./pages/Destinations";
import Resources from "./pages/Resources";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light" storageKey="mazano-ui-theme">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/expeditions" element={<Expeditions />} />
            <Route path="/expedition/:id" element={<ExpeditionDetail />} />
            <Route path="/trekkings" element={<Trekkings />} />
            <Route path="/trek/:id" element={<TrekDetail />} />
            <Route path="/holiday-tours" element={<HolidayTours />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
