"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Rocket,
  GraduationCap,
  FileText,
  Lightbulb,
} from "lucide-react";

import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function ResearchCTA() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-32">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <span className="uppercase tracking-[6px] text-orange-500 text-sm">

              Research Partnership

            </span>

            <h2 className="mt-6 text-5xl font-black leading-tight">

              Let's Build

              <br />

              The Future

              <br />

              Together

            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-400">

              AeroResQ welcomes researchers, universities,
              startups, government agencies and industry partners
              to collaborate on next-generation AI-powered
              emergency response technologies.

            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <PrimaryButton href="/contact">

                Become a Partner

              </PrimaryButton>

              <SecondaryButton href="/careers">

                View Opportunities

              </SecondaryButton>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <Image
              src="/images/products/guardian.png"
              alt="Research Drone"
              width={850}
              height={850}
              className="mx-auto w-full object-contain drop-shadow-[0_0_70px_rgba(249,115,22,.35)]"
            />

          </motion.div>

        </div>

        {/* Feature Cards */}

        <div className="mt-24 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <Rocket
              className="text-orange-500"
              size={34}
            />

            <h3 className="mt-5 text-xl font-bold">

              Research Partnership

            </h3>

            <p className="mt-3 leading-7 text-gray-400">

              Collaborate on AI, robotics and autonomous rescue systems.

            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <GraduationCap
              className="text-orange-500"
              size={34}
            />

            <h3 className="mt-5 text-xl font-bold">

              Internship Program

            </h3>

            <p className="mt-3 leading-7 text-gray-400">

              Work with our engineers on real-world AI research projects.

            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <Lightbulb
              className="text-orange-500"
              size={34}
            />

            <h3 className="mt-5 text-xl font-bold">

              Innovation Challenge

            </h3>

            <p className="mt-3 leading-7 text-gray-400">

              Contribute new ideas to transform disaster response.

            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <FileText
              className="text-orange-500"
              size={34}
            />

            <h3 className="mt-5 text-xl font-bold">

              Research Brochure

            </h3>

            <p className="mt-3 leading-7 text-gray-400">

              Download our roadmap, publications and technology overview.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}