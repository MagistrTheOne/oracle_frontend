"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const achievements = [
  {
    category: "Research Publications",
    count: 15,
    description: "Peer-reviewed papers in AI conferences and journals",
    impact: "High",
    details: ["Russian AI", "Local ML", "Regional Tech", "Applied AI"]
  },
  {
    category: "Patents Filed",
    count: 3,
    description: "Efficient algorithms and architectures",
    impact: "Medium",
    details: ["MoE Training", "Data Processing", "Model Optimization"]
  },
  {
    category: "Open Source Contributions",
    count: 45,
    description: "Libraries and tools for AI community",
    impact: "High",
    details: ["ML Utils", "Data Tools", "Model Helpers", "Training Scripts"]
  },
  {
    category: "Conference Presentations",
    count: 12,
    description: "Technical talks and workshops",
    impact: "Medium",
    details: ["Regional AI", "Local Dev", "Tech Meetups", "University Talks"]
  },
  {
    category: "Industry Awards",
    count: 2,
    description: "Recognition for technical excellence",
    impact: "Medium",
    details: ["Regional Innovation", "Local Tech Excellence"]
  },
  {
    category: "Mentorship",
    count: 8,
    description: "Junior developers and researchers guided",
    impact: "Medium",
    details: ["Interns", "Junior Devs", "Open Source Contributors"]
  }
];

const githubStats = [
  { metric: "Repositories", value: "18", change: "+5" },
  { metric: "Stars", value: "850", change: "+320" },
  { metric: "Forks", value: "120", change: "+35" },
  { metric: "Contributors", value: "12", change: "+4" }
];

const getImpactColor = (impact: string) => {
  switch (impact) {
    case "High": return "text-green-600 dark:text-green-400";
    case "Medium": return "text-blue-600 dark:text-blue-400";
    case "Low": return "text-gray-600 dark:text-gray-400";
    default: return "text-muted-foreground";
  }
};

export function TechnicalAchievements() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {achievements.map((achievement, index) => (
          <Card key={index} className="glass-card animate-fade-in hover-glow text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-primary mb-1">{achievement.count}</div>
              <div className="text-xs font-medium mb-1">{achievement.category}</div>
              <div className={`text-xs ${getImpactColor(achievement.impact)}`}>
                {achievement.impact} Impact
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="glass-card animate-fade-in hover-glow">
        <CardHeader>
          <CardTitle>GitHub Contributions & Community Impact</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            {githubStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.metric}</div>
                <div className="text-xs text-green-600 dark:text-green-400">+{stat.change}</div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="p-4 border border-border/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{achievement.category}</h4>
                  <Badge variant="outline">{achievement.count}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>
                <div className="flex flex-wrap gap-2">
                  {achievement.details.map((detail, detailIndex) => (
                    <Badge key={detailIndex} variant="secondary" className="text-xs">
                      {detail}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="glass-card animate-fade-in hover-glow">
          <CardHeader>
            <CardTitle>Research Focus Areas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { area: "Mixture of Experts", progress: 95 },
                { area: "Russian NLP", progress: 90 },
                { area: "Efficient Training", progress: 85 },
                { area: "AI Safety", progress: 80 },
                { area: "Distributed Systems", progress: 88 }
              ].map((focus, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{focus.area}</span>
                    <span className="text-sm text-muted-foreground">{focus.progress}%</span>
                  </div>
                  <Progress value={focus.progress} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card animate-fade-in hover-glow">
          <CardHeader>
            <CardTitle>Community Recognition</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center">
                  🏆
                </div>
                <div>
                  <div className="font-medium">AI Researcher of the Year 2024</div>
                  <div className="text-sm text-muted-foreground">Russian AI Association</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  🎓
                </div>
                <div>
                  <div className="font-medium">IEEE Senior Member</div>
                  <div className="text-sm text-muted-foreground">Institute of Electrical and Electronics Engineers</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  📚
                </div>
                <div>
                  <div className="font-medium">Top 1% Reviewer</div>
                  <div className="text-sm text-muted-foreground">NeurIPS, ICML, ACL conferences</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
