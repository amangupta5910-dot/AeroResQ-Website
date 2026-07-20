import CareersHero from "@/components/careers/CareersHero";
import WhyJoin from "@/components/careers/WhyJoin";
import LifeAtAeroResQ from "@/components/careers/LifeAtAeroResQ";
import Benefits from "@/components/careers/Benefits";
import OpenPositions from "@/components/careers/OpenPositions";
import HiringProcess from "@/components/careers/HiringProcess";
import InternshipProgram from "@/components/careers/InternshipProgram";
import Testimonials from "@/components/careers/Testimonials";
import CareersCTA from "@/components/careers/CareersCTA";

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <WhyJoin />
      <LifeAtAeroResQ />
      <Benefits />
      <OpenPositions />
      <HiringProcess />
      <InternshipProgram />
      <Testimonials />
      <CareersCTA />
    </>
  );
}