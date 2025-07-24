import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Users, Shield, Award, Target, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Khandelwal Parinay
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              India's premier matrimonial platform dedicated to connecting hearts within the Marwadi community
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8 text-foreground">Our Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                At Khandelwal Parinay.in, it is our life's mission to use technology for good and bring back deep and meaningful relationships. We believe in preserving the rich traditions of the Marwadi community while embracing modern approaches to finding life partners.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Heart className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Meaningful Connections</h3>
                  <p className="text-muted-foreground">Building lasting relationships based on shared values and traditions</p>
                </div>
                
                <div className="text-center">
                  <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Trust & Safety</h3>
                  <p className="text-muted-foreground">Ensuring every profile is verified and every interaction is secure</p>
                </div>
                
                <div className="text-center">
                  <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Community First</h3>
                  <p className="text-muted-foreground">Celebrating and preserving our Marwadi heritage and culture</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Our Journey in Numbers</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div className="bg-card rounded-xl p-8 shadow-card border border-border/50">
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <div className="text-muted-foreground">Lakh Profiles</div>
                </div>
                
                <div className="bg-card rounded-xl p-8 shadow-card border border-border/50">
                  <div className="text-4xl font-bold text-primary mb-2">50,000+</div>
                  <div className="text-muted-foreground">Success Stories</div>
                </div>
                
                <div className="bg-card rounded-xl p-8 shadow-card border border-border/50">
                  <div className="text-4xl font-bold text-primary mb-2">25+</div>
                  <div className="text-muted-foreground">Countries</div>
                </div>
                
                <div className="bg-card rounded-xl p-8 shadow-card border border-border/50">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Years of Trust</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Why Choose Khandelwal Parinay?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Target className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Targeted Community Focus</h3>
                      <p className="text-muted-foreground">Exclusively designed for the Marwadi community, understanding unique cultural preferences and traditions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Proven Success Record</h3>
                      <p className="text-muted-foreground">Over 50,000 successful marriages and counting, with families sharing their joy stories with us.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Globe className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                      <p className="text-muted-foreground">Connecting Marwadi families across the globe, from India to USA, UK, Canada, and beyond.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-primary rounded-xl p-8 text-primary-foreground">
                  <h3 className="text-2xl font-bold mb-4">Join Our Success Story</h3>
                  <p className="mb-6 text-primary-foreground/90">
                    Be part of the most trusted matrimonial platform for the Marwadi community. Your perfect match is waiting for you.
                  </p>
                  <Button variant="golden" size="lg">
                    Get Started Today
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;