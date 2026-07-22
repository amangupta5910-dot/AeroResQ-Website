import Image from "next/image";
export default function Hero() {
  return (
    <section className="min-h-screen bg-[#050816] flex items-center">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-10">

        <div>

          <p className="text-orange-500 font-semibold mb-3">
            AI Powered Defence Technology
          </p>

          <h1 className="text-6xl font-bold text-white leading-tight">

            Autonomous

            <br />

            Search & Rescue

            <br />

            Drone Platform

          </h1>

          <p className="text-gray-300 mt-8 text-xl leading-8">

            AeroResQ develops AI-powered autonomous drones for
            Defence, Disaster Response and National Security with
            Thermal Vision, Edge AI and Real-Time Mission Control.

          </p>

          <div className="mt-10 flex gap-5">

            <button className="bg-orange-500 px-8 py-4 rounded-xl text-white font-semibold hover:bg-orange-600 transition">
              Explore Technology
            </button>

            <button className="border border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition">
              Watch Demo
            </button>

          </div>

        </div>

        <div className="flex justify-center items-center">

          <div className="w-[450px] h-[450px] rounded-full bg-orange-500/20 blur-3xl absolute"></div>

          <div className="relative w-80 h-80  flex items-center justify-center">

            <Image
  src="/images/logo/AeroResQ Logo.jpeg"
  alt="AeroResQ Logo"
  width={300}
  height={300}
  className="w-[300] h-[300] rounded-full"
/>

          </div>

        </div>

      </div>
    </section>
  );
}