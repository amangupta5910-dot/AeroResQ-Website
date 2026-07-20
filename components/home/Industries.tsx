"use client";

import { Shield, Trees, Building2, Ambulance, Factory, Waves } from "lucide-react";

const industries = [
  {
    icon: Shield,
    title: "Defence",
    desc: "Border surveillance, tactical operations and national security.",
  },
  {
    icon: Ambulance,
    title: "Emergency Response",
    desc: "Rapid search & rescue with AI-powered autonomous drones.",
  },
  {
    icon: Trees,
    title: "Forest Monitoring",
    desc: "Wildfire detection and environmental protection.",
  },
  {
    icon: Building2,
    title: "Smart Cities",
    desc: "Urban monitoring and public safety management.",
  },
  {
    icon: Factory,
    title: "Industrial Safety",
    desc: "Inspection of hazardous and restricted industrial areas.",
  },
  {
    icon: Waves,
    title: "Flood & Disaster",
    desc: "Rescue operations during floods, earthquakes and disasters.",
  },
];

export default function Industries() {
  return (
    <section className="bg-[#07111f] py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="uppercase tracking-[5px] text-orange-500">
            Industries
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Industries We <span className="text-orange-500">Serve</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            AeroResQ solutions are designed for defence, disaster response,
            industrial inspection and smart infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-orange-500 transition duration-300"
              >
                <Icon size={40} className="text-orange-500" />

                <h3 className="text-2xl font-semibold mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}