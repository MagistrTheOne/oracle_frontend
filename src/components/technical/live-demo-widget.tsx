"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const demoResponses = {
  en: [
    "Based on Q3 sales analysis: 1) Optimize pricing strategy to restore margins, 2) Implement customer retention programs to reduce acquisition costs, 3) Expand into high-margin product segments. Expected impact: +5% margin recovery within 2 quarters.",
    "Contract analysis reveals significant liability exposure. The force majeure clause is overly broad and could be interpreted to exclude standard business risks. Recommendation: Narrow definition to acts of God only, add mutual termination clauses, and include specific liability caps.",
    "Microservices architecture design: 1) API Gateway for authentication and rate limiting, 2) Service mesh for inter-service communication, 3) Distributed tracing for observability, 4) Circuit breakers for resilience. Scale horizontally with Kubernetes, implement zero-trust security model.",
    "Russian AI market analysis: Strengths - government support, growing talent pool; Weaknesses - regulatory uncertainty, funding gaps; Opportunities - niche applications, local language processing; Threats - international competition, talent drain. Recommendation: Focus on government contracts and regional enterprise solutions."
  ],
  ru: [
    "На основе анализа продаж Q3: 1) Оптимизировать ценовую стратегию для восстановления маржи, 2) Внедрить программы удержания клиентов для снижения затрат на привлечение, 3) Расшириться на высокомаржинальные сегменты продуктов. Ожидаемый эффект: восстановление маржи на 5% в течение 2 кварталов.",
    "Анализ контракта выявляет значительную ответственность. Пункт форс-мажора слишком широк и может исключать стандартные бизнес-риски. Рекомендация: сузить определение только до актов Бога, добавить взаимные условия расторжения и включить конкретные ограничения ответственности.",
    "Дизайн микросервисной архитектуры: 1) API Gateway для аутентификации и ограничения скорости, 2) Service mesh для межсервисной коммуникации, 3) Распределенная трассировка для наблюдаемости, 4) Circuit breakers для устойчивости. Горизонтальное масштабирование с Kubernetes, модель zero-trust безопасности.",
    "Анализ рынка ИИ России: Сильные стороны - государственная поддержка, растущий кадровый резерв; Слабости - регуляторная неопределенность, пробелы в финансировании; Возможности - нишевые приложения, обработка локального языка; Угрозы - международная конкуренция, утечка талантов. Рекомендация: фокус на государственных контрактах и региональных корпоративных решениях."
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
