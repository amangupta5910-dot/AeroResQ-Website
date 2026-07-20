"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const useCases = [
  {
    title: "Flood Rescue",
    description:
      "Rapid aerial assessment, victim detection and supply delivery during floods.",
    products: "Guardian + Command Center",
    image: "/images/products/guardian.png",
  },
  {
    title: "Forest Fire",
    description:
      "Thermal monitoring, hotspot detection and wildfire tracking.",
    products: "Scout + Mobile App",
    image: "/images/products/scout.png",
  },
  {
    title: "Smart Cities",
    description:
      "Traffic monitoring, surveillance and emergency coordination.",
    products: "Command Center",
    image: "/images/products/command-center.png",
  },
  {
    title: "Police & Defence",
    description:
      "Border surveillance, tactical missions and autonomous patrol.",
    products: "Fleet AI + Guardian",
    image: "/images/products/fleet-ai.png",
  },
  {
    title: "Industrial Inspection",
    description:
      "Power plants, pipelines, bridges and refinery inspections.",
    products: "Scout + Guardian",
    image: "/images/products/scout.png",
  },
  {
    title: "Search & Rescue",
    description:
      "Locate missing persons using AI detection and thermal vision.",
    products: "Scout + Mobile App",
    image: "/images/products/mobile-app.png",
  },
];

export default function UseCases() {
  return (
    <section className="bg-[#050816] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          badge="Applications"
          title="Choose the Right"
          highlight="Product for Every Mission"
          description="Every emergency is different. AeroResQ provides specialized products for every mission-critical scenario."
        />

        <div className="grid lg:grid-cols-2 gap-8">

          {useCases.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >

              <GlassCard>

                <div className="grid md:grid-cols-2 gap-6 items-center">

                  <div>

                    <h3 className="text-3xl font-bold">

                      {item.title}

                    </h3>

                    <p className="text-gray-400 mt-4 leading-7">

                      {item.description}

                    </p>

                    <div className="mt-6">

                      <span className="text-orange-500 font-semibold">

                        Recommended Products

                      </span>

                      <p className="mt-2 font-medium">

                        {item.products}

                      </p>

                    </div>

                  </div>

                  <div className="relative h-60">

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />

                  </div>

                </div>

              </GlassCard>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}