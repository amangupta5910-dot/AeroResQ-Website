"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const faqs = [
  {
    question: "How can I request a product demo?",
    answer:
      "Fill out our contact form and choose 'Request Demo' as the subject. Our team will contact you within 24 hours to schedule a personalized demonstration.",
  },
  {
    question: "Do you offer internship opportunities?",
    answer:
      "Yes. AeroResQ offers internship opportunities in AI/ML, Robotics, Full Stack Development, Computer Vision and Data Science. Visit our Careers page to explore available positions.",
  },
  {
    question: "Can organizations partner with AeroResQ?",
    answer:
      "Absolutely. We welcome partnerships with government agencies, research institutions, universities, NGOs and private organizations to develop innovative emergency response solutions.",
  },
  {
    question: "How can I contact technical support?",
    answer:
      "You can email us at aeroresq0309@gmail.com or submit your query using the contact form. Our support team usually responds within one business day.",
  },
  {
    question: "Do you collaborate on research projects?",
    answer:
      "Yes. We actively collaborate with universities, innovation labs and research organizations on AI, robotics, disaster management and healthcare technologies.",
  },
  {
    question: "Where is AeroResQ located?",
    answer:
      "Our registered headquarters is located in Gorakhpur, Uttar Pradesh, India. You can find our complete office address in the Office Locations section above.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#050816] py-28">
      <div className="mx-auto max-w-5xl px-6">

        <SectionHeading
          badge="Frequently Asked Questions"
          title="Have Questions?"
          highlight="We've Got Answers"
          description="Find answers to the most commonly asked questions about AeroResQ, our services, partnerships and career opportunities."
        />

        <div className="mt-16 space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <GlassCard className="overflow-hidden">

                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between text-left"
                  >
                    <h3 className="text-lg font-semibold text-white md:text-xl">
                      {faq.question}
                    </h3>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown
                        size={24}
                        className="text-orange-500"
                      />
                    </motion.div>

                  </button>

                  <AnimatePresence>

                    {isOpen && (

                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >

                        <p className="pt-6 leading-8 text-gray-400">
                          {faq.answer}
                        </p>

                      </motion.div>

                    )}

                  </AnimatePresence>

                </GlassCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}