import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedExpeditions from "@/components/FeaturedExpeditions";
import WhyBookWithUs from "@/components/WhyBookWithUs";
import EnquiryForm from "@/components/EnquiryForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturedExpeditions />
      <WhyBookWithUs />
      <EnquiryForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
