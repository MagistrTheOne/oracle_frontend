"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/language-provider";

export function TeamApproach() {
  const { t } = useLanguage();

  const soloAdvantages = [
    {
      key: "efficiency",
      description: "efficiencyDesc",
      metricsKey: "fasterIterations"
    },
    {
      key: "qualityControl",
      description: "qualityDesc",
      metricsKey: "zeroDebt"
    },
    {
      key: "costEffective",
      description: "costDesc",
      metricsKey: "lowerCommunication"
    },
    {
      key: "deepExpertise",
      description: "expertiseDesc",
      metricsKey: "singleSource"
    }
  ];

  const growthStrategy = [
    {
      phase: "Phase 1: Solo Development",
      description: "MVP и core architecture",
      timeline: "Q4 2025",
      focus: "Technical foundation and market validation"
    },
    {
      phase: "Phase 2: First Hires",
      description: "ML Engineer + Frontend Developer",
      timeline: "Q1 2026",
      focus: "Scale development and user experience"
    },
    {
      phase: "Phase 3: Core Team",
      description: "5-7 specialists across disciplines",
      timeline: "Q2-Q3 2026",
      focus: "Production scaling and market expansion"
    },
    {
      phase: "Phase 4: Growth",
      description: "15-20 team members",
      timeline: "2027+",
      focus: "Multiple products and international expansion"
    }
  ];

  const competitiveAdvantages = [
    {
      title: "Уникальная экспертиза",
      description: "Глубокое понимание MoE архитектуры и русского языка",
      strength: "High",
      differentiator: "Competitors lack deep ML expertise"
    },
    {
      title: "Быстрая итерация",
      description: "MVP за месяцы, а не годы",
      strength: "High",
      differentiator: "Agile development vs corporate bureaucracy"
    },
    {
      title: "Региональный фокус",
      description: "Понимание локального рынка и регуляций",
      strength: "Medium",
      differentiator: "International players don't understand Russian context"
    },
    {
      title: "Техническая инновация",
      description: "Эффективная архитектура для ограниченного железа",
      strength: "High",
      differentiator: "Works on standard hardware, not requiring supercomputers"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Solo Development Advantages */}
      <Card className="glass-card animate-fade-in hover-glow">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            {t("team.soloStrategy")}
            <Badge variant="secondary">Current Phase</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {soloAdvantages.map((advantage, index) => (
              <div key={index} className="p-4 border border-border/50 rounded-lg">
            <h4 className="font-semibold mb-2 text-primary">{t(`team.${advantage.key}`)}</h4>
            <p className="text-sm text-muted-foreground mb-3">{t(`team.${advantage.key}Desc`)}</p>
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="text-xs">{t(`team.${advantage.metricsKey}`)}</Badge>
            </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-muted/20 rounded-lg">
            <h5 className="font-semibold mb-2">{t("team.whySoloEffective")}</h5>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• {t("team.decisionSpeed")}</li>
              <li>• {t("team.codeQuality")}</li>
              <li>• {t("team.burnRate")}</li>
              <li>• {t("team.fullExpertise")}</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Growth Strategy */}
      <Card className="glass-card animate-fade-in hover-glow">
        <CardHeader>
          <CardTitle>{t("team.growthStrategy")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {growthStrategy.map((phase, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 border border-border/50 rounded-lg">
                <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${
                  index === 0 ? "bg-green-500" :
                  index === 1 ? "bg-blue-500" :
                  index === 2 ? "bg-yellow-500" : "bg-muted"
                }`} />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{phase.phase}</h4>
                    <Badge variant={index <= 1 ? "default" : "outline"}>{phase.timeline}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{phase.description}</p>
                  <p className="text-xs text-primary font-medium">Focus: {phase.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Competitive Advantages */}
      <Card className="glass-card animate-fade-in hover-glow">
        <CardHeader>
          <CardTitle>{t("team.competitiveAdvantages")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competitiveAdvantages.map((advantage, index) => (
              <div key={index} className="p-4 border border-border/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">{advantage.title}</h4>
                  <Badge className={
                    advantage.strength === "High" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" :
                    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                  }>
                    {advantage.strength}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{advantage.description}</p>
                <p className="text-xs text-primary font-medium">Differentiator: {advantage.differentiator}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-muted/20 rounded-lg">
            <h5 className="font-semibold mb-2">Strategic Positioning:</h5>
            <p className="text-sm text-muted-foreground">
              Мы фокусируемся на нишевых сегментах российского рынка ИИ, где можем создать значительное преимущество
              через глубокую экспертизу и быструю итерацию, недоступные крупным игрокам.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Risk Management */}
      <Card className="glass-card animate-fade-in hover-glow">
        <CardHeader>
          <CardTitle>{t("team.riskManagement")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-600 dark:text-green-400">✅ {t("team.managedRisks")}</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Technical debt minimized through solo control</li>
                <li>• Market validation through MVP approach</li>
                <li>• Cost control through efficient development</li>
                <li>• Quality assurance through single vision</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">🔄 {t("team.contingencyPlans")}</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Pivot to consulting if product-market fit fails</li>
                <li>• Open source components for community funding</li>
                <li>• Partnership with universities for talent pipeline</li>
                <li>• Government grants for regional AI development</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-muted/20 rounded-lg">
            <h5 className="font-semibold mb-2">{t("team.investmentReadiness")}:</h5>
            <p className="text-sm text-muted-foreground">
              {t("team.projectDesigned")}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
