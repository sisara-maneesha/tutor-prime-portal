import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Calculator, 
  Atom, 
  Globe, 
  BookOpen, 
  Languages, 
  BarChart3,
  Clock,
  Users
} from "lucide-react";

const Subjects = () => {
  const { t } = useLanguage();
  const subjects = [
    {
      icon: <Calculator className="h-8 w-8" />,
      title: t('subjects.math.title'),
      levels: "Grade 6-12, A-Level",
      description: t('subjects.math.description'),
      features: ["Problem-solving techniques", "Exam preparation", "Interactive examples"]
    },
    {
      icon: <Atom className="h-8 w-8" />,
      title: t('subjects.physics.title'),
      levels: "Grade 9-12, A-Level", 
      description: t('subjects.physics.description'),
      features: ["Laboratory methods", "Real-world applications", "Theory & practice"]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: t('subjects.chemistry.title'),
      levels: "Grade 9-12, A-Level",
      description: t('subjects.chemistry.description'),
      features: ["Reaction mechanisms", "Periodic trends", "Lab techniques"]
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: t('subjects.english.title'),
      levels: "All Levels",
      description: t('subjects.english.description'),
      features: ["Creative writing", "Critical analysis", "Grammar & vocabulary"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Geography",
      levels: "Grade 6-12",
      description: "Physical and human geography, map skills, and environmental studies.",
      features: ["Map reading", "Case studies", "Field work techniques"]
    },
    {
      icon: <Languages className="h-8 w-8" />,
      title: "Languages",
      levels: "Various Levels",
      description: "French, Spanish, and other modern languages with focus on practical communication.",
      features: ["Conversational practice", "Grammar mastery", "Cultural context"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="subjects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge className="bg-primary text-primary-foreground">{t('subjects.title')}</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t('subjects.subtitle')}
          </h2>
          <p className="text-lg text-muted-foreground">
            From foundational concepts to advanced topics, get the support you need 
            to excel in your studies with personalized instruction.
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {subjects.map((subject, index) => (
            <Card key={index} className="bg-gradient-card shadow-card hover:shadow-soft transition-smooth group">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-xl text-primary-foreground group-hover:bg-primary-glow transition-smooth">
                    {subject.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl text-card-foreground">{subject.title}</CardTitle>
                    <Badge variant="secondary" className="mt-1">{subject.levels}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {subject.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-card-foreground text-sm">What you'll learn:</h4>
                  <ul className="space-y-1">
                    {subject.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center space-x-2">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Class Options */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-gradient-card shadow-card">
            <CardContent className="p-8 text-center space-y-4">
              <Users className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold text-card-foreground">Group Classes</h3>
              <p className="text-muted-foreground">
                Interactive learning with peers. Maximum 4 students per group for personalized attention.
              </p>
              <div className="text-2xl font-bold text-primary">$30/hour</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card">
            <CardContent className="p-8 text-center space-y-4">
              <Clock className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold text-card-foreground">One-on-One</h3>
              <p className="text-muted-foreground">
                Completely personalized tutoring focused entirely on your specific needs and goals.
              </p>
              <div className="text-2xl font-bold text-primary">$50/hour</div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary-glow shadow-button transition-bounce"
          >
            Book Your First Session
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Subjects;