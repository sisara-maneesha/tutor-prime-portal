import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      grade: "Grade 12 Student",
      subject: "Mathematics",
      rating: 5,
      text: "Thanks to the amazing tutoring, I improved my math grades from C to A+! The explanations are so clear and the patience is incredible. Highly recommend!",
      initials: "SJ"
    },
    {
      name: "Michael Chen", 
      grade: "A-Level Student",
      subject: "Physics",
      rating: 5,
      text: "The physics concepts that seemed impossible before now make perfect sense. The teaching style is engaging and really helps build confidence.",
      initials: "MC"
    },
    {
      name: "Emma Davis",
      grade: "Grade 10 Student", 
      subject: "Chemistry",
      rating: 5,
      text: "Chemistry was my weakest subject, but now it's one of my favorites! The hands-on approach and real-world examples make all the difference.",
      initials: "ED"
    },
    {
      name: "James Wilson",
      grade: "Grade 11 Student",
      subject: "English",
      rating: 5,
      text: "My essay writing has improved dramatically. The feedback is constructive and helps me understand how to express my ideas more clearly.",
      initials: "JW"
    },
    {
      name: "Lisa Rodriguez",
      grade: "Parent",
      subject: "Multiple Subjects",
      rating: 5,
      text: "As a parent, I've seen remarkable improvement in my daughter's confidence and grades across all subjects. Worth every penny!",
      initials: "LR"
    },
    {
      name: "David Kim",
      grade: "Grade 12 Student",
      subject: "Mathematics",
      rating: 5,
      text: "Preparing for university math felt overwhelming until I started these sessions. Now I feel ready and confident for the next level!",
      initials: "DK"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge className="bg-primary text-primary-foreground">Student Success Stories</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What My Students Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real feedback from students who have transformed their academic performance 
            through personalized tutoring sessions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-card shadow-card hover:shadow-soft transition-smooth">
              <CardContent className="p-6 space-y-4">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary opacity-50" />
                
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent-vibrant text-accent-vibrant" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-card-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Student Info */}
                <div className="flex items-center space-x-3 pt-4 border-t border-border">
                  <Avatar className="bg-primary text-primary-foreground">
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.grade} • {testimonial.subject}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">200+</div>
            <div className="text-sm text-muted-foreground">Happy Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">95%</div>
            <div className="text-sm text-muted-foreground">Grade Improvement</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">4.9</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">5+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;