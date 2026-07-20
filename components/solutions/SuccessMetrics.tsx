"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import SectionHeading from "@/components/ui/SectionHeading";

const metrics = [
  {
    value: 99.2,
    suffix: "%",
    title: "Mission Accuracy",
  },
  {
    value: 45,
    suffix: "%",
    title: "Faster Response",
  },
  {
    value: 500,
    suffix: "+",
    title: "Successful Missions",
  },
  {
    value: 24,
    suffix: "×7",
    title: "Monitoring",
  },
  {
    value: 100,
    suffix: " KM",
    title: "Operational Range",
  },
  {
    value: 6,
    suffix: "+",
    title: "Industries Served",
  },
];

export default function SuccessMetrics() {
  return (
    <section className="bg-[#08111f] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          badge="Impact"
          title="Mission Success"
          highlight="By The Numbers"
          description="Designed to deliver intelligent, fast and reliable emergency response across mission-critical environments."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {metrics.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl hover:border-orange-500/40 transition-all"
            >

              <h2 className="text-5xl font-black text-orange-500">

                <CountUp
                  end={item.value}
                  duration={2.5}
                  decimals={item.value % 1 ? 1 : 0}
                />

                {item.suffix}

              </h2>

              <p className="mt-4 text-lg text-gray-300">

                {item.title}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}