import PageShell from "@/components/layout/PageShell";
import AboutHero from "@/components/about/AboutHero";
import ProjectOverviewSection from "@/components/about/ProjectOverviewSection";
import ArchitectureSection from "@/components/about/ArchitectureSection";
import EngineTechnologiesSection from "@/components/about/EngineTechnologiesSection";
import PerformanceSection from "@/components/about/PerformanceSection";
import TechStackSection from "@/components/about/TechStackSection";
import TimelineSection from "@/components/about/TimelineSection";
import RoadmapSection from "@/components/about/RoadmapSection";
import DeveloperSection from "@/components/about/DeveloperSection";
import ClosingCtaSection from "@/components/about/ClosingCtaSection";

export default function AboutPage() {
  return (
    <PageShell wide>
      <AboutHero />
      <ProjectOverviewSection />
      <ArchitectureSection />
      <EngineTechnologiesSection />
      <PerformanceSection />
      <TechStackSection />
      <TimelineSection />
      <RoadmapSection />
      <DeveloperSection />
      <ClosingCtaSection />
    </PageShell>
  );
}
