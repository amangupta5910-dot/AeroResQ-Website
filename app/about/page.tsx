import AboutHero from "@/components/about/AboutHero";
import Story from "@/components/about/Story";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import Journey from "@/components/about/Journey";
import FoundingVision from "@/components/about/FoundingVision";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Story />
      <MissionVision />
      <CoreValues />
      <Journey />
      <FoundingVision />
      <AboutCTA />
    </>
  );
}