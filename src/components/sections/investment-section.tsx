"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/components/language-provider";
import { FundingBreakdown } from "@/components/investment/funding-breakdown";
import { UseOfProceeds } from "@/components/investment/use-of-proceeds";
import { ROIProjections } from "@/components/investment/roi-projections";
import { ContactForm } from "@/components/investment/contact-form";

export function InvestmentSection() {
  const { t } = useLanguage();

  return (
    <section id="investment" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("investment.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("investment.subtitle")}
          </p>
        </div>

        <Tabs defaultValue="funding" className="w-full">
          <TabsList className="grid w-full grid-cols-4 glass-card animate-fade-in">
            <TabsTrigger value="funding">{t("investment.funding")}</TabsTrigger>
            <TabsTrigger value="use-of-funds">{t("investment.useOfFunds")}</TabsTrigger>
            <TabsTrigger value="projections">{t("investment.projections")}</TabsTrigger>
            <TabsTrigger value="contact">{t("investment.contact")}</TabsTrigger>
          </TabsList>

          <TabsContent value="funding" className="mt-8">
            <FundingBreakdown />
          </TabsContent>

          <TabsContent value="use-of-funds" className="mt-8">
            <UseOfProceeds />
          </TabsContent>

          <TabsContent value="projections" className="mt-8">
            <ROIProjections />
          </TabsContent>

          <TabsContent value="contact" className="mt-8">
            <ContactForm />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
