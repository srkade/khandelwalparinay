import { Button } from "@/components/ui/button";
import { ArrowRight, Users, CheckCircle } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-primary text-primary-foreground relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Find Your
            <br />
            Perfect Match?
          </h2>
          
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join lakhs of Marwadi families who have found their happiness through our trusted matrimonial platform
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="golden" size="lg" className="text-lg px-8 py-4 h-auto">
              Register Free Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
              Browse Profiles
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 mb-4 text-secondary" />
              <h3 className="text-2xl font-bold mb-2">10+ Lakh</h3>
              <p className="text-primary-foreground/80">Verified Profiles</p>
            </div>
            
            <div className="flex flex-col items-center">
              <CheckCircle className="h-12 w-12 mb-4 text-secondary" />
              <h3 className="text-2xl font-bold mb-2">50,000+</h3>
              <p className="text-primary-foreground/80">Success Stories</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold mb-2">4.8/5</h3>
              <p className="text-primary-foreground/80">Success Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-primary-glow/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};