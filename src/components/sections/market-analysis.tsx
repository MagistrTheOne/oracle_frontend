"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/components/language-provider";
import { MarketChart } from "@/components/market/market-chart";
import { CompetitiveMatrix } from "@/components/market/competitive-matrix";
import { TargetSegments } from "@/components/market/target-segments";

export function MarketAnalysis() {
  const { t } = useLanguage();

  return (
    <section id="market" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("market.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("market.subtitle")}
          </p>
        </div>

        <Tabs defaultValue="market-size" className="w-full">
          <TabsList className="grid w-full grid-cols-3 glass-card animate-fade-in">
            <TabsTrigger value="market-size">{t("market.marketSize")}</TabsTrigger>
            <TabsTrigger value="segments">{t("market.targetSegments")}</TabsTrigger>
            <TabsTrigger value="competition">{t("market.competition")}</TabsTrigger>
          </TabsList>

          <TabsContent value="market-size" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="glass-card animate-fade-in hover-glow">
                <CardHeader>
                  <CardTitle>Russian AI Market Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <MarketChart />
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="glass-card animate-fade-in hover-glow">
                  <CardHeader>
                    <CardTitle>Market Statistics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">2024 Market Size</span>
                      <Badge variant="secondary">$2.1B</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">2025 Projected</span>
                      <Badge variant="secondary">$3.8B</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">CAGR 2024-2028</span>
                      <Badge variant="secondary">45%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Government Investment</span>
                      <Badge variant="secondary">$1.2B</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card animate-fade-in hover-glow">
                  <CardHeader>
                    <CardTitle>Growth Drivers</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Digital Transformation</p>
                        <p className="text-sm text-muted-foreground">
                          Russian enterprises accelerating AI adoption for competitive advantage
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Sovereign Technology Push</p>
                        <p className="text-sm text-muted-foreground">
                          Government initiatives for domestic AI development and data localization
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Research & Education</p>
                        <p className="text-sm text-muted-foreground">
                          Universities and research institutions driving innovation and talent development
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="segments" className="mt-8">
            <TargetSegments />
          </TabsContent>

          <TabsContent value="competition" className="mt-8">
            <CompetitiveMatrix />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
