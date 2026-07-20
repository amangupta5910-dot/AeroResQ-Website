"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Target,
  Timer,
  TrendingUp,
} from "lucide-react";

const analytics = [
  {
    title: "AI Accuracy",
    value: "98.7%",
    progress: 98,
    icon: BrainCircuit,
    color: "from-orange-500 to-yellow-400",
  },
  {
    title: "Mission Success",
    value: "94%",
    progress: 94,
    icon: Target,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Response Time",
    value: "2.8 min",
    progress: 78,
    icon: Timer,
    color: "from-green-500 to-emerald-400",
  },
];

export default function AIAnalytics() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            AI Analytics
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Live AI performance insights
          </p>

        </div>

        <TrendingUp
          className="text-green-400"
          size={24}
        />

      </div>

      {/* Circular Dashboard */}

      <div className="mt-8 flex justify-center">

        <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent">

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-2 rounded-full border border-dashed border-orange-400/30"
          />

          <div className="text-center">

            <p className="text-xs uppercase tracking-[3px] text-gray-400">
              AI Score
            </p>

            <h2 className="mt-2 text-5xl font-black text-orange-400">
              98%
            </h2>

          </div>

        </div>

      </div>

      {/* Metrics */}

      <div className="mt-10 space-y-6">

        {analytics.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
              }}
            >

              <div className="mb-2 flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <Icon
                    size={20}
                    className="text-orange-400"
                  />

                  <span className="text-white">
                    {item.title}
                  </span>

                </div>

                <span className="font-semibold text-white">
                  {item.value}
                </span>

              </div>

              <div className="h-2 overflow-hidden rounded-full bg-white/10">

                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: `${item.progress}%`,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                />

              </div>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}