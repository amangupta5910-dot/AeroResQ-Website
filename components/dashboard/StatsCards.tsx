"use client";

import { motion } from "framer-motion";
import {
  Plane,
  Siren,
  HeartPulse,
  BrainCircuit,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "Active Drones",
    value: 128,
    change: "+12%",
    icon: Plane,
    color: "text-cyan-400",
    progress: 82,
  },
  {
    title: "Active Missions",
    value: 18,
    change: "+5%",
    icon: Siren,
    color: "text-red-400",
    progress: 65,
  },
  {
    title: "Lives Saved",
    value: 235,
    change: "+24%",
    icon: HeartPulse,
    color: "text-green-400",
    progress: 91,
  },
  {
    title: "AI Accuracy",
    value: "98.7%",
    change: "+1.4%",
    icon: BrainCircuit,
    color: "text-orange-400",
    progress: 98,
  },
];

export default function StatsCards() {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
            whileHover={{
              y: -6,
            }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            {/* Top */}

            <div className="flex items-center justify-between">

              <div
                className={`rounded-2xl bg-white/5 p-3 ${item.color}`}
              >
                <Icon size={28} />
              </div>

              <div className="flex items-center gap-1 text-sm font-semibold text-green-400">

                <TrendingUp size={16} />

                {item.change}

              </div>

            </div>

            {/* Value */}

            <h2 className="mt-8 text-4xl font-black text-white">
              {item.value}
            </h2>

            <p className="mt-2 text-gray-400">
              {item.title}
            </p>

            {/* Progress */}

            <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">

              <motion.div
                initial={{ width: 0 }}
                whileInView={{
                  width: `${item.progress}%`,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: index * 0.15,
                }}
                className="h-full rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400"
              />

            </div>

            <div className="mt-2 flex justify-between text-xs text-gray-500">

              <span>Performance</span>

              <span>{item.progress}%</span>

            </div>

          </motion.div>
        );
      })}
    </section>
  );
}