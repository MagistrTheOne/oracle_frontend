"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const competitiveData = [
  {
    company: "Oracle850B-MoE",
    russianFocus: 5,
    sovereignty: 5,
    moeArchitecture: 5,
    scale: 5,
    efficiency: 5,
    marketShare: "N/A",
    strength: "Sovereign Russian AI with advanced MoE"
  },
  {
    company: "YandexGPT",
    russianFocus: 4,
    sovereignty: 3,
    moeArchitecture: 2,
    scale: 3,
    efficiency: 3,
    marketShare: "45%",
    strength: "Established Russian market leader"
  },
  {
    company: "Sber AI",
    russianFocus: 4,
    sovereignty: 4,
    moeArchitecture: 2,
    scale: 4,
    efficiency: 3,
    marketShare: "30%",
    strength: "Banking sector dominance"
  },
  {
    company: "VK AI",
    russianFocus: 3,
    sovereignty: 3,
    moeArchitecture: 1,
    scale: 2,
    efficiency: 2,
    marketShare: "15%",
    strength: "Social platform integration"
  },
  {
    company: "International AI",
    russianFocus: 1,
    sovereignty: 1,
    moeArchitecture: 3,
    scale: 4,
    efficiency: 4,
    marketShare: "10%",
    strength: "Global technology access"
  },
];

const criteriaLabels = {
  russianFocus: "Russian Language Focus",
  sovereignty: "Data Sovereignty",
  moeArchitecture: "MoE Architecture",
  scale: "Model Scale",
  efficiency: "Computational Efficiency"
};

export function CompetitiveMatrix() {
  const maxScore = 5;

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50">
      <CardHeader>
        <CardTitle>Competitive Positioning Matrix</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left py-3 px-2 font-semibold">Company</th>
                {Object.entries(criteriaLabels).map(([key, label]) => (
                  <th key={key} className="text-center py-3 px-2 font-semibold min-w-[120px]">
                    {label}
                  </th>
                ))}
                <th className="text-center py-3 px-2 font-semibold">Market Share</th>
                <th className="text-left py-3 px-2 font-semibold">Key Strength</th>
              </tr>
            </thead>
            <tbody>
              {competitiveData.map((company, index) => (
                <tr key={index} className="border-b border-border/30 hover:bg-muted/20">
                  <td className="py-4 px-2">
                    <div className="font-medium">{company.company}</div>
                  </td>
                  {Object.entries(criteriaLabels).map(([key, label]) => {
                    const score = company[key as keyof typeof company] as number;
                    return (
                      <td key={key} className="py-4 px-2 text-center">
                        <div className="flex items-center justify-center space-x-1">
                          {Array.from({ length: maxScore }, (_, i) => (
                            <div
                              key={i}
                              className={`w-3 h-3 rounded-full ${
                                i < score ? "bg-primary" : "bg-muted/30"
                              }`}
                            />
                          ))}
                          <span className="ml-2 text-sm text-muted-foreground">
                            {score}/{maxScore}
                          </span>
                        </div>
                      </td>
                    );
                  })}
                  <td className="py-4 px-2 text-center">
                    <Badge variant={company.marketShare === "N/A" ? "secondary" : "outline"}>
                      {company.marketShare}
                    </Badge>
                  </td>
                  <td className="py-4 px-2">
                    <span className="text-sm text-muted-foreground">{company.strength}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-muted/20 rounded-lg">
            <h5 className="font-semibold mb-2">Competitive Advantages</h5>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Superior MoE architecture efficiency</li>
              <li>• Complete data sovereignty compliance</li>
              <li>• Native Russian language optimization</li>
              <li>• Advanced reasoning capabilities</li>
            </ul>
          </div>
          <div className="p-4 bg-muted/20 rounded-lg">
            <h5 className="font-semibold mb-2">Market Opportunity</h5>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Government contracts for sovereign AI</li>
              <li>• Enterprise adoption in key sectors</li>
              <li>• Research institution partnerships</li>
              <li>• Educational platform integration</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
