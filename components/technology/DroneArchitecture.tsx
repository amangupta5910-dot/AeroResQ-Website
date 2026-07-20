"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Flame,
  Cpu,
  BrainCircuit,
  Navigation,
  Cloud,
  ArrowDown,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const architecture = [
  {
    icon: Camera,
    title: "RGB Camera",
    desc: "Captures high-resolution live video.",
  },
  {
    icon: Flame,
    title: "Thermal Sensor",
    desc: "Detects heat signatures in low visibility.",
  },
  {
    icon: Cpu,
    title: "Edge Computer",
    desc: "Processes AI models locally on-board.",
  },
  {
    icon: BrainCircuit,
    title: "AI Engine",
    desc: "Runs object detection and mission analysis.",
  },
  {
    icon: Navigation,
    title: "Flight Controller",
    desc: "Controls navigation and autonomous flight.",
  },
  {
    icon: Cloud,
    title: "Cloud Dashboard",
    desc: "Streams telemetry and mission analytics.",
  },
];

export default function DroneArchitecture() {
  return (
    <section className="bg-[#050816] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          badge="Architecture"
          title="Drone System"
          highlight="Architecture"
          description="Every AeroResQ drone integrates intelligent sensors, onboard AI and cloud connectivity into a unified mission platform."
        />

        <div className="max-w-3xl mx-auto">

          {architecture.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
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
                        {item.title}
                      </h3>

                      <p className="text-gray-400 mt-2">
                        {item.desc}
                      </p>

                    </div>

                  </div>

                </GlassCard>

                {index !== architecture.length - 1 && (

                  <div className="flex justify-center py-4">

                    <ArrowDown className="text-orange-500"/>

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