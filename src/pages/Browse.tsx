import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, Filter, Heart, MapPin, Briefcase, GraduationCap } from "lucide-react";

const profiles = [
  {
    id: 1,
    name: "Priya Agarwal",
    age: 25,
    profession: "Software Engineer",
    location: "Mumbai, Maharashtra",
    education: "B.Tech, Computer Science",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=faces"
  },
  {
    id: 2,
    name: "Kavita Sharma",
    age: 23,
    profession: "Doctor",
    location: "Jaipur, Rajasthan",
    education: "MBBS",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=faces"
  },
  {
    id: 3,
    name: "Anjali Gupta",
    age: 27,
    profession: "Teacher",
    location: "Delhi",
    education: "M.Ed",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b67c?w=300&h=300&fit=crop&crop=faces"
  }
];

const Browse = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent text-center sm:text-left">
            Browse Profiles
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground text-center sm:text-left max-w-2xl">
            Discover compatible Marwadi matches based on your preferences
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-card rounded-xl p-4 sm:p-6 lg:p-8 shadow-card border border-border/50 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <input
                type="text"
                placeholder="Search by name, profession, location..."
                className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent text-sm sm:text-base"
              />
            </div>
            <Button variant="hero" className="px-4 sm:px-6 py-3 text-sm sm:text-base whitespace-nowrap">
              <Filter className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Advanced Filters</span>
              <span className="sm:hidden">Filters</span>
            </Button>
          </div>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="bg-card rounded-xl p-4 sm:p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 border border-border/50"
            >
              <div className="text-center mb-4">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
                />
                <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-1 truncate">
                  {profile.name}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">{profile.age} years old</p>
              </div>

              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                  <Briefcase className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-primary flex-shrink-0" />
                  <span className="truncate">{profile.profession}</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-primary flex-shrink-0" />
                  <span className="truncate">{profile.location}</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                  <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-primary flex-shrink-0" />
                  <span className="truncate">{profile.education}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <Button variant="hero" size="sm" className="flex-1 text-xs sm:text-sm py-2">
                  <Heart className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  Connect
                </Button>
                <Button variant="outline" size="sm" className="flex-1 text-xs sm:text-sm py-2">
                  <span className="hidden sm:inline">View Profile</span>
                  <span className="sm:hidden">View</span>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Button variant="hero" size="lg" className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base">
            Load More Profiles
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Browse;