import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { VIPSection } from "@/components/VIPSection";
import { SuccessStoriesSection } from "@/components/SuccessStoriesSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <VIPSection />
      <SuccessStoriesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;