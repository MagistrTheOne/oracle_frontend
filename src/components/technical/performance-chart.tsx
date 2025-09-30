"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const performanceData = [
  { model: "Oracle850B-MoE", accuracy: 94.2, efficiency: 95, speed: 45 },
  { model: "GPT-4", accuracy: 86.4, efficiency: 100, speed: 28 },
  { model: "Claude 3", accuracy: 88.1, efficiency: 92, speed: 32 },
  { model: "Gemini Ultra", accuracy: 90.0, efficiency: 87, speed: 38 },
  { model: "Llama 2 70B", accuracy: 82.0, efficiency: 75, speed: 55 },
];

export function PerformanceChart() {
  return (
    <div className="w-full">
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Accuracy vs Efficiency Trade-off</h4>
        <p className="text-sm text-muted-foreground">
          Oracle850B-MoE achieves superior accuracy with significantly higher computational efficiency
        </p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <defs>
            <linearGradient id="accuracyGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
            </linearGradient>
            <linearGradient id="efficiencyGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.1} />
          <XAxis
            dataKey="model"
            stroke="currentColor"
            fontSize={12}
            tick={{ opacity: 0.7 }}
          />
          <YAxis
            stroke="currentColor"
            fontSize={12}
            tick={{ opacity: 0.7 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
          />
          <Area
            type="monotone"
            dataKey="accuracy"
            stroke="#3b82f6"
            fillOpacity={1}
            fill="url(#accuracyGradient)"
            name="Accuracy (%)"
          />
          <Area
            type="monotone"
            dataKey="efficiency"
            stroke="#10b981"
            fillOpacity={1}
            fill="url(#efficiencyGradient)"
            name="Efficiency (%)"
          />
        </AreaChart>
      </ResponsiveContainer>

      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full" />
          <span className="text-muted-foreground">Accuracy Score</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full" />
          <span className="text-muted-foreground">Computational Efficiency</span>
        </div>
      </div>
    </div>
  );
}
