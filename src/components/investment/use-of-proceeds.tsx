"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

const proceedsData = [
  { category: "R&D", amount: 1200000, percentage: 40, color: "#3b82f6" },
  { category: "Team", amount: 750000, percentage: 25, color: "#10b981" },
  { category: "Infrastructure", amount: 450000, percentage: 15, color: "#f59e0b" },
  { category: "Marketing", amount: 300000, percentage: 10, color: "#ef4444" },
  { category: "Operations", amount: 225000, percentage: 7.5, color: "#8b5cf6" },
  { category: "Legal & Compliance", amount: 75000, percentage: 2.5, color: "#06b6d4" }
];

const milestoneFunding = [
  { milestone: "Architecture Complete", amount: 300000, quarter: "Q1 2025" },
  { milestone: "Core Development", amount: 600000, quarter: "Q2 2025" },
  { milestone: "Advanced Features", amount: 450000, quarter: "Q3 2025" },
  { milestone: "Production Ready", amount: 300000, quarter: "Q4 2025" },
  { milestone: "Market Launch", amount: 225000, quarter: "Q1 2026" },
  { milestone: "Revenue Milestones", amount: 225000, quarter: "Q2 2026" }
];

export function UseOfProceeds() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="glass-card animate-fade-in hover-glow">
          <CardHeader>
            <CardTitle>Funds Allocation Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={proceedsData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="amount"
                    label={({ category, percentage }) => `${category}: ${percentage}%`}
                  >
                    {proceedsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: number) => [`$${value.toLocaleString()}`, "Amount"]}
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-3">
              {proceedsData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm font-medium">{item.category}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">
                      ${item.amount.toLocaleString()}
                    </span>
                    <span className="text-sm font-semibold">{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card animate-fade-in hover-glow">
          <CardHeader>
            <CardTitle>Milestone-Based Funding</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={milestoneFunding}>
                <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.1} />
                <XAxis
                  dataKey="quarter"
                  stroke="currentColor"
                  fontSize={12}
                  tick={{ opacity: 0.7 }}
                />
                <YAxis
                  stroke="currentColor"
                  fontSize={12}
                  tick={{ opacity: 0.7 }}
                  tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                />
                <Tooltip
                  formatter={(value: number) => [`$${value.toLocaleString()}`, "Funding"]}
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="amount" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>

            <div className="mt-4 space-y-2">
              {milestoneFunding.map((milestone, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <span className="font-medium">{milestone.milestone}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-muted-foreground">{milestone.quarter}</span>
                    <Badge variant="outline">${milestone.amount.toLocaleString()}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-card animate-fade-in hover-glow">
        <CardHeader>
          <CardTitle>Strategic Investment Rationale</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Product Development Focus</h4>
                <p className="text-sm text-muted-foreground">
                  40% allocation to R&D ensures rapid technical advancement and market-leading capabilities.
                  This investment will complete the MoE architecture and achieve production readiness.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Team Expansion</h4>
                <p className="text-sm text-muted-foreground">
                  25% dedicated to building world-class AI research and engineering teams.
                  Critical for scaling development velocity and maintaining technical leadership.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Infrastructure Investment</h4>
                <p className="text-sm text-muted-foreground">
                  15% for high-performance computing infrastructure and cloud partnerships.
                  Essential for training large-scale models and ensuring reliable deployment.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Market Entry Strategy</h4>
                <p className="text-sm text-muted-foreground">
                  10% allocated to marketing and sales for strategic market positioning and partnership development.
                  Focus on government contracts and enterprise adoption in Russia.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Operational Excellence</h4>
                <p className="text-sm text-muted-foreground">
                  7.5% for operational infrastructure including legal compliance, data governance, and administrative support.
                  Ensures smooth scaling and regulatory compliance.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Risk Management</h4>
                <p className="text-sm text-muted-foreground">
                  2.5% contingency fund for unexpected challenges and market dynamics.
                  Provides buffer for technical hurdles and competitive responses.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
