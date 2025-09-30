"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";

const realtimeData = [
  { time: "00:00", latency: 2.1, throughput: 45, accuracy: 94.2 },
  { time: "00:01", latency: 2.3, throughput: 47, accuracy: 94.8 },
  { time: "00:02", latency: 2.0, throughput: 44, accuracy: 93.9 },
  { time: "00:03", latency: 2.2, throughput: 46, accuracy: 94.5 },
  { time: "00:04", latency: 2.1, throughput: 45, accuracy: 94.2 },
  { time: "00:05", latency: 2.4, throughput: 48, accuracy: 94.7 },
];

const expertActivationData = [
  { expert: "Math Reasoning", activation: 85, contribution: 25 },
  { expert: "Language Processing", activation: 92, contribution: 30 },
  { expert: "Domain Knowledge", activation: 78, contribution: 20 },
  { expert: "Logic Analysis", activation: 88, contribution: 15 },
  { expert: "Context Understanding", activation: 95, contribution: 10 },
];

export function PerformanceMetrics() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="glass-card animate-fade-in hover-glow">
          <CardHeader>
            <CardTitle>Real-time Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={realtimeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.1} />
                <XAxis dataKey="time" stroke="currentColor" fontSize={10} />
                <YAxis stroke="currentColor" fontSize={10} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="latency"
                  stroke="#ef4444"
                  strokeWidth={2}
                  name="Latency (s)"
                />
                <Line
                  type="monotone"
                  dataKey="throughput"
                  stroke="#10b981"
                  strokeWidth={2}
                  name="Throughput (tokens/s)"
                />
              </LineChart>
            </ResponsiveContainer>

            <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="text-muted-foreground">Avg Latency: 2.2s</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-muted-foreground">Avg Throughput: 46 tokens/s</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card animate-fade-in hover-glow">
          <CardHeader>
            <CardTitle>Expert Network Activation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {expertActivationData.map((expert, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{expert.expert}</span>
                    <span className="text-muted-foreground">
                      {expert.activation}% activated
                    </span>
                  </div>
                  <Progress value={expert.activation} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Contribution: {expert.contribution}%</span>
                    <span>Specialization: {expert.expert}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 bg-muted/20 rounded-lg">
              <div className="text-sm">
                <span className="font-medium">Active Experts:</span>
                <span className="ml-2">8 out of 2,816</span>
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Only relevant experts activated for optimal efficiency
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle>Accuracy Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={[
              { range: "90-95%", queries: 45 },
              { range: "95-98%", queries: 35 },
              { range: "98-100%", queries: 20 }
            ]}>
              <defs>
                <linearGradient id="accuracyGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.1} />
              <XAxis dataKey="range" stroke="currentColor" fontSize={12} />
              <YAxis stroke="currentColor" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Area
                type="monotone"
                dataKey="queries"
                stroke="#3b82f6"
                fillOpacity={1}
                fill="url(#accuracyGradient)"
                name="Query Count"
              />
            </AreaChart>
          </ResponsiveContainer>

          <div className="grid grid-cols-3 gap-4 mt-4 text-center">
            <div>
              <div className="text-lg font-bold text-green-600 dark:text-green-400">94.2%</div>
              <div className="text-xs text-muted-foreground">Average Accuracy</div>
            </div>
            <div>
              <div className="text-lg font-bold text-blue-600 dark:text-blue-400">100%</div>
              <div className="text-xs text-muted-foreground">Peak Accuracy</div>
            </div>
            <div>
              <div className="text-lg font-bold text-purple-600 dark:text-purple-400">92.1%</div>
              <div className="text-xs text-muted-foreground">Minimum Accuracy</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="glass-card animate-fade-in hover-glow">
          <CardContent className="p-4 text-center">
            <div className="text-xl font-bold text-primary">2.2s</div>
            <div className="text-xs text-muted-foreground">Avg Response Time</div>
          </CardContent>
        </Card>

        <Card className="glass-card animate-fade-in hover-glow">
          <CardContent className="p-4 text-center">
            <div className="text-xl font-bold text-primary">46</div>
            <div className="text-xs text-muted-foreground">Tokens/Second</div>
          </CardContent>
        </Card>

        <Card className="glass-card animate-fade-in hover-glow">
          <CardContent className="p-4 text-center">
            <div className="text-xl font-bold text-primary">8</div>
            <div className="text-xs text-muted-foreground">Active Experts</div>
          </CardContent>
        </Card>

        <Card className="glass-card animate-fade-in hover-glow">
          <CardContent className="p-4 text-center">
            <div className="text-xl font-bold text-primary">95%</div>
            <div className="text-xs text-muted-foreground">Efficiency Gain</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
