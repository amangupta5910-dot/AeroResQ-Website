"use client";

import { motion } from "framer-motion";
import {
  ScanSearch,
  Eye,
  Cpu,
  Activity,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const detections = [
  {
    label: "👤 Person",
    confidence: "98%",
    color: "text-green-400",
  },
  {
    label: "🚗 Vehicle",
    confidence: "96%",
    color: "text-blue-400",
  },
  {
    label: "🔥 Fire",
    confidence: "99%",
    color: "text-red-400",
  },
  {
    label: "🌳 Tree",
    confidence: "95%",
    color: "text-emerald-400",
  },
];

export default function ComputerVision() {
  return (
    <section className="bg-[#08111f] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          badge="Computer Vision"
          title="Real-Time AI"
          highlight="Detection"
          description="Our computer vision engine continuously analyses live drone footage to identify people, vehicles, fire and hazards with high confidence."
        />

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Camera Feed */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <GlassCard>

              <div className="flex items-center justify-between mb-6">

                <div className="flex items-center gap-3">

                  <Eye className="text-orange-500"/>

                  <h3 className="text-2xl font-bold">

                    Live Camera Feed

                  </h3>

                </div>

                <span className="text-green-400">
                  ● LIVE
                </span>

              </div>

              <div className="relative h-96 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 overflow-hidden">

                {/* Detection Boxes */}

                <div className="absolute top-12 left-12 border-2 border-green-400 w-28 h-36 rounded-md" />

                <div className="absolute top-8 left-12 text-green-400 text-sm font-semibold">
                  Person 98%
                </div>

                <div className="absolute bottom-20 right-16 border-2 border-red-400 w-32 h-24 rounded-md" />

                <div className="absolute bottom-12 right-16 text-red-400 text-sm font-semibold">
                  Fire 99%
                </div>

              </div>

            </GlassCard>

          </motion.div>

          {/* Detection Panel */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <GlassCard>

              <div className="flex items-center gap-3 mb-8">

                <ScanSearch className="text-orange-500"/>

                <h3 className="text-2xl font-bold">

                  Detection Analytics

                </h3>

              </div>

              <div className="space-y-5">

                {detections.map((item,index)=>(

                  <div
                    key={index}
                    className="flex justify-between items-center rounded-xl bg-white/5 p-4"
                  >

                    <span className="font-semibold">

                      {item.label}

                    </span>

                    <span className={item.color}>

                      {item.confidence}

                    </span>

                  </div>

                ))}

              </div>

              <div className="grid grid-cols-2 gap-5 mt-10">

                <div className="rounded-xl bg-white/5 p-5">

                  <Cpu className="text-orange-500"/>

                  <h4 className="text-3xl font-bold mt-4">

                    YOLOv11

                  </h4>

                  <p className="text-gray-400 mt-2">

                    Detection Model

                  </p>

                </div>

                <div className="rounded-xl bg-white/5 p-5">

                  <Activity className="text-orange-500"/>

                  <h4 className="text-3xl font-bold mt-4">

                    60 FPS

                  </h4>

                  <p className="text-gray-400 mt-2">

                    Live Processing

                  </p>

                </div>

              </div>

            </GlassCard>

          </motion.div>

        </div>

      </div>

    </section>
  );
}