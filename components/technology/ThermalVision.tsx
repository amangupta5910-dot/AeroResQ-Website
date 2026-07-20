"use client";

import { motion } from "framer-motion";
import { Camera, Flame, Eye } from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

export default function ThermalVision() {
  return (
    <section className="bg-[#050816] py-28">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          badge="Thermal Imaging"
          title="Seeing Beyond"
          highlight="Visible Light"
          description="Thermal imaging enables AeroResQ to detect heat signatures even in darkness, smoke and low-visibility environments."
        />

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Normal Camera */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard>

              <div className="flex items-center gap-3 mb-6">
                <Camera className="text-blue-400" />
                <h3 className="text-2xl font-bold">
                  Standard Camera
                </h3>
              </div>

              <div className="h-72 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-gray-400 text-lg">
                Visible RGB View
              </div>

              <ul className="mt-6 space-y-3 text-gray-400">
                <li>❌ Limited at Night</li>
                <li>❌ Smoke Reduces Visibility</li>
                <li>❌ Difficult Human Detection</li>
              </ul>

            </GlassCard>
          </motion.div>

          {/* Thermal Camera */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="border-orange-500/30">

              <div className="flex items-center gap-3 mb-6">
                <Flame className="text-orange-500" />
                <h3 className="text-2xl font-bold">
                  Thermal Vision
                </h3>
              </div>

              <div className="h-72 rounded-2xl bg-gradient-to-br from-red-500 via-orange-500 to-yellow-400 flex items-center justify-center">

                <Eye size={80} className="text-white" />

              </div>

              <ul className="mt-6 space-y-3 text-gray-300">
                <li>✅ Human Heat Detection</li>
                <li>✅ Animal Heat Detection</li>
                <li>✅ Night-Time Operation</li>
                <li>✅ Smoke & Fog Visibility</li>
              </ul>

            </GlassCard>
          </motion.div>

        </div>

        {/* Bottom Stats */}

        <div className="grid md:grid-cols-3 gap-6 mt-14">

          <GlassCard>
            <h3 className="text-4xl font-bold text-orange-500">
              24×7
            </h3>
            <p className="text-gray-400 mt-3">
              Continuous Monitoring
            </p>
          </GlassCard>

          <GlassCard>
            <h3 className="text-4xl font-bold text-orange-500">
              ±0.5°C
            </h3>
            <p className="text-gray-400 mt-3">
              Temperature Sensitivity
            </p>
          </GlassCard>

          <GlassCard>
            <h3 className="text-4xl font-bold text-orange-500">
              AI Fusion
            </h3>
            <p className="text-gray-400 mt-3">
              RGB + Thermal Analysis
            </p>
          </GlassCard>

        </div>

      </div>
    </section>
  );
}