"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Ticket,
  ArrowRight,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import PrimaryButton from "@/components/ui/PrimaryButton";

const events = [
  {
    title: "AI Disaster Response Summit 2026",
    type: "Conference",
    date: "25 Aug 2026",
    location: "New Delhi, India",
    description:
      "Join researchers, government leaders and innovators to discuss the future of AI-powered disaster management.",
  },
  {
    title: "AeroResQ Innovation Hackathon",
    type: "Hackathon",
    date: "12 Sep 2026",
    location: "Bengaluru, India",
    description:
      "Build innovative AI and drone solutions with mentors from academia and industry.",
  },
  {
    title: "Autonomous Drone Workshop",
    type: "Workshop",
    date: "05 Oct 2026",
    location: "Virtual Event",
    description:
      "Hands-on workshop covering computer vision, autonomous navigation and rescue drone technologies.",
  },
];

export default function Events() {
  return (
    <section className="bg-[#050816] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          badge="Events"
          title="Meet AeroResQ"
          highlight="Around The World"
          description="Join our conferences, workshops and innovation events to explore the future of AI-powered emergency response."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {events.map((event, index) => (

            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >

              <GlassCard className="group h-full flex flex-col">

                <span className="w-fit rounded-full bg-orange-500/10 px-3 py-1 text-sm font-semibold text-orange-500">
                  {event.type}
                </span>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {event.title}
                </h3>

                <div className="mt-6 space-y-3 text-gray-400">

                  <div className="flex items-center gap-2">
                    <CalendarDays
                      size={18}
                      className="text-orange-500"
                    />
                    {event.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin
                      size={18}
                      className="text-orange-500"
                    />
                    {event.location}
                  </div>

                </div>

                <p className="mt-6 flex-1 leading-7 text-gray-400">
                  {event.description}
                </p>

                <div className="mt-8">

                  <PrimaryButton href="/contact">

                    <div className="flex items-center gap-2">

                      <Ticket size={18} />

                      Register Now

                      <ArrowRight size={18} />

                    </div>

                  </PrimaryButton>

                </div>

              </GlassCard>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}