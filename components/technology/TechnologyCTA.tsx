"use client";

import {PrimaryButton} from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function TechnologyCTA() {
  return (
    <section className="bg-[#050816] py-28">

      <div className="max-w-5xl mx-auto px-6">

        <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-16 text-center">

          <h2 className="text-5xl font-bold">

            Ready to Experience

            <span className="text-orange-500">
              {" "}AeroResQ Technology?
            </span>

          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">

            Explore how AI, autonomous drones and intelligent
            mission systems work together to transform disaster response.

          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <PrimaryButton href="/contact">
              Contact Us
            </PrimaryButton>

            <SecondaryButton href="/products">
              Explore Products
            </SecondaryButton>

          </div>

        </div>

      </div>

    </section>
  );
}