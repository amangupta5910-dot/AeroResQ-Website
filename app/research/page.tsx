import ResearchHero from "@/components/research/ResearchHero";
import ResearchAreas from "@/components/research/ResearchAreas";
import AIModels from "@/components/research/AIModels";
import Publications from "@/components/research/Publications";
import Roadmap from "@/components/research/Roadmap";
import Collaborations from "@/components/research/Collaborations";
import ResearchCTA from "@/components/research/ResearchCTA";

export default function ResearchPage() {
  return (
    <>
      <ResearchHero />
      <ResearchAreas />
      <AIModels />
      <Publications />
      <Roadmap />
      <Collaborations />
      <ResearchCTA />
    </>
  );
}