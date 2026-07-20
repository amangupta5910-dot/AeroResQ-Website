"use client";

import { motion } from "framer-motion";

const roadmap = [
  {
    year: "2026",
    title: "Prototype Development",
    desc: "Develop AI-powered autonomous drone prototype with thermal imaging.",
  },
  {
    year: "2027",
    title: "Pilot Deployment",
    desc: "Deploy AeroResQ drones for disaster response and emergency missions.",
  },
  {
    year: "2028",
    title: "National Expansion",
    desc: "Collaborate with government agencies, defence organizations and disaster authorities.",
  },
  {
    year: "2030",
    title: "Global Presence",
    desc: "Expand AeroResQ solutions to international humanitarian and defence sectors.",
  },
];

export default function Timeline() {
  return (
    <section className="bg-[#050816] py-28">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-20">
          <span className="uppercase tracking-[5px] text-orange-500">
            Roadmap
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Mission <span className="text-orange-500">Timeline</span>
          </h2>

          <p className="text-gray-400 mt-6">
            Our vision to revolutionize search & rescue with AI-powered drone technology.
          </p>
        </div>

        <div className="relative border-l-2 border-orange-500 pl-10">

          {roadmap.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-14 relative"
            >
              <div className="absolute -left-[50px] w-6 h-6 rounded-full bg-orange-500 border-4 border-[#050816]" />

              <span className="text-orange-500 font-bold text-xl">
                {item.year}
              </span>

              <h3 className="text-2xl font-semibold mt-2">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-3 leading-7">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}