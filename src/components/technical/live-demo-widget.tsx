"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const demoResponses = {
  en: [
    "Oracle850B-MoE demonstrates advanced reasoning capabilities by analyzing complex queries through its specialized expert networks. The model processes information across multiple domains simultaneously, providing comprehensive and contextually aware responses.",
    "The Mixture of Experts architecture enables efficient processing by activating only relevant expert networks for each query. This approach achieves 95% computational efficiency while maintaining superior accuracy across diverse tasks.",
    "Russian language processing is optimized through specialized linguistic experts that understand contextual nuances, cultural references, and domain-specific terminology unique to Russian communication patterns."
  ],
  ru: [
    "Oracle850B-MoE демонстрирует продвинутые способности рассуждения, анализируя сложные запросы через специализированные экспертные сети. Модель обрабатывает информацию одновременно по нескольким областям, предоставляя всесторонние и контекстно-осознанные ответы.",
    "Архитектура Mixture of Experts обеспечивает эффективную обработку, активируя только релевантные экспертные сети для каждого запроса. Этот подход достигает 95% вычислительной эффективности при сохранении превосходной точности в различных задачах.",
    "Обработка русского языка оптимизирована через специализированные лингвистические эксперты, которые понимают контекстные нюансы, культурные ссылки и специфичную для русского языка терминологию."
  ]
};

export function LiveDemoWidget() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [language, setLanguage] = useState<"en" | "ru">("en");

  const handleDemoQuery = async (demoQuery: string) => {
    setIsLoading(true);
    setProgress(0);
    setResponse("");

    // Simulate processing progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    // Simulate API call delay
    setTimeout(() => {
      clearInterval(progressInterval);
      setProgress(100);

      const responses = demoResponses[language];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setResponse(randomResponse);

      setTimeout(() => setIsLoading(false), 500);
    }, 2000);
  };

  const sampleQueries = {
    en: [
      "Explain how Mixture of Experts architecture improves AI efficiency",
      "Describe the advantages of Russian language AI models",
      "How does Oracle850B-MoE handle complex reasoning tasks?"
    ],
    ru: [
      "Объясните, как архитектура Mixture of Experts улучшает эффективность ИИ",
      "Опишите преимущества моделей ИИ для русского языка",
      "Как Oracle850B-MoE справляется со сложными задачами рассуждения?"
    ]
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle>Interactive Demo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Query Input</label>
            <Textarea
              placeholder="Enter your query or select a sample query below..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          {isLoading && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Processing Query...</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}

          <div className="flex gap-2">
            <Button
              onClick={() => handleDemoQuery("")}
              disabled={isLoading || !query.trim()}
              className="flex-1"
            >
              Submit Query
            </Button>
            <Button
              variant="outline"
              onClick={() => setLanguage(language === "en" ? "ru" : "en")}
            >
              {language === "en" ? "RU" : "EN"}
            </Button>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Sample Queries</label>
            <div className="flex flex-wrap gap-2">
              {sampleQueries[language].map((sampleQuery, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleDemoQuery(sampleQuery)}
                  disabled={isLoading}
                  className="text-xs"
                >
                  {sampleQuery.length > 30 ? `${sampleQuery.substring(0, 30)}...` : sampleQuery}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Model Response
            <Badge variant="secondary">
              {isLoading ? "Processing..." : "Complete"}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="min-h-[200px] p-4 bg-muted/20 rounded-lg border">
            {response ? (
              <p className="text-sm leading-relaxed">{response}</p>
            ) : (
              <p className="text-sm text-muted-foreground">
                Model response will appear here after processing your query...
              </p>
            )}
          </div>

          {response && (
            <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="font-semibold">94.2%</div>
                <div className="text-muted-foreground">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="font-semibold">1.2s</div>
                <div className="text-muted-foreground">Response Time</div>
              </div>
              <div className="text-center">
                <div className="font-semibold">45</div>
                <div className="text-muted-foreground">Tokens/sec</div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
