"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  CalendarDays,
  ArrowRight,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const news = [
  {
    title: "AI Drone Prototype Successfully Tested",
    category: "Research",
    date: "15 Jul 2026",
    image: "/images/products/scout.png",
    description:
      "AeroResQ completed successful testing of its autonomous rescue drone equipped with thermal vision and AI navigation.",
  },
  {
    title: "Partnership with Smart City Initiative",
    category: "Partnership",
    date: "10 Jul 2026",
    image: "/images/products/guardian.png",
    description:
      "AeroResQ joins hands with smart city authorities to strengthen emergency response systems.",
  },
  {
    title: "Next-Gen Computer Vision Released",
    category: "Technology",
    date: "03 Jul 2026",
    image: "/images/products/fleet-ai.png",
    description:
      "Our latest AI model improves object detection and disaster recognition with higher accuracy.",
  },
  {
    title: "National Innovation Award Nomination",
    category: "Achievement",
    date: "28 Jun 2026",
    image: "/images/products/command-center.png",
    description:
      "AeroResQ has been shortlisted for one of India's leading innovation awards in AI & Robotics.",
  },
  {
    title: "Internship Program Opens",
    category: "Careers",
    date: "20 Jun 2026",
    image: "/images/products/mobile-app.png",
    description:
      "Applications are now open for AI, Robotics and Full Stack Development internships.",
  },
  {
    title: "Disaster Response Simulation Completed",
    category: "Operations",
    date: "12 Jun 2026",
    image: "/images/products/scout.png",
    description:
      "The AeroResQ fleet successfully completed a large-scale emergency simulation with live AI monitoring.",
  },
];

export default function NewsGrid() {
  return (
    <section className="bg-[#050816] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          badge="Latest News"
          title="Recent Updates"
          highlight="From AeroResQ"
          description="Stay informed with the latest announcements, innovations, partnerships and company milestones."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {news.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >

              <GlassCard className="group overflow-hidden p-0">

                {/* Image */}

                <div className="relative h-60 overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-6 transition duration-500 group-hover:scale-110"
                  />

                </div>

                {/* Content */}

                <div className="p-7">

                  <span className="rounded-full bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-500">

                    {item.category}

                  </span>

                  <h3 className="mt-5 text-2xl font-bold text-white">

                    {item.title}

                  </h3>

                  <div className="mt-4 flex items-center gap-2 text-gray-400">

                    <CalendarDays
                      size={16}
                      className="text-orange-500"
                    />

                    {item.date}

                  </div>

                  <p className="mt-5 leading-7 text-gray-400">

                    {item.description}

                  </p>

                  <button className="mt-8 flex items-center gap-2 font-semibold text-orange-500 transition-all group-hover:gap-3">

                    Read More

                    <ArrowRight size={18} />

                  </button>

                </div>

              </GlassCard>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}