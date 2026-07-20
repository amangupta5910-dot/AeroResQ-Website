"use client";

import { motion } from "framer-motion";
import { Cpu, ArrowRight } from "lucide-react";

export default function TechHero() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-32">

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f9731620,transparent_65%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="max-w-4xl"
        >

          <div className="flex items-center gap-3 text-orange-500">

            <Cpu />

            <span className="uppercase tracking-[5px]">
              Technology
            </span>

          </div>

          <h1 className="text-6xl md:text-7xl font-bold mt-8 leading-tight">

            Intelligent Systems

            <span className="text-orange-500">
              {" "}Powered by AI
            </span>

          </h1>

          <p className="text-gray-400 text-lg leading-8 mt-8 max-w-3xl">

            AeroResQ combines Artificial Intelligence,
            Computer Vision, Thermal Imaging,
            Autonomous Navigation and Edge Computing
            into one unified intelligent rescue platform.

          </p>

          <div className="flex gap-5 mt-10">

            <button className="bg-orange-500 px-7 py-4 rounded-full hover:bg-orange-600 transition flex items-center gap-3">

              Explore AI

              <ArrowRight size={18}/>

            </button>

            <button className="border border-white/10 px-7 py-4 rounded-full hover:border-orange-500 transition">

              View Architecture

            </button>

          </div>

        </motion.div>

      </div>

    </section>
  )
}