"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function ProductsHero() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-28">

      {/* Background Glow */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-orange-500/10 blur-[160px]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <span className="text-orange-500 uppercase tracking-[6px] text-sm">
            AeroResQ Products
          </span>

          <h1 className="text-6xl font-black mt-6 leading-tight">

            AI Powered

            <br />

            Rescue Products

          </h1>

          <p className="text-gray-400 text-lg mt-8 leading-8">

            Discover intelligent rescue drones, AI command systems,
            fleet management solutions and mobile applications
            designed for disaster response, defence and public safety.

          </p>

          <div className="flex gap-5 mt-10">

            <PrimaryButton href="#products">

              Explore Products

            </PrimaryButton>

            <SecondaryButton href="/contact">

              Request Demo

            </SecondaryButton>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-6 mt-16">

            <div>

              <h2 className="text-4xl font-bold text-orange-500">

                5+

              </h2>

              <p className="text-gray-400 mt-2">

                Product Lines

              </p>

            </div>

            <div>

              <h2 className="text-4xl font-bold text-orange-500">

                AI

              </h2>

              <p className="text-gray-400 mt-2">

                Powered

              </p>

            </div>

            <div>

              <h2 className="text-4xl font-bold text-orange-500">

                24×7

              </h2>

              <p className="text-gray-400 mt-2">

                Mission Ready

              </p>

            </div>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="relative"
        >

          <Image
            src="/images/products/guardian.png"
            alt="Guardian Drone"
            width={900}
            height={900}
            className="w-full object-contain drop-shadow-[0_0_50px_rgba(249,115,22,.35)]"
          />

        </motion.div>

      </div>

    </section>
  );
}