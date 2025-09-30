"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const marketData = [
  { year: "2020", size: 0.8, government: 0.3, private: 0.5 },
  { year: "2021", size: 1.2, government: 0.5, private: 0.7 },
  { year: "2022", size: 1.8, government: 0.8, private: 1.0 },
  { year: "2023", size: 2.1, government: 1.0, private: 1.1 },
  { year: "2024", size: 2.1, government: 1.2, private: 0.9 },
  { year: "2025", size: 3.8, government: 2.1, private: 1.7 },
  { year: "2026", size: 5.2, government: 2.9, private: 2.3 },
  { year: "2027", size: 7.1, government: 4.0, private: 3.1 },
  { year: "2028", size: 9.8, government: 5.5, private: 4.3 },
];

export function MarketChart() {
  return (
    <div className="w-full">
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Russian AI Market Growth ($B)</h4>
        <p className="text-sm text-muted-foreground">
          Projected growth driven by government investment and private sector adoption
        </p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={marketData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.1} />
          <XAxis
            dataKey="year"
            stroke="currentColor"
            fontSize={12}
            tick={{ opacity: 0.7 }}
          />
          <YAxis
            stroke="currentColor"
            fontSize={12}
            tick={{ opacity: 0.7 }}
            tickFormatter={(value) => `$${value}B`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
            formatter={(value: number) => [`$${value}B`, ""]}
          />
          <Bar dataKey="government" stackId="a" fill="#3b82f6" name="Government" />
          <Bar dataKey="private" stackId="a" fill="#10b981" name="Private Sector" />
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full" />
          <span className="text-muted-foreground">Government Investment</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full" />
          <span className="text-muted-foreground">Private Sector</span>
        </div>
      </div>

      <div className="mt-6 p-4 bg-muted/20 rounded-lg">
        <h5 className="font-semibold mb-2">Key Insights</h5>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• 45% CAGR projected through 2028</li>
          <li>• Government funding represents 55% of total investment</li>
          <li>• Sovereign AI development is a national priority</li>
          <li>• Private sector adoption accelerating rapidly</li>
        </ul>
      </div>
    </div>
  );
}
