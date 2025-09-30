"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/components/language-provider";
import { RoadmapTimeline } from "@/components/roadmap/roadmap-timeline";
import { ProgressBars } from "@/components/roadmap/progress-bars";
import { RiskAssessment } from "@/components/roadmap/risk-assessment";

export function DevelopmentRoadmap() {
  const { t } = useLanguage();

  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("roadmap.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("roadmap.subtitle")}
          </p>
        </div>

        <Tabs defaultValue="timeline" className="w-full">
          <TabsList className="grid w-full grid-cols-3 glass-card animate-fade-in">
            <TabsTrigger value="timeline">{t("roadmap.timeline")}</TabsTrigger>
            <TabsTrigger value="progress">{t("roadmap.progress")}</TabsTrigger>
            <TabsTrigger value="risks">{t("roadmap.risks")}</TabsTrigger>
          </TabsList>

          <TabsContent value="timeline" className="mt-8">
            <RoadmapTimeline />
          </TabsContent>

          <TabsContent value="progress" className="mt-8">
            <ProgressBars />
          </TabsContent>

          <TabsContent value="risks" className="mt-8">
            <RiskAssessment />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
