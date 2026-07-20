"use client";

import { motion } from "framer-motion";
import {
  Bell,
  BrainCircuit,
  Plane,
  MonitorSmartphone,
  Users,
  CircleCheckBig,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const workflow = [
  {
    icon: Bell,
    title: "Emergency Alert",
    description: "An emergency is detected through sensors, citizens or authorities.",
  },
  {
    icon: BrainCircuit,
    title: "AI Analysis",
    description: "AI evaluates the situation and identifies the optimal response strategy.",
  },
  {
    icon: Plane,
    title: "Drone Dispatch",
    description: "Autonomous drones are deployed to the affected area within minutes.",
  },
  {
    icon: MonitorSmartphone,
    title: "Live Monitoring",
    description: "Real-time video, thermal imaging and analytics are streamed to the command center.",
  },
  {
    icon: Users,
    title: "Rescue Coordination",
    description: "Field teams receive live intelligence and coordinate rescue operations.",
  },
  {
    icon: CircleCheckBig,
    title: "Mission Complete",
    description: "Operations conclude with reports, analytics and mission records.",
  },
];

export default function SolutionWorkflow() {
  return (
    <section className="bg-[#050816] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          badge="Workflow"
          title="How AeroResQ"
          highlight="Responds to Emergencies"
          description="Our AI-driven workflow enables faster decisions, safer operations and efficient rescue missions."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {workflow.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="relative h-full">

                  {/* Step Number */}

                  <div className="absolute right-5 top-5 text-5xl font-black text-white/5">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="mb-6 inline-flex rounded-2xl bg-orange-500/10 p-4">
                    <Icon size={34} className="text-orange-500" />
                  </div>

                  <h3 className="text-2xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {step.description}
                  </p>

                </GlassCard>
              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}