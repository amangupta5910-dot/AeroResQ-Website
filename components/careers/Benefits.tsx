"use client";

import { motion } from "framer-motion";
import {
  Wallet,
  HeartPulse,
  Home,
  GraduationCap,
  Plane,
  TrendingUp,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const benefits = [
  {
    icon: Wallet,
    title: "Competitive Compensation",
    description:
      "Performance-driven salary packages with rewards that recognize your contributions.",
  },
  {
    icon: HeartPulse,
    title: "Health & Wellness",
    description:
      "Supportive work environment with wellness initiatives and healthcare benefits.",
  },
  {
    icon: Home,
    title: "Hybrid Work",
    description:
      "Flexible work options with a balance of remote and in-office collaboration.",
  },
  {
    icon: GraduationCap,
    title: "Learning Budget",
    description:
      "Access courses, certifications, workshops and conferences to grow your skills.",
  },
  {
    icon: Plane,
    title: "Paid Time Off",
    description:
      "Recharge with paid leave, holidays and flexible vacation policies.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "Work on impactful projects with mentorship and leadership opportunities.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-[#08111f] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          badge="Benefits"
          title="Benefits &"
          highlight="Perks"
          description="We invest in our people by providing a healthy, flexible and growth-oriented workplace."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
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

                    {benefit.title}

                  </h3>

                  <p className="mt-5 leading-7 text-gray-400">

                    {benefit.description}

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