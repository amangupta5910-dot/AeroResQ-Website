"use client";

import { Check, Minus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const products = [
  {
    name: "Scout",
    ai: true,
    thermal: true,
    flight: "30 min",
    payload: "2 kg",
    range: "10 km",
    best: "Search & Rescue",
  },
  {
    name: "Guardian",
    ai: true,
    thermal: true,
    flight: "60 min",
    payload: "20 kg",
    range: "35 km",
    best: "Flood & Disaster",
  },
  {
    name: "Command Center",
    ai: true,
    thermal: false,
    flight: "--",
    payload: "--",
    range: "Unlimited",
    best: "Mission Control",
  },
  {
    name: "Mobile App",
    ai: false,
    thermal: false,
    flight: "--",
    payload: "--",
    range: "Cloud",
    best: "Field Teams",
  },
  {
    name: "Fleet AI",
    ai: true,
    thermal: true,
    flight: "120 min",
    payload: "40 kg",
    range: "100 km",
    best: "Multi-Drone Operations",
  },
];

export default function ProductComparison() {
  return (
    <section className="py-28 bg-[#08111f]">

      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          badge="Comparison"
          title="Compare"
          highlight="Our Products"
          description="Choose the right AeroResQ solution for your mission requirements."
        />

        <div className="overflow-x-auto rounded-3xl border border-white/10">

          <table className="w-full text-left">

            <thead className="bg-white/5">

              <tr>

                <th className="p-5 text-orange-500">
                  Features
                </th>

                {products.map((p) => (
                  <th
                    key={p.name}
                    className="p-5 text-center"
                  >
                    {p.name}
                  </th>
                ))}

              </tr>

            </thead>

            <tbody>

              <Row
                title="AI Detection"
                values={products.map((p) =>
                  p.ai ? (
                    <Check className="mx-auto text-green-500" />
                  ) : (
                    <Minus className="mx-auto text-gray-500" />
                  )
                )}
              />

              <Row
                title="Thermal Vision"
                values={products.map((p) =>
                  p.thermal ? (
                    <Check className="mx-auto text-green-500" />
                  ) : (
                    <Minus className="mx-auto text-gray-500" />
                  )
                )}
              />

              <Row
                title="Flight Time"
                values={products.map((p) => p.flight)}
              />

              <Row
                title="Payload"
                values={products.map((p) => p.payload)}
              />

              <Row
                title="Range"
                values={products.map((p) => p.range)}
              />

              <Row
                title="Best Use"
                values={products.map((p) => p.best)}
              />

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
}

function Row({
  title,
  values,
}: {
  title: string;
  values: React.ReactNode[];
}) {
  return (
    <tr className="border-t border-white/10">

      <td className="p-5 font-semibold">
        {title}
      </td>

      {values.map((v, i) => (
        <td
          key={i}
          className="p-5 text-center text-gray-300"
        >
          {v}
        </td>
      ))}

    </tr>
  );
}