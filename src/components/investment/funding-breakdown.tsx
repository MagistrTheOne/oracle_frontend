"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const fundingRounds = [
  {
    round: "Bootstrapping",
    amount: "$50K",
    valuation: "Pre-revenue",
    investors: ["Founder Investment", "Personal Savings"],
    status: "Completed",
    date: "Q1-Q3 2025"
  },
  {
    round: "Angel Round",
    amount: "$200K-$500K",
    valuation: "$2M-$4M",
    investors: ["Angel Investors", "AI Enthusiasts", "Industry Experts"],
    status: "Seeking",
    date: "Q1-Q2 2026",
    target: "$300K"
  },
  {
    round: "Pre-Seed",
    amount: "$1M-$2M",
    valuation: "$8M-$12M",
    investors: ["Strategic Angels", "AI-focused VCs", "Corporate VCs"],
    status: "Planned",
    date: "Q3-Q4 2026"
  },
  {
    round: "Seed Round",
    amount: "$3M-$5M",
    valuation: "$15M-$25M",
    investors: ["Tier 1 VCs", "Strategic Partners", "Government Funds"],
    status: "Planned",
    date: "Q1-Q2 2027"
  }
];

const fundingAllocation = [
  { category: "MVP Development", amount: 25000, percentage: 50 },
  { category: "Technical Infrastructure", amount: 15000, percentage: 30 },
  { category: "Legal & Compliance", amount: 5000, percentage: 10 },
  { category: "Marketing Materials", amount: 3000, percentage: 6 },
  { category: "Contingency", amount: 2000, percentage: 4 }
];

export function FundingBreakdown() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="glass-card animate-fade-in hover-glow">
          <CardHeader>
            <CardTitle>Funding Rounds Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {fundingRounds.map((round, index) => (
                <div key={index} className="p-4 border border-border/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{round.round}</h4>
                    <Badge variant={round.status === "Completed" ? "default" : "outline"}>
                      {round.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm mb-2">
                    <div>
                      <span className="text-muted-foreground">Amount:</span>
                      <span className="ml-2 font-medium">{round.amount}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Valuation:</span>
                      <span className="ml-2 font-medium">{round.valuation}</span>
                    </div>
                  </div>

                  <div className="text-sm text-muted-foreground mb-2">
                    <span>Investors: {round.investors.join(", ")}</span>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    {round.date}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card animate-fade-in hover-glow">
          <CardHeader>
            <CardTitle>Current Status & Next Steps</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">Bootstrapping</div>
              <div className="text-muted-foreground">Self-Funded Development</div>
            </div>

            <div className="space-y-3">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">✅ Current Phase</h5>
                <p className="text-sm text-muted-foreground">
                  Project development funded through founder investment and personal savings.
                  Focus on technical validation and MVP development.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-center p-3 bg-muted/20 rounded-lg">
                <div className="font-semibold">$50K</div>
                <div className="text-muted-foreground">Bootstrapped Capital</div>
              </div>
              <div className="text-center p-3 bg-muted/20 rounded-lg">
                <div className="font-semibold">Q4 2025</div>
                <div className="text-muted-foreground">MVP Ready</div>
              </div>
            </div>

            <div className="p-3 bg-muted/20 rounded-lg">
              <h5 className="font-semibold mb-2">Next Funding Milestone</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Angel round: $200K-$500K target</li>
                <li>• Valuation: $2M-$4M pre-money</li>
                <li>• Timeline: Q1-Q2 2026</li>
                <li>• Focus: Market validation and team expansion</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-card animate-fade-in hover-glow">
        <CardHeader>
          <CardTitle>Bootstrapping Allocation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {fundingAllocation.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{item.category}</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-muted-foreground">${item.amount.toLocaleString()}</span>
                    <span className="font-semibold">{item.percentage}%</span>
                  </div>
                </div>
                <Progress value={item.percentage} className="h-2" />
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-muted/20 rounded-lg">
            <h5 className="font-semibold mb-2">Strategic Focus</h5>
            <p className="text-sm text-muted-foreground">
              65% of funds allocated to product development and team expansion to achieve technical milestones and market readiness by Q4 2025.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
