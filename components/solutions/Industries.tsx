"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Building2,
  Trees,
  Factory,
  BadgeAlert,
  LifeBuoy,
  ArrowRight,
} from "lucide-react";

import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";

const industries = [
  {
    icon: LifeBuoy,
    title: "Disaster Management",
    description:
      "Rapid response solutions for floods, earthquakes, cyclones and large-scale emergencies.",
    features: [
      "Flood Rescue",
      "Earthquake Response",
      "Emergency Supply Delivery",
    ],
  },
  {
    icon: Shield,
    title: "Defence & Border Security",
    description:
      "Autonomous surveillance, border monitoring and tactical reconnaissance missions.",
    features: [
      "Border Patrol",
      "Reconnaissance",
      "Threat Detection",
    ],
  },
  {
    icon: BadgeAlert,
    title: "Police & Law Enforcement",
    description:
      "Support law enforcement with aerial monitoring and AI-assisted investigations.",
    features: [
      "Crime Scene Monitoring",
      "Crowd Control",
      "Emergency Support",
    ],
  },
  {
    icon: Building2,
    title: "Smart Cities",
    description:
      "Real-time traffic monitoring, infrastructure inspection and public safety operations.",
    features: [
      "Traffic Monitoring",
      "Public Safety",
      "City Surveillance",
    ],
  },
  {
    icon: Factory,
    title: "Industrial Inspection",
    description:
      "Inspect power plants, oil pipelines, bridges and critical infrastructure safely.",
    features: [
      "Pipeline Inspection",
      "Power Plants",
      "Bridge Inspection",
    ],
  },
  {
    icon: Trees,
    title: "Forest & Wildlife",
    description:
      "Monitor forests, detect wildfires and protect wildlife using AI-powered drones.",
    features: [
      "Fire Detection",
      "Wildlife Monitoring",
      "Forest Surveillance",
    ],
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="bg-[#08111f] py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          badge="Industries"
          title="Solutions Built For"
          highlight="Every Critical Sector"
          description="AeroResQ combines AI, autonomous drones and mission control software to solve real-world challenges across multiple industries."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {industries.map((industry, index) => {

            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <GlassCard className="group h-full transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40">

                  <div className="mb-6 inline-flex rounded-2xl bg-orange-500/10 p-4">

                    <Icon
                      size={34}
                      className="text-orange-500"
                    />

                  </div>

                  <h3 className="text-2xl font-bold">

                    {industry.title}

                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">

                    {industry.description}

                  </p>

                  <ul className="mt-6 space-y-3">

                    {industry.features.map((feature) => (

                      <li
                        key={feature}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <span className="h-2 w-2 rounded-full bg-orange-500"></span>

                        {feature}

                      </li>

                    ))}

                  </ul>

                  <div className="mt-8 flex items-center gap-2 font-semibold text-orange-500 transition-transform duration-300 group-hover:translate-x-2">

                    Learn More

                    <ArrowRight size={18} />

                  </div>

                </GlassCard>
              </motion.div>
            );

          })}

        </div>

      </div>
    </section>
  );
}