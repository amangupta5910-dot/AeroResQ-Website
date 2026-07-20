"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  CalendarDays,
  Clock3,
  ArrowRight,
  User,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function FeaturedNews() {
  return (
    <section
      id="featured"
      className="bg-[#08111f] py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          badge="Featured Story"
          title="Latest Breakthrough"
          highlight="From AeroResQ"
          description="Explore our latest innovation, partnerships and AI-powered emergency response advancements."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
        >

          <div className="grid lg:grid-cols-2">

            {/* Image */}

            <div className="relative min-h-[420px]">

              <Image
                src="/images/products/guardian.png"
                alt="Featured News"
                fill
                className="object-contain p-10"
              />

            </div>

            {/* Content */}

            <div className="flex flex-col justify-center p-10 lg:p-14">

              <span className="w-fit rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-500">
                AI Innovation
              </span>

              <h2 className="mt-6 text-4xl font-black leading-tight text-white">

                AeroResQ Successfully Demonstrates AI-Powered Thermal Rescue Drone

              </h2>

              <p className="mt-6 leading-8 text-gray-400">

                AeroResQ has completed successful prototype testing of its
                next-generation thermal rescue drone capable of autonomous
                search missions, real-time hazard detection and AI-assisted
                emergency response. This milestone brings us closer to
                transforming disaster management with intelligent aerial
                systems.

              </p>

              {/* Meta */}

              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-400">

                <div className="flex items-center gap-2">
                  <CalendarDays size={18} className="text-orange-500" />
                  July 2026
                </div>

                <div className="flex items-center gap-2">
                  <User size={18} className="text-orange-500" />
                  AeroResQ Research Team
                </div>

                <div className="flex items-center gap-2">
                  <Clock3 size={18} className="text-orange-500" />
                  5 min read
                </div>

              </div>

              <div className="mt-10 flex items-center gap-6">

                <PrimaryButton href="/research">
                  Read Full Story
                </PrimaryButton>

                <button className="flex items-center gap-2 font-semibold text-orange-500 hover:gap-3 transition-all">

                  Explore Research

                  <ArrowRight size={18} />

                </button>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}