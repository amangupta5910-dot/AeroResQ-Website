"use client";

import CountUp from "react-countup";

export default function Stats() {
  const stats = [
    { value: 98, suffix: "%", label: "AI Detection Accuracy" },
    { value: 24, suffix: "/7", label: "Mission Availability" },
    { value: 10, suffix: "+", label: "Future Drone Modules" },
    { value: 50, suffix: "km", label: "Target Mission Range" },
  ];

  return (
    <section className="bg-[#050816] py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 text-center"
          >
            <h2 className="text-4xl font-bold text-orange-500">
              <CountUp end={item.value} duration={2} />
              {item.suffix}
            </h2>

            <p className="text-gray-300 mt-3">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}