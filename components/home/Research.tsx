"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Microscope,
  Radar,
  Cpu,
} from "lucide-react";

const research = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    desc: "Deep Learning, Object Detection, Autonomous Navigation and Computer Vision.",
  },
  {
    icon: Radar,
    title: "Thermal Analytics",
    desc: "Human detection using thermal signatures in difficult environments.",
  },
  {
    icon: Cpu,
    title: "Edge AI",
    desc: "Real-time onboard processing without cloud dependency.",
  },
  {
    icon: Microscope,
    title: "Continuous R&D",
    desc: "Building next-generation autonomous rescue technologies.",
  },
];

export default function Research() {
  return (
    <section className="bg-[#08111f] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[5px] text-orange-500">
            Research
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Research &
            <span className="text-orange-500">
              Innovation
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            AeroResQ focuses on AI research, autonomous robotics,
            thermal vision and intelligent disaster response systems.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {research.map((item,index)=>{

            const Icon=item.icon;

            return(

              <motion.div

              key={index}

              whileHover={{y:-10}}

              className="rounded-3xl bg-white/5 border border-white/10 p-8"

              >

                <Icon className="text-orange-500" size={42}/>

                <h3 className="text-2xl font-bold mt-6">

                  {item.title}

                </h3>

                <p className="text-gray-400 mt-4">

                  {item.desc}

                </p>

              </motion.div>

            )

          })}

        </div>

      </div>

    </section>
  )

}