"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "AI Research Engineer",
    image: "/images/team/team-1.jpg",
    quote:
      "Working at AeroResQ has allowed me to build AI solutions that directly contribute to saving lives. Every day brings exciting challenges and meaningful impact.",
  },
  {
    name: "Priya Verma",
    role: "Frontend Developer",
    image: "/images/team/team-2.jpg",
    quote:
      "The culture here encourages creativity, collaboration and continuous learning. I've grown tremendously as an engineer since joining AeroResQ.",
  },
  {
    name: "Rahul Mehta",
    role: "Robotics Engineer",
    image: "/images/team/team-3.jpg",
    quote:
      "From autonomous drones to intelligent rescue systems, every project pushes innovation forward. It's inspiring to work with such a talented team.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#08111f] py-28">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          badge="Testimonials"
          title="What Our"
          highlight="Team Says"
          description="Hear from the people who are building the future of AI-powered emergency response."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {testimonials.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full">

                <div className="flex items-center gap-4">

                  <Image
                    src={person.image}
                    alt={person.name}
                    width={70}
                    height={70}
                    className="rounded-full object-cover"
                  />

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {person.name}
                    </h3>

                    <p className="text-sm text-orange-500">
                      {person.role}
                    </p>
                  </div>

                </div>

                <div className="mt-6 flex gap-1">

                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-orange-500 text-orange-500"
                    />
                  ))}

                </div>

                <p className="mt-6 leading-7 text-gray-400 italic">
                  "{person.quote}"
                </p>

              </GlassCard>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}