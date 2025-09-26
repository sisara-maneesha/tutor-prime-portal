import { BookOpen, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-accent-vibrant" />
              <span className="text-2xl font-bold">EduTutor</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Empowering students to achieve their academic goals through 
              personalized tutoring and dedicated support.
            </p>
            <div className="flex space-x-2 text-accent-vibrant">
              <span className="text-2xl">⭐</span>
              <span className="text-2xl">⭐</span>
              <span className="text-2xl">⭐</span>
              <span className="text-2xl">⭐</span>
              <span className="text-2xl">⭐</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent-vibrant">Quick Links</h3>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-primary-foreground/80 hover:text-accent-vibrant transition-smooth"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-primary-foreground/80 hover:text-accent-vibrant transition-smooth"
              >
                About Me
              </button>
              <button
                onClick={() => scrollToSection("subjects")}
                className="block text-primary-foreground/80 hover:text-accent-vibrant transition-smooth"
              >
                Subjects
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block text-primary-foreground/80 hover:text-accent-vibrant transition-smooth"
              >
                Testimonials
              </button>
            </div>
          </div>

          {/* Subjects */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent-vibrant">Subjects Offered</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <div>Mathematics</div>
              <div>Physics</div>
              <div>Chemistry</div>
              <div>English</div>
              <div>Geography</div>
              <div>Languages</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent-vibrant">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>tutor@edututor.com</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>Online & In-Person</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-primary-foreground/80 text-sm">
            © {currentYear} EduTutor. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <span className="text-primary-foreground/80 hover:text-accent-vibrant transition-smooth cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-primary-foreground/80 hover:text-accent-vibrant transition-smooth cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;