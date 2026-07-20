"use client";

import { motion } from "framer-motion";
import { Lightbulb, Rocket, HeartHandshake } from "lucide-react";

export default function FoundingVision() {
  return (
    <section className="bg-[#08111f] py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <span className="uppercase tracking-[5px] text-orange-500">
            Founding Vision
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Inspired by Purpose,
            <span className="text-orange-500"> Driven by Innovation</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            AeroResQ was envisioned with one goal—to build intelligent
            technologies that assist emergency responders, improve disaster
            response and ultimately help save lives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >
            <div className="w-24 h-24 rounded-full bg-orange-500/20 flex items-center justify-center text-4xl font-bold text-orange-500">
              AR
            </div>

            <h3 className="text-3xl font-bold mt-8">
              AeroResQ Vision
            </h3>

            <p className="text-gray-400 mt-6 leading-8">
              We believe Artificial Intelligence should not only automate
              processes but also empower people, protect communities and
              strengthen emergency response through intelligent systems.
            </p>

            <blockquote className="mt-8 border-l-4 border-orange-500 pl-6 italic text-gray-300">
              "Technology has the greatest impact when it protects human life."
            </blockquote>
          </motion.div>

          {/* Right */}

          <div className="space-y-6">

            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 flex gap-5">
              <Lightbulb className="text-orange-500" size={40} />
              <div>
                <h4 className="text-2xl font-bold">
                  Innovation First
                </h4>
                <p className="text-gray-400 mt-2">
                  Every solution begins with research and purposeful innovation.
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 flex gap-5">
              <HeartHandshake className="text-orange-500" size={40} />
              <div>
                <h4 className="text-2xl font-bold">
                  Human-Centered Design
                </h4>
                <p className="text-gray-400 mt-2">
                  Building technology that supports people when every second matters.
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 flex gap-5">
              <Rocket className="text-orange-500" size={40} />
              <div>
                <h4 className="text-2xl font-bold">
                  Long-Term Vision
                </h4>
                <p className="text-gray-400 mt-2">
                  Creating scalable AI platforms for defence, disaster management
                  and smart cities.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}