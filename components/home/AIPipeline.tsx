"use client";

import { motion } from "framer-motion";
import {
  Camera,
  ScanSearch,
  BrainCircuit,
  Cpu,
  ShieldCheck,
  Ambulance,
} from "lucide-react";

const pipeline = [
  {
    icon: Camera,
    title: "Drone Camera",
    desc: "Captures HD aerial footage in real time.",
  },
  {
    icon: ScanSearch,
    title: "Thermal Vision",
    desc: "Detects heat signatures day and night.",
  },
  {
    icon: BrainCircuit,
    title: "AI Detection",
    desc: "Identifies people, hazards and safe routes.",
  },
  {
    icon: Cpu,
    title: "Mission Analysis",
    desc: "Processes data with onboard Edge AI.",
  },
  {
    icon: ShieldCheck,
    title: "Command Center",
    desc: "Shares intelligence with operators.",
  },
  {
    icon: Ambulance,
    title: "Rescue Team",
    desc: "Rapid deployment using AI insights.",
  },
];

export default function AIPipeline() {
  return (
    <section className="bg-[#050816] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <span className="uppercase tracking-[5px] text-orange-500">
            AI Pipeline
          </span>

          <h2 className="text-5xl font-bold mt-4">
            How AeroResQ AI Works
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto">
            Every rescue mission follows an intelligent AI pipeline
            from live drone capture to rapid emergency response.
          </p>

        </div>

        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-6">

          {pipeline.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative rounded-3xl border border-white/10 bg-white/5 p-6 text-center hover:border-orange-500 transition"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-orange-500/20 flex items-center justify-center">
                  <Icon className="text-orange-500" size={30} />
                </div>

                <h3 className="mt-5 font-bold">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm mt-3">
                  {item.desc}
                </p>

                {index !== pipeline.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 text-orange-500 text-2xl">
                    →
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