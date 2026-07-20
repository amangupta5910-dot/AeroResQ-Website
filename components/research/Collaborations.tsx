"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Landmark,
  Shield,
  HeartHandshake,
  Building2,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";

const partners = [
  {
    icon: GraduationCap,
    title: "Universities & Research Institutes",
    description:
      "Collaborate on AI, robotics, computer vision and autonomous systems research.",
    focus: "Academic Research",
  },
  {
    icon: Landmark,
    title: "Government Agencies",
    description:
      "Develop disaster response, smart city and emergency management solutions.",
    focus: "Public Safety",
  },
  {
    icon: Shield,
    title: "Defence Organizations",
    description:
      "Advance autonomous surveillance, reconnaissance and mission intelligence.",
    focus: "National Security",
  },
  {
    icon: HeartHandshake,
    title: "NGOs & Humanitarian Groups",
    description:
      "Support rescue operations and humanitarian aid using AI-powered drones.",
    focus: "Disaster Relief",
  },
  {
    icon: Building2,
    title: "Industry Partners",
    description:
      "Co-develop inspection, monitoring and industrial automation technologies.",
    focus: "Enterprise Solutions",
  },
  {
    icon: Lightbulb,
    title: "Startup Ecosystem",
    description:
      "Work with incubators, accelerators and innovation hubs to scale AeroResQ.",
    focus: "Innovation",
  },
];

export default function Collaborations() {
  return (
    <section className="bg-[#08111f] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          badge="Collaborations"
          title="Building The Future"
          highlight="Together"
          description="Innovation grows through collaboration. AeroResQ actively seeks partnerships across academia, government, industry and the startup ecosystem."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {partners.map((partner, index) => {

            const Icon = partner.icon;

            return (

              <motion.div
                key={partner.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >

                <GlassCard className="group h-full transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40">

                  <div className="mb-6 inline-flex rounded-2xl bg-orange-500/10 p-4">

                    <Icon
                      size={34}
                      className="text-orange-500"
                    />

                  </div>

                  <h3 className="text-2xl font-bold">

                    {partner.title}

                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">

                    {partner.description}

                  </p>

                  <div className="mt-6">

                    <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-400">

                      {partner.focus}

                    </span>

                  </div>

                  <button className="mt-8 flex items-center gap-2 font-semibold text-orange-500 transition-all group-hover:translate-x-2">

                    Partner With Us

                    <ArrowRight size={18} />

                  </button>

                </GlassCard>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}