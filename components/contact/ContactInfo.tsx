"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "aeroresq0309@gmail.com",
    link: "mailto:aeroresq0309@gmail.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 88406 69968",
    link: "tel:+918840669968",
  },
  {
    icon: MapPin,
    title: "Office Address",
    value: `AERORESQ PRIVATE LIMITED
C/O SRI R. A. AGARWAL
GORAKHPUR SADAR
SAHAJANWA
GORAKHPUR - 273209
UTTAR PRADESH`,
    link: "https://maps.app.goo.gl/oeBy7jq4VegduQFZ6?g_st=ac",
  },
  {
    icon: Clock3,
    title: "Working Hours",
    value: `Monday - Friday
9:00 AM - 6:00 PM`,
    link: "",
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-[#08111f] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          badge="Contact Information"
          title="We're Always"
          highlight="Here to Help"
          description="Reach out to our team for partnerships, product demonstrations, technical support or career opportunities."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {contactInfo.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <GlassCard className="group h-full text-center transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40">

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10">

                    <Icon
                      size={32}
                      className="text-orange-500"
                    />

                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  {item.link ? (
                    <a
                      href={item.link}
                      target={
                        item.link.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      rel="noopener noreferrer"
                      className="mt-5 block whitespace-pre-line leading-7 text-gray-400 transition-colors hover:text-orange-400"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-5 whitespace-pre-line leading-7 text-gray-400">
                      {item.value}
                    </p>
                  )}

                </GlassCard>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}