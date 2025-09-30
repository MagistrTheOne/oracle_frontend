"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const fundingRounds = [
  {
    round: "Pre-Seed",
    amount: "$500K",
    valuation: "$5M",
    investors: ["Founder Investment", "Initial Angels"],
    status: "Completed",
    date: "Q1 2024"
  },
  {
    round: "Seed Round",
    amount: "$2M",
    valuation: "$12M",
    investors: ["Strategic Angels", "AI-focused VCs"],
    status: "In Progress",
    date: "Q2 2025",
    target: "$3M"
  },
  {
    round: "Series A",
    amount: "$15M",
    valuation: "$75M",
    investors: ["Tier 1 VCs", "Strategic Partners"],
    status: "Planned",
    date: "Q4 2025"
  },
  {
    round: "Series B",
    amount: "$50M",
    valuation: "$250M",
    investors: ["Growth Funds", "Corporate Investors"],
    status: "Planned",
    date: "Q2 2026"
  }
];

const fundingAllocation = [
  { category: "Product Development", amount: 1200000, percentage: 40 },
  { category: "Team Expansion", amount: 750000, percentage: 25 },
  { category: "Infrastructure", amount: 450000, percentage: 15 },
  { category: "Marketing & Sales", amount: 300000, percentage: 10 },
  { category: "Operations", amount: 225000, percentage: 7.5 },
  { category: "Contingency", amount: 75000, percentage: 2.5 }
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
            <CardTitle>Current Round Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">$3M</div>
              <div className="text-muted-foreground">Target Raise</div>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Progress</span>
                  <span className="text-sm font-medium">$2M / $3M</span>
                </div>
                <Progress value={66.7} className="h-2" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-center p-3 bg-muted/20 rounded-lg">
                <div className="font-semibold">$12M</div>
                <div className="text-muted-foreground">Pre-Money Valuation</div>
              </div>
              <div className="text-center p-3 bg-muted/20 rounded-lg">
                <div className="font-semibold">20%</div>
                <div className="text-muted-foreground">Equity Offered</div>
              </div>
            </div>

            <div className="p-3 bg-muted/20 rounded-lg">
              <h5 className="font-semibold mb-2">Investment Terms</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Minimum investment: $50,000</li>
                <li>• Lead investor benefits available</li>
                <li>• Strategic partnership opportunities</li>
                <li>• Board observer rights for investments {">"} $250K</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-card animate-fade-in hover-glow">
        <CardHeader>
          <CardTitle>Seed Round Allocation</CardTitle>
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
