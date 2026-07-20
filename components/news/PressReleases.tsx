"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  FileText,
  ArrowRight,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const releases = [
  {
    title: "AeroResQ Announces AI-Powered Rescue Drone Prototype",
    date: "18 July 2026",
    type: "Product Launch",
    description:
      "AeroResQ unveiled its first autonomous rescue drone equipped with AI-powered thermal imaging and real-time mission planning.",
  },
  {
    title: "Strategic Partnership with Smart City Mission",
    date: "10 July 2026",
    type: "Partnership",
    description:
      "The collaboration focuses on deploying intelligent emergency response systems for urban safety and disaster preparedness.",
  },
  {
    title: "Research Collaboration with Universities",
    date: "28 June 2026",
    type: "Research",
    description:
      "AeroResQ begins collaborative research in AI, robotics and autonomous navigation with academic institutions.",
  },
  {
    title: "National Innovation Recognition",
    date: "15 June 2026",
    type: "Award",
    description:
      "AeroResQ receives recognition for advancing AI-based emergency response technology and disaster management solutions.",
  },
];

export default function PressReleases() {
  return (
    <section className="bg-[#08111f] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          badge="Press Releases"
          title="Official"
          highlight="Announcements"
          description="Read AeroResQ's latest press releases, strategic partnerships, research collaborations and major milestones."
        />

        <div className="relative mt-20">

          {/* Timeline */}

          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-orange-500/30 lg:left-1/2 lg:-translate-x-1/2"></div>

          <div className="space-y-12">

            {releases.map((item, index) => (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`relative flex ${
                  index % 2 === 0
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse"
                } items-center gap-8`}
              >

                {/* Timeline Dot */}

                <div className="absolute left-6 h-5 w-5 rounded-full border-4 border-[#08111f] bg-orange-500 lg:left-1/2 lg:-translate-x-1/2"></div>

                {/* Card */}

                <div className="ml-16 lg:ml-0 lg:w-[46%]">

                  <GlassCard>

                    <div className="flex items-center justify-between flex-wrap gap-3">

                      <span className="rounded-full bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-500">

                        {item.type}

                      </span>

                      <div className="flex items-center gap-2 text-gray-400 text-sm">

                        <CalendarDays
                          size={16}
                          className="text-orange-500"
                        />

                        {item.date}

                      </div>

                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-white">

                      {item.title}

                    </h3>

                    <p className="mt-5 leading-7 text-gray-400">

                      {item.description}

                    </p>

                    <button className="mt-8 flex items-center gap-2 font-semibold text-orange-500 transition-all hover:gap-3">

                      <FileText size={18} />

                      Read Press Release

                      <ArrowRight size={18} />

                    </button>

                  </GlassCard>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}