"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function ContactForm() {
  return (
    <section
      id="contact-form"
      className="bg-[#050816] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          badge="Get In Touch"
          title="Send Us A"
          highlight="Message"
          description="Tell us about your project, partnership opportunity, research idea or any questions you may have. Our team will get back to you within 24 hours."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <GlassCard>

            <form className="grid gap-8 md:grid-cols-2">

              {/* Full Name */}

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-gray-500 outline-none transition focus:border-orange-500"
                />
              </div>

              {/* Email */}

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-gray-500 outline-none transition focus:border-orange-500"
                />
              </div>

              {/* Company */}

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Company / Organization
                </label>

                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-gray-500 outline-none transition focus:border-orange-500"
                />
              </div>

              {/* Phone */}

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-gray-500 outline-none transition focus:border-orange-500"
                />
              </div>

              {/* Subject */}

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Subject
                </label>

                <select
                  className="w-full rounded-xl border border-white/10 bg-[#111827] px-5 py-4 text-white outline-none transition focus:border-orange-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Subject
                  </option>

                  <option>General Inquiry</option>
                  <option>Request Demo</option>
                  <option>Partnership</option>
                  <option>Careers</option>
                  <option>Technical Support</option>
                  <option>Research Collaboration</option>

                </select>
              </div>

              {/* Message */}

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Message
                </label>

                <textarea
                  rows={7}
                  placeholder="Write your message..."
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder-gray-500 outline-none transition focus:border-orange-500"
                />
              </div>

              {/* Checkbox */}

              <div className="md:col-span-2 flex items-start gap-3">

                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-1 h-5 w-5 accent-orange-500"
                />

                <label
                  htmlFor="privacy"
                  className="text-sm text-gray-400"
                >
                  I agree to the{" "}
                  <a
                    href="/privacy-policy"
                    className="text-orange-400 hover:underline"
                  >
                    Privacy Policy
                  </a>{" "}
                  and consent to AeroResQ contacting me regarding my inquiry.
                </label>

              </div>

              {/* Submit */}

              <div className="md:col-span-2">

                <PrimaryButton type="submit">
                  Send Message
                </PrimaryButton>

              </div>

            </form>

          </GlassCard>
        </motion.div>

      </div>
    </section>
  );
}