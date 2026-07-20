import TechHero from "@/components/technology/TechHero";
import AIEngine from "@/components/technology/AIEngine";
import ThermalVision from "@/components/technology/ThermalVision";
import ComputerVision from "@/components/technology/ComputerVision";
import DroneArchitecture from "@/components/technology/DroneArchitecture";
import EdgeAI from "@/components/technology/EdgeAI";
import TechStack from "@/components/technology/TechStack";
import Workflow from "@/components/technology/Workflow";
import TechnologyCTA from "@/components/technology/TechnologyCTA";

export default function TechnologyPage() {
  return (
    <>
      <TechHero />
      <AIEngine />
      <ThermalVision />
      <ComputerVision />
      <DroneArchitecture />
      <EdgeAI />
      <TechStack />
      <Workflow />
      <TechnologyCTA />
    </>
  );
}