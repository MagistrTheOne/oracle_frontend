"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLanguage } from "@/components/language-provider";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { id: "hero", key: "nav.hero" },
  { id: "technical", key: "nav.technical" },
  { id: "market", key: "nav.market" },
  { id: "roadmap", key: "nav.roadmap" },
  { id: "team", key: "nav.team" },
  { id: "demo", key: "nav.demo" },
  { id: "investment", key: "nav.investment" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav animate-fade-in">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-foreground">
              Oracle850B-MoE
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {t(item.key)}
                </button>
              ))}
            </div>
          </div>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="hidden sm:flex items-center space-x-2">
              <Button
                variant={language === "en" ? "default" : "outline"}
                size="sm"
                onClick={() => setLanguage("en")}
                className="text-xs"
              >
                EN
              </Button>
              <Button
                variant={language === "ru" ? "default" : "outline"}
                size="sm"
                onClick={() => setLanguage("ru")}
                className="text-xs"
              >
                RU
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-2">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col space-y-4 mt-8">
                    {/* Mobile Language Switcher */}
                    <div className="flex items-center space-x-2 px-4">
                      <Button
                        variant={language === "en" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setLanguage("en")}
                        className="text-xs"
                      >
                        EN
                      </Button>
                      <Button
                        variant={language === "ru" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setLanguage("ru")}
                        className="text-xs"
                      >
                        RU
                      </Button>
                    </div>

                    {/* Mobile Navigation Links */}
                    <div className="flex flex-col space-y-2">
                      {navigationItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className="text-left text-muted-foreground hover:text-foreground px-4 py-3 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-accent/50"
                        >
                          {t(item.key)}
                        </button>
                      ))}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
