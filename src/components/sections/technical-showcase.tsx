"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/components/language-provider";
import { MoEVisualization } from "@/components/technical/moe-visualization";
import { PerformanceChart } from "@/components/technical/performance-chart";
import { LiveDemoWidget } from "@/components/technical/live-demo-widget";

export function TechnicalShowcase() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("architecture");

  return (
    <section id="technical" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("technical.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("technical.subtitle")}
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 glass-card animate-fade-in">
            <TabsTrigger value="architecture">{t("technical.architecture")}</TabsTrigger>
            <TabsTrigger value="performance">{t("technical.performance")}</TabsTrigger>
            <TabsTrigger value="specifications">{t("technical.specifications")}</TabsTrigger>
            <TabsTrigger value="demo">{t("technical.demo")}</TabsTrigger>
          </TabsList>

          <TabsContent value="architecture" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="glass-card animate-fade-in hover-glow">
                <CardHeader>
                  <CardTitle className="text-2xl">{t("technical.moeTitle")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <MoEVisualization />
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="glass-card animate-fade-in hover-glow">
                  <CardHeader>
                    <CardTitle>{t("technical.keyFeatures")}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">{t("technical.expertCount")}</span>
                      <Badge variant="secondary">{t("technical.experts2816")}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">{t("technical.activeExperts")}</span>
                      <Badge variant="secondary">{t("technical.activeExpertsValue")}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">{t("technical.totalParameters")}</span>
                      <Badge variant="secondary">{t("technical.parameters850B")}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">{t("technical.trainingEfficiency")}</span>
                      <Badge variant="secondary">{t("technical.efficiency95")}</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card animate-fade-in hover-glow">
                  <CardHeader>
                    <CardTitle>{t("technical.architectureBenefits")}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium">{t("technical.scalableIntelligence")}</p>
                        <p className="text-sm text-muted-foreground">
                          {t("technical.scalableDesc")}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium">{t("technical.computationalEfficiency")}</p>
                        <p className="text-sm text-muted-foreground">
                          {t("technical.efficiencyDesc")}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium">{t("technical.russianOptimized")}</p>
                        <p className="text-sm text-muted-foreground">
                          {t("technical.russianDesc")}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="glass-card animate-fade-in hover-glow">
                <CardHeader>
                  <CardTitle>{t("technical.performanceComparison")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <PerformanceChart />
                </CardContent>
              </Card>

              <Card className="glass-card animate-fade-in hover-glow">
                <CardHeader>
                  <CardTitle>{t("technical.benchmarkResults")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{t("technical.mmlu")}</span>
                      <span className="text-sm text-muted-foreground">94.2%</span>
                    </div>
                    <Progress value={94.2} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{t("technical.russianLanguage")}</span>
                      <span className="text-sm text-muted-foreground">96.8%</span>
                    </div>
                    <Progress value={96.8} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{t("technical.codeGeneration")}</span>
                      <span className="text-sm text-muted-foreground">91.5%</span>
                    </div>
                    <Progress value={91.5} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{t("technical.mathematicalReasoning")}</span>
                      <span className="text-sm text-muted-foreground">89.7%</span>
                    </div>
                    <Progress value={89.7} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="specifications" className="mt-8">
            <Card className="glass-card animate-fade-in hover-glow">
              <CardHeader>
                <CardTitle>{t("technical.technicalSpecifications")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold">{t("technical.modelArchitecture")}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t("technical.architectureDesc")}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">{t("technical.parameterCount")}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t("technical.parameterDesc")}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">{t("technical.trainingData")}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t("technical.trainingDesc")}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">{t("technical.inferenceSpeed")}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t("technical.speedDesc")}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">{t("technical.memoryRequirements")}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t("technical.memoryDesc")}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">{t("technical.russianSupport")}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t("technical.supportDesc")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="demo" className="mt-8">
            <LiveDemoWidget />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
