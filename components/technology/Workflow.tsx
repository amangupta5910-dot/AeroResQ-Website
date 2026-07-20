"use client";

import {
  Camera,
  BrainCircuit,
  Radar,
  Navigation,
  ShieldCheck,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const flow = [
  {
    icon: Camera,
    title: "Capture",
  },
  {
    icon: BrainCircuit,
    title: "AI Analysis",
  },
  {
    icon: Radar,
    title: "Threat Detection",
  },
  {
    icon: Navigation,
    title: "Mission Planning",
  },
  {
    icon: ShieldCheck,
    title: "Rescue Execution",
  },
];

export default function Workflow() {
  return (
    <section className="bg-[#08111f] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          badge="Workflow"
          title="End-to-End Mission"
          highlight="Workflow"
          description="From sensing to rescue, every mission follows an intelligent automated workflow."
        />

        <div className="grid md:grid-cols-5 gap-6">

          {flow.map((step) => {

            const Icon = step.icon;

            return (

              <GlassCard
                key={step.title}
                className="text-center"
              >

                <Icon
                  className="mx-auto text-orange-500"
                  size={42}
                />

                <h3 className="mt-5 text-xl font-bold">
                  {step.title}
                </h3>

              </GlassCard>

            );

          })}

        </div>

      </div>

    </section>
  );
}