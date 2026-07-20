"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-32">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f9731620,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="uppercase tracking-[6px] text-orange-500">
            About AeroResQ
          </span>

          <h1 className="text-6xl md:text-7xl font-bold mt-6 leading-tight">
            Building the Future of
            <span className="text-orange-500"> AI-Powered Rescue</span>
          </h1>

          <p className="text-gray-400 text-lg mt-8 leading-8 max-w-3xl">
            AeroResQ is developing intelligent autonomous drone solutions
            that combine Artificial Intelligence, Thermal Imaging and
            Computer Vision to support disaster response, emergency rescue,
            defence surveillance and smart public safety.
          </p>

          <button className="mt-10 px-7 py-4 bg-orange-500 rounded-full flex items-center gap-3 hover:bg-orange-600 transition">
            Explore Technology
            <ArrowRight size={20} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}