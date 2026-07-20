"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="bg-[#050816] py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <span className="uppercase tracking-[5px] text-orange-500">
            Mission & Vision
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Driving Innovation for a
            <span className="text-orange-500"> Safer Tomorrow</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Our purpose is to build intelligent autonomous systems that
            empower emergency responders with faster decisions and smarter
            rescue capabilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Mission */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-orange-500/5 p-10"
          >
            <Target className="text-orange-500" size={50} />

            <h3 className="text-3xl font-bold mt-8">
              Our Mission
            </h3>

            <p className="text-gray-400 mt-6 leading-8">
              To revolutionize disaster response through Artificial
              Intelligence, Computer Vision and autonomous drone technology,
              enabling faster search, accurate detection and safer rescue
              operations.
            </p>

            <ul className="mt-8 space-y-3 text-gray-300">
              <li>✓ AI-Powered Detection</li>
              <li>✓ Faster Emergency Response</li>
              <li>✓ Human-Centered Innovation</li>
              <li>✓ Reliable Autonomous Systems</li>
            </ul>
          </motion.div>

          {/* Vision */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-blue-500/5 p-10"
          >
            <Eye className="text-blue-400" size={50} />

            <h3 className="text-3xl font-bold mt-8">
              Our Vision
            </h3>

            <p className="text-gray-400 mt-6 leading-8">
              To become a global leader in AI-driven rescue technologies,
              creating intelligent systems that save lives, protect
              communities and transform emergency response worldwide.
            </p>

            <ul className="mt-8 space-y-3 text-gray-300">
              <li>✓ Global Impact</li>
              <li>✓ Sustainable Innovation</li>
              <li>✓ Smart Public Safety</li>
              <li>✓ Future-Ready Technology</li>
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}