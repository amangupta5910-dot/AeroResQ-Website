"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LoginIllustration() {
  return (
    <section className="relative hidden min-h-screen overflow-hidden lg:flex items-center justify-center">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-cyan-500/10" />

      {/* Floating Circles */}
      <div className="absolute left-10 top-20 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute right-10 bottom-20 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex max-w-xl flex-col items-center text-center px-10"
      >
        {/* Logo */}
        <Image
          src="/images/logo/logo.png"
          alt="AeroResQ Logo"
          width={90}
          height={90}
          priority
          className="mb-6"
        />

        {/* Heading */}
        <h1 className="text-5xl font-extrabold leading-tight text-white">
          Welcome to
          <span className="block text-orange-500">
            AeroResQ
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Secure AI-powered Disaster Response Platform for
          Rescue Operations, Drone Monitoring, Emergency
          Management and Real-Time Analytics.
        </p>

        {/* Illustration */}
        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="mt-14"
        >
          <Image
            src="/images/auth/login-drone.png"
            alt="Drone Illustration"
            width={520}
            height={520}
            priority
            className="drop-shadow-[0_0_60px_rgba(249,115,22,0.45)]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}