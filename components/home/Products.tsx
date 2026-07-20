"use client";

import { motion } from "framer-motion";
import { Drone, Shield, RadioTower } from "lucide-react";

const products = [
  {
    icon: Drone,
    title: "AeroResQ One",
    description:
      "AI-powered autonomous drone for disaster response and emergency rescue missions.",
  },
  {
    icon: Shield,
    title: "Defence Edition",
    description:
      "Border surveillance, strategic monitoring and mission-critical defence operations.",
  },
  {
    icon: RadioTower,
    title: "Mission Command",
    description:
      "Real-time monitoring dashboard with fleet management and live telemetry.",
  },
];

export default function Products() {
  return (
    <section className="bg-[#050816] py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[5px] text-orange-500">
            Products
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Our <span className="text-orange-500">Solutions</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            AeroResQ offers AI-powered autonomous drone solutions
            for defence, disaster management and emergency response.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {products.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center">
                  <Icon className="text-orange-500" size={34} />
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-5 leading-7">
                  {item.description}
                </p>

                <button className="mt-8 text-orange-500 hover:text-orange-400">
                  Learn More →
                </button>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}