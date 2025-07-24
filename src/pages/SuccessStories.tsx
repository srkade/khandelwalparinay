import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Quote, Calendar, MapPin } from "lucide-react";

const successStories = [
  {
    id: 1,
    couple: "Rajesh & Priya Agarwal",
    location: "Mumbai, Maharashtra",
    weddingDate: "December 2023",
    story: "We connected through Khandelwal Parinay in early 2023. What started as a simple conversation about our shared interests in classical music and travel soon blossomed into a beautiful relationship. Our families got along wonderfully, and we knew we had found our perfect match. The platform made it so easy to find someone who truly understood our values and traditions.",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop",
    couple_image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=150&h=150&fit=crop&crop=faces"
  },
  {
    id: 2,
    couple: "Amit & Kavita Sharma",
    location: "Jaipur, Rajasthan",
    weddingDate: "January 2024",
    story: "Our story began when Kavita's profile caught my attention on Khandelwal Parinay. Her dedication to her medical profession and her traditional values resonated with me. After months of getting to know each other and our families, we realized we were meant to be together. The detailed profiles and family information on the platform helped us make an informed decision.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop",
    couple_image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces"
  },
  {
    id: 3,
    couple: "Vikram & Anjali Gupta",
    location: "Delhi",
    weddingDate: "March 2024",
    story: "Finding the right person seemed impossible until we discovered Khandelwal Parinay. The platform's focus on Marwadi culture and traditions made it feel like home. We connected over our shared love for business and family values. Today, we're not just life partners but best friends who support each other's dreams and aspirations.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
    couple_image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces"
  }
];

const SuccessStories = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Success Stories
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real love stories from the Marwadi community who found their perfect match through Khandelwal Parinay
          </p>
        </div>

        <div className="space-y-12">
          {successStories.map((story, index) => (
            <div
              key={story.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="lg:w-1/2">
                <img
                  src={story.image}
                  alt={story.couple}
                  className="w-full h-80 object-cover rounded-xl shadow-elegant"
                />
              </div>
              
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={story.couple_image}
                    alt={story.couple}
                    className="w-16 h-16 rounded-full object-cover border-4 border-primary/20"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground flex items-center">
                      {story.couple}
                      <Heart className="h-6 w-6 text-primary ml-2" />
                    </h3>
                    <div className="flex items-center text-muted-foreground space-x-4 mt-1">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {story.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {story.weddingDate}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-lg text-card-foreground leading-relaxed italic">
                    "{story.story}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-xl p-8 text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">Ready to Write Your Own Success Story?</h2>
            <p className="text-xl mb-6 text-primary-foreground/90">
              Join thousands of happy couples who found love through Khandelwal Parinay
            </p>
            <Button variant="golden" size="lg" className="text-lg px-8 py-4 h-auto">
              Start Your Journey Today
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SuccessStories;