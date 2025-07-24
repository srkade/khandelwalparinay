import { Shield, Search, Heart, Users, CheckCircle, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Privacy Guarantee",
    description: "Your personal information and photos are protected with advanced privacy controls and verification."
  },
  {
    icon: Search,
    title: "Easy Match Finding",
    description: "Advanced search filters help you find compatible Marwadi matches based on your preferences."
  },
  {
    icon: Heart,
    title: "Personalized Matchmaking",
    description: "Our AI-powered system learns your preferences to suggest the most compatible profiles."
  },
  {
    icon: Users,
    title: "Verified Marwadi Profiles",
    description: "All profiles are verified for authenticity, ensuring genuine connections within our community."
  },
  {
    icon: CheckCircle,
    title: "Success Guarantee",
    description: "Join thousands of happy couples who found their life partners through our platform."
  },
  {
    icon: Award,
    title: "Trusted by Families",
    description: "Recommended by Marwadi families worldwide for traditional and modern matchmaking needs."
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            The Khandelwal Parinay Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover why millions of Marwadi families trust us to find their perfect match
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-scale-in border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl mb-6 mx-auto">
                <feature.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-semibold text-center mb-4 text-card-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};