"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Globe2,
  BookOpen,
  Users,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const reasons = [
  {
    icon: BrainCircuit,
    title: "Cutting-Edge AI",
    description:
      "Work on advanced Artificial Intelligence, Computer Vision and autonomous drone technologies solving real-world problems.",
  },
  {
    icon: Globe2,
    title: "Real-World Impact",
    description:
      "Build products that improve emergency response, disaster management and public safety worldwide.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Access mentorship, workshops, technical sessions and continuous professional development.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Work with passionate engineers, researchers and innovators in a supportive environment.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "Every idea matters. Experiment, prototype and turn innovative concepts into real solutions.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "Grow with challenging projects, leadership opportunities and a fast-paced startup culture.",
  },
];

export default function WhyJoin() {
  return (
    <section className="bg-[#08111f] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          badge="Why AeroResQ"
          title="Why Join"
          highlight="Our Team"
          description="At AeroResQ, you'll work on meaningful technology, collaborate with talented people and help shape the future of AI-powered emergency response."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <GlassCard className="group h-full transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40">

                  <div className="inline-flex rounded-2xl bg-orange-500/10 p-4">

                    <Icon
                      size={34}
                      className="text-orange-500"
                    />

                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-7 text-gray-400">
                    {item.description}
                  </p>

                </GlassCard>
              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}