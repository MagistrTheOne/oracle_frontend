"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className="space-y-8">
          {/* Main Tagline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
              {t("hero.tagline")}
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Key Statistics */}
          <Card className="inline-block px-8 py-4 glass-card animate-fade-in hover-glow">
            <p className="text-lg sm:text-xl text-muted-foreground font-medium">
              {t("hero.stats")}
            </p>
          </Card>

          {/* Value Proposition */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t("hero.value")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="px-8 py-4 text-lg font-semibold bg-primary hover:bg-primary/90"
              onClick={() => scrollToSection("demo")}
            >
              {t("hero.cta1")}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold border-border hover:bg-accent/50"
              onClick={() => scrollToSection("technical")}
            >
              {t("hero.cta2")}
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
