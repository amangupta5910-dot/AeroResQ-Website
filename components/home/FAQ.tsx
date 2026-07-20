"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is AeroResQ?",
    answer:
      "AeroResQ is an AI-powered autonomous drone platform designed for disaster response, defence surveillance and emergency rescue missions.",
  },
  {
    question: "How does AeroResQ use AI?",
    answer:
      "It combines computer vision, thermal imaging and edge AI to detect people, hazards and optimize rescue operations.",
  },
  {
    question: "Can AeroResQ operate at night?",
    answer:
      "Yes. Thermal imaging enables effective operation even in low-light and night-time conditions.",
  },
  {
    question: "Which industries can use AeroResQ?",
    answer:
      "Defence, disaster management, smart cities, industrial safety, environmental monitoring and emergency response.",
  },
  {
    question: "Is AeroResQ scalable?",
    answer:
      "Yes. The platform is designed to support single drones as well as coordinated drone fleets.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#08111f] py-28">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="uppercase tracking-[5px] text-orange-500">
            FAQ
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full p-6 flex justify-between items-center"
              >
                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-gray-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}