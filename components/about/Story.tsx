"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target, ShieldCheck } from "lucide-react";

export default function Story() {
  return (
    <section className="bg-[#08111f] py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="uppercase tracking-[5px] text-orange-500">
              Our Story
            </span>

            <h2 className="text-5xl font-bold mt-5 leading-tight">
              Turning Innovation into
              <span className="text-orange-500"> Life-Saving Technology</span>
            </h2>

            <p className="text-gray-400 mt-8 leading-8">
              AeroResQ was created with a simple vision — to use Artificial
              Intelligence and autonomous drone technology to help save lives
              during emergencies. Our goal is to build intelligent systems that
              assist rescue teams with faster detection, better situational
              awareness and safer operations.
            </p>

            <p className="text-gray-400 mt-6 leading-8">
              By combining AI, thermal imaging and computer vision, AeroResQ
              aims to make disaster response smarter, faster and more reliable.
            </p>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 flex gap-5">
              <Lightbulb className="text-orange-500" size={40} />

              <div>
                <h3 className="text-2xl font-bold">
                  Innovation
                </h3>

                <p className="text-gray-400 mt-2">
                  AI-driven solutions focused on solving real-world rescue
                  challenges.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 flex gap-5">
              <Target className="text-orange-500" size={40} />

              <div>
                <h3 className="text-2xl font-bold">
                  Purpose
                </h3>

                <p className="text-gray-400 mt-2">
                  Reducing response time and improving emergency decision-making.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 flex gap-5">
              <ShieldCheck className="text-orange-500" size={40} />

              <div>
                <h3 className="text-2xl font-bold">
                  Impact
                </h3>

                <p className="text-gray-400 mt-2">
                  Building technology that supports rescue teams and enhances
                  public safety.
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}