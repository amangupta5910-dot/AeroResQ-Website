"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Eye,
  Flame,
  Navigation,
  BarChart3,
  Radar,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const researchAreas = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "Developing intelligent decision-making systems for autonomous emergency response.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description:
      "Advanced object detection, victim identification and scene understanding.",
  },
  {
    icon: Flame,
    title: "Thermal Imaging",
    description:
      "Heat signature analysis for search & rescue, wildfire detection and night operations.",
  },
  {
    icon: Navigation,
    title: "Autonomous Navigation",
    description:
      "Safe autonomous flight using GPS, SLAM and obstacle avoidance algorithms.",
  },
  {
    icon: BarChart3,
    title: "Mission Analytics",
    description:
      "Transform mission data into actionable intelligence using AI-powered analytics.",
  },
  {
    icon: Radar,
    title: "Disaster Prediction",
    description:
      "Predictive AI models for flood, wildfire and disaster risk assessment.",
  },
];

export default function ResearchAreas() {
  return (
    <section
      id="research-areas"
      className="bg-[#08111f] py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          badge="Research Areas"
          title="Innovating Across"
          highlight="Critical Technologies"
          description="Our multidisciplinary research combines AI, robotics and emergency response to build next-generation rescue systems."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {researchAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <GlassCard className="h-full hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-2">

                  <div className="mb-6 inline-flex rounded-2xl bg-orange-500/10 p-4">

                    <Icon
                      size={34}
                      className="text-orange-500"
                    />

                  </div>

                  <h3 className="text-2xl font-bold">
                    {area.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {area.description}
                  </p>

                </GlassCard>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}