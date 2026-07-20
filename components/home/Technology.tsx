"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cpu,
  Radar,
  Satellite,
  ShieldCheck,
  Flame,
} from "lucide-react";

const technologies = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    desc: "Real-time object detection, tracking and autonomous mission planning using Edge AI.",
  },
  {
    icon: Flame,
    title: "Thermal Imaging",
    desc: "High precision thermal vision for rescue missions and night surveillance.",
  },
  {
    icon: Satellite,
    title: "GPS Navigation",
    desc: "Accurate positioning with intelligent route optimization.",
  },
  {
    icon: Radar,
    title: "Mission Control",
    desc: "Live monitoring and command center integration.",
  },
  {
    icon: Cpu,
    title: "Edge Computing",
    desc: "On-board AI processing without cloud dependency.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Operations",
    desc: "Reliable encrypted communication for defence missions.",
  },
];

export default function Technology() {
  return (
    <section className="bg-[#07111f] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.6}}
          viewport={{once:true}}
          className="text-center mb-16"
        >

          <span className="text-orange-500 uppercase tracking-[5px]">
            Technology
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Powered by Modern
            <span className="text-orange-500"> AI Technology</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            AeroResQ integrates Artificial Intelligence,
            Thermal Vision, Edge Computing,
            GPS Navigation and Mission Control
            into one intelligent platform.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">

          {technologies.map((item,index)=>{

            const Icon=item.icon;

            return(

              <motion.div

                key={index}

                initial={{opacity:0,y:40}}

                whileInView={{opacity:1,y:0}}

                transition={{delay:index*0.15}}

                viewport={{once:true}}

                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:border-orange-500 hover:-translate-y-2 duration-300"

              >

                <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center">

                  <Icon size={34} className="text-orange-500"/>

                </div>

                <h3 className="text-2xl font-semibold mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  {item.desc}
                </p>

              </motion.div>

            )

          })}

        </div>

      </div>

    </section>
  );
}