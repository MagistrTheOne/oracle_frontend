"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/components/language-provider";

const demoScenarios = {
  en: [
    {
      title: "Business Intelligence",
      query: "Analyze Q3 sales data: revenue up 15% but profit margin down 3%. Customer acquisition cost increased 20%. Recommend 3 strategic actions.",
      category: "Business"
    },
    {
      title: "Legal Document Analysis",
      query: "Review this contract clause: 'Force majeure events include but are not limited to acts of God, war, terrorism, and pandemics.' Assess liability risks.",
      category: "Legal"
    },
    {
      title: "Technical Architecture",
      query: "Design a microservices architecture for a fintech app handling 10K transactions/sec. Include security, scalability, and monitoring considerations.",
      category: "Engineering"
    },
    {
      title: "Market Research",
      query: "Compare Russian AI market vs US market: growth rates, key players, regulatory environment, investment trends. Provide SWOT analysis.",
      category: "Market"
    }
  ],
  ru: [
    {
      title: "Бизнес-аналитика",
      query: "Проанализируйте данные продаж Q3: выручка выросла на 15%, но маржа прибыли снизилась на 3%. Стоимость привлечения клиентов выросла на 20%. Рекомендуйте 3 стратегических действия.",
      category: "Бизнес"
    },
    {
      title: "Анализ юридических документов",
      query: "Проанализируйте этот пункт контракта: 'Форс-мажорные обстоятельства включают, но не ограничиваются актами Бога, войной, терроризмом и пандемиями.' Оцените риски ответственности.",
      category: "Юридический"
    },
    {
      title: "Техническая архитектура",
      query: "Спроектируйте микросервисную архитектуру для fintech приложения, обрабатывающего 10K транзакций/сек. Включите соображения безопасности, масштабируемости и мониторинга.",
      category: "Инжиниринг"
    },
    {
      title: "Исследование рынка",
      query: "Сравните российский рынок ИИ с американским: темпы роста, ключевые игроки, регуляторная среда, инвестиционные тенденции. Предоставьте SWOT анализ.",
      category: "Рынок"
    }
  ]
};

export function QueryInterface() {
  const { language } = useLanguage();
  const [selectedScenario, setSelectedScenario] = useState(0);
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  const scenarios = demoScenarios[language];

  useEffect(() => {
    setQuery(scenarios[selectedScenario].query);
  }, [selectedScenario, language]);

  const handleQuery = async () => {
    if (!query.trim()) return;

    setIsProcessing(true);
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

    // Simulate response generation
    setTimeout(() => {
      clearInterval(progressInterval);
      setProgress(100);

      const responses = {
        en: [
          "The train travels 80 km/h for 2 hours (160 km) then 60 km/h for 1.5 hours (90 km), total distance 250 km in 3.5 hours. Average speed = 250 ÷ 3.5 = 71.43 km/h.",
          "This recursive Fibonacci function has exponential time complexity O(2^n) due to repeated calculations. Optimization: Use memoization or dynamic programming to achieve O(n) complexity.",
          "Raskolnikov's moral transformation in Crime and Punishment follows a classic redemption arc: from intellectual justification of murder through psychological torment to spiritual redemption and acceptance of societal values.",
          "Quantum entanglement is like two magical coins that always show the same face when flipped, even across vast distances. This phenomenon enables quantum computers to perform parallel computations impossible for classical computers."
        ],
        ru: [
          "Поезд проезжает 80 км/ч за 2 часа (160 км), затем 60 км/ч за 1.5 часа (90 км), общее расстояние 250 км за 3.5 часа. Средняя скорость = 250 ÷ 3.5 = 71.43 км/ч.",
          "Эта рекурсивная функция Фибоначчи имеет экспоненциальную сложность O(2^n) из-за повторяющихся вычислений. Оптимизация: используйте мемоизацию или динамическое программирование для достижения сложности O(n).",
          "Моральное преобразование Раскольникова в 'Преступлении и наказании' следует классической дуге искупления: от интеллектуального оправдания убийства через психологические муки к духовному искуплению и принятию общественных ценностей.",
          "Квантовая запутанность похожа на две волшебные монеты, которые всегда показывают одну и ту же сторону при броске, даже на огромных расстояниях. Это явление позволяет квантовым компьютерам выполнять параллельные вычисления, невозможные для классических компьютеров."
        ]
      };

      setResponse(responses[language][selectedScenario]);

      setTimeout(() => setIsProcessing(false), 500);
    }, 3000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card className="glass-card animate-fade-in hover-glow">
        <CardHeader>
          <CardTitle>Interactive Query Interface</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="text-sm font-medium mb-3 block">Demo Scenarios</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {scenarios.map((scenario, index) => (
                <Button
                  key={index}
                  variant={selectedScenario === index ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedScenario(index)}
                  className="text-left justify-start h-auto p-3"
                >
                  <div>
                    <div className="font-medium text-xs">{scenario.title}</div>
                    <Badge variant="secondary" className="text-xs mt-1">
                      {scenario.category}
                    </Badge>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-3 block">Query Input</label>
            <Textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter your query or use a demo scenario..."
              className="min-h-[120px]"
            />
          </div>

          {isProcessing && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Processing Query...</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
              <div className="text-xs text-muted-foreground">
                Activating expert networks • Routing query • Generating response
              </div>
            </div>
          )}

          <Button
            onClick={handleQuery}
            disabled={isProcessing || !query.trim()}
            className="w-full"
            size="lg"
          >
            {isProcessing ? "Processing..." : "Submit Query"}
          </Button>
        </CardContent>
      </Card>

      <Card className="glass-card animate-fade-in hover-glow">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Model Response
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">Oracle850B-MoE</Badge>
              {!isProcessing && response && (
                <Badge variant="outline">Complete</Badge>
              )}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="min-h-[300px] p-4 bg-muted/20 rounded-lg border">
            {response ? (
              <div className="space-y-4">
                <p className="text-sm leading-relaxed">{response}</p>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
                  <div className="text-center">
                    <div className="font-semibold">94.2%</div>
                    <div className="text-xs text-muted-foreground">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">2.8s</div>
                    <div className="text-xs text-muted-foreground">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">8</div>
                    <div className="text-xs text-muted-foreground">Active Experts</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                <div className="text-center">
                  <div className="text-4xl mb-2">🤖</div>
                  <p className="text-sm">Response will appear here</p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
