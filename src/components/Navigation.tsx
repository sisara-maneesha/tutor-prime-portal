import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Menu, X, BookOpen, Moon, Sun, Languages } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">AshenScience</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection("subjects")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              {t('nav.subjects')}
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              {t('nav.testimonials')}
            </button>
            
            {/* Theme Toggle */}
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4 text-foreground" />
              <Switch
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
              />
              <Moon className="h-4 w-4 text-foreground" />
            </div>
            
            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              <Languages className="h-4 w-4 text-foreground" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as any)}
                className="bg-background text-foreground border border-border rounded px-2 py-1 text-sm"
              >
                <option value="en">EN</option>
                <option value="es">ES</option>
                <option value="fr">FR</option>
                <option value="si">සි</option>
              </select>
            </div>
            
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-primary-foreground hover:bg-primary-glow shadow-button transition-bounce"
            >
              {t('nav.getStarted')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-smooth"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-4 bg-card rounded-lg shadow-card">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-accent transition-smooth"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-accent transition-smooth"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection("subjects")}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-accent transition-smooth"
            >
              {t('nav.subjects')}
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-accent transition-smooth"
            >
              {t('nav.testimonials')}
            </button>
            
            {/* Mobile Controls */}
            <div className="px-4 space-y-3">
              {/* Theme Toggle */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Dark Mode</span>
                <div className="flex items-center space-x-2">
                  <Sun className="h-4 w-4 text-foreground" />
                  <Switch
                    checked={theme === 'dark'}
                    onCheckedChange={toggleTheme}
                  />
                  <Moon className="h-4 w-4 text-foreground" />
                </div>
              </div>
              
              {/* Language Selector */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Language</span>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as any)}
                  className="bg-background text-foreground border border-border rounded px-2 py-1 text-sm"
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="si">සිංහල</option>
                </select>
              </div>
              
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-primary text-primary-foreground hover:bg-primary-glow shadow-button transition-bounce"
              >
                {t('nav.getStarted')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;