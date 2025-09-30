"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const timelineData = [
  {
    phase: "Phase 1: Foundation",
    status: "completed",
    date: "Q1-Q2 2025",
    milestones: [
      "Architecture design completion",
      "Core MoE framework implementation",
      "Basic expert network development",
      "Initial training infrastructure setup"
    ]
  },
  {
    phase: "Phase 2: Core Development",
    status: "completed",
    date: "Q3 2025",
    milestones: [
      "Expert network scaling to 16 networks",
      "Russian language tokenization optimization",
      "Basic reasoning capabilities implementation",
      "Initial performance benchmarking"
    ]
  },
  {
    phase: "Phase 3: Advanced Features",
    status: "in-progress",
    date: "Q4 2025 - Q1 2026",
    milestones: [
      "Advanced reasoning algorithms",
      "Multi-domain expert specialization",
      "Real-time inference optimization",
      "Comprehensive testing suite"
    ]
  },
  {
    phase: "Phase 4: Production Ready",
    status: "planned",
    date: "Q2 2026",
    milestones: [
      "Full-scale model validation",
      "Production deployment preparation",
      "API and SDK development",
      "Documentation and training materials"
    ]
  },
  {
    phase: "Phase 5: Market Launch",
    status: "planned",
    date: "Q3 2026",
    milestones: [
      "Beta testing with select partners",
      "Marketing and partnership development",
      "Full commercial launch",
      "Ongoing model improvements"
    ]
  },
  {
    phase: "Phase 6: Expansion & Growth",
    status: "planned",
    date: "Q4 2026 - 2027",
    milestones: [
      "International market expansion",
      "Advanced feature development",
      "Partnership ecosystem growth",
      "Revenue optimization and scaling"
    ]
  }
];

export function RoadmapTimeline() {
  return (
    <Card className="glass-card animate-fade-in hover-glow">
      <CardContent className="p-8">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-8">
            {timelineData.map((phase, index) => (
              <div key={index} className="relative flex items-start space-x-6">
                {/* Timeline dot */}
                <div className={`relative z-10 w-4 h-4 rounded-full border-4 border-background ${
                  phase.status === "completed"
                    ? "bg-green-500"
                    : phase.status === "in-progress"
                    ? "bg-blue-500 animate-pulse"
                    : "bg-muted"
                }`} />

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">{phase.phase}</h3>
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant={
                          phase.status === "completed"
                            ? "default"
                            : phase.status === "in-progress"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {phase.status === "completed" ? "Complete" :
                         phase.status === "in-progress" ? "In Progress" : "Planned"}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{phase.date}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {phase.milestones.map((milestone, milestoneIndex) => (
                      <div key={milestoneIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{milestone}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 p-4 bg-muted/20 rounded-lg">
          <h5 className="font-semibold mb-2">Current Status: October 2025 - Advanced Features Implementation</h5>
          <p className="text-sm text-muted-foreground">
            Oracle5TB-MoE is in October 2025 with advanced features implementation in progress.
            Focus on real-time inference optimization, multi-domain expert specialization, and comprehensive testing suite development.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
