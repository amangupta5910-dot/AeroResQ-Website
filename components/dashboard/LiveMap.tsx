"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Flame,
  Hospital,
  LocateFixed,
  MapPinned,
  Plane,
} from "lucide-react";

const markers = [
  {
    name: "Drone Alpha",
    icon: Plane,
    color: "text-cyan-400",
    top: "20%",
    left: "30%",
  },
  {
    name: "Hospital",
    icon: Hospital,
    color: "text-green-400",
    top: "35%",
    left: "70%",
  },
  {
    name: "Fire Alert",
    icon: Flame,
    color: "text-red-400",
    top: "60%",
    left: "50%",
  },
  {
    name: "Road Accident",
    icon: AlertTriangle,
    color: "text-orange-400",
    top: "75%",
    left: "20%",
  },
];

export default function LiveMap() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl"
    >
      {/* Header */}

      <div className="flex items-center justify-between border-b border-white/10 p-6">

        <div>

          <div className="flex items-center gap-3">

            <MapPinned
              size={24}
              className="text-orange-500"
            />

            <h2 className="text-2xl font-bold text-white">
              Live Mission Map
            </h2>

          </div>

          <p className="mt-2 text-gray-400">
            Real-time drone tracking & emergency monitoring.
          </p>

        </div>

        <button className="rounded-xl border border-orange-500/20 bg-orange-500/10 p-3 transition hover:bg-orange-500/20">

          <LocateFixed className="text-orange-400" />

        </button>

      </div>

      {/* Map */}

      <div className="relative h-[500px] overflow-hidden bg-gradient-to-br from-slate-950 via-[#081420] to-black">

        {/* Grid */}

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Glow */}

        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[120px]" />

        {/* Radar */}

        <motion.div
          animate={{
            scale: [0.7, 1.5],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-500/40"
        />

        <motion.div
          animate={{
            scale: [0.7, 2.2],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 1,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-500/30"
        />

        {/* Fake Route */}

        <svg className="absolute inset-0 h-full w-full">

          <motion.path
            d="M180 120 C350 150 500 280 720 200"
            stroke="#F97316"
            strokeWidth="3"
            strokeDasharray="12 10"
            fill="transparent"
            initial={{
              pathLength: 0,
            }}
            animate={{
              pathLength: 1,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />

        </svg>

        {/* Markers */}

        {markers.map((marker) => {
          const Icon = marker.icon;

          return (
            <motion.div
              key={marker.name}
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              style={{
                top: marker.top,
                left: marker.left,
              }}
              className="absolute"
            >

              <div className="rounded-full border border-white/10 bg-black/60 p-3 backdrop-blur-xl">

                <Icon
                  size={24}
                  className={marker.color}
                />

              </div>

              <p className="mt-2 whitespace-nowrap text-center text-xs text-white">

                {marker.name}

              </p>

            </motion.div>
          );
        })}

        {/* Center Drone */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >

          <div className="rounded-full border border-orange-500/30 bg-orange-500/20 p-5 backdrop-blur-xl">

            <Plane
              size={34}
              className="text-orange-400"
            />

          </div>

        </motion.div>

        {/* Coming Soon */}

        <div className="absolute bottom-5 left-5 rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">

          🚀 Leaflet + GPS + Socket.IO Ready

        </div>

      </div>

    </motion.section>
  );
}