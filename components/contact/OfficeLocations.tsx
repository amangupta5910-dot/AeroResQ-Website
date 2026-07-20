"use client";

import { motion } from "framer-motion";
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Navigation,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function OfficeLocations() {
  return (
    <section className="bg-[#08111f] py-28">

      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          badge="Our Office"
          title="Visit Our"
          highlight="Headquarters"
          description="Our registered office is located in Uttar Pradesh, India. We welcome collaboration opportunities, business inquiries and innovation partnerships."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* Office Details */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="h-full">

              <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-orange-500/10 p-4">
                  <Building2
                    size={34}
                    className="text-orange-500"
                  />
                </div>

                <div>

                  <h3 className="text-3xl font-bold text-white">
                    AeroResQ Private Limited
                  </h3>

                  <p className="text-orange-400">
                    Registered Headquarters
                  </p>

                </div>

              </div>

              <div className="mt-10 space-y-8">

                <div className="flex gap-4">

                  <MapPin
                    className="mt-1 text-orange-500"
                    size={22}
                  />

                  <p className="whitespace-pre-line leading-7 text-gray-400">
{`AERORESQ PRIVATE LIMITED
C/O SRI R. A. AGARWAL
GORAKHPUR SADAR
SAHAJANWA
GORAKHPUR - 273209
UTTAR PRADESH
INDIA`}
                  </p>

                </div>

                <div className="flex items-center gap-4">

                  <Phone
                    size={22}
                    className="text-orange-500"
                  />

                  <a
                    href="tel:+918840669968"
                    className="text-gray-300 hover:text-orange-400"
                  >
                    +91 88406 69968
                  </a>

                </div>

                <div className="flex items-center gap-4">

                  <Mail
                    size={22}
                    className="text-orange-500"
                  />

                  <a
                    href="mailto:aeroresq0309@gmail.com"
                    className="text-gray-300 hover:text-orange-400"
                  >
                    aeroresq0309@gmail.com
                  </a>

                </div>

              </div>

              <div className="mt-10">

                <PrimaryButton
                  href="https://maps.app.goo.gl/oeBy7jq4VegduQFZ6?g_st=ac"
                  target="_blank"
                >
                  <div className="flex items-center gap-2">

                    <Navigation size={18} />

                    Open in Google Maps

                  </div>

                </PrimaryButton>

              </div>

            </GlassCard>

          </motion.div>

          {/* Google Map */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="overflow-hidden rounded-3xl border border-white/10">

              <iframe
                title="AeroResQ Office Location"
                src="https://maps.app.goo.gl/oeBy7jq4VegduQFZ6?g_st=ac"
                width="100%"
                height="550"
                loading="lazy"
                className="border-0"
              />

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}