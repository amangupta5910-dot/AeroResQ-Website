"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  FileText,
  Building2,
  PhoneCall,
} from "lucide-react";

import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function SolutionsCTA() {
  return (
    <section className="relative overflow-hidden bg-[#08111f] py-32">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <span className="uppercase tracking-[6px] text-orange-500 text-sm">
              Enterprise Solutions
            </span>

            <h2 className="mt-6 text-5xl font-black leading-tight">

              Ready To Modernize

              <br />

              Emergency Response?

            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-400">

              Join government agencies, disaster response teams,
              defence organizations and enterprises adopting
              AI-powered emergency response solutions.

            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <PrimaryButton href="/contact">
                Request Consultation
              </PrimaryButton>

              <SecondaryButton href="/contact">
                Contact Our Team
              </SecondaryButton>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >

            <Image
              src="/images/products/guardian.png"
              alt="Guardian Drone"
              width={850}
              height={850}
              className="mx-auto w-full object-contain drop-shadow-[0_0_70px_rgba(249,115,22,.35)]"
            />

          </motion.div>

        </div>

        {/* Cards */}

        <div className="mt-24 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <PhoneCall className="text-orange-500" size={34} />

            <h3 className="mt-5 text-xl font-bold">
              Request Consultation
            </h3>

            <p className="mt-3 text-gray-400 leading-7">
              Schedule a meeting with our solution experts.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <FileText className="text-orange-500" size={34} />

            <h3 className="mt-5 text-xl font-bold">
              Download Brochure
            </h3>

            <p className="mt-3 text-gray-400 leading-7">
              Explore complete solution specifications and capabilities.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <Building2 className="text-orange-500" size={34} />

            <h3 className="mt-5 text-xl font-bold">
              Government Partnership
            </h3>

            <p className="mt-3 text-gray-400 leading-7">
              Collaborate on national emergency response initiatives.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <ArrowRight className="text-orange-500" size={34} />

            <h3 className="mt-5 text-xl font-bold">
              Enterprise Deployment
            </h3>

            <p className="mt-3 text-gray-400 leading-7">
              Deploy AeroResQ across your organization with expert support.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}