"use client";

import { motion } from "framer-motion";
import {
  Radar,
  Cpu,
  BatteryCharging,
  Wifi,
  MapPinned,
  ShieldCheck,
} from "lucide-react";

export default function CommandCenter() {
  return (
    <section className="bg-[#08111f] py-28">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <span className="uppercase tracking-[5px] text-orange-500">
            AI Command Center
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Mission Control
            <span className="text-orange-500"> Dashboard</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            AeroResQ Command Center enables real-time monitoring,
            mission planning, drone fleet management and AI-powered
            emergency response from a single intelligent dashboard.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Dashboard */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
          >

            <div className="flex justify-between mb-8">

              <h3 className="text-2xl font-bold">
                Live Mission Status
              </h3>

              <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
                ONLINE
              </span>

            </div>

            <div className="space-y-6">

              <div className="flex justify-between">
                <span className="flex items-center gap-2">
                  <Radar size={20} />
                  Active Mission
                </span>

                <span className="text-orange-500">
                  Rescue-07
                </span>
              </div>

              <div className="flex justify-between">
                <span className="flex items-center gap-2">
                  <BatteryCharging size={20} />
                  Battery
                </span>

                <span>92%</span>
              </div>

              <div className="flex justify-between">
                <span className="flex items-center gap-2">
                  <Wifi size={20} />
                  Signal
                </span>

                <span className="text-green-400">
                  Excellent
                </span>
              </div>

              <div className="flex justify-between">
                <span className="flex items-center gap-2">
                  <MapPinned size={20} />
                  GPS
                </span>

                <span>
                  Gorakhpur, India
                </span>
              </div>

              <div className="flex justify-between">
                <span className="flex items-center gap-2">
                  <ShieldCheck size={20} />
                  Status
                </span>

                <span className="text-green-400">
                  Operational
                </span>
              </div>

            </div>

          </motion.div>

          {/* Right AI */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-blue-500/10 backdrop-blur-xl p-10"
          >

            <div className="w-20 h-20 rounded-full bg-orange-500/20 flex items-center justify-center">

              <Cpu size={40} className="text-orange-500" />

            </div>

            <h3 className="text-3xl font-bold mt-8">
              AI Decision Engine
            </h3>

            <p className="text-gray-300 mt-6 leading-8">
              AeroResQ uses AI models to detect people,
              identify hazards, optimize flight paths and
              generate mission insights in real time.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">

              <div className="rounded-2xl bg-white/5 p-6">
                <p className="text-4xl font-bold text-orange-500">
                  98%
                </p>
                <p className="text-gray-400 mt-2">
                  Detection Accuracy
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-6">
                <p className="text-4xl font-bold text-orange-500">
                  24/7
                </p>
                <p className="text-gray-400 mt-2">
                  Monitoring
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}