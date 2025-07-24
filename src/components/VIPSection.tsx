import { Button } from "@/components/ui/button";
import { Crown, Star, Zap } from "lucide-react";

export const VIPSection = () => {
  return (
    <section className="py-20 bg-gradient-royal text-tertiary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Crown className="h-12 w-12 text-secondary mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Premium Matchmaking
            </h2>
          </div>
          
          <p className="text-xl mb-8 text-tertiary-foreground/90 max-w-2xl mx-auto">
            Experience the world of elite personalized matchmaking by our premium relationship managers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Star className="h-8 w-8 text-secondary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Personal Consultant</h3>
              <p className="text-tertiary-foreground/80 text-center">Dedicated relationship manager for personalized guidance</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Zap className="h-8 w-8 text-secondary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Priority Support</h3>
              <p className="text-tertiary-foreground/80 text-center">Fast-track profile verification and premium visibility</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Crown className="h-8 w-8 text-secondary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Exclusive Matches</h3>
              <p className="text-tertiary-foreground/80 text-center">Access to verified high-profile Marwadi families</p>
            </div>
          </div>

          <Button variant="golden" size="lg" className="text-lg px-8 py-4 h-auto">
            Upgrade to Premium
          </Button>
        </div>
      </div>
    </section>
  );
};