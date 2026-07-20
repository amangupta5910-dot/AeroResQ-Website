"use client";

import { motion } from "framer-motion";
import {
  Camera,
  ScanSearch,
  Cpu,
  BrainCircuit,
  Radio,
  ArrowDown,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const pipeline = [
  {
    icon: Camera,
    title: "Drone Camera",
    desc: "Captures high-resolution RGB and thermal imagery in real time.",
  },
  {
    icon: ScanSearch,
    title: "Computer Vision",
    desc: "Detects people, vehicles, smoke and hazardous environments.",
  },
  {
    icon: Cpu,
    title: "YOLO AI Model",
    desc: "Processes frames using deep learning object detection.",
  },
  {
    icon: BrainCircuit,
    title: "AI Decision Engine",
    desc: "Prioritizes targets and generates mission insights instantly.",
  },
  {
    icon: Radio,
    title: "Mission Command",
    desc: "Sends live alerts and recommendations to operators.",
  },
];

export default function AIEngine() {
  return (
    <section className="bg-[#08111f] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          badge="Artificial Intelligence"
          title="AI Processing"
          highlight="Pipeline"
          description="Every mission is powered by an intelligent AI pipeline that transforms raw sensor data into actionable rescue decisions."
        />

        <div className="flex flex-col items-center">

          {pipeline.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                }}
                className="w-full max-w-3xl"
              >
                <GlassCard>

                  <div className="flex items-center gap-6">

                    <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center">

                      <Icon
                        className="text-orange-500"
                        size={34}
                      />

                    </div>

                    <div>

                      <h3 className="text-2xl font-bold">

                        {step.title}

                      </h3>

                      <p className="text-gray-400 mt-2">

                        {step.desc}

                      </p>

                    </div>

                  </div>

                </GlassCard>

                {index !== pipeline.length - 1 && (
                  <div className="flex justify-center py-4">
                    <ArrowDown className="text-orange-500" />
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