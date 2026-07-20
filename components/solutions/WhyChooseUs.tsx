"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Flame,
  ShieldCheck,
  Cloud,
  Radar,
  Cpu,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Decision Engine",
    description:
      "Intelligent algorithms analyze emergencies and recommend the fastest response.",
  },
  {
    icon: Flame,
    title: "Thermal Vision",
    description:
      "Detect people, hotspots and hazards even in darkness, smoke or fog.",
  },
  {
    icon: Radar,
    title: "Autonomous Drone Fleet",
    description:
      "Coordinate multiple drones simultaneously with intelligent flight planning.",
  },
  {
    icon: Cloud,
    title: "Cloud Mission Control",
    description:
      "Monitor every mission in real time from a centralized dashboard.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Encrypted communication and secure infrastructure for critical operations.",
  },
  {
    icon: Cpu,
    title: "Real-Time Analytics",
    description:
      "Live AI insights, mission reports and operational intelligence.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#050816] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          badge="Why AeroResQ"
          title="Why Organizations"
          highlight="Choose AeroResQ"
          description="Our platform combines artificial intelligence, autonomous drones and mission control into one intelligent emergency response ecosystem."
        />

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-[90px]" />

              <div className="relative w-72 h-72 rounded-full border border-orange-500/30 flex items-center justify-center">

                <BrainCircuit
                  size={120}
                  className="text-orange-500"
                />

                <div className="absolute inset-6 rounded-full border border-orange-500/20 animate-pulse" />

                <div className="absolute inset-14 rounded-full border border-orange-500/20" />

              </div>

            </div>

          </motion.div>

          {/* Right Side */}

          <div className="grid sm:grid-cols-2 gap-6">

            {features.map((feature, index) => {

              const Icon = feature.icon;

              return (

                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >

                  <GlassCard className="h-full">

                    <Icon
                      size={34}
                      className="text-orange-500"
                    />

                    <h3 className="mt-5 text-xl font-bold">

                      {feature.title}

                    </h3>

                    <p className="mt-3 text-gray-400 leading-7">

                      {feature.description}

                    </p>

                  </GlassCard>

                </motion.div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}