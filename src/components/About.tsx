import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Clock, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const qualifications = [
    "Master's in Mathematics",
    "5+ Years Teaching Experience", 
    "Certified Tutor",
    "Proven Track Record"
  ];

  const features = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Personalized Learning",
      description: "Customized lessons tailored to each student's learning style and pace."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Scheduling",
      description: "Convenient time slots that fit your busy schedule and lifestyle."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Proven Methods",
      description: "Time-tested teaching strategies that deliver consistent results."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-primary text-primary-foreground">{t('about.title')}</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {t('about.subtitle')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.description')}
              </p>
            </div>

            {/* Qualifications */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Qualifications & Experience</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {qualifications.map((qual, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{qual}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Teaching Philosophy */}
            <div className="bg-card p-6 rounded-lg shadow-soft">
              <h3 className="text-xl font-semibold text-card-foreground mb-3">My Teaching Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed">
                "Every student has unique potential waiting to be unlocked. My role is to provide 
                the right guidance, encouragement, and tools to help each student discover their 
                capabilities and excel in their studies."
              </p>
            </div>
          </div>

          {/* Features Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card shadow-card hover:shadow-soft transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-lg text-primary-foreground flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-card-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;