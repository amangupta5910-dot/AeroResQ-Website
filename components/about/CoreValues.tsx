"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Shield,
  HeartHandshake,
  Leaf,
  Rocket,
  Award,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We continuously explore AI, robotics and autonomous technologies to solve real-world challenges.",
  },
  {
    icon: Shield,
    title: "Reliability",
    desc: "Building dependable systems that emergency responders can trust in critical situations.",
  },
  {
    icon: HeartHandshake,
    title: "Human Impact",
    desc: "Every innovation is focused on protecting lives and strengthening public safety.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    desc: "Designing energy-efficient and environmentally responsible technologies.",
  },
  {
    icon: Rocket,
    title: "Excellence",
    desc: "Committed to engineering world-class products with exceptional quality.",
  },
  {
    icon: Award,
    title: "Integrity",
    desc: "Operating with transparency, ethics and responsibility in every decision.",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-[#08111f] py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <span className="uppercase tracking-[5px] text-orange-500">
            Core Values
          </span>

          <h2 className="text-5xl font-bold mt-5">
            The Principles That
            <span className="text-orange-500"> Drive Us</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Our values guide every innovation, partnership and decision we make
            while building intelligent technologies for a safer future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition">

                  <Icon
                    size={34}
                    className="text-orange-500"
                  />

                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  {item.desc}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}