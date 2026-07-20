"use client";

import { motion } from "framer-motion";
import {
  BatteryCharging,
  Radar,
  MapPinned,
  Cpu,
  Wifi,
  CloudSun,
  Activity,
  ShieldCheck,
} from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="bg-[#08111f] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
          className="text-center mb-20"
        >

          <span className="uppercase tracking-[5px] text-orange-500">
            Dashboard
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Mission Analytics
            <span className="text-orange-500"> Dashboard</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto">
            Monitor every drone, every mission and every rescue
            operation from one intelligent command dashboard.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left */}

          <div className="space-y-6">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

              <div className="flex justify-between">

                <span className="flex items-center gap-2">
                  <BatteryCharging size={20}/>
                  Battery
                </span>

                <span className="text-green-400">
                  92%
                </span>

              </div>

              <div className="w-full bg-gray-700 rounded-full h-3 mt-5">

                <div className="bg-green-500 h-3 rounded-full w-[92%]"/>

              </div>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

              <div className="flex items-center gap-2 mb-5">

                <Wifi/>

                Signal Strength

              </div>

              <div className="text-3xl font-bold text-green-400">

                Excellent

              </div>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

              <div className="flex items-center gap-2 mb-5">

                <CloudSun/>

                Weather

              </div>

              <div className="text-3xl font-bold">

                29°C

              </div>

              <p className="text-gray-400 mt-2">

                Clear Sky

              </p>

            </div>

          </div>

          {/* Center */}

          <div className="rounded-3xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-blue-500/10 p-8">

            <div className="flex justify-between">

              <h3 className="text-2xl font-bold">

                Live Mission

              </h3>

              <span className="text-green-400">

                ONLINE

              </span>

            </div>

            <div className="mt-10 space-y-6">

              <div className="flex justify-between">

                <span className="flex items-center gap-2">

                  <Radar/>

                  Drone

                </span>

                <span>ARQ-01</span>

              </div>

              <div className="flex justify-between">

                <span className="flex items-center gap-2">

                  <MapPinned/>

                  Location

                </span>

                <span>Gorakhpur</span>

              </div>

              <div className="flex justify-between">

                <span className="flex items-center gap-2">

                  <ShieldCheck/>

                  Status

                </span>

                <span className="text-green-400">

                  Operational

                </span>

              </div>

              <div className="flex justify-between">

                <span className="flex items-center gap-2">

                  <Cpu/>

                  AI Model

                </span>

                <span>YOLOv11</span>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="space-y-6">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

              <Activity className="text-orange-500"/>

              <h3 className="mt-5 text-4xl font-bold">

                1,248

              </h3>

              <p className="text-gray-400">

                Objects Detected

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

              <h3 className="text-4xl font-bold text-orange-500">

                98.4%

              </h3>

              <p className="text-gray-400 mt-2">

                AI Accuracy

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

              <h3 className="text-4xl font-bold text-orange-500">

                18

              </h3>

              <p className="text-gray-400 mt-2">

                Active Missions

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}