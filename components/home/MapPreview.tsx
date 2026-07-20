"use client";

import { motion } from "framer-motion";
import {
  MapPinned,
  Radar,
  ShieldCheck,
  Navigation,
  Plane,
} from "lucide-react";

const missions = [
  {
    city: "Gorakhpur",
    status: "Active Rescue",
    color: "bg-green-500",
  },
  {
    city: "Lucknow",
    status: "Monitoring",
    color: "bg-yellow-500",
  },
  {
    city: "Delhi",
    status: "Standby",
    color: "bg-blue-500",
  },
];

export default function MapPreview() {
  return (
    <section className="bg-[#050816] py-28">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[5px] text-orange-500">
            Mission Map
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Interactive
            <span className="text-orange-500"> Mission Overview</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto">
            Track rescue missions, monitor drone deployment and
            visualize emergency operations across multiple locations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

            <div className="flex items-center justify-between mb-8">

              <h3 className="text-2xl font-bold">
                Mission Regions
              </h3>

              <Radar className="text-orange-500" />

            </div>

            <div className="space-y-6">

              {missions.map((item, index) => (

                <div
                  key={index}
                  className="flex justify-between items-center rounded-xl bg-white/5 p-4"
                >

                  <div>

                    <h4 className="font-semibold">
                      {item.city}
                    </h4>

                    <p className="text-gray-400 text-sm">
                      {item.status}
                    </p>

                  </div>

                  <div className={`w-4 h-4 rounded-full ${item.color}`} />

                </div>

              ))}

            </div>

          </div>

          {/* Right Side */}

          <div className="rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-blue-500/10 p-8 relative overflow-hidden">

            <div className="absolute inset-0 opacity-10">

              <div className="w-full h-full bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] bg-[size:25px_25px]" />

            </div>

            <div className="relative">

              <div className="flex justify-between mb-10">

                <h3 className="text-2xl font-bold">
                  Drone Network
                </h3>

                <Plane className="text-orange-500" />
              </div>

              <div className="grid grid-cols-2 gap-6">

                <div className="rounded-2xl bg-white/5 p-6">

                  <Navigation className="text-orange-500" />

                  <h4 className="mt-4 text-xl font-semibold">

                    18 Active

                  </h4>

                  <p className="text-gray-400 mt-2">

                    Drones Online

                  </p>

                </div>

                <div className="rounded-2xl bg-white/5 p-6">

                  <MapPinned className="text-orange-500" />

                  <h4 className="mt-4 text-xl font-semibold">

                    6 Regions

                  </h4>

                  <p className="text-gray-400 mt-2">

                    Covered

                  </p>

                </div>

                <div className="rounded-2xl bg-white/5 p-6">

                  <ShieldCheck className="text-orange-500" />

                  <h4 className="mt-4 text-xl font-semibold">

                    Secure

                  </h4>

                  <p className="text-gray-400 mt-2">

                    Communication

                  </p>

                </div>

                <div className="rounded-2xl bg-white/5 p-6">

                  <Radar className="text-orange-500" />

                  <h4 className="mt-4 text-xl font-semibold">

                    Live

                  </h4>

                  <p className="text-gray-400 mt-2">

                    Tracking

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}