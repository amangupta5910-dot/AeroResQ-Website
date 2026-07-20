"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Search,
  Code2,
  MessagesSquare,
  BadgeCheck,
  Rocket,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: FileText,
    title: "Application",
    description:
      "Submit your application through our careers portal along with your updated resume and portfolio.",
  },
  {
    icon: Search,
    title: "Resume Screening",
    description:
      "Our hiring team reviews your experience, skills and project work to find the best fit.",
  },
  {
    icon: Code2,
    title: "Technical Assessment",
    description:
      "Complete a practical assignment or coding challenge based on the role you applied for.",
  },
  {
    icon: MessagesSquare,
    title: "Technical Interview",
    description:
      "Meet our engineering team to discuss problem-solving, technical knowledge and project experience.",
  },
  {
    icon: BadgeCheck,
    title: "HR Discussion",
    description:
      "Discuss culture fit, career aspirations, compensation and onboarding details.",
  },
  {
    icon: Rocket,
    title: "Offer & Onboarding",
    description:
      "Receive your offer letter and begin your journey at AeroResQ with our onboarding program.",
  },
];

export default function HiringProcess() {
  return (
    <section className="bg-[#08111f] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          badge="Hiring Process"
          title="Your Journey"
          highlight="Starts Here"
          description="Our hiring process is transparent, collaborative and designed to help you showcase your skills."
        />

        <div className="relative mt-20">

          {/* Timeline Line */}

          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-orange-500/30 lg:left-1/2 lg:-translate-x-1/2"></div>

          <div className="space-y-12">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
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

                  <div className="ml-16 lg:ml-0 lg:w-[46%] rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

                    <div className="flex items-center gap-5">

                      <div className="rounded-2xl bg-orange-500/10 p-4">

                        <Icon
                          size={30}
                          className="text-orange-500"
                        />

                      </div>

                      <div>

                        <p className="text-orange-500 font-semibold">
                          Step {index + 1}
                        </p>

                        <h3 className="text-2xl font-bold text-white">
                          {step.title}
                        </h3>

                      </div>

                    </div>

                    <p className="mt-6 leading-7 text-gray-400">
                      {step.description}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}