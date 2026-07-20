"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  MapPin,
  Plane,
} from "lucide-react";

const missions = [
  {
    id: "MS-1024",
    title: "Flood Rescue",
    drone: "Drone Alpha",
    location: "Gorakhpur",
    status: "In Progress",
    progress: 72,
  },
  {
    id: "MS-1025",
    title: "Road Accident",
    drone: "Drone Beta",
    location: "Lucknow",
    status: "Dispatched",
    progress: 45,
  },
  {
    id: "MS-1026",
    title: "Forest Fire",
    drone: "Drone Gamma",
    location: "Dehradun",
    status: "Critical",
    progress: 90,
  },
];

export default function ActiveMissions() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Active Missions
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Live emergency response operations
          </p>

        </div>

        <button className="rounded-xl border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400 transition hover:bg-orange-500/20">

          View All

        </button>

      </div>

      {/* Mission List */}

      <div className="mt-8 space-y-5">

        {missions.map((mission, index) => (

          <motion.div
            key={mission.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.08,
            }}
            whileHover={{
              scale: 1.02,
            }}
            className="rounded-2xl border border-white/10 bg-black/20 p-5"
          >

            {/* Top */}

            <div className="flex items-start justify-between">

              <div>

                <span className="text-xs text-orange-400">

                  {mission.id}

                </span>

                <h3 className="mt-1 text-lg font-semibold text-white">

                  {mission.title}

                </h3>

              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  mission.status === "Critical"
                    ? "bg-red-500/20 text-red-400"
                    : mission.status === "In Progress"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-yellow-500/20 text-yellow-400"
                }`}
              >

                {mission.status}

              </span>

            </div>

            {/* Info */}

            <div className="mt-5 space-y-3 text-sm text-gray-400">

              <div className="flex items-center gap-2">

                <Plane
                  size={16}
                  className="text-cyan-400"
                />

                {mission.drone}

              </div>

              <div className="flex items-center gap-2">

                <MapPin
                  size={16}
                  className="text-orange-400"
                />

                {mission.location}

              </div>

              <div className="flex items-center gap-2">

                <Clock3
                  size={16}
                  className="text-green-400"
                />

                Last updated 2 mins ago

              </div>

            </div>

            {/* Progress */}

            <div className="mt-6">

              <div className="mb-2 flex items-center justify-between text-sm">

                <span className="text-gray-400">
                  Mission Progress
                </span>

                <span className="font-semibold text-white">
                  {mission.progress}%
                </span>

              </div>

              <div className="h-2 overflow-hidden rounded-full bg-white/10">

                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: `${mission.progress}%`,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-orange-500 to-yellow-400"
                />

              </div>

            </div>

            {/* Footer */}

            <button className="mt-6 flex items-center gap-2 text-sm font-medium text-orange-400 transition hover:text-orange-300">

              View Mission

              <ArrowRight size={16} />

            </button>

          </motion.div>

        ))}

      </div>

    </section>
  );
}