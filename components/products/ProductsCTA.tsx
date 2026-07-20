"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function ProductsCTA() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-28">

      {/* Background Glow */}
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-orange-500/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="grid lg:grid-cols-2 gap-14 items-center"
        >

          {/* Left */}

          <div>

            <span className="uppercase tracking-[5px] text-orange-500 text-sm">

              Ready to Deploy?

            </span>

            <h2 className="text-5xl font-black mt-6 leading-tight">

              Transform Your

              <br />

              Emergency Response

            </h2>

            <p className="text-gray-400 mt-8 leading-8 text-lg">

              Equip your organization with AI-powered rescue drones,
              command systems and intelligent emergency response
              solutions built for the future.

            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              <div className="rounded-2xl border border-white/10 p-5">

                <h3 className="font-bold">

                  🚁 Request Demo

                </h3>

                <p className="text-gray-400 mt-2 text-sm">

                  Experience AeroResQ products live.

                </p>

              </div>

              <div className="rounded-2xl border border-white/10 p-5">

                <h3 className="font-bold">

                  📄 Product Brochure

                </h3>

                <p className="text-gray-400 mt-2 text-sm">

                  Download detailed specifications.

                </p>

              </div>

              <div className="rounded-2xl border border-white/10 p-5">

                <h3 className="font-bold">

                  💬 Talk to Sales

                </h3>

                <p className="text-gray-400 mt-2 text-sm">

                  Get customized enterprise pricing.

                </p>

              </div>

              <div className="rounded-2xl border border-white/10 p-5">

                <h3 className="font-bold">

                  🌍 Global Support

                </h3>

                <p className="text-gray-400 mt-2 text-sm">

                  Deployment assistance worldwide.

                </p>

              </div>

            </div>

            <div className="flex flex-wrap gap-5 mt-12">

              <PrimaryButton href="/contact">
                Request Demo
              </PrimaryButton>

              <SecondaryButton href="/contact">
                Contact Sales
              </SecondaryButton>

            </div>

          </div>

          {/* Right */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="relative"
          >

            <Image
              src="/images/products/guardian.png"
              alt="Guardian Drone"
              width={800}
              height={800}
              className="w-full object-contain drop-shadow-[0_0_70px_rgba(249,115,22,.35)]"
            />

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}