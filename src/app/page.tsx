import { HeroSection } from "@/components/sections/hero-section";
import { TechnicalShowcase } from "@/components/sections/technical-showcase";
import { MarketAnalysis } from "@/components/sections/market-analysis";
import { DevelopmentRoadmap } from "@/components/sections/development-roadmap";
import { TeamSection } from "@/components/sections/team-section";
import { LiveDemoSection } from "@/components/sections/live-demo-section";
import { InvestmentSection } from "@/components/sections/investment-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TechnicalShowcase />
      <MarketAnalysis />
      <DevelopmentRoadmap />
      <TeamSection />
      <LiveDemoSection />
      <InvestmentSection />
    </div>
  );
}
