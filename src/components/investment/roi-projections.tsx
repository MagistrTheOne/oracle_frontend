"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const revenueProjections = [
  { year: "2025", revenue: 0, users: 0, marketShare: 0 },
  { year: "2026", revenue: 2500000, users: 150, marketShare: 2.5 },
  { year: "2027", revenue: 12500000, users: 750, marketShare: 8.5 },
  { year: "2028", revenue: 45000000, users: 2500, marketShare: 18.5 },
  { year: "2029", revenue: 125000000, users: 6500, marketShare: 32.5 },
  { year: "2030", revenue: 280000000, users: 12000, marketShare: 45.0 }
];

const roiScenarios = [
  {
    scenario: "Conservative",
    multiple: "8.5x",
    timeframe: "5 years",
    assumptions: "20% market penetration, steady growth",
    risk: "Low"
  },
  {
    scenario: "Base Case",
    multiple: "15.2x",
    timeframe: "4 years",
    assumptions: "35% market penetration, rapid adoption",
    risk: "Medium"
  },
  {
    scenario: "Optimistic",
    multiple: "28.7x",
    timeframe: "3 years",
    assumptions: "50% market penetration, market leadership",
    risk: "High"
  }
];

const exitStrategies = [
  {
    strategy: "Strategic Acquisition",
    timeline: "2028-2030",
    potential: "$500M-$1.2B",
    likelihood: "High",
    rationale: "Major tech companies seeking sovereign AI capabilities"
  },
  {
    strategy: "IPO",
    timeline: "2029-2031",
    potential: "$800M-$2B",
    likelihood: "Medium",
    rationale: "Strong fundamentals and market position"
  },
  {
    strategy: "Private Equity Buyout",
    timeline: "2027-2029",
    potential: "$400M-$800M",
    likelihood: "Medium",
    rationale: "Growth-stage investment firms"
  }
];

export function ROIProjections() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="glass-card animate-fade-in hover-glow">
          <CardHeader>
            <CardTitle>Revenue & Market Share Projections</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueProjections}>
                <defs>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.1} />
                <XAxis dataKey="year" stroke="currentColor" fontSize={12} />
                <YAxis
                  yAxisId="revenue"
                  stroke="currentColor"
                  fontSize={12}
                  tickFormatter={(value) => `$${(value / 1000000).toFixed(0)}M`}
                />
                <YAxis
                  yAxisId="share"
                  orientation="right"
                  stroke="currentColor"
                  fontSize={12}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Area
                  yAxisId="revenue"
                  type="monotone"
                  dataKey="revenue"
                  stroke="#10b981"
                  fillOpacity={1}
                  fill="url(#revenueGradient)"
                  name="Revenue ($)"
                />
                <Line
                  yAxisId="share"
                  type="monotone"
                  dataKey="marketShare"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  name="Market Share (%)"
                />
              </AreaChart>
            </ResponsiveContainer>

            <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-muted-foreground">Revenue Growth</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
                <span className="text-muted-foreground">Market Share</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card animate-fade-in hover-glow">
          <CardHeader>
            <CardTitle>Investment Return Scenarios</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {roiScenarios.map((scenario, index) => (
              <div key={index} className="p-4 border border-border/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">{scenario.scenario} Scenario</h4>
                  <Badge variant={
                    scenario.risk === "Low" ? "default" :
                    scenario.risk === "Medium" ? "secondary" : "destructive"
                  }>
                    {scenario.risk} Risk
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm mb-2">
                  <div>
                    <span className="text-muted-foreground">Return Multiple:</span>
                    <span className="ml-2 font-bold text-green-600 dark:text-green-400">
                      {scenario.multiple}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Timeframe:</span>
                    <span className="ml-2 font-medium">{scenario.timeframe}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  {scenario.assumptions}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="glass-card animate-fade-in hover-glow">
        <CardHeader>
          <CardTitle>Exit Strategy Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {exitStrategies.map((strategy, index) => (
              <div key={index} className="p-4 border border-border/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">{strategy.strategy}</h4>
                  <Badge variant={
                    strategy.likelihood === "High" ? "default" :
                    strategy.likelihood === "Medium" ? "secondary" : "outline"
                  }>
                    {strategy.likelihood} Likelihood
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm mb-2">
                  <div>
                    <span className="text-muted-foreground">Timeline:</span>
                    <span className="ml-2 font-medium">{strategy.timeline}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Potential Value:</span>
                    <span className="ml-2 font-bold text-green-600 dark:text-green-400">
                      {strategy.potential}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  {strategy.rationale}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-muted/20 rounded-lg">
            <h5 className="font-semibold mb-2">Investment Thesis Summary</h5>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-semibold text-primary">$280M</div>
                <div className="text-muted-foreground">2030 Revenue Projection</div>
              </div>
              <div>
                <div className="font-semibold text-primary">15.2x</div>
                <div className="text-muted-foreground">Average Return Multiple</div>
              </div>
              <div>
                <div className="font-semibold text-primary">4 Years</div>
                <div className="text-muted-foreground">Average Exit Timeline</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="glass-card animate-fade-in hover-glow">
          <CardContent className="p-4 text-center">
            <div className="text-xl font-bold text-green-600 dark:text-green-400">$280M</div>
            <div className="text-xs text-muted-foreground">2030 Revenue</div>
          </CardContent>
        </Card>

        <Card className="glass-card animate-fade-in hover-glow">
          <CardContent className="p-4 text-center">
            <div className="text-xl font-bold text-blue-600 dark:text-blue-400">45%</div>
            <div className="text-xs text-muted-foreground">Market Share</div>
          </CardContent>
        </Card>

        <Card className="glass-card animate-fade-in hover-glow">
          <CardContent className="p-4 text-center">
            <div className="text-xl font-bold text-purple-600 dark:text-purple-400">112x</div>
            <div className="text-xs text-muted-foreground">Revenue Growth</div>
          </CardContent>
        </Card>

        <Card className="glass-card animate-fade-in hover-glow">
          <CardContent className="p-4 text-center">
            <div className="text-xl font-bold text-orange-600 dark:text-orange-400">$800M</div>
            <div className="text-xs text-muted-foreground">Avg Exit Value</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
