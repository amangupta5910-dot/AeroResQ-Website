"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function ResearchHero() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-28">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[170px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="uppercase tracking-[6px] text-orange-500 text-sm">
            AeroResQ Research
          </span>

          <h1 className="mt-6 text-6xl font-black leading-tight">

            Advancing AI

            <br />

            For Safer

            <br />

            Emergency Response

          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-400">

            AeroResQ Research focuses on Artificial Intelligence,
            Computer Vision, Thermal Imaging, Autonomous Robotics,
            and Mission Intelligence to redefine the future of
            emergency response.

          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <PrimaryButton href="#research-areas">
              Explore Research
            </PrimaryButton>

            <SecondaryButton href="/contact">
              Research Partnership
            </SecondaryButton>

          </div>

          {/* Highlights */}

          <div className="mt-16 grid grid-cols-3 gap-8">

            <div>
              <h2 className="text-4xl font-bold text-orange-500">
                AI
              </h2>

              <p className="mt-2 text-gray-400">
                Decision Engine
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-orange-500">
                CV
              </h2>

              <p className="mt-2 text-gray-400">
                Computer Vision
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-orange-500">
                ML
              </h2>

              <p className="mt-2 text-gray-400">
                Deep Learning
              </p>
            </div>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <Image
            src="/images/products/guardian.png"
            alt="Research Drone"
            width={900}
            height={900}
            className="w-full object-contain drop-shadow-[0_0_60px_rgba(249,115,22,.35)]"
          />

        </motion.div>

      </div>

    </section>
  );
}