"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  CalendarDays,
  GraduationCap,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import PrimaryButton from "@/components/ui/PrimaryButton";

const internships = [
  {
    icon: BrainCircuit,
    title: "AI / Machine Learning",
    duration: "3–6 Months",
    mode: "Hybrid / Remote",
    description:
      "Work on deep learning, computer vision and AI-powered rescue systems.",
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    duration: "3 Months",
    mode: "Remote",
    description:
      "Build scalable web applications using Next.js, React, Node.js and TypeScript.",
  },
  {
    icon: Cpu,
    title: "Robotics & Drone Systems",
    duration: "6 Months",
    mode: "On-Site",
    description:
      "Develop autonomous drone software, navigation systems and mission planning.",
  },
  {
    icon: Database,
    title: "Data Science & Analytics",
    duration: "3 Months",
    mode: "Hybrid",
    description:
      "Analyze mission data and build intelligent dashboards for operational insights.",
  },
];

export default function InternshipProgram() {
  return (
    <section
      id="internships"
      className="bg-[#050816] py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          badge="Internship Program"
          title="Launch Your"
          highlight="Career With AeroResQ"
          description="Gain real-world experience by working on impactful AI, robotics and software engineering projects alongside experienced mentors."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {internships.map((item, index) => {
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

                  <div className="flex items-center gap-4">

                    <div className="rounded-2xl bg-orange-500/10 p-4">

                      <Icon
                        size={34}
                        className="text-orange-500"
                      />

                    </div>

                    <div>

                      <h3 className="text-2xl font-bold text-white">
                        {item.title}
                      </h3>

                      <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-400">

                        <span className="flex items-center gap-2">

                          <CalendarDays
                            size={16}
                            className="text-orange-500"
                          />

                          {item.duration}

                        </span>

                        <span className="flex items-center gap-2">

                          <GraduationCap
                            size={16}
                            className="text-orange-500"
                          />

                          {item.mode}

                        </span>

                      </div>

                    </div>

                  </div>

                  <p className="mt-6 leading-7 text-gray-400">
                    {item.description}
                  </p>

                </GlassCard>
              </motion.div>
            );
          })}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">

          <h2 className="text-4xl font-black text-white">
            Ready To Start Your Journey?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Whether you're a student, recent graduate or aspiring engineer,
            AeroResQ provides hands-on experience, mentorship and the
            opportunity to work on technologies that make a real-world impact.
          </p>

          <div className="mt-10">

            <PrimaryButton href="/contact">
              Apply for Internship
            </PrimaryButton>

          </div>

        </div>

      </div>
    </section>
  );
}