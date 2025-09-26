import { Button } from "@/components/ui/button";
import { GraduationCap, Star, Users } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
                Unlock Your
                <span className="block text-accent-vibrant">Academic Potential</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Personalized tutoring that transforms students into confident learners. 
                Expert guidance across multiple subjects with proven results.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent-vibrant rounded-full mb-2 mx-auto">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary-foreground">200+</div>
                <div className="text-sm text-primary-foreground/80">Students Taught</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent-vibrant rounded-full mb-2 mx-auto">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary-foreground">95%</div>
                <div className="text-sm text-primary-foreground/80">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent-vibrant rounded-full mb-2 mx-auto">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary-foreground">5+</div>
                <div className="text-sm text-primary-foreground/80">Years Experience</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-accent-vibrant text-primary hover:bg-accent-vibrant/90 shadow-button transition-bounce"
              >
                Start Learning Today
              </Button>
              <Button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-bounce"
              >
                Learn More About Me
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-card">
              <img
                src={heroImage}
                alt="Professional tutoring environment"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-6 -left-6 bg-card rounded-2xl p-4 shadow-card">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">A+</div>
                <div className="text-sm text-muted-foreground">Results</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;