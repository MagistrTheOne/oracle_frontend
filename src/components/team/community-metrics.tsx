"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const communityMetrics = [
  {
    platform: "GitHub",
    followers: "2,847",
    repositories: "45",
    contributions: "1,200+",
    impact: "High",
    description: "Open source AI tools and libraries"
  },
  {
    platform: "Twitter/X",
    followers: "15,600",
    posts: "890",
    engagement: "4.2%",
    impact: "Medium",
    description: "AI research discussions and insights"
  },
  {
    platform: "LinkedIn",
    followers: "8,400",
    connections: "2,100",
    articles: "67",
    impact: "High",
    description: "Professional networking and industry insights"
  },
  {
    platform: "YouTube",
    followers: "5,200",
    videos: "34",
    views: "125K",
    impact: "Medium",
    description: "Educational content and tutorials"
  },
  {
    platform: "ResearchGate",
    followers: "3,100",
    publications: "50",
    citations: "2,800",
    impact: "High",
    description: "Academic publications and collaborations"
  },
  {
    platform: "Discord",
    followers: "1,800",
    channels: "12",
    active: "350",
    impact: "Medium",
    description: "Community discussions and Q&A"
  }
];

const collaborations = [
  {
    organization: "Moscow State University",
    type: "Research Partnership",
    focus: "Russian Language AI",
    status: "Active",
    impact: "High"
  },
  {
    organization: "Russian Academy of Sciences",
    type: "Joint Research",
    focus: "AI Safety & Ethics",
    status: "Active",
    impact: "High"
  },
  {
    organization: "Skolkovo Institute of Science and Technology",
    type: "Technology Transfer",
    focus: "Industrial Applications",
    status: "Planned",
    impact: "Medium"
  },
  {
    organization: "Yandex AI Lab",
    type: "Knowledge Exchange",
    focus: "Best Practices",
    status: "Ongoing",
    impact: "Medium"
  }
];

const getImpactColor = (impact: string) => {
  switch (impact) {
    case "High": return "text-green-600 dark:text-green-400";
    case "Medium": return "text-blue-600 dark:text-blue-400";
    case "Low": return "text-gray-600 dark:text-gray-400";
    default: return "text-muted-foreground";
  }
};

export function CommunityMetrics() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {communityMetrics.map((platform, index) => (
          <Card key={index} className="glass-card animate-fade-in hover-glow">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center justify-between">
                {platform.platform}
                <Badge className={getImpactColor(platform.impact)}>
                  {platform.impact}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold text-primary">
                    {platform.followers}
                  </div>
                  <div className="text-muted-foreground">Followers</div>
                </div>
                <div>
                  <div className="font-semibold text-primary">
                    {platform.repositories || platform.posts || platform.articles || platform.videos || platform.publications || platform.channels}
                  </div>
                  <div className="text-muted-foreground">
                    {platform.repositories ? "Repos" :
                     platform.posts ? "Posts" :
                     platform.articles ? "Articles" :
                     platform.videos ? "Videos" :
                     platform.publications ? "Papers" : "Channels"}
                  </div>
                </div>
              </div>

              {platform.engagement && (
                <div className="text-sm">
                  <div className="font-semibold text-primary">{platform.engagement}</div>
                  <div className="text-muted-foreground">Engagement Rate</div>
                </div>
              )}

              {platform.views && (
                <div className="text-sm">
                  <div className="font-semibold text-primary">{platform.views}</div>
                  <div className="text-muted-foreground">Total Views</div>
                </div>
              )}

              {platform.citations && (
                <div className="text-sm">
                  <div className="font-semibold text-primary">{platform.citations}</div>
                  <div className="text-muted-foreground">Citations</div>
                </div>
              )}

              {platform.active && (
                <div className="text-sm">
                  <div className="font-semibold text-primary">{platform.active}</div>
                  <div className="text-muted-foreground">Active Members</div>
                </div>
              )}

              <p className="text-xs text-muted-foreground">{platform.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="glass-card animate-fade-in hover-glow">
        <CardHeader>
          <CardTitle>Academic & Industry Collaborations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {collaborations.map((collaboration, index) => (
              <div key={index} className="p-4 border border-border/50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">{collaboration.organization}</h4>
                  <Badge
                    variant={collaboration.status === "Active" ? "default" : "outline"}
                  >
                    {collaboration.status}
                  </Badge>
                </div>

                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Type:</span>
                    <span className="ml-2 font-medium">{collaboration.type}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Focus:</span>
                    <span className="ml-2 text-muted-foreground">{collaboration.focus}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Impact:</span>
                    <span className={`ml-2 ${getImpactColor(collaboration.impact)}`}>
                      {collaboration.impact}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-muted/20 rounded-lg">
            <h5 className="font-semibold mb-2">Community Impact Summary</h5>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-semibold text-primary">35,000+</div>
                <div className="text-muted-foreground">Total Reach</div>
              </div>
              <div>
                <div className="font-semibold text-primary">4</div>
                <div className="text-muted-foreground">Active Collaborations</div>
              </div>
              <div>
                <div className="font-semibold text-primary">2,800+</div>
                <div className="text-muted-foreground">Academic Citations</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="glass-card animate-fade-in hover-glow">
        <CardHeader>
          <CardTitle>Speaking Engagements & Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { event: "AI Russia Summit 2024", role: "Keynote Speaker", topic: "Sovereign AI Development" },
              { event: "NeurIPS Workshop", role: "Panelist", topic: "Efficient Large Language Models" },
              { event: "Moscow AI Conference", role: "Workshop Leader", topic: "Russian NLP Challenges" },
              { event: "TechCrunch Disrupt", role: "Speaker", topic: "MoE Architecture Breakthrough" },
              { event: "Data Science Russia", role: "Panel Moderator", topic: "AI Ethics in Russia" },
              { event: "Skolkovo AI Forum", role: "Technical Presenter", topic: "Scaling AI Infrastructure" }
            ].map((engagement, index) => (
              <div key={index} className="p-3 border border-border/50 rounded-lg">
                <div className="font-medium text-sm mb-1">{engagement.event}</div>
                <div className="text-xs text-primary mb-1">{engagement.role}</div>
                <div className="text-xs text-muted-foreground">{engagement.topic}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
