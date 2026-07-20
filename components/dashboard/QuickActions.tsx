"use client";

import { motion } from "framer-motion";
import {
  PlaneTakeoff,
  Siren,
  Radar,
  FileText,
  Radio,
  BrainCircuit,
} from "lucide-react";

const actions = [
  {
    title: "Deploy Drone",
    icon: PlaneTakeoff,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Create Mission",
    icon: Siren,
    color: "from-red-500 to-orange-500",
  },
  {
    title: "Live Tracking",
    icon: Radar,
    color: "from-green-500 to-emerald-400",
  },
  {
    title: "Generate Report",
    icon: FileText,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Emergency Broadcast",
    icon: Radio,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Run AI Scan",
    icon: BrainCircuit,
    color: "from-indigo-500 to-cyan-500",
  },
];

export default function QuickActions() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

      {/* Header */}

      <div>

        <h2 className="text-2xl font-bold text-white">
          Quick Actions
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          One-click emergency command center
        </p>

      </div>

      {/* Grid */}

      <div className="mt-8 grid grid-cols-2 gap-4">

        {actions.map((action, index) => {
          const Icon = action.icon;

          return (
            <motion.button
              key={action.title}
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                scale: 1.05,
                y: -4,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="group rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-orange-500/40"
            >
              <div
                className={`inline-flex rounded-2xl bg-gradient-to-r ${action.color} p-4`}
              >
                <Icon
                  size={28}
                  className="text-white"
                />
              </div>

              <h3 className="mt-5 font-semibold text-white group-hover:text-orange-400">
                {action.title}
              </h3>

              <p className="mt-2 text-xs text-gray-400">
                Click to initiate
              </p>
            </motion.button>
          );
        })}

      </div>
    </section>
  );
}