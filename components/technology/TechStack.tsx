"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const stack = [
  "Python",
  "YOLOv11",
  "OpenCV",
  "PyTorch",
  "TensorFlow",
  "ROS2",
  "NVIDIA Jetson",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Docker",
];

export default function TechStack() {
  return (
    <section className="bg-[#050816] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          badge="Technology Stack"
          title="Built With Modern"
          highlight="Technologies"
          description="AeroResQ combines AI, robotics, cloud computing and modern web technologies."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {stack.map((tech) => (

            <GlassCard
              key={tech}
              className="text-center"
            >
              <h3 className="text-2xl font-bold">
                {tech}
              </h3>
            </GlassCard>

          ))}

        </div>

      </div>

    </section>
  );
}