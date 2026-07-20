"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Phone,
} from "lucide-react";

import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-32">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-[180px]" />

        <div className="absolute left-16 top-20 h-44 w-44 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute bottom-16 right-16 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl" />

      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[32px] border border-white/10 bg-white/5 px-8 py-16 text-center backdrop-blur-2xl md:px-16"
        >

          <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm font-semibold text-orange-400">
            🚀 Let's Connect
          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-6xl">
            Let's Build
            <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Safer Communities Together
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Whether you're looking for AI-powered emergency response solutions,
            research collaboration, business partnerships or career
            opportunities, our team is ready to help.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

            <PrimaryButton href="#contact-form">
              <div className="flex items-center gap-2">

                <Calendar size={18} />

                Request Demo

                <ArrowRight size={18} />

              </div>
            </PrimaryButton>

            <SecondaryButton href="tel:+918840669968">
              <div className="flex items-center gap-2">

                <Phone size={18} />

                Call Now

              </div>
            </SecondaryButton>

          </div>

          {/* Stats */}

          <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-3">

            <div>

              <h3 className="text-4xl font-black text-orange-400">
                24 Hours
              </h3>

              <p className="mt-2 text-gray-400">
                Average Response Time
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-black text-orange-400">
                100%
              </h3>

              <p className="mt-2 text-gray-400">
                Client-Focused Support
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-black text-orange-400">
                PAN India
              </h3>

              <p className="mt-2 text-gray-400">
                Collaboration Network
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}