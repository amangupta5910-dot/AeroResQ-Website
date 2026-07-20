"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function NewsHero() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-28">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[170px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <span className="uppercase tracking-[6px] text-orange-500 text-sm">

            AeroResQ Newsroom

          </span>

          <h1 className="mt-6 text-6xl font-black leading-tight">

            News,

            <br />

            Research &

            <br />

            Innovation

          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-400">

            Stay updated with AeroResQ's latest announcements,
            technology breakthroughs, partnerships,
            research activities and company milestones.

          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <PrimaryButton href="#featured">
              Latest News
            </PrimaryButton>

            <SecondaryButton href="#newsletter">
              Subscribe
            </SecondaryButton>

          </div>

          <div className="mt-16 grid grid-cols-3 gap-8">

            <div>

              <h2 className="text-4xl font-bold text-orange-500">
                50+
              </h2>

              <p className="mt-2 text-gray-400">
                Articles
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-bold text-orange-500">
                20+
              </h2>

              <p className="mt-2 text-gray-400">
                Research Updates
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-bold text-orange-500">
                12
              </h2>

              <p className="mt-2 text-gray-400">
                Events
              </p>

            </div>

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <Image
            src="/images/products/guardian.png"
            alt="News"
            width={900}
            height={900}
            className="w-full object-contain drop-shadow-[0_0_60px_rgba(249,115,22,.35)]"
          />

        </motion.div>

      </div>

    </section>
  );
}