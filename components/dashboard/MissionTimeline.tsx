"use client";

import { motion } from "framer-motion";
import {
  Bell,
  PlaneTakeoff,
  MapPin,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

const timeline = [
  {
    title: "Emergency Alert Received",
    time: "10:12 AM",
    icon: Bell,
    color: "text-red-400",
    bg: "bg-red-500/10",
    completed: true,
  },
  {
    title: "Drone Dispatched",
    time: "10:14 AM",
    icon: PlaneTakeoff,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    completed: true,
  },
  {
    title: "Victim Located",
    time: "10:19 AM",
    icon: MapPin,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    completed: true,
  },
  {
    title: "Medical Assistance",
    time: "10:24 AM",
    icon: HeartHandshake,
    color: "text-green-400",
    bg: "bg-green-500/10",
    completed: false,
  },
  {
    title: "Mission Completed",
    time: "--:--",
    icon: CheckCircle2,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    completed: false,
  },
];

export default function MissionTimeline() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

      {/* Header */}

      <div>

        <h2 className="text-2xl font-bold text-white">
          Mission Timeline
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Live mission progress updates
        </p>

      </div>

      {/* Timeline */}

      <div className="relative mt-8">

        {/* Vertical Line */}

        <div className="absolute left-6 top-0 h-full w-px bg-white/10" />

        <div className="space-y-8">

          {timeline.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="relative flex gap-5"
              >

                {/* Icon */}

                <div
                  className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full ${item.bg}`}
                >

                  <Icon
                    size={22}
                    className={item.color}
                  />

                </div>

                {/* Content */}

                <div className="flex-1 rounded-2xl border border-white/10 bg-black/20 p-4">

                  <div className="flex items-center justify-between">

                    <h3 className="font-semibold text-white">
                      {item.title}
                    </h3>

                    <span className="text-xs text-gray-500">
                      {item.time}
                    </span>

                  </div>

                  <div className="mt-3 flex items-center justify-between">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        item.completed
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {item.completed
                        ? "Completed"
                        : "Pending"}
                    </span>

                    {item.completed && (
                      <CheckCircle2
                        size={18}
                        className="text-green-400"
                      />
                    )}

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}