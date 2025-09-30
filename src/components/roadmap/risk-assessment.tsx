"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const riskData = [
  {
    category: "Technical Risks",
    risks: [
      {
        risk: "MoE Architecture Complexity",
        probability: 25,
        impact: "Medium",
        mitigation: "Extensive testing and gradual rollout",
        status: "Mitigated"
      },
      {
        risk: "Training Data Quality",
        probability: 20,
        impact: "High",
        mitigation: "Multi-stage validation and diverse dataset curation",
        status: "Active"
      },
      {
        risk: "Inference Performance",
        probability: 30,
        impact: "Medium",
        mitigation: "Hardware optimization and caching strategies",
        status: "Mitigated"
      }
    ]
  },
  {
    category: "Market Risks",
    risks: [
      {
        risk: "Regulatory Changes",
        probability: 15,
        impact: "High",
        mitigation: "Close monitoring and compliance framework",
        status: "Monitored"
      },
      {
        risk: "Competitive Response",
        probability: 35,
        impact: "Medium",
        mitigation: "Continuous innovation and partnership strategy",
        status: "Active"
      },
      {
        risk: "Market Adoption Rate",
        probability: 40,
        impact: "High",
        mitigation: "Pilot programs and stakeholder engagement",
        status: "Active"
      }
    ]
  },
  {
    category: "Operational Risks",
    risks: [
      {
        risk: "Resource Constraints",
        probability: 20,
        impact: "Medium",
        mitigation: "Strategic partnerships and phased development",
        status: "Mitigated"
      },
      {
        risk: "Talent Acquisition",
        probability: 25,
        impact: "High",
        mitigation: "Competitive compensation and remote work options",
        status: "Active"
      },
      {
        risk: "Infrastructure Scaling",
        probability: 30,
        impact: "Medium",
        mitigation: "Cloud partnerships and modular architecture",
        status: "Planned"
      }
    ]
  }
];

const getRiskColor = (probability: number) => {
  if (probability <= 20) return "bg-green-500";
  if (probability <= 35) return "bg-yellow-500";
  return "bg-red-500";
};

const getImpactColor = (impact: string) => {
  switch (impact) {
    case "Low": return "text-green-600 dark:text-green-400";
    case "Medium": return "text-yellow-600 dark:text-yellow-400";
    case "High": return "text-red-600 dark:text-red-400";
    default: return "text-muted-foreground";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "Mitigated": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "Active": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "Monitored": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    case "Planned": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
    default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  }
};

export function RiskAssessment() {
  return (
    <div className="space-y-6">
      {riskData.map((category, categoryIndex) => (
        <Card key={categoryIndex} className="glass-card animate-fade-in hover-glow">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              {category.category}
              <Badge variant="outline">{category.risks.length} risks identified</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {category.risks.map((risk, riskIndex) => (
                <div key={riskIndex} className="p-4 border border-border/50 rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-medium">{risk.risk}</h4>
                    <div className="flex items-center space-x-2">
                      <Badge className={getStatusColor(risk.status)}>
                        {risk.status}
                      </Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-muted-foreground">Probability</span>
                        <span className="text-sm font-medium">{risk.probability}%</span>
                      </div>
                      <div className="w-full bg-muted/30 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${getRiskColor(risk.probability)}`}
                          style={{ width: `${risk.probability}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-muted-foreground">Impact</span>
                        <span className={`text-sm font-medium ${getImpactColor(risk.impact)}`}>
                          {risk.impact}
                        </span>
                      </div>
                      <div className="w-full bg-muted/30 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            risk.impact === "High" ? "bg-red-500" :
                            risk.impact === "Medium" ? "bg-yellow-500" : "bg-green-500"
                          }`}
                          style={{
                            width: risk.impact === "High" ? "100%" :
                                   risk.impact === "Medium" ? "66%" : "33%"
                          }}
                        />
                      </div>
                    </div>

                    <div className="text-sm">
                      <span className="text-muted-foreground">Risk Score:</span>
                      <span className="font-semibold ml-1">
                        {Math.round((risk.probability * (risk.impact === "High" ? 3 : risk.impact === "Medium" ? 2 : 1)) / 3)}/10
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">Mitigation:</span>
                    <span className="text-sm text-muted-foreground ml-1">{risk.mitigation}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      <Card className="glass-card animate-fade-in hover-glow">
        <CardHeader>
          <CardTitle>Risk Management Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">12</div>
              <div className="text-sm text-muted-foreground">Total Risks Identified</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">75%</div>
              <div className="text-sm text-muted-foreground">Mitigation Coverage</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">2.8</div>
              <div className="text-sm text-muted-foreground">Average Risk Score</div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-muted/20 rounded-lg">
            <h5 className="font-semibold mb-2">Overall Risk Assessment: Low to Medium</h5>
            <p className="text-sm text-muted-foreground">
              Oracle850B-MoE development risks are well-managed with comprehensive mitigation strategies.
              Technical risks are largely addressed, while market risks require ongoing monitoring and adaptation.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
