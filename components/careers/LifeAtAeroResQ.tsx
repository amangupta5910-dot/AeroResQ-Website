"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Users,
  Lightbulb,
  Rocket,
  Globe2,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const highlights = [
  {
    icon: Rocket,
    title: "Mission Driven",
    description:
      "Every project contributes to building safer communities through AI-powered emergency response.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Work alongside engineers, researchers and designers to solve meaningful challenges.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Culture",
    description:
      "Experiment with bold ideas, prototype quickly and turn concepts into impactful products.",
  },
  {
    icon: Globe2,
    title: "Global Vision",
    description:
      "Develop technologies designed to improve disaster response across the world.",
  },
];

export default function LifeAtAeroResQ() {
  return (
    <section className="bg-[#050816] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          badge="Life at AeroResQ"
          title="Where Innovation"
          highlight="Meets Purpose"
          description="At AeroResQ, we believe the best ideas come from collaboration, curiosity and a shared mission to make the world safer."
        />

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">

          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6">

              <Image
                src="/images/products/command-center.png"
                alt="Life at AeroResQ"
                width={900}
                height={700}
                className="w-full object-contain"
              />

            </div>
          </motion.div>

          {/* Right Content */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="grid gap-6">

              {highlights.map((item, index) => {

                const Icon = item.icon;

                return (

                  <GlassCard
                    key={item.title}
                    className="flex items-start gap-5"
                  >

                    <div className="rounded-2xl bg-orange-500/10 p-4">

                      <Icon
                        size={30}
                        className="text-orange-500"
                      />

                    </div>

                    <div>

                      <h3 className="text-2xl font-bold text-white">

                        {item.title}

                      </h3>

                      <p className="mt-3 leading-7 text-gray-400">

                        {item.description}

                      </p>

                    </div>

                  </GlassCard>

                );

              })}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}