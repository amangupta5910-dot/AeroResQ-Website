"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Briefcase,
  Users,
  Rocket,
} from "lucide-react";

import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function CareersHero() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-28">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[180px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <span className="uppercase tracking-[6px] text-orange-500 text-sm">

            Careers at AeroResQ

          </span>

          <h1 className="mt-6 text-6xl font-black leading-tight text-white">

            Build The Future

            <br />

            With AI &

            <br />

            Robotics

          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-400">

            Join AeroResQ and work on cutting-edge Artificial Intelligence,
            autonomous drones, computer vision and emergency response
            technologies that save lives.

          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <PrimaryButton href="#positions">
              View Open Roles
            </PrimaryButton>

            <SecondaryButton href="#internships">
              Internship Program
            </SecondaryButton>

          </div>

          {/* Stats */}

          <div className="mt-16 grid grid-cols-3 gap-8">

            <div>

              <Briefcase
                className="text-orange-500"
                size={30}
              />

              <h2 className="mt-4 text-3xl font-bold text-white">

                15+

              </h2>

              <p className="text-gray-400">

                Open Roles

              </p>

            </div>

            <div>

              <Users
                className="text-orange-500"
                size={30}
              />

              <h2 className="mt-4 text-3xl font-bold text-white">

                40+

              </h2>

              <p className="text-gray-400">

                Team Members

              </p>

            </div>

            <div>

              <Rocket
                className="text-orange-500"
                size={30}
              />

              <h2 className="mt-4 text-3xl font-bold text-white">

                AI

              </h2>

              <p className="text-gray-400">

                Innovation

              </p>

            </div>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <Image
            src="/images/products/fleet-ai.png"
            alt="Careers"
            width={900}
            height={900}
            className="w-full object-contain drop-shadow-[0_0_60px_rgba(249,115,22,.35)]"
          />

        </motion.div>

      </div>

    </section>
  );
}