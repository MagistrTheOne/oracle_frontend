"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/components/language-provider";
import { ComparisonView } from "@/components/demo/comparison-view";
import { PerformanceMetrics } from "@/components/demo/performance-metrics";
import { QueryInterface } from "@/components/demo/query-interface";

export function LiveDemoSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("interface");

  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("demo.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("demo.subtitle")}
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 glass-card animate-fade-in">
            <TabsTrigger value="interface">{t("demo.interface")}</TabsTrigger>
            <TabsTrigger value="comparison">{t("demo.comparison")}</TabsTrigger>
            <TabsTrigger value="metrics">{t("demo.metrics")}</TabsTrigger>
          </TabsList>

          <TabsContent value="interface" className="mt-8">
            <QueryInterface />
          </TabsContent>

          <TabsContent value="comparison" className="mt-8">
            <ComparisonView />
          </TabsContent>

          <TabsContent value="metrics" className="mt-8">
            <PerformanceMetrics />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
