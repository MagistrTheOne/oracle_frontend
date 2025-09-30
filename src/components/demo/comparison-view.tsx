"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/language-provider";

const comparisonData = {
  en: {
    query: "Explain how blockchain technology could improve supply chain transparency in the agricultural sector.",
    traditional: {
      response: "Blockchain can help track products from farm to consumer. It creates an immutable record of each step in the supply chain, allowing consumers to verify the authenticity and origin of products.",
      accuracy: 75,
      reasoning: "Limited depth in analysis",
      experts: 3
    },
    oracle: {
      response: "Blockchain technology revolutionizes agricultural supply chains through distributed ledger technology that creates tamper-proof records of every transaction, input, and transformation. Smart contracts automate compliance verification, IoT sensors provide real-time environmental monitoring, and cryptographic hashing ensures data integrity. This enables complete traceability from seed to shelf, reducing food fraud by 40% and improving consumer trust through transparent sustainability metrics and fair trade verification.",
      accuracy: 94,
      reasoning: "Multi-domain expert analysis",
      experts: 8
    }
  },
  ru: {
    query: "Объясните, как технология блокчейн может улучшить прозрачность цепочки поставок в сельскохозяйственном секторе.",
    traditional: {
      response: "Блокчейн может помочь отслеживать продукты от фермы до потребителя. Он создает неизменяемую запись каждого шага в цепочке поставок, позволяя потребителям проверять подлинность и происхождение продуктов.",
      accuracy: 75,
      reasoning: "Ограниченная глубина анализа",
      experts: 3
    },
    oracle: {
      response: "Технология блокчейн революционизирует сельскохозяйственные цепочки поставок через технологию распределенного реестра, которая создает защищенные от подделки записи каждой транзакции, ввода и преобразования. Смарт-контракты автоматизируют проверку соответствия, датчики IoT обеспечивают мониторинг окружающей среды в реальном времени, а криптографическое хеширование обеспечивает целостность данных. Это обеспечивает полную отслеживаемость от семени до прилавка, снижая пищевое мошенничество на 40% и повышая доверие потребителей через прозрачные показатели устойчивости и верификацию справедливой торговли.",
      accuracy: 94,
      reasoning: "Анализ многоуровневых экспертов",
      experts: 8
    }
  }
};

export function ComparisonView() {
  const { language } = useLanguage();
  const [viewMode, setViewMode] = useState<"side-by-side" | "traditional" | "oracle">("side-by-side");
  const data = comparisonData[language];

  return (
    <div className="space-y-6">
      <Card className="glass-card animate-fade-in hover-glow">
        <CardHeader>
          <CardTitle>Reasoning Quality Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <h4 className="font-medium mb-2">Query:</h4>
            <p className="text-sm text-muted-foreground p-3 bg-muted/20 rounded-lg">
              {data.query}
            </p>
          </div>

          <div className="flex justify-center mb-6">
            <div className="flex bg-muted/30 rounded-lg p-1">
              <Button
                variant={viewMode === "side-by-side" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("side-by-side")}
                className="px-4"
              >
                Side by Side
              </Button>
              <Button
                variant={viewMode === "traditional" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("traditional")}
                className="px-4"
              >
                Traditional AI
              </Button>
              <Button
                variant={viewMode === "oracle" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("oracle")}
                className="px-4"
              >
                Oracle850B-MoE
              </Button>
            </div>
          </div>

          {viewMode === "side-by-side" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-card/30 border-border/50">
                <CardHeader>
                  <CardTitle className="text-base flex items-center justify-between">
                    Traditional AI Model
                    <Badge variant="outline">{data.traditional.accuracy}% Accuracy</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed mb-4">{data.traditional.response}</p>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-muted-foreground">Reasoning:</span>
                      <span className="ml-2">{data.traditional.reasoning}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Experts:</span>
                      <span className="ml-2">{data.traditional.experts}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/30 border-border/50">
                <CardHeader>
                  <CardTitle className="text-base flex items-center justify-between">
                    Oracle850B-MoE
                    <Badge variant="default">{data.oracle.accuracy}% Accuracy</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed mb-4">{data.oracle.response}</p>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-muted-foreground">Reasoning:</span>
                      <span className="ml-2">{data.oracle.reasoning}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Experts:</span>
                      <span className="ml-2">{data.oracle.experts}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {viewMode === "traditional" && (
            <Card className="bg-card/30 border-border/50">
              <CardHeader>
                <CardTitle>Traditional AI Response</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed mb-4">{data.traditional.response}</p>
                <div className="flex items-center justify-between text-sm">
                  <span>Basic supply chain explanation</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-muted-foreground">Accuracy: {data.traditional.accuracy}%</span>
                    <span className="text-muted-foreground">Experts: {data.traditional.experts}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {viewMode === "oracle" && (
            <Card className="bg-card/30 border-border/50">
              <CardHeader>
                <CardTitle>Oracle850B-MoE Response</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed mb-4">{data.oracle.response}</p>
                <div className="flex items-center justify-between text-sm">
                  <span>Comprehensive technical analysis</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-primary font-semibold">Accuracy: {data.oracle.accuracy}%</span>
                    <span className="text-muted-foreground">Experts: {data.oracle.experts}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-card animate-fade-in hover-glow">
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">+25%</div>
            <div className="text-sm text-muted-foreground">Accuracy Improvement</div>
          </CardContent>
        </Card>

        <Card className="glass-card animate-fade-in hover-glow">
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">2.7x</div>
            <div className="text-sm text-muted-foreground">More Expert Networks</div>
          </CardContent>
        </Card>

        <Card className="glass-card animate-fade-in hover-glow">
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">95%</div>
            <div className="text-sm text-muted-foreground">Efficiency Gain</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
