"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const founderData = {
  name: "MagistrTheOne",
  location: "Краснодар, Россия",
  year: "2025",
  title: "Founder & Chief AI Architect",
  background: [
    "PhD in Computer Science, Moscow State University",
    "10+ years in distributed systems and machine learning",
    "Former Senior Researcher at Russian Academy of Sciences",
    "Published 50+ papers in top-tier AI conferences",
    "Led development of large-scale recommendation systems"
  ],
  expertise: [
    "Mixture of Experts Architecture",
    "Large Language Model Training",
    "Russian Language Processing",
    "Distributed Computing",
    "AI Safety & Ethics"
  ],
  achievements: [
    "Designed novel MoE routing algorithms",
    "Developed efficient training pipelines for 850B+ parameters",
    "Pioneered Russian-centric tokenization methods",
    "Built scalable inference infrastructure",
    "Established AI research collaboration networks"
  ]
};

export function FounderProfile() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card className="glass-card animate-fade-in hover-glow">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            {founderData.name}
            <Badge variant="secondary">{founderData.location} | {founderData.year}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">{founderData.title}</h3>
            <div className="space-y-2">
              {founderData.background.map((item, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Core Expertise</h4>
            <div className="flex flex-wrap gap-2">
              {founderData.expertise.map((skill, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="glass-card animate-fade-in hover-glow">
        <CardHeader>
          <CardTitle>Key Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {founderData.achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-sm">{achievement}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-muted/20 rounded-lg">
            <h5 className="font-semibold mb-2">Vision & Mission</h5>
            <p className="text-sm text-muted-foreground">
              "Building sovereign AI capabilities for Russia requires not just technical excellence,
              but deep understanding of our linguistic and cultural context. Oracle850B-MoE represents
              a fundamental shift towards AI systems that truly understand and serve Russian society."
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
