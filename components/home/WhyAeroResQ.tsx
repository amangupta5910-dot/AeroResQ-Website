"use client";

import { Shield, Flame, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Shield,
    title: "Defence Ready",
    description:
      "Built for defence surveillance, border monitoring and mission-critical operations with secure autonomous navigation.",
  },
  {
    icon: Flame,
    title: "Disaster Response",
    description:
      "Rapid thermal search and rescue for floods, earthquakes, forest fires and emergency situations.",
  },
  {
    icon: Cpu,
    title: "AI Powered",
    description:
      "Real-time object detection, thermal imaging and autonomous decision making using Edge AI.",
  },
];

export default function WhyAeroResQ() {
  return (
    <section className="relative bg-[#050816] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
            WHY AERORESQ
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            Building the Future of
            <span className="text-orange-500"> Intelligent Rescue</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-lg leading-8">
            AeroResQ combines Artificial Intelligence, Thermal Vision,
            Autonomous Flight and Mission Control into one intelligent
            platform for defence and disaster response.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40 hover:bg-white/10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/20 text-orange-400">
                  <Icon size={34} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}