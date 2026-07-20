"use client";

import { motion } from "framer-motion";
import {
  PlaneTakeoff,
  Bell,
  FileText,
  UserCheck,
  CheckCircle2,
} from "lucide-react";

const activities = [
  {
    title: "Drone Alpha deployed",
    time: "2 min ago",
    icon: PlaneTakeoff,
    color: "text-cyan-400",
  },
  {
    title: "Emergency alert received",
    time: "8 min ago",
    icon: Bell,
    color: "text-red-400",
  },
  {
    title: "Mission report generated",
    time: "20 min ago",
    icon: FileText,
    color: "text-purple-400",
  },
  {
    title: "Operator logged in",
    time: "35 min ago",
    icon: UserCheck,
    color: "text-green-400",
  },
  {
    title: "Mission completed",
    time: "1 hour ago",
    icon: CheckCircle2,
    color: "text-orange-400",
  },
];

export default function RecentActivities() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">
          Recent Activities
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Latest actions across the AeroResQ platform
        </p>
      </div>

      <div className="space-y-5">
        {activities.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4"
            >
              <div className="rounded-xl bg-white/5 p-3">
                <Icon className={item.color} size={22} />
              </div>

              <div className="flex-1">
                <h4 className="font-medium text-white">
                  {item.title}
                </h4>

                <p className="text-xs text-gray-500">
                  {item.time}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}