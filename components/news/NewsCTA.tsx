"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  ArrowRight,
  Newspaper,
  Users,
} from "lucide-react";

import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function NewsCTA() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-32">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-12 lg:p-16 text-center"
        >

          <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-5 py-2 text-orange-500 font-semibold">

            <Rocket size={18} />

            Join Our Journey

          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-white">

            Shape The Future Of

            <br />

            AI-Powered Emergency Response

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">

            Whether you're a researcher, student, enterprise partner,
            investor or technology enthusiast, AeroResQ welcomes you
            to join our mission of transforming disaster response
            through Artificial Intelligence and autonomous drones.

          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <PrimaryButton href="/contact">

              Partner With Us

            </PrimaryButton>

            <SecondaryButton href="/careers">

              Join Our Team

            </SecondaryButton>

          </div>

          {/* Cards */}

          <div className="mt-20 grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-[#0B1120]/70 p-8">

              <Rocket
                size={34}
                className="mx-auto text-orange-500"
              />

              <h3 className="mt-5 text-2xl font-bold text-white">

                Innovation

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Discover the latest AI breakthroughs powering the next
                generation of autonomous rescue systems.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0B1120]/70 p-8">

              <Newspaper
                size={34}
                className="mx-auto text-orange-500"
              />

              <h3 className="mt-5 text-2xl font-bold text-white">

                Newsroom

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Stay updated with product launches, partnerships,
                company milestones and research publications.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0B1120]/70 p-8">

              <Users
                size={34}
                className="mx-auto text-orange-500"
              />

              <h3 className="mt-5 text-2xl font-bold text-white">

                Community

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                Collaborate with researchers, universities, startups,
                enterprises and public organizations worldwide.

              </p>

            </div>

          </div>

          {/* Bottom Links */}

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-orange-500 font-semibold">

            <a
              href="/research"
              className="flex items-center gap-2 hover:text-orange-400 transition"
            >
              Explore Research
              <ArrowRight size={18} />
            </a>

            <a
              href="/contact"
              className="flex items-center gap-2 hover:text-orange-400 transition"
            >
              Contact AeroResQ
              <ArrowRight size={18} />
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}