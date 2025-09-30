"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const progressData = [
  {
    category: "Architecture Development",
    progress: 100,
    completed: "2,816 expert networks implemented",
    next: "Advanced routing algorithms"
  },
  {
    category: "Training Infrastructure",
    progress: 95,
    completed: "15+ PB training data processed",
    next: "Fine-tuning optimization"
  },
  {
    category: "Russian Language Processing",
    progress: 90,
    completed: "Native Cyrillic tokenization",
    next: "Cultural context understanding"
  },
  {
    category: "Reasoning Capabilities",
    progress: 85,
    completed: "Multi-step reasoning framework",
    next: "Complex problem solving"
  },
  {
    category: "Performance Optimization",
    progress: 80,
    completed: "95% efficiency achieved",
    next: "Real-time inference scaling"
  },
  {
    category: "Testing & Validation",
    progress: 75,
    completed: "Core functionality validated",
    next: "Production stress testing"
  }
];

export function ProgressBars() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {progressData.map((item, index) => (
        <Card key={index} className="glass-card animate-fade-in hover-glow">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">{item.category}</CardTitle>
              <span className="text-sm font-semibold text-primary">{item.progress}%</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <Progress value={item.progress} className="h-2" />

            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-green-600 dark:text-green-400">✓ Completed:</span>
                  <span className="text-muted-foreground ml-1">{item.completed}</span>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-blue-600 dark:text-blue-400">→ Next:</span>
                  <span className="text-muted-foreground ml-1">{item.next}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <Card className="glass-card animate-fade-in hover-glow md:col-span-2">
        <CardHeader>
          <CardTitle>Overall Project Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">85%</div>
              <div className="text-sm text-muted-foreground">Technical Completion</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">Q2 2025</div>
              <div className="text-sm text-muted-foreground">Production Ready</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">$2.1M</div>
              <div className="text-sm text-muted-foreground">Development Investment</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">12</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
