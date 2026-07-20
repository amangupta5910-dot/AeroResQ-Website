"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Cpu } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-28">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f9731620,transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-14 text-center"
        >

          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-500/10 mb-8">
            <Cpu className="text-orange-500" size={38} />
          </div>

          <h2 className="text-5xl font-bold leading-tight">
            Ready to Build the Future of
            <span className="text-orange-500">
              {" "}Intelligent Rescue?
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8">
            Discover how AeroResQ combines Artificial Intelligence,
            autonomous drones and advanced sensing technologies
            to transform emergency response and disaster management.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">

            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 transition font-semibold flex items-center justify-center gap-2"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/technology"
              className="px-8 py-4 rounded-full border border-white/20 hover:border-orange-500 transition font-semibold"
            >
              Explore Technology
            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
}