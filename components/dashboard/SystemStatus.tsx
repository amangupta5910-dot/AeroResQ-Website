"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Cpu,
  Database,
  Wifi,
  ShieldCheck,
} from "lucide-react";

const systems = [
  {
    name: "AI Engine",
    status: "Operational",
    icon: Cpu,
    color: "text-green-400",
  },
  {
    name: "Database",
    status: "Connected",
    icon: Database,
    color: "text-cyan-400",
  },
  {
    name: "Network",
    status: "Stable",
    icon: Wifi,
    color: "text-blue-400",
  },
  {
    name: "Security",
    status: "Protected",
    icon: ShieldCheck,
    color: "text-orange-400",
  },
];

export default function SystemStatus() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-white">
          System Status
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Overall infrastructure health
        </p>

      </div>

      <div className="space-y-4">

        {systems.map((system, index) => {
          const Icon = system.icon;

          return (
            <motion.div
              key={system.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-4"
            >
              <div className="flex items-center gap-3">

                <Icon
                  className={system.color}
                  size={22}
                />

                <span className="text-white">
                  {system.name}
                </span>

              </div>

              <div className="flex items-center gap-2">

                <CheckCircle2
                  size={18}
                  className="text-green-400"
                />

                <span className="text-sm text-green-400">
                  {system.status}
                </span>

              </div>
            </motion.div>
          );
        })}

      </div>

      <div className="mt-6 rounded-2xl border border-green-500/20 bg-green-500/10 p-4 text-center">

        <h3 className="text-lg font-bold text-green-400">
          All Systems Operational
        </h3>

        <p className="mt-1 text-sm text-gray-400">
          No incidents reported in the last 24 hours.
        </p>

      </div>

    </section>
  );
}