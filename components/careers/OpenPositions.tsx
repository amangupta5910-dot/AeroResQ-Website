"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock3,
  ArrowRight,
  Laptop,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import PrimaryButton from "@/components/ui/PrimaryButton";

const positions = [
  {
    title: "AI / Machine Learning Engineer",
    department: "Artificial Intelligence",
    location: "Bengaluru, India",
    type: "Full-Time",
    mode: "Hybrid",
  },
  {
    title: "Computer Vision Engineer",
    department: "Research & Development",
    location: "Remote",
    type: "Full-Time",
    mode: "Remote",
  },
  {
    title: "Drone Software Engineer",
    department: "Robotics",
    location: "New Delhi, India",
    type: "Full-Time",
    mode: "On-Site",
  },
  {
    title: "Frontend Developer (Next.js)",
    department: "Engineering",
    location: "Remote",
    type: "Internship",
    mode: "Remote",
  },
  {
    title: "Backend Developer (Node.js)",
    department: "Engineering",
    location: "Remote",
    type: "Internship",
    mode: "Remote",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Hybrid",
    type: "Full-Time",
    mode: "Hybrid",
  },
];

export default function OpenPositions() {
  return (
    <section
      id="positions"
      className="bg-[#050816] py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          badge="Open Positions"
          title="Current"
          highlight="Opportunities"
          description="Explore exciting career opportunities and become part of AeroResQ's mission to build AI-powered emergency response technologies."
        />

        <div className="mt-16 space-y-6">

          {positions.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <GlassCard className="group">

                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                  {/* Left */}

                  <div>

                    <span className="rounded-full bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-500">
                      {job.department}
                    </span>

                    <h3 className="mt-5 text-3xl font-bold text-white">
                      {job.title}
                    </h3>

                    <div className="mt-5 flex flex-wrap gap-6 text-gray-400">

                      <div className="flex items-center gap-2">
                        <MapPin size={18} className="text-orange-500" />
                        {job.location}
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock3 size={18} className="text-orange-500" />
                        {job.type}
                      </div>

                      <div className="flex items-center gap-2">
                        <Laptop size={18} className="text-orange-500" />
                        {job.mode}
                      </div>

                    </div>

                  </div>

                  {/* Right */}

                  <div className="flex items-center gap-5">

                    <PrimaryButton href="/contact">

                      <div className="flex items-center gap-2">

                        <Briefcase size={18} />

                        Apply Now

                        <ArrowRight size={18} />

                      </div>

                    </PrimaryButton>

                  </div>

                </div>

              </GlassCard>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}