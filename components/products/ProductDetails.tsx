"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Flame,
  Satellite,
  ShieldCheck,
  Cloud,
  Navigation,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Powered",
    desc: "Advanced computer vision for real-time detection and intelligent mission decisions.",
  },
  {
    icon: Flame,
    title: "Thermal Vision",
    desc: "Detect heat signatures during night operations, smoke and low-visibility missions.",
  },
  {
    icon: Satellite,
    title: "Long Range Communication",
    desc: "Reliable telemetry and data transmission across large operational areas.",
  },
  {
    icon: Navigation,
    title: "Autonomous Navigation",
    desc: "GPS-assisted autonomous flight with obstacle avoidance and route optimization.",
  },
  {
    icon: Cloud,
    title: "Cloud Connected",
    desc: "Live mission dashboard, fleet monitoring and cloud analytics.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    desc: "Secure infrastructure with encrypted communication and role-based access.",
  },
];

export default function ProductDetails() {
  return (
    <section className="bg-[#08111f] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          badge="Why AeroResQ"
          title="Built for"
          highlight="Mission Critical Operations"
          description="Every AeroResQ product is engineered to deliver speed, intelligence and reliability in high-risk environments."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative flex items-center justify-center h-[500px]">

              <div className="absolute w-80 h-80 rounded-full bg-orange-500/10 blur-3xl"></div>

              <div className="relative w-72 h-72 rounded-full border border-orange-500/30 flex items-center justify-center">

                <BrainCircuit
                  size={110}
                  className="text-orange-500"
                />

                <div className="absolute inset-0 rounded-full border border-orange-500/20 animate-ping"></div>

              </div>

            </div>
          </motion.div>

          {/* Right */}

          <div className="grid sm:grid-cols-2 gap-6">

            {features.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >

                  <GlassCard>

                    <Icon
                      size={36}
                      className="text-orange-500"
                    />

                    <h3 className="text-xl font-bold mt-5">

                      {item.title}

                    </h3>

                    <p className="text-gray-400 mt-3 leading-7">

                      {item.desc}

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