"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Search,
  Cpu,
  Plane,
  FlaskConical,
  Rocket,
} from "lucide-react";

const timeline = [
  {
    icon: Lightbulb,
    title: "Idea Conceived",
    year: "2026",
    desc: "The vision of building AI-powered autonomous rescue drones was established.",
  },
  {
    icon: Search,
    title: "Research & Planning",
    year: "2026",
    desc: "Studied disaster response challenges, AI models and drone technologies.",
  },
  {
    icon: Cpu,
    title: "AI Prototype",
    year: "2026",
    desc: "Developed initial computer vision and thermal detection algorithms.",
  },
  {
    icon: Plane,
    title: "Drone Development",
    year: "Future",
    desc: "Integrating AI with autonomous drone hardware and mission systems.",
  },
  {
    icon: FlaskConical,
    title: "Testing & Validation",
    year: "Future",
    desc: "Field testing in simulated disaster and emergency response scenarios.",
  },
  {
    icon: Rocket,
    title: "Commercial Launch",
    year: "Vision",
    desc: "Scaling AeroResQ for defence, disaster management and smart city applications.",
  },
];

export default function Journey() {
  return (
    <section className="bg-[#050816] py-28">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-24">

          <span className="uppercase tracking-[5px] text-orange-500">
            Journey
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Our Innovation
            <span className="text-orange-500"> Roadmap</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Every breakthrough begins with a vision. Here's how AeroResQ
            is evolving from an innovative concept into a scalable AI platform.
          </p>

        </div>

        <div className="relative">

          {/* Center Line */}

          <div className="absolute left-1/2 top-0 h-full w-1 bg-orange-500/20 -translate-x-1/2 hidden md:block" />

          {timeline.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >

                <div className="md:w-1/2">

                  <div className="rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur-xl">

                    <div className="flex items-center gap-4">

                      <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center">

                        <Icon className="text-orange-500" size={30} />

                      </div>

                      <div>

                        <h3 className="text-2xl font-bold">

                          {item.title}

                        </h3>

                        <p className="text-orange-500">

                          {item.year}

                        </p>

                      </div>

                    </div>

                    <p className="text-gray-400 mt-6 leading-7">

                      {item.desc}

                    </p>

                  </div>

                </div>

                {/* Timeline Dot */}

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-orange-500 border-4 border-[#050816]" />

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}