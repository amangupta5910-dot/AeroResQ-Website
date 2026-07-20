"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Landmark,
  GraduationCap,
  Shield,
  Rocket,
  Globe,
} from "lucide-react";

const ecosystem = [
  {
    icon: Rocket,
    title: "Startup Ecosystem",
    desc: "Designed to align with startup incubation and innovation programs.",
  },
  {
    icon: Building2,
    title: "Industry Collaboration",
    desc: "Built for collaboration with industry and technology partners.",
  },
  {
    icon: Shield,
    title: "Defence Applications",
    desc: "Designed for defence, emergency response and public safety use cases.",
  },
  {
    icon: Landmark,
    title: "Government Ready",
    desc: "Architecture suitable for future government integration.",
  },
  {
    icon: GraduationCap,
    title: "Academic Research",
    desc: "Developed with a strong focus on research and innovation.",
  },
  {
    icon: Globe,
    title: "Global Vision",
    desc: "Scalable platform designed for international deployment.",
  },
];

export default function Ecosystem() {
  return (
    <section className="bg-[#050816] py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="uppercase tracking-[5px] text-orange-500">
            Ecosystem
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Innovation <span className="text-orange-500">Ecosystem</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            AeroResQ is designed to support collaboration across
            academia, industry, startups and public sector innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ecosystem.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <Icon size={40} className="text-orange-500" />

                <h3 className="text-2xl font-bold mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-4">
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