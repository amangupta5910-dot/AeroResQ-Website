"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Flame,
  ShieldAlert,
  Waves,
  ArrowRight,
} from "lucide-react";

const alerts = [
  {
    id: "ALT-001",
    title: "Forest Fire Detected",
    location: "Dehradun",
    level: "Critical",
    icon: Flame,
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    id: "ALT-002",
    title: "Flash Flood Warning",
    location: "Assam",
    level: "High",
    icon: Waves,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    id: "ALT-003",
    title: "Major Road Accident",
    location: "Lucknow",
    level: "Medium",
    icon: AlertTriangle,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    id: "ALT-004",
    title: "Chemical Gas Leak",
    location: "Mumbai",
    level: "Critical",
    icon: ShieldAlert,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
];

export default function EmergencyAlerts() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Emergency Alerts
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            AI detected incidents across monitored regions
          </p>

        </div>

        <div className="rounded-xl bg-red-500/10 px-3 py-2 text-sm font-semibold text-red-400">

          4 Active

        </div>

      </div>

      {/* Alerts */}

      <div className="mt-8 space-y-4">

        {alerts.map((alert, index) => {
          const Icon = alert.icon;

          return (
            <motion.div
              key={alert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                scale: 1.02,
              }}
              className="rounded-2xl border border-white/10 bg-black/20 p-5"
            >

              <div className="flex items-start justify-between">

                <div className="flex gap-4">

                  <div
                    className={`rounded-2xl p-3 ${alert.bg}`}
                  >

                    <Icon
                      size={24}
                      className={alert.color}
                    />

                  </div>

                  <div>

                    <h3 className="font-semibold text-white">
                      {alert.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-400">
                      {alert.location}
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Alert ID : {alert.id}
                    </p>

                  </div>

                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    alert.level === "Critical"
                      ? "bg-red-500/20 text-red-400"
                      : alert.level === "High"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-blue-500/20 text-blue-400"
                  }`}
                >
                  {alert.level}
                </span>

              </div>

              {/* Footer */}

              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">

                <span className="text-xs text-gray-500">
                  Updated 1 minute ago
                </span>

                <button className="flex items-center gap-2 text-sm font-medium text-orange-400 transition hover:text-orange-300">

                  View Details

                  <ArrowRight size={16} />

                </button>

              </div>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}