"use client";

import { motion } from "framer-motion";
import { Mail, Bell, Send } from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function Newsletter() {
  return (
    <section
      id="newsletter"
      className="bg-[#08111f] py-28"
    >
      <div className="max-w-6xl mx-auto px-6">

        <SectionHeading
          badge="Newsletter"
          title="Stay Updated With"
          highlight="AeroResQ"
          description="Subscribe to receive AI research updates, product launches, events and company news directly in your inbox."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
        >

          <div className="grid gap-12 lg:grid-cols-2 items-center">

            {/* Left */}

            <div>

              <div className="flex items-center gap-3">

                <div className="rounded-2xl bg-orange-500/10 p-4">

                  <Bell
                    size={30}
                    className="text-orange-500"
                  />

                </div>

                <h2 className="text-4xl font-black text-white">

                  Get Weekly Updates

                </h2>

              </div>

              <p className="mt-6 text-lg leading-8 text-gray-400">

                Receive exclusive updates about AI research,
                autonomous drone technology, product launches,
                internships, upcoming events and innovation
                directly from the AeroResQ team.

              </p>

              {/* Stats */}

              <div className="mt-10 grid grid-cols-2 gap-6">

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                  <h3 className="text-3xl font-bold text-orange-500">

                    10K+

                  </h3>

                  <p className="mt-2 text-gray-400">

                    Subscribers

                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                  <h3 className="text-3xl font-bold text-orange-500">

                    Weekly

                  </h3>

                  <p className="mt-2 text-gray-400">

                    Research Updates

                  </p>

                </div>

              </div>

            </div>

            {/* Right */}

            <div className="rounded-3xl border border-white/10 bg-[#0B1120] p-8">

              <label className="mb-3 block text-white font-semibold">

                Email Address

              </label>

              <div className="relative">

                <Mail
                  size={20}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-5 text-white outline-none transition focus:border-orange-500"
                />

              </div>

              <div className="mt-8">

                <PrimaryButton href="#">

                  <div className="flex items-center gap-2">

                    <Send size={18} />

                    Subscribe Now

                  </div>

                </PrimaryButton>

              </div>

              <p className="mt-5 text-sm leading-6 text-gray-500">

                By subscribing, you agree to receive emails from AeroResQ.
                You can unsubscribe at any time.

              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}