"use client";

import { motion } from "framer-motion";
import {
  FileText,
  ShieldCheck,
  BookOpen,
  BarChart3,
  ArrowRight,
} from "lucide-react";

import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";

const publications = [
  {
    icon: FileText,
    title: "Research Papers",
    status: "In Progress",
    year: "2026",
    description:
      "Peer-reviewed publications covering AI, Computer Vision and Autonomous Rescue Systems.",
  },
  {
    icon: ShieldCheck,
    title: "Patents",
    status: "Coming Soon",
    year: "2026",
    description:
      "Novel innovations in thermal rescue drones, AI mission planning and autonomous navigation.",
  },
  {
    icon: BookOpen,
    title: "Whitepapers",
    status: "Upcoming",
    year: "2027",
    description:
      "Technical insights into AeroResQ architecture, AI pipeline and enterprise deployment.",
  },
  {
    icon: BarChart3,
    title: "Case Studies",
    status: "Pilot Phase",
    year: "2027",
    description:
      "Real-world disaster response simulations, performance benchmarks and operational analytics.",
  },
];

export default function Publications() {
  return (
    <section className="bg-[#08111f] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          badge="Knowledge Hub"
          title="Research Publications"
          highlight="& Innovation"
          description="Our research is focused on creating practical AI technologies that can improve emergency response and public safety."
        />

        <div className="grid gap-8 md:grid-cols-2">

          {publications.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >

                <GlassCard className="group h-full">

                  <div className="flex items-center justify-between">

                    <div className="rounded-2xl bg-orange-500/10 p-4">

                      <Icon
                        size={34}
                        className="text-orange-500"
                      />

                    </div>

                    <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-sm text-orange-400">

                      {item.status}

                    </span>

                  </div>

                  <h3 className="mt-6 text-2xl font-bold">

                    {item.title}

                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">

                    {item.description}

                  </p>

                  <div className="mt-6 flex items-center justify-between">

                    <span className="text-sm text-gray-500">

                      Expected: {item.year}

                    </span>

                    <button className="flex items-center gap-2 font-medium text-orange-500 transition-all group-hover:translate-x-2">

                      Learn More

                      <ArrowRight size={18} />

                    </button>

                  </div>

                </GlassCard>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}