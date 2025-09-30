"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/components/language-provider";
import { FounderProfile } from "@/components/team/founder-profile";
import { TechnicalAchievements } from "@/components/team/technical-achievements";
import { CommunityMetrics } from "@/components/team/community-metrics";

export function TeamSection() {
  const { t } = useLanguage();

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("team.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("team.subtitle")}
          </p>
        </div>

        <Tabs defaultValue="founder" className="w-full">
          <TabsList className="grid w-full grid-cols-3 glass-card animate-fade-in">
            <TabsTrigger value="founder">{t("team.founder")}</TabsTrigger>
            <TabsTrigger value="achievements">{t("team.achievements")}</TabsTrigger>
            <TabsTrigger value="community">{t("team.community")}</TabsTrigger>
          </TabsList>

          <TabsContent value="founder" className="mt-8">
            <FounderProfile />
          </TabsContent>

          <TabsContent value="achievements" className="mt-8">
            <TechnicalAchievements />
          </TabsContent>

          <TabsContent value="community" className="mt-8">
            <CommunityMetrics />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
