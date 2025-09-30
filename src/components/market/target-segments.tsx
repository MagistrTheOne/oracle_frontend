"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const segmentData = [
  { name: "Government", value: 35, color: "#3b82f6", size: "$1.3B" },
  { name: "Enterprise", value: 28, color: "#10b981", size: "$1.1B" },
  { name: "Education", value: 20, color: "#f59e0b", size: "$0.8B" },
  { name: "Research", value: 17, color: "#ef4444", size: "$0.6B" },
];

const useCaseData = [
  { sector: "Government", useCases: ["Data Analysis", "Policy Making", "Security", "Citizen Services"] },
  { sector: "Enterprise", useCases: ["Automation", "Analytics", "Customer Service", "Process Optimization"] },
  { sector: "Education", useCases: ["Personalized Learning", "Research", "Assessment", "Administration"] },
  { sector: "Research", useCases: ["Scientific Computing", "Data Processing", "Simulation", "Collaboration"] },
];

export function TargetSegments() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle>Market Segmentation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={segmentData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {segmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number, name) => [`${value}%`, name]}
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
            {segmentData.map((segment, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: segment.color }}
                  />
                  <span className="text-sm font-medium">{segment.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">{segment.size}</span>
                  <div className="w-16">
                    <Progress value={segment.value} className="h-1" />
                  </div>
                  <span className="text-sm text-muted-foreground w-8">{segment.value}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle>Target Use Cases</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {useCaseData.map((sector, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">{sector.sector}</h4>
                  <Badge variant="outline">{sector.useCases.length} use cases</Badge>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {sector.useCases.map((useCase, useCaseIndex) => (
                    <div key={useCaseIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{useCase}</span>
                    </div>
                  ))}
                </div>
                {index < useCaseData.length - 1 && <div className="border-b border-border/50 mt-4" />}
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-muted/20 rounded-lg">
            <h5 className="font-semibold mb-2">Strategic Focus</h5>
            <p className="text-sm text-muted-foreground">
              Oracle850B-MoE is positioned to serve all major segments with specialized capabilities for Russian language processing and sovereign data handling requirements.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
