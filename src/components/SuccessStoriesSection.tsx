import { Button } from "@/components/ui/button";
import { Quote, Heart } from "lucide-react";

const successStories = [
  {
    names: "Rajesh & Priya",
    location: "Mumbai, Maharashtra",
    story: "We found each other through Khandelwal Parinay and it has been a beautiful journey. The platform made it easy to connect with families who shared our values and traditions.",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=300&h=300&fit=crop&crop=faces",
    years: "Married 2 years ago"
  },
  {
    names: "Amit & Kavita",
    location: "Jaipur, Rajasthan",
    story: "Thanks to Khandelwal Parinay, we found our perfect match. The detailed profiles and family background information helped us make an informed decision.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=300&h=300&fit=crop&crop=faces",
    years: "Married 1 year ago"
  }
];

export const SuccessStoriesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Real Stories, True Connections
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how Khandelwal Parinay has brought together thousands of happy couples from the Marwadi community
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 border border-border/50"
              >
                <div className="flex items-start space-x-4">
                  <Quote className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-card-foreground mb-6 text-lg italic leading-relaxed">
                      "{story.story}"
                    </p>
                    
                    <div className="flex items-center space-x-4">
                      <img
                        src={story.image}
                        alt={story.names}
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                      />
                      <div>
                        <h4 className="font-semibold text-card-foreground flex items-center">
                          {story.names}
                          <Heart className="h-4 w-4 text-primary ml-2" />
                        </h4>
                        <p className="text-sm text-muted-foreground">{story.location}</p>
                        <p className="text-sm text-primary font-medium">{story.years}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto">
              Read More Success Stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};