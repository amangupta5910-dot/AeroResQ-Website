"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, ArrowRight, Phone } from "lucide-react";

import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#050816] pt-36 pb-24">

      {/* Background Glow */}
      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-32 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-500/20 blur-[150px]" />

        <div className="absolute left-20 bottom-10 h-44 w-44 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute right-20 top-20 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl" />

      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm font-semibold text-orange-400">
            Contact AeroResQ
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
            Let's Build
            <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
              The Future Together
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Whether you're looking for AI-powered emergency response
            solutions, research collaboration, partnerships or career
            opportunities, we'd love to hear from you.
          </p>

          <div className="mt-12 flex flex-col gap-5 sm:flex-row">

            <PrimaryButton href="#contact-form">
              <div className="flex items-center gap-2">
                <Mail size={18} />
                Send Message
                <ArrowRight size={18} />
              </div>
            </PrimaryButton>

            <SecondaryButton href="tel:+918840669968">
              <div className="flex items-center gap-2">
                <Phone size={18} />
                Call Us
              </div>
            </SecondaryButton>

          </div>

          {/* Quick Stats */}

          <div className="mt-16 grid grid-cols-3 gap-8">

            <div>
              <h3 className="text-4xl font-black text-orange-400">
                24h
              </h3>
              <p className="mt-2 text-gray-400">
                Response Time
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-orange-400">
                50+
              </h3>
              <p className="mt-2 text-gray-400">
                Partners
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-orange-400">
                99%
              </h3>
              <p className="mt-2 text-gray-400">
                Client Satisfaction
              </p>
            </div>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">

            <Image
              src="/images/contact/contact-hero.png"
              alt="Contact AeroResQ"

              width={900}
              height={800}
              className="w-full object-contain"
              priority
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}