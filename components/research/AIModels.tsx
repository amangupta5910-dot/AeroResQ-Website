"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Eye,
  ScanSearch,
  BrainCircuit,
  Route,
  ShieldCheck,
  ArrowDown,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const pipeline = [
  {
    icon: Camera,
    title: "Drone Data Capture",
    description:
      "High-resolution RGB and thermal cameras capture live aerial data.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description:
      "AI detects people, vehicles, buildings and hazardous regions.",
  },
  {
    icon: ScanSearch,
    title: "Threat Analysis",
    description:
      "The system identifies risk zones and prioritizes emergency targets.",
  },
  {
    icon: BrainCircuit,
    title: "AI Decision Engine",
    description:
      "Deep learning models generate optimal rescue strategies in real time.",
  },
  {
    icon: Route,
    title: "Mission Planning",
    description:
      "Autonomous flight paths are optimized for speed and safety.",
  },
  {
    icon: ShieldCheck,
    title: "Rescue Recommendation",
    description:
      "Mission insights are delivered to command centers and rescue teams.",
  },
];

export default function AIModels() {
  return (
    <section className="bg-[#050816] py-28">

      <div className="max-w-6xl mx-auto px-6">

        <SectionHeading
          badge="AI Pipeline"
          title="From Data"
          highlight="To Intelligent Decisions"
          description="Our AI pipeline transforms raw drone imagery into actionable rescue intelligence within seconds."
        />

        <div className="mt-16 space-y-8">

          {pipeline.map((step, index) => {

            const Icon = step.icon;

            return (

              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >

                <GlassCard className="flex flex-col md:flex-row items-center gap-8 p-8">

                  {/* Step */}

                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-orange-500/10">

                    <Icon
                      size={38}
                      className="text-orange-500"
                    />

                  </div>

                  {/* Content */}

                  <div className="flex-1">

                    <span className="text-sm uppercase tracking-[4px] text-orange-500">

                      Step {index + 1}

                    </span>

                    <h3 className="mt-2 text-2xl font-bold">

                      {step.title}

                    </h3>

                    <p className="mt-3 leading-7 text-gray-400">

                      {step.description}

                    </p>

                  </div>

                </GlassCard>

                {index !== pipeline.length - 1 && (

                  <div className="flex justify-center py-4">

                    <ArrowDown
                      size={30}
                      className="text-orange-500 animate-bounce"
                    />

                  </div>

                )}

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}