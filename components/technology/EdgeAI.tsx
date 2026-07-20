"use client";

import { Cpu, Zap, WifiOff, BatteryCharging } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const features = [
  {
    icon: Zap,
    title: "< 50ms Latency",
    desc: "Real-time AI inference for critical missions.",
  },
  {
    icon: Cpu,
    title: "On-Device AI",
    desc: "Inference runs directly on the drone.",
  },
  {
    icon: WifiOff,
    title: "Offline Operation",
    desc: "Mission continues even without internet.",
  },
  {
    icon: BatteryCharging,
    title: "Power Optimized",
    desc: "Efficient AI for longer flight time.",
  },
];

export default function EdgeAI() {
  return (
    <section className="bg-[#08111f] py-28">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          badge="Edge AI"
          title="Artificial Intelligence at"
          highlight="the Edge"
          description="AI processing happens directly onboard the drone for ultra-fast response and autonomous decision making."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <GlassCard key={index}>
                <Icon className="text-orange-500" size={38} />

                <h3 className="text-2xl font-bold mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-4">
                  {item.desc}
                </p>
              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}